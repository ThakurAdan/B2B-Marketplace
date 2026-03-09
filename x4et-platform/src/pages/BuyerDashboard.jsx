import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  Plus, 
  Sparkles, 
  Search, 
  Filter,
  Building2,
  Cloud,
  Server,
  Zap,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Star,
  MapPin,
  Award
} from 'lucide-react';

const BuyerDashboard = () => {
  const [showNewEngagement, setShowNewEngagement] = useState(false);
  const [formData, setFormData] = useState({
    problemStatement: '',
    industry: '',
    techCategory: '',
    deploymentPreference: '',
    engagementStage: '',
    acceptanceCriteria: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <DashboardLayout role="buyer">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Buyer Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your technology engagements</p>
          </div>
          <button 
            onClick={() => setShowNewEngagement(!showNewEngagement)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Post New Engagement
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            icon={<Sparkles className="w-6 h-6" />}
            label="Active Engagements"
            value="8"
            trend="+2 this week"
            color="purple"
          />
          <StatCard
            icon={<Search className="w-6 h-6" />}
            label="Seller Matches"
            value="24"
            trend="12 new matches"
            color="blue"
          />
          <StatCard
            icon={<FileText className="w-6 h-6" />}
            label="Proposals Received"
            value="15"
            trend="3 pending review"
            color="green"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="In Pilot Stage"
            value="3"
            trend="2 completing soon"
            color="orange"
          />
        </div>

        {/* New Engagement Form */}
        {showNewEngagement && (
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Post New Engagement</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Describe your technology requirement</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="label">Problem Statement *</label>
                <textarea
                  name="problemStatement"
                  value={formData.problemStatement}
                  onChange={handleInputChange}
                  rows="4"
                  className="input"
                  placeholder="Describe the business problem or technical challenge you're trying to solve..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="label">Industry *</label>
                  <select name="industry" value={formData.industry} onChange={handleInputChange} className="input">
                    <option value="">Select Industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="oil-gas">Oil & Gas</option>
                    <option value="smart-cities">Smart Cities</option>
                    <option value="defense">Defense</option>
                    <option value="infrastructure">Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="label">Technology Category *</label>
                  <select name="techCategory" value={formData.techCategory} onChange={handleInputChange} className="input">
                    <option value="">Select Category</option>
                    <option value="iot">IoT & Sensors</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="automation">Industrial Automation</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="edge-computing">Edge Computing</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="label">Deployment Preference *</label>
                  <select name="deploymentPreference" value={formData.deploymentPreference} onChange={handleInputChange} className="input">
                    <option value="">Select Deployment</option>
                    <option value="cloud">Cloud</option>
                    <option value="on-premise">On-Premise</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="edge">Edge</option>
                    <option value="turnkey">Turnkey</option>
                  </select>
                </div>

                <div>
                  <label className="label">Engagement Stage *</label>
                  <select name="engagementStage" value={formData.engagementStage} onChange={handleInputChange} className="input">
                    <option value="">Select Stage</option>
                    <option value="concept">Concept</option>
                    <option value="early">Early Discussion</option>
                    <option value="brd">BRD</option>
                    <option value="pilot">Pilot</option>
                    <option value="rfp">RFP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label">Acceptance Criteria</label>
                <textarea
                  name="acceptanceCriteria"
                  value={formData.acceptanceCriteria}
                  onChange={handleInputChange}
                  rows="3"
                  className="input"
                  placeholder="Define success criteria, KPIs, and expected outcomes..."
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="btn-primary flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Generate AI Structured Requirement
                </button>
                <button 
                  onClick={() => setShowNewEngagement(false)}
                  className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* AI Structured Requirement Panel */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">AI Structured Requirements</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Generated from your problem statement</p>
              </div>
            </div>

            <div className="space-y-4">
              <RequirementSection
                title="Scope of Work"
                items={[
                  "Real-time monitoring of production equipment",
                  "Predictive maintenance system integration",
                  "Dashboard for operational insights",
                  "Mobile alerts for critical events"
                ]}
              />
              <RequirementSection
                title="Technical Requirements"
                items={[
                  "Support for 500+ IoT sensors",
                  "99.9% uptime SLA",
                  "Sub-second latency for critical alerts",
                  "Integration with existing ERP system"
                ]}
              />
              <RequirementSection
                title="Suggested Technologies"
                items={[
                  "Industrial IoT Platform",
                  "Edge Computing Gateway",
                  "Time-Series Database",
                  "Machine Learning Engine"
                ]}
              />
              <RequirementSection
                title="Pilot KPIs"
                items={[
                  "Reduce downtime by 25%",
                  "Achieve 90% prediction accuracy",
                  "ROI within 6 months",
                  "User adoption rate >80%"
                ]}
              />
            </div>
          </div>

          {/* Seller Discovery Panel */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Seller Discovery</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">24 matched sellers</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="space-y-3">
              <SellerCard
                name="IndustryTech Solutions"
                matchScore={95}
                technology="Industrial IoT Platform"
                location="Silicon Valley, CA"
                certifications={["ISO 27001", "IEC 62443"]}
                industries={["Manufacturing", "Oil & Gas"]}
              />
              <SellerCard
                name="SmartFactory Systems"
                matchScore={92}
                technology="Edge Computing & Analytics"
                location="Austin, TX"
                certifications={["ISO 9001", "SOC 2"]}
                industries={["Manufacturing", "Infrastructure"]}
              />
              <SellerCard
                name="Predictive Dynamics"
                matchScore={88}
                technology="AI-Powered Maintenance"
                location="Boston, MA"
                certifications={["ISO 27001", "GDPR"]}
                industries={["Manufacturing", "Defense"]}
              />
            </div>

            <button className="w-full mt-4 py-3 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              View All Sellers
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Engagements */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Engagements</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Track your ongoing technology engagements</p>
            </div>
            <button className="text-purple-600 dark:text-purple-400 hover:underline font-medium">View All</button>
          </div>

          <div className="space-y-4">
            <EngagementRow
              title="Smart Factory IoT Implementation"
              seller="IndustryTech Solutions"
              stage="Pilot"
              status="in-progress"
              lastUpdate="2 hours ago"
            />
            <EngagementRow
              title="Predictive Maintenance System"
              seller="Predictive Dynamics"
              stage="BRD"
              status="pending"
              lastUpdate="1 day ago"
            />
            <EngagementRow
              title="Edge Computing Infrastructure"
              seller="SmartFactory Systems"
              stage="Early Discussion"
              status="active"
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

const RequirementSection = ({ title, items }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SellerCard = ({ name, matchScore, technology, location, certifications, industries }) => (
  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all cursor-pointer">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{technology}</p>
      </div>
      <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
        <Star className="w-3 h-3 text-green-600 dark:text-green-400 fill-current" />
        <span className="text-xs font-semibold text-green-700 dark:text-green-400">{matchScore}%</span>
      </div>
    </div>
    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
      <MapPin className="w-3 h-3" />
      <span>{location}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-3">
      {certifications.map((cert, index) => (
        <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">
          <Award className="w-3 h-3" />
          {cert}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-2">
      {industries.map((industry, index) => (
        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
          {industry}
        </span>
      ))}
    </div>
  </div>
);

const EngagementRow = ({ title, seller, stage, status, lastUpdate }) => {
  const statusColors = {
    'in-progress': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    'pending': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
    'active': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white font-bold">
          {title.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{seller}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900 dark:text-white">{stage}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {lastUpdate}
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status.replace('-', ' ')}
        </span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default BuyerDashboard;
