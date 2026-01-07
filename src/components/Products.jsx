import {
    Users,
    BarChart,
    Zap,
    MessageSquare,
    ShieldCheck,
    CheckCircle,
    Filter,
    TrendingUp
} from "lucide-react";

export default function Products() {
    return (
        <div className="bg-[#111827]">
            {/* Hero Section */}
            <section className="bg-[#020617] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales CRM</h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive SaaS Solution for Modern Sales Teams
                </p>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        The Sales CRM is a cloud-based Software-as-a-Service (SaaS) solution designed to help
                        organizations manage, track, and optimize their entire sales process from lead generation to deal
                        closure. It serves as a centralized platform where sales teams can store customer data, monitor
                        interactions, manage opportunities, and gain actionable insights that drive revenue growth and
                        improve sales efficiency.
                    </p>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
                        Built for scalability, flexibility, and ease of use, the Sales CRM enables businesses of all sizes to
                        streamline sales operations, improve collaboration, and maintain consistent engagement with
                        prospects and customers across multiple channels.
                    </p>
                </div>

                {/* Core Capabilities */}
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Capabilities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

                    {/* Card 1: Lead Management */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                        <Filter className="text-[#D946EF] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">Lead Management</h3>
                        <p className="text-gray-300 mb-4">
                            Provides a structured system for capturing, organizing, and qualifying leads from multiple sources.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Lead capture and source tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Lead assignment and routing</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Lead qualification and scoring</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Activity history logs</li>
                        </ul>
                    </div>

                    {/* Card 2: Contact & Account Management */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                        <Users className="text-[#D946EF] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">Contact & Account Mgmt</h3>
                        <p className="text-gray-300 mb-4">
                            Maintains a centralized and secure database of contacts and accounts with complete interaction history.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> 360-degree customer view</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Custom fields for data</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Relationship tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Advanced search & segmentation</li>
                        </ul>
                    </div>

                    {/* Card 3: Pipeline Management */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                        <TrendingUp className="text-[#D946EF] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">Pipeline Management</h3>
                        <p className="text-gray-300 mb-4">
                            Offers a visual and customizable pipeline to track deals across stages and improve forecasting.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Customizable pipeline stages</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Deal value & probability tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Expected close dates/milestones</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Drag-and-drop deal movement</li>
                        </ul>
                    </div>

                    {/* Card 4: Sales Automation */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                        <Zap className="text-[#D946EF] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">Sales Automation</h3>
                        <p className="text-gray-300 mb-4">
                            Automation tools streamline repetitive tasks and ensure consistent execution of sales processes.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Automatic task creation</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Lead and deal assignment rules</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Trigger-based notifications</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Follow-up scheduling</li>
                        </ul>
                    </div>

                    {/* Card 5: Communication */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                        <MessageSquare className="text-[#D946EF] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">Communication Tracking</h3>
                        <p className="text-gray-300 mb-4">
                            Integrates with email and calendar systems to log all customer interactions centrally.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Email sync and tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Meeting and call logging</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Notes and activity timelines</li>
                        </ul>
                    </div>

                    {/* Card 6: Reporting & Analytics */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
                        <BarChart className="text-[#D946EF] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">Reporting & Analytics</h3>
                        <p className="text-gray-300 mb-4">
                            Advanced analytics and reporting tools convert data into actionable insights.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Sales performance dashboards</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Pipeline and revenue forecasting</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Conversion and win-rate analysis</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Custom report creation</li>
                        </ul>
                    </div>

                    {/* Card 7: Security (Centered if odd, or just grid) */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700 lg:col-span-3 lg:w-1/3 lg:mx-auto">
                        <ShieldCheck className="text-[#D946EF] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">User Management & Security</h3>
                        <p className="text-gray-300 mb-4">
                            Enterprise-grade security and role-based access controls protect sensitive data.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Role-based permissions</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> User activity tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Secure cloud hosting</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Compliance-ready architecture</li>
                        </ul>
                    </div>

                </div>

                {/* Benefits Section */}
                <div className="bg-[#020617] text-white rounded-2xl p-10 md:p-16 mb-20 shadow-xl border border-gray-800">
                    <h2 className="text-3xl font-bold mb-10 text-center">Benefits of a SaaS Sales CRM</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#D946EF] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Anytime, anywhere accessibility</h3>
                                <p className="text-gray-300">Access your data and manage deals from any device, anywhere in the world.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#D946EF] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Real-time collaboration</h3>
                                <p className="text-gray-300">Keep everyone on the same page with shared notes, tasks, and updates.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#D946EF] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Scalability</h3>
                                <p className="text-gray-300">Grow your team and data without worrying about infrastructure or maintenance.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#D946EF] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Cost-effective</h3>
                                <p className="text-gray-300">Reduce IT costs with a subscription-based model that includes updates and support.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conclusion */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        The Sales CRM empowers sales teams to manage leads, nurture relationships, close deals faster,
                        and gain full visibility into their sales pipeline. By combining automation, analytics, and centralized
                        data, it enables sustainable revenue growth.
                    </p>
                </div>

            </section>
        </div>
    );
}
