import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  Search, 
  Filter, 
  Star,
  MapPin,
  Award,
  Building2,
  Cloud,
  Server,
  Zap,
  Shield,
  Package,
  ChevronRight,
  X
} from 'lucide-react';

const TechnologyDiscovery = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    industry: [],
    technology: [],
    deployment: [],
    certification: [],
  });

  const sellers = [
    {
      id: 1,
      name: "IndustryTech Solutions",
      rating: 4.8,
      matchScore: 95,
      technology: "Industrial IoT Platform",
      location: "Silicon Valley, CA",
      certifications: ["ISO 27001", "IEC 62443", "SOC 2"],
      industries: ["Manufacturing", "Oil & Gas", "Infrastructure"],
      deployment: ["Cloud", "Hybrid", "On-Premise"],
      description: "Leading provider of industrial IoT solutions with 15+ years of experience in smart manufacturing and predictive maintenance.",
      projects: 150,
      clients: 80,
    },
    {
      id: 2,
      name: "SmartFactory Systems",
      rating: 4.9,
      matchScore: 92,
      technology: "Edge Computing & Analytics",
      location: "Austin, TX",
      certifications: ["ISO 9001", "SOC 2", "GDPR"],
      industries: ["Manufacturing", "Infrastructure", "Smart Cities"],
      deployment: ["Edge", "Hybrid"],
      description: "Specialized in edge computing solutions for real-time industrial analytics and automation.",
      projects: 120,
      clients: 65,
    },
    {
      id: 3,
      name: "Predictive Dynamics",
      rating: 4.7,
      matchScore: 88,
      technology: "AI-Powered Predictive Maintenance",
      location: "Boston, MA",
      certifications: ["ISO 27001", "GDPR", "SOC 2"],
      industries: ["Manufacturing", "Defense", "Oil & Gas"],
      deployment: ["Cloud", "On-Premise"],
      description: "AI and machine learning experts focused on predictive maintenance and asset optimization.",
      projects: 95,
      clients: 52,
    },
    {
      id: 4,
      name: "SecureEdge Technologies",
      rating: 4.6,
      matchScore: 85,
      technology: "Industrial Cybersecurity",
      location: "Washington, DC",
      certifications: ["ISO 27001", "NIST", "IEC 62443"],
      industries: ["Defense", "Oil & Gas", "Infrastructure"],
      deployment: ["On-Premise", "Hybrid"],
      description: "Cybersecurity specialists for critical infrastructure and industrial control systems.",
      projects: 110,
      clients: 48,
    },
    {
      id: 5,
      name: "CloudScale Industries",
      rating: 4.8,
      matchScore: 82,
      technology: "Cloud Infrastructure & Integration",
      location: "Seattle, WA",
      certifications: ["ISO 27001", "SOC 2", "FedRAMP"],
      industries: ["Manufacturing", "Smart Cities", "Infrastructure"],
      deployment: ["Cloud", "Hybrid"],
      description: "Cloud infrastructure and integration specialists for industrial applications.",
      projects: 180,
      clients: 95,
    },
    {
      id: 6,
      name: "Vision Automation Corp",
      rating: 4.5,
      matchScore: 80,
      technology: "Computer Vision & Automation",
      location: "San Francisco, CA",
      certifications: ["ISO 9001", "CE", "UL"],
      industries: ["Manufacturing", "Infrastructure"],
      deployment: ["Edge", "Cloud"],
      description: "Computer vision and AI-powered automation for quality control and process optimization.",
      projects: 88,
      clients: 42,
    },
  ];

  return (
    <DashboardLayout role="buyer">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Technology Discovery</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Find the right technology sellers for your needs</p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary flex items-center gap-2"
          >
            <Filter className="w-5 h-5" />
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>
        </div>

        {/* Search Bar */}
        <div className="card">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by technology, industry, or company name..."
              className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400"
            />
            <button className="btn-primary">Search</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:col-span-1 space-y-4">
              <FilterSection
                title="Industry"
                options={["Manufacturing", "Oil & Gas", "Smart Cities", "Defense", "Infrastructure"]}
                selected={filters.industry}
                onChange={(value) => setFilters({ ...filters, industry: value })}
              />
              <FilterSection
                title="Technology"
                options={["IoT & Sensors", "AI & Machine Learning", "Edge Computing", "Cloud Infrastructure", "Cybersecurity", "Automation"]}
                selected={filters.technology}
                onChange={(value) => setFilters({ ...filters, technology: value })}
              />
              <FilterSection
                title="Deployment Model"
                options={["Cloud", "On-Premise", "Hybrid", "Edge", "Turnkey"]}
                selected={filters.deployment}
                onChange={(value) => setFilters({ ...filters, deployment: value })}
              />
              <FilterSection
                title="Certifications"
                options={["ISO 27001", "ISO 9001", "SOC 2", "IEC 62443", "GDPR", "NIST"]}
                selected={filters.certification}
                onChange={(value) => setFilters({ ...filters, certification: value })}
              />
            </div>
          )}

          {/* Results */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">{sellers.length}</span> sellers found
              </p>
              <select className="input py-2 px-3 w-auto">
                <option>Sort by: Match Score</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Projects</option>
                <option>Sort by: Location</option>
              </select>
            </div>

            <div className="space-y-4">
              {sellers.map((seller) => (
                <SellerCard key={seller.id} seller={seller} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const FilterSection = ({ title, options, selected, onChange }) => {
  const toggleOption = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="card">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

const SellerCard = ({ seller }) => (
  <div className="card hover:shadow-lg transition-all cursor-pointer group">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
          {seller.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {seller.name}
          </h3>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">{seller.rating}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{seller.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-full">
        <Star className="w-4 h-4 text-green-600 dark:text-green-400 fill-current" />
        <span className="text-sm font-semibold text-green-700 dark:text-green-400">{seller.matchScore}%</span>
      </div>
    </div>

    <div className="mb-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-3">
        <Package className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span className="text-sm font-medium text-purple-700 dark:text-purple-400">{seller.technology}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {seller.description}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{seller.projects}+</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">Projects Completed</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{seller.clients}+</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">Active Clients</div>
      </div>
    </div>

    <div className="mb-4">
      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
        <Award className="w-4 h-4" />
        Certifications
      </div>
      <div className="flex flex-wrap gap-2">
        {seller.certifications.map((cert, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs font-medium"
          >
            {cert}
          </span>
        ))}
      </div>
    </div>

    <div className="mb-4">
      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
        <Building2 className="w-4 h-4" />
        Industries
      </div>
      <div className="flex flex-wrap gap-2">
        {seller.industries.map((industry, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>

    <div className="mb-4">
      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
        <Server className="w-4 h-4" />
        Deployment Models
      </div>
      <div className="flex flex-wrap gap-2">
        {seller.deployment.map((deploy, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs"
          >
            {deploy}
          </span>
        ))}
      </div>
    </div>

    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
      <button className="flex-1 btn-primary flex items-center justify-center gap-2">
        View Profile
        <ChevronRight className="w-4 h-4" />
      </button>
      <button className="flex-1 btn-secondary">
        Start Engagement
      </button>
    </div>
  </div>
);

export default TechnologyDiscovery;
