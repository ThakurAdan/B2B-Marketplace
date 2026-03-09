import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  Sparkles, 
  FileText, 
  MessageSquare,
  Clock,
  CheckCircle2,
  Upload,
  Download,
  Users,
  Settings
} from 'lucide-react';

const EngagementWorkspace = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('timeline');

  const stages = [
    { id: 1, name: 'Concept', status: 'completed', date: 'Jan 15, 2026' },
    { id: 2, name: 'Early Discussion', status: 'completed', date: 'Jan 22, 2026' },
    { id: 3, name: 'BRD', status: 'active', date: 'In Progress' },
    { id: 4, name: 'Pilot', status: 'pending', date: 'Upcoming' },
    { id: 5, name: 'RFP', status: 'pending', date: 'Upcoming' },
  ];

  return (
    <DashboardLayout role="buyer">
      <div className="space-y-6">
        {/* Header */}
        <div className="card">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Smart Factory IoT Implementation
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>IndustryTech Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Started Jan 15, 2026</span>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Stage Timeline */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Engagement Stage Timeline</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <div key={stage.id} className="relative flex items-start gap-4">
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                    stage.status === 'completed' 
                      ? 'bg-green-500' 
                      : stage.status === 'active'
                      ? 'bg-purple-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    {stage.status === 'completed' ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-white font-bold">{stage.id}</span>
                    )}
                  </div>
                  <div className={`flex-1 pb-6 ${index === stages.length - 1 ? 'pb-0' : ''}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`font-semibold ${
                          stage.status === 'active' 
                            ? 'text-purple-600 dark:text-purple-400' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {stage.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stage.date}</p>
                      </div>
                      {stage.status === 'active' && (
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium">
                          Current Stage
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="card">
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab('timeline')}
                className={`pb-3 px-1 border-b-2 transition-colors ${
                  activeTab === 'timeline'
                    ? 'border-purple-600 text-purple-600 dark:text-purple-400 font-medium'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Timeline
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`pb-3 px-1 border-b-2 transition-colors ${
                  activeTab === 'documents'
                    ? 'border-purple-600 text-purple-600 dark:text-purple-400 font-medium'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Documents
              </button>
              <button
                onClick={() => setActiveTab('ai-assistant')}
                className={`pb-3 px-1 border-b-2 transition-colors ${
                  activeTab === 'ai-assistant'
                    ? 'border-purple-600 text-purple-600 dark:text-purple-400 font-medium'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                AI Assistant
              </button>
            </div>
          </div>

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <ActivityItem
                icon={<FileText className="w-4 h-4" />}
                title="BRD Document Updated"
                description="Seller updated the Business Requirements Document with revised technical specifications"
                time="2 hours ago"
                user="IndustryTech Solutions"
              />
              <ActivityItem
                icon={<MessageSquare className="w-4 h-4" />}
                title="New Comment Added"
                description="Discussion on IoT sensor placement and network topology"
                time="5 hours ago"
                user="John Doe (Buyer)"
              />
              <ActivityItem
                icon={<CheckCircle2 className="w-4 h-4" />}
                title="Stage Milestone Completed"
                description="Early Discussion stage completed with stakeholder approval"
                time="1 day ago"
                user="System"
              />
              <ActivityItem
                icon={<Upload className="w-4 h-4" />}
                title="Technical Architecture Uploaded"
                description="Seller uploaded preliminary system architecture diagram"
                time="2 days ago"
                user="IndustryTech Solutions"
              />
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-3">
              <DocumentItem
                name="Business Requirements Document (BRD)"
                type="PDF"
                size="2.4 MB"
                lastModified="2 hours ago"
                status="updated"
              />
              <DocumentItem
                name="Technical Proposal"
                type="DOCX"
                size="1.8 MB"
                lastModified="1 day ago"
                status="final"
              />
              <DocumentItem
                name="System Architecture Diagram"
                type="PDF"
                size="3.2 MB"
                lastModified="2 days ago"
                status="draft"
              />
              <DocumentItem
                name="Pilot KPI Framework"
                type="XLSX"
                size="890 KB"
                lastModified="3 days ago"
                status="final"
              />
              <button className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center justify-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Document
              </button>
            </div>
          )}

          {/* AI Assistant Tab */}
          {activeTab === 'ai-assistant' && (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">AI Suggestions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Based on current engagement stage</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <SuggestionCard
                    title="Solution Architecture Review"
                    description="AI analysis suggests adding redundancy to the proposed gateway architecture for 99.9% uptime requirement"
                  />
                  <SuggestionCard
                    title="Pilot Design Recommendation"
                    description="Consider starting with 50 sensors in Zone A for a 3-month pilot to validate ROI assumptions"
                  />
                  <SuggestionCard
                    title="KPI Alignment"
                    description="The proposed KPIs align well with industry benchmarks for IoT deployments in manufacturing"
                  />
                </div>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ask AI Assistant</h3>
                <textarea
                  className="input mb-3"
                  rows="3"
                  placeholder="Ask questions about the proposal, technical architecture, or pilot design..."
                />
                <button className="btn-primary flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Get AI Insights
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

const ActivityItem = ({ icon, title, description, time, user }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{description}</p>
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
        <span>{user}</span>
        <span>•</span>
        <span>{time}</span>
      </div>
    </div>
  </div>
);

const DocumentItem = ({ name, type, size, lastModified, status }) => {
  const statusColors = {
    updated: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    final: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    draft: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span>{type}</span>
            <span>•</span>
            <span>{size}</span>
            <span>•</span>
            <span>{lastModified}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status}
        </span>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
};

const SuggestionCard = ({ title, description }) => (
  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-800">
    <h4 className="font-medium text-gray-900 dark:text-white mb-1">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default EngagementWorkspace;
