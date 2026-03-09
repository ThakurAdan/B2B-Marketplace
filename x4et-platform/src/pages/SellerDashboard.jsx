import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  Plus, 
  Package, 
  Award,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Upload,
  FileText,
  CheckCircle2,
  Clock,
  Star,
  MapPin,
  Building2,
  DollarSign,
  Users,
  Target
} from 'lucide-react';

const SellerDashboard = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    deploymentType: '',
    moq: '',
    industries: [],
    integrations: ''
  });

  return (
    <DashboardLayout role="seller">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Seller Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your portfolio and opportunities</p>
          </div>
          <button 
            onClick={() => setShowAddProduct(!showAddProduct)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Product/Solution
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            icon={<Target className="w-6 h-6" />}
            label="New Opportunities"
            value="12"
            trend="+4 this week"
            color="purple"
          />
          <StatCard
            icon={<Eye className="w-6 h-6" />}
            label="Profile Views"
            value="156"
            trend="+23% this month"
            color="blue"
          />
          <StatCard
            icon={<FileText className="w-6 h-6" />}
            label="Active Engagements"
            value="6"
            trend="2 in pilot stage"
            color="green"
          />
          <StatCard
            icon={<DollarSign className="w-6 h-6" />}
            label="Pipeline Value"
            value="$2.4M"
            trend="+$400K this quarter"
            color="orange"
          />
        </div>

        {/* Portfolio Manager */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Portfolio Manager</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Manage your products and solutions</p>
              </div>
            </div>
            <button className="text-purple-600 dark:text-purple-400 hover:underline font-medium">View All</button>
          </div>

          {showAddProduct && (
            <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Add New Product/Solution</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Product Name *</label>
                  <input type="text" className="input" placeholder="e.g., Industrial IoT Platform" />
                </div>
                <div>
                  <label className="label">Technology Category *</label>
                  <select className="input">
                    <option value="">Select Category</option>
                    <option value="iot">IoT & Sensors</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="automation">Industrial Automation</option>
                    <option value="cloud">Cloud Infrastructure</option>
                  </select>
                </div>
                <div>
                  <label className="label">Deployment Type *</label>
                  <select className="input">
                    <option value="">Select Deployment</option>
                    <option value="cloud">Cloud</option>
                    <option value="on-premise">On-Premise</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="edge">Edge</option>
                  </select>
                </div>
                <div>
                  <label className="label">Minimum Order Quantity</label>
                  <input type="text" className="input" placeholder="e.g., 100 sensors" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button className="btn-primary">Add Product</button>
                <button onClick={() => setShowAddProduct(false)} className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <ProductCard
              name="Industrial IoT Gateway Platform"
              category="IoT & Sensors"
              deployment="Hybrid"
              moq="50 devices"
              industries={["Manufacturing", "Oil & Gas"]}
              status="active"
            />
            <ProductCard
              name="AI-Powered Predictive Maintenance"
              category="AI & Machine Learning"
              deployment="Cloud"
              moq="1 license"
              industries={["Manufacturing", "Infrastructure"]}
              status="active"
            />
            <ProductCard
              name="Edge Computing Analytics Suite"
              category="Edge Computing"
              deployment="Edge"
              moq="10 nodes"
              industries={["Smart Cities", "Manufacturing"]}
              status="active"
            />
            <ProductCard
              name="Industrial Cybersecurity Platform"
              category="Cybersecurity"
              deployment="On-Premise"
              moq="1 enterprise license"
              industries={["Defense", "Oil & Gas"]}
              status="active"
            />
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications & Compliance</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Showcase your credentials</p>
              </div>
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Certificate
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <CertificationCard
              name="ISO 27001"
              type="Information Security"
              issueDate="Jan 2024"
              expiryDate="Jan 2027"
              status="valid"
            />
            <CertificationCard
              name="IEC 62443"
              type="Industrial Security"
              issueDate="Mar 2024"
              expiryDate="Mar 2027"
              status="valid"
            />
            <CertificationCard
              name="SOC 2 Type II"
              type="Security & Compliance"
              issueDate="Jun 2023"
              expiryDate="Jun 2024"
              status="expiring"
            />
          </div>
        </div>

        {/* Engagement Opportunities */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Engagement Opportunities</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Incoming buyer engagements matched to your profile</p>
            </div>
            <button className="text-purple-600 dark:text-purple-400 hover:underline font-medium">View All</button>
          </div>

          <div className="space-y-4">
            <OpportunityCard
              title="Smart Factory IoT Implementation"
              buyer="Manufacturing Corp"
              matchScore={95}
              stage="Early Discussion"
              industry="Manufacturing"
              technology="IoT & Sensors"
              budget="$500K - $1M"
              timeline="Q2 2026"
            />
            <OpportunityCard
              title="Predictive Maintenance System"
              buyer="Industrial Solutions Inc"
              matchScore={92}
              stage="BRD"
              industry="Oil & Gas"
              technology="AI & Machine Learning"
              budget="$750K - $1.5M"
              timeline="Q3 2026"
            />
            <OpportunityCard
              title="Edge Computing Infrastructure"
              buyer="Smart City Initiative"
              matchScore={88}
              stage="Concept"
              industry="Smart Cities"
              technology="Edge Computing"
              budget="$1M - $2M"
              timeline="Q4 2026"
            />
          </div>
        </div>

        {/* Active Engagements */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Engagements</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Your ongoing technology engagements</p>
            </div>
            <button className="text-purple-600 dark:text-purple-400 hover:underline font-medium">View All</button>
          </div>

          <div className="space-y-4">
            <EngagementRow
              title="Industrial Monitoring System"
              buyer="TechManufacturing Ltd"
              stage="Pilot"
              status="in-progress"
              value="$850K"
              lastUpdate="2 hours ago"
            />
            <EngagementRow
              title="Warehouse Automation Platform"
              buyer="Logistics Global"
              stage="Proposal Review"
              status="pending"
              value="$1.2M"
              lastUpdate="1 day ago"
            />
            <EngagementRow
              title="Asset Tracking Solution"
              buyer="Infrastructure Co"
              stage="Technical Discussion"
              status="active"
              value="$650K"
              lastUpdate="3 days ago"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ icon, label, value, trend, color }) => {
  const colors = {
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  };

  return (
    <div className="card">
      <div className={`w-12 h-12 ${colors[color]} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{trend}</div>
    </div>
  );
};

const ProductCard = ({ name, category, deployment, moq, industries, status }) => (
  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-all">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{category}</p>
      </div>
      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-medium">
        {status}
      </span>
    </div>
    <div className="space-y-2 mb-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Deployment:</span>
        <span className="text-gray-900 dark:text-white font-medium">{deployment}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">MoQ:</span>
        <span className="text-gray-900 dark:text-white font-medium">{moq}</span>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {industries.map((industry, index) => (
        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
          {industry}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <button className="flex-1 py-2 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium">
        <Edit className="w-4 h-4" />
        Edit
      </button>
      <button className="flex-1 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium">
        <Eye className="w-4 h-4" />
        View
      </button>
    </div>
  </div>
);

const CertificationCard = ({ name, type, issueDate, expiryDate, status }) => (
  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
    <div className="flex items-start justify-between mb-3">
      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </div>
      <span className={`px-2 py-1 rounded text-xs font-medium ${
        status === 'valid' 
          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
      }`}>
        {status}
      </span>
    </div>
    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{type}</p>
    <div className="text-xs text-gray-500 dark:text-gray-400">
      <div className="flex items-center justify-between mb-1">
        <span>Issued:</span>
        <span>{issueDate}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Expires:</span>
        <span>{expiryDate}</span>
      </div>
    </div>
  </div>
);

const OpportunityCard = ({ title, buyer, matchScore, stage, industry, technology, budget, timeline }) => (
  <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all cursor-pointer">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Building2 className="w-4 h-4" />
          <span>{buyer}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-full">
        <Star className="w-4 h-4 text-green-600 dark:text-green-400 fill-current" />
        <span className="text-sm font-semibold text-green-700 dark:text-green-400">{matchScore}%</span>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Stage</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{stage}</div>
      </div>
      <div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Industry</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{industry}</div>
      </div>
      <div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Budget</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{budget}</div>
      </div>
      <div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Timeline</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{timeline}</div>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs font-medium">
        {technology}
      </span>
    </div>

    <button className="w-full btn-primary">
      Respond to Engagement
    </button>
  </div>
);

const EngagementRow = ({ title, buyer, stage, status, value, lastUpdate }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white font-bold">
        {title.charAt(0)}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{buyer}</p>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="text-right">
        <div className="text-sm font-semibold text-green-600 dark:text-green-400">{value}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{stage}</div>
      </div>
      <div className="text-right">
        <div className={`text-xs px-3 py-1 rounded-full font-medium ${
          status === 'in-progress' 
            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
            : status === 'pending'
            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
            : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
        }`}>
          {status}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {lastUpdate}
        </div>
      </div>
    </div>
  </div>
);

export default SellerDashboard;
