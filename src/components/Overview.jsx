import {
    Users,
    TrendingUp,
    Zap,
    BarChart,
    MessageSquare,
    ShieldCheck,
    CheckCircle,
    Target,
    Briefcase,
    Globe
} from "lucide-react";

export default function Overview() {
    return (
        <div className="bg-[#111827]">
            {/* Hero Section */}
            <section className="bg-[#020617] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Crivient CRM – Smarter Relationships. Faster Growth.</h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                    Crivient is a modern SaaS CRM designed to help businesses manage customer relationships, streamline sales processes, and turn data into actionable insights—all from a single, intuitive platform.
                </p>
            </section>

            {/* Intro & What Crivient Does */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
                        Built for growing teams, Crivient brings together sales, marketing, and customer support so every interaction is connected, contextual, and measurable.
                    </p>
                    <div className="bg-[#1F2937] p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">What Crivient Does</h2>
                        <p className="text-gray-300 mb-6">
                            Crivient centralizes your customer data and automates key workflows, allowing your team to focus on what matters most—building strong relationships and closing more deals.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <span className="text-gray-300">Track leads and opportunities across the entire sales lifecycle</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <span className="text-gray-300">Manage customer interactions in real time</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <span className="text-gray-300">Automate follow-ups, tasks, and pipelines</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <span className="text-gray-300">Gain visibility into performance with powerful analytics</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                            <Users className="text-[#D946EF] mb-4" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3">Unified Customer View</h3>
                            <p className="text-gray-300">
                                Access a complete, 360° view of every customer—contacts, communication history, deals, and support tickets—all in one place.
                            </p>
                        </div>

                        <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                            <TrendingUp className="text-[#D946EF] mb-4" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3">Sales Pipeline Management</h3>
                            <p className="text-gray-300">
                                Visualize and manage your sales pipeline with customizable stages, deal tracking, and forecasting tools to keep revenue predictable.
                            </p>
                        </div>

                        <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                            <Zap className="text-[#D946EF] mb-4" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3">Automation & Workflows</h3>
                            <p className="text-gray-300">
                                Reduce manual work with automated lead assignment, reminders, email sequences, and workflow triggers.
                            </p>
                        </div>

                        <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                            <BarChart className="text-[#D946EF] mb-4" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3">Analytics & Reporting</h3>
                            <p className="text-gray-300">
                                Make data-driven decisions with real-time dashboards, sales insights, and customizable reports.
                            </p>
                        </div>

                        <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                            <MessageSquare className="text-[#D946EF] mb-4" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3">Team Collaboration</h3>
                            <p className="text-gray-300">
                                Keep teams aligned with shared notes, task assignments, and activity tracking across departments.
                            </p>
                        </div>

                        <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                            <ShieldCheck className="text-[#D946EF] mb-4" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3">Secure & Scalable</h3>
                            <p className="text-gray-300">
                                Crivient is cloud-based, secure, and built to scale with your business as you grow.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Who Crivient Is For & Why Choose */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-stretch">

                    {/* Who Crivient Is For */}
                    <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg border border-gray-700 h-full">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Target className="text-[#D946EF]" /> Who Crivient Is For
                        </h2>
                        <p className="text-gray-300 mb-6">Crivient is ideal for:</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                                <span className="text-gray-300">Startups and SMBs looking to scale efficiently</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                                <span className="text-gray-300">Sales-driven organizations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                                <span className="text-gray-300">Customer-focused teams that value data clarity</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                                <span className="text-gray-300">Businesses that want a flexible, easy-to-adopt CRM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Why Choose Crivient */}
                    <div className="bg-[#020617] text-white p-8 rounded-xl shadow-lg h-full border border-gray-800">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Briefcase className="text-[#D946EF]" /> Why Choose Crivient?
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <div>
                                    <span className="font-bold block">Simple to use</span>
                                    <span className="text-gray-300 text-sm">Minimal learning curve</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <div>
                                    <span className="font-bold block">Flexible</span>
                                    <span className="text-gray-300 text-sm">Customizable to fit your processes</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <div>
                                    <span className="font-bold block">Insight-driven</span>
                                    <span className="text-gray-300 text-sm">Turn customer data into growth opportunities</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                                <div>
                                    <span className="font-bold block">Reliable SaaS</span>
                                    <span className="text-gray-300 text-sm">Access anytime, anywhere</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Conclusion / CTA */}
                <div className="text-center bg-[#1F2937] rounded-2xl p-12 border border-gray-700">
                    <Globe className="text-[#D946EF] mx-auto mb-6" size={48} />
                    <h2 className="text-3xl font-bold text-white mb-4">Grow With Confidence</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Crivient empowers teams to build meaningful customer relationships, close deals faster, and grow smarter—without complexity.
                    </p>
                    <p className="text-lg font-bold text-[#D946EF]">
                        Crivient CRM — Where customer intelligence meets execution.
                    </p>
                </div>

            </section>
        </div>
    );
}
