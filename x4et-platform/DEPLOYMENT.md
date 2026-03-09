# X4ET Platform - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Build the project**
```bash
cd x4et-platform
npm run build
```

3. **Deploy to Vercel**
```bash
vercel
```

4. **Configure Custom Domain** (optional)
- Go to Vercel Dashboard
- Select your project
- Navigate to Settings → Domains
- Add your custom domain (e.g., app.x4et.com)

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
cd x4et-platform
npm run build
```

3. **Deploy to Netlify**
```bash
netlify deploy --prod
```

4. **Configure Build Settings**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: AWS S3 + CloudFront

1. **Build the project**
```bash
cd x4et-platform
npm run build
```

2. **Create S3 Bucket**
```bash
aws s3 mb s3://x4et-platform
```

3. **Upload build files**
```bash
aws s3 sync dist/ s3://x4et-platform --delete
```

4. **Configure S3 for static hosting**
- Enable static website hosting
- Set index.html as index document
- Set index.html as error document (for SPA routing)

5. **Create CloudFront Distribution**
- Origin: S3 bucket
- Default root object: index.html
- Custom error responses: 403 → /index.html (200)

### Option 4: Docker Container

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Create nginx.conf**
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. **Build Docker image**
```bash
docker build -t x4et-platform .
```

4. **Run container**
```bash
docker run -d -p 80:80 x4et-platform
```

### Option 5: Traditional VPS (Ubuntu/Debian)

1. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install Nginx**
```bash
sudo apt-get install nginx
```

3. **Clone and build**
```bash
git clone <repository-url>
cd x4et-platform
npm install
npm run build
```

4. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/x4et
```

Add configuration:
```nginx
server {
    listen 80;
    server_name x4et.com www.x4et.com;
    root /var/www/x4et/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

5. **Enable site and restart Nginx**
```bash
sudo ln -s /etc/nginx/sites-available/x4et /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

6. **Setup SSL with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d x4et.com -d www.x4et.com
```

## 🔧 Environment Variables

Create `.env.production` file:

```env
VITE_API_URL=https://api.x4et.com
VITE_AI_SERVICE_URL=https://ai.x4et.com
VITE_STORAGE_URL=https://storage.x4et.com
```

## 📊 Performance Optimization

### 1. Enable Compression
Add to nginx config:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

### 2. Enable Caching
```nginx
location ~* \.(js|css)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \.(jpg|jpeg|png|gif|ico|svg)$ {
    expires 30d;
    add_header Cache-Control "public, max-age=2592000";
}
```

### 3. Code Splitting
Already configured in Vite. Build automatically creates optimized chunks.

## 🔒 Security Headers

Add to nginx config:
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" always;
```

## 📈 Monitoring

### Recommended Tools
- **Vercel Analytics** (if using Vercel)
- **Google Analytics**
- **Sentry** for error tracking
- **Uptime Robot** for availability monitoring
- **New Relic** or **DataDog** for performance

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          cd x4et-platform
          npm ci
          
      - name: Build
        run: |
          cd x4et-platform
          npm run build
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./x4et-platform
```

## 📱 Mobile Considerations

The platform is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1280px - 1920px)
- Tablet (768px - 1280px)
- Mobile (320px - 768px)

## 🌐 Multi-Region Deployment

For global users, consider:
- **Cloudflare** - Global CDN with edge locations
- **AWS CloudFront** - Multiple regions
- **Vercel Edge Network** - Automatic global distribution

## ✅ Pre-Deployment Checklist

- [ ] Build succeeds without errors
- [ ] All routes work correctly
- [ ] Images and assets load properly
- [ ] Dark mode functions correctly
- [ ] Forms submit successfully
- [ ] Navigation works on all pages
- [ ] Mobile responsive design verified
- [ ] SEO meta tags configured
- [ ] Analytics tracking setup
- [ ] Error monitoring configured
- [ ] SSL certificate installed
- [ ] Domain DNS configured
- [ ] Performance optimized
- [ ] Security headers added

## 🆘 Troubleshooting

### Issue: Routes return 404
**Solution**: Ensure your server is configured to redirect all routes to index.html

### Issue: Assets not loading
**Solution**: Check CORS configuration and asset paths

### Issue: Slow load times
**Solution**: Enable compression, caching, and use CDN

### Issue: Build fails
**Solution**: Check Node.js version (requires 18+) and clear node_modules

## 📞 Support

For deployment support:
- Email: devops@x4et.com
- Documentation: https://docs.x4et.com
- Community: https://community.x4et.com

---

**Last Updated**: March 9, 2026
