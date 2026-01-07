import {
    Users,
    TrendingUp,
    Zap,
    BarChart,
    MessageSquare,
    ShieldCheck,
    Target,
    Briefcase,
    Globe,
    Quote,
    Star
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomerStories() {
    return (
        <div className="bg-[#111827]">
            {/* Hero Section */}
            <section className="bg-[#020617] text-white py-20 px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-[#D946EF]/20 px-4 py-1 rounded-full text-[#D946EF] text-sm font-semibold mb-6">
                    <Star size={16} fill="currentColor" /> Customer Success Stories
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Crivient CRM – Smarter Relationships. Faster Growth.</h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                    See how businesses use Crivient to manage customer relationships, streamline sales processes, and turn data into actionable insights—all from a single, intuitive platform.
                </p>
            </section>

            {/* Main Story Content - "What Crivient Does" adapted as a feature highlight or story context */}
            <section className="py-20 px-6 max-w-7xl mx-auto">

                {/* Intro */}
                <div className="text-center mb-20">
                    <Quote className="text-[#D946EF] mx-auto mb-6 opacity-50" size={60} />
                    <h2 className="text-3xl font-bold text-white mb-6">What We Deliver</h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        Built for growing teams, Crivient brings together sales, marketing, and customer support so every interaction is connected, contextual, and measurable.
                    </p>
                    <div className="bg-[#1F2937] p-8 rounded-2xl border border-gray-700 max-w-5xl mx-auto">
                        <p className="text-xl text-gray-300 italic">
                            "Crivient centralizes your customer data and automates key workflows, allowing your team to focus on what matters most—building strong relationships and closing more deals."
                        </p>
                    </div>
                </div>

                {/* Benefits Grid (from "With Crivient you can") */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <div className="bg-[#1F2937] p-6 rounded-xl shadow-md border-t-4 border-[#D946EF] text-center">
                        <TrendingUp className="mx-auto text-white mb-4" size={32} />
                        <p className="font-semibold text-gray-200">Track leads and opportunities across the entire sales lifecycle</p>
                    </div>
                    <div className="bg-[#1F2937] p-6 rounded-xl shadow-md border-t-4 border-[#D946EF] text-center">
                        <MessageSquare className="mx-auto text-white mb-4" size={32} />
                        <p className="font-semibold text-gray-200">Manage customer interactions in real time</p>
                    </div>
                    <div className="bg-[#1F2937] p-6 rounded-xl shadow-md border-t-4 border-[#D946EF] text-center">
                        <Zap className="mx-auto text-white mb-4" size={32} />
                        <p className="font-semibold text-gray-200">Automate follow-ups, tasks, and pipelines</p>
                    </div>
                    <div className="bg-[#1F2937] p-6 rounded-xl shadow-md border-t-4 border-[#D946EF] text-center">
                        <BarChart className="mx-auto text-white mb-4" size={32} />
                        <p className="font-semibold text-gray-200">Gain visibility into performance with powerful analytics</p>
                    </div>
                </div>

                {/* Key Features Section - Reframed slightly for a "Stories" feel (Impact) */}
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Driving Success Through Key Features</h2>
                <div className="space-y-12 mb-24">
                    {/* Feature 1 & 2 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="bg-gray-800 p-3 rounded-lg text-[#D946EF] shrink-0"><Users size={28} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Unified Customer View</h3>
                                <p className="text-gray-400">Access a complete, 360° view of every customer—contacts, communication history, deals, and support tickets—all in one place.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="bg-gray-800 p-3 rounded-lg text-[#D946EF] shrink-0"><TrendingUp size={28} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Sales Pipeline Management</h3>
                                <p className="text-gray-400">Visualize and manage your sales pipeline with customizable stages, deal tracking, and forecasting tools to keep revenue predictable.</p>
                            </div>
                        </div>
                    </div>
                    {/* Feature 3 & 4 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="bg-gray-800 p-3 rounded-lg text-[#D946EF] shrink-0"><Zap size={28} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Automation & Workflows</h3>
                                <p className="text-gray-400">Reduce manual work with automated lead assignment, reminders, email sequences, and workflow triggers.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="bg-gray-800 p-3 rounded-lg text-[#D946EF] shrink-0"><BarChart size={28} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Analytics & Reporting</h3>
                                <p className="text-gray-400">Make data-driven decisions with real-time dashboards, sales insights, and customizable reports.</p>
                            </div>
                        </div>
                    </div>
                    {/* Feature 5 & 6 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="bg-gray-800 p-3 rounded-lg text-[#D946EF] shrink-0"><MessageSquare size={28} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
                                <p className="text-gray-400">Keep teams aligned with shared notes, task assignments, and activity tracking across departments.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="bg-gray-800 p-3 rounded-lg text-[#D946EF] shrink-0"><ShieldCheck size={28} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Secure & Scalable</h3>
                                <p className="text-gray-400">Crivient is cloud-based, secure, and built to scale with your business as you grow.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Who Crivient Is For & Why Choose - Split Layout */}
                <div className="bg-[#020617] text-white rounded-3xl p-10 md:p-16 mb-20 overflow-hidden relative border border-gray-800">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Globe size={300} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><Target className="text-[#D946EF]" /> Who Crivient Is For</h2>
                            <ul className="space-y-4 text-gray-200">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#D946EF] rounded-full"></span> Startups and SMBs looking to scale efficiently
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#D946EF] rounded-full"></span> Sales-driven organizations
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#D946EF] rounded-full"></span> Customer-focused teams that value data clarity
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#D946EF] rounded-full"></span> Businesses that want a flexible, easy-to-adopt CRM
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><Briefcase className="text-[#D946EF]" /> Why Choose Crivient?</h2>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-white/10 p-4 rounded-lg">
                                    <h3 className="font-bold text-[#D946EF] mb-1">Simple to use</h3>
                                    <p className="text-sm text-gray-300">Minimal learning curve</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg">
                                    <h3 className="font-bold text-[#D946EF] mb-1">Flexible</h3>
                                    <p className="text-sm text-gray-300">Customizable to fit your processes</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg">
                                    <h3 className="font-bold text-[#D946EF] mb-1">Insight-driven</h3>
                                    <p className="text-sm text-gray-300">Turn customer data into growth opportunities</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg">
                                    <h3 className="font-bold text-[#D946EF] mb-1">Reliable SaaS</h3>
                                    <p className="text-sm text-gray-300">Access anytime, anywhere</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing CTA */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Grow With Confidence</h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Crivient empowers teams to build meaningful customer relationships, close deals faster, and grow smarter—without complexity.
                    </p>
                    {/* <button className="bg-[#D946EF] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#C026D3] transition-transform hover:-translate-y-1 shadow-lg">
                        Start Your Story
                    </button> */}

                    <Link to="/pricing" className="bg-[#D946EF] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#C026D3] transition-transform hover:-translate-y-1 shadow-lg">Start Your Story</Link>

                    <p className="mt-8 text-sm font-bold text-[#D946EF] tracking-wider uppercase opacity-80">
                        Crivient CRM — Where customer intelligence meets execution.
                    </p>
                </div>

            </section>
        </div>
    );
}
