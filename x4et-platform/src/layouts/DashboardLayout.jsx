import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Workflow, 
  Search, 
  Package, 
  Sparkles, 
  CreditCard,
  Settings,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';

const DashboardLayout = ({ children, role = 'buyer' }) => {
  const [isDark, setIsDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const buyerNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/buyer/dashboard' },
    { icon: Workflow, label: 'Engagements', path: '/buyer/engagements' },
    { icon: Search, label: 'Technology Discovery', path: '/discovery' },
    { icon: Sparkles, label: 'AI Assistant', path: '/buyer/ai-assistant' },
    { icon: CreditCard, label: 'Subscriptions', path: '/buyer/subscriptions' },
    { icon: Settings, label: 'Settings', path: '/buyer/settings' },
  ];

  const sellerNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/seller/dashboard' },
    { icon: Package, label: 'Portfolio', path: '/seller/portfolio' },
    { icon: Workflow, label: 'Engagements', path: '/seller/engagements' },
    { icon: Search, label: 'Opportunities', path: '/seller/opportunities' },
    { icon: Sparkles, label: 'AI Assistant', path: '/seller/ai-assistant' },
    { icon: CreditCard, label: 'Subscriptions', path: '/seller/subscriptions' },
    { icon: Settings, label: 'Settings', path: '/seller/settings' },
  ];

  const navItems = role === 'buyer' ? buyerNavItems : sellerNavItems;

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40">
          <div className="h-full px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo-gradient.png" alt="X4ET" className="h-7" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
                {role === 'buyer' ? '👤 Buyer' : '🏢 Seller'}
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:shadow-lg transition-shadow">
                JD
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 z-30 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4 space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={isActive ? 'sidebar-item-active' : 'sidebar-item'}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Subscription Status */}
          <div className="absolute bottom-6 left-4 right-4">
            <div className="p-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl text-white">
              <div className="text-sm font-medium mb-1">Free Plan</div>
              <div className="text-xs text-purple-200 mb-3">Upgrade for unlimited access</div>
              <button className="w-full bg-white text-purple-700 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`pt-16 transition-all duration-300 ${
          sidebarOpen ? 'pl-64' : 'pl-0'
        }`}>
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
