import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  FileText, 
  Target,
  Factory,
  Droplet,
  Building2,
  Shield,
  Workflow,
  CheckCircle2,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Landing = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo-gradient.png" alt="X4ET" className="h-8" />
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">How It Works</a>
              <a href="#industries" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Industries</a>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? '🌞' : '🌙'}
              </button>
              <Link to="/buyer/dashboard" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered Technology Engagement Platform
              </div>
              <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Connect Technology<br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Buyers & Sellers
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                X4ET bridges the gap between technology buyers and sellers through structured engagements,
                AI-powered requirement analysis, and intelligent seller discovery.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/buyer/dashboard" className="btn-primary flex items-center gap-2">
                  Sign Up as Buyer
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/seller/dashboard" className="btn-secondary">
                  Join as Technology Seller
                </Link>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="mt-16 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
                  alt="Technology Platform"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need for structured technology engagements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI Requirement Structuring"
                description="Transform vague requirements into structured, actionable specifications with AI assistance"
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
              />
              <FeatureCard
                icon={<Search className="w-6 h-6" />}
                title="Technology Discovery"
                description="Find the right technology sellers based on competencies, certifications, and industry expertise"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
              />
              <FeatureCard
                icon={<Workflow className="w-6 h-6" />}
                title="Structured Engagement Stages"
                description="Move through Concept, Early Discussion, BRD, Pilot, and RFP stages systematically"
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
              />
              <FeatureCard
                icon={<FileText className="w-6 h-6" />}
                title="Proposal & Pilot Orchestration"
                description="Collaborate on proposals, technical architectures, and pilot designs with AI suggestions"
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Simple three-step process to connect and engage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <ProcessStep
                number="01"
                title="Buyer Posts Requirement"
                description="Technology buyers describe their needs, industry context, and engagement stage. AI structures the requirement into actionable specifications."
                icon={<Users className="w-8 h-8" />}
              />
              <ProcessStep
                number="02"
                title="AI Matching & Discovery"
                description="Our AI analyzes requirements and matches with qualified technology sellers based on capabilities, industry expertise, and deployment models."
                icon={<Zap className="w-8 h-8" />}
              />
              <ProcessStep
                number="03"
                title="Structured Engagement"
                description="Buyers and sellers collaborate through defined stages with AI assistance for proposals, technical architecture, and pilot design."
                icon={<CheckCircle2 className="w-8 h-8" />}
              />
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Specialized technology engagement for key sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <IndustryCard
                icon={<Factory className="w-8 h-8" />}
                title="Manufacturing"
                description="Smart factories, IoT, automation"
                image="https://images.unsplash.com/photo-1565043666747-69f6646db2e7?q=80&w=800&auto=format&fit=crop"
              />
              <IndustryCard
                icon={<Droplet className="w-8 h-8" />}
                title="Oil & Gas"
                description="Pipeline monitoring, predictive maintenance"
                image="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=800&auto=format&fit=crop"
              />
              <IndustryCard
                icon={<Building2 className="w-8 h-8" />}
                title="Smart Cities"
                description="Urban infrastructure, IoT networks"
                image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop"
              />
              <IndustryCard
                icon={<Shield className="w-8 h-8" />}
                title="Defense"
                description="Secure systems, advanced tech"
                image="https://images.unsplash.com/photo-1620558138198-cfb9b4f3c294?q=80&w=800&auto=format&fit=crop"
              />
              <IndustryCard
                icon={<Target className="w-8 h-8" />}
                title="Infrastructure"
                description="Construction, asset management"
                image="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=800&auto=format&fit=crop"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Technology Engagement?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl">
                  Join X4ET today and experience AI-powered technology matching and structured engagement processes.
                </p>
                <div className="flex items-center gap-4">
                  <Link to="/buyer/dashboard" className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                    Start as Buyer
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/seller/dashboard" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Join as Seller
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <img src="/logo-gradient.png" alt="X4ET" className="h-8 mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  AI-Powered Technology Engagement Platform connecting buyers and sellers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Features</a></li>
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Pricing</a></li>
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Security</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">About</a></li>
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Privacy</a></li>
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Terms</a></li>
                  <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
              © 2026 X4ET - Exchange for Emerging Tech. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, image }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="p-6">
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description, icon }) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full text-white font-bold text-xl mb-6 shadow-lg">
      {icon}
    </div>
    <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">{number}</div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const IndustryCard = ({ icon, title, description, image }) => (
  <div className="group relative overflow-hidden rounded-xl h-64 cursor-pointer">
    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  </div>
);

export default Landing;
