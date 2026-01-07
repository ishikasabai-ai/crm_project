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
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#043873] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales CRM</h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive SaaS Solution for Modern Sales Teams
                </p>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#043873] mb-6">Overview</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The Sales CRM is a cloud-based Software-as-a-Service (SaaS) solution designed to help
                        organizations manage, track, and optimize their entire sales process from lead generation to deal
                        closure. It serves as a centralized platform where sales teams can store customer data, monitor
                        interactions, manage opportunities, and gain actionable insights that drive revenue growth and
                        improve sales efficiency.
                    </p>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                        Built for scalability, flexibility, and ease of use, the Sales CRM enables businesses of all sizes to
                        streamline sales operations, improve collaboration, and maintain consistent engagement with
                        prospects and customers across multiple channels.
                    </p>
                </div>

                {/* Core Capabilities */}
                <h2 className="text-3xl font-bold text-[#043873] mb-12 text-center">Core Capabilities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

                    {/* Card 1: Lead Management */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                        <Filter className="text-[#4F9CF9] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#043873] mb-4">Lead Management</h3>
                        <p className="text-gray-600 mb-4">
                            Provides a structured system for capturing, organizing, and qualifying leads from multiple sources.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Lead capture and source tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Lead assignment and routing</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Lead qualification and scoring</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Activity history logs</li>
                        </ul>
                    </div>

                    {/* Card 2: Contact & Account Management */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                        <Users className="text-[#4F9CF9] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#043873] mb-4">Contact & Account Mgmt</h3>
                        <p className="text-gray-600 mb-4">
                            Maintains a centralized and secure database of contacts and accounts with complete interaction history.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> 360-degree customer view</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Custom fields for data</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Relationship tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Advanced search & segmentation</li>
                        </ul>
                    </div>

                    {/* Card 3: Pipeline Management */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                        <TrendingUp className="text-[#4F9CF9] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#043873] mb-4">Pipeline Management</h3>
                        <p className="text-gray-600 mb-4">
                            Offers a visual and customizable pipeline to track deals across stages and improve forecasting.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Customizable pipeline stages</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Deal value & probability tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Expected close dates/milestones</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Drag-and-drop deal movement</li>
                        </ul>
                    </div>

                    {/* Card 4: Sales Automation */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                        <Zap className="text-[#4F9CF9] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#043873] mb-4">Sales Automation</h3>
                        <p className="text-gray-600 mb-4">
                            Automation tools streamline repetitive tasks and ensure consistent execution of sales processes.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Automatic task creation</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Lead and deal assignment rules</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Trigger-based notifications</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Follow-up scheduling</li>
                        </ul>
                    </div>

                    {/* Card 5: Communication */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                        <MessageSquare className="text-[#4F9CF9] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#043873] mb-4">Communication Tracking</h3>
                        <p className="text-gray-600 mb-4">
                            Integrates with email and calendar systems to log all customer interactions centrally.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Email sync and tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Meeting and call logging</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Notes and activity timelines</li>
                        </ul>
                    </div>

                    {/* Card 6: Reporting & Analytics */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                        <BarChart className="text-[#4F9CF9] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#043873] mb-4">Reporting & Analytics</h3>
                        <p className="text-gray-600 mb-4">
                            Advanced analytics and reporting tools convert data into actionable insights.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Sales performance dashboards</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Pipeline and revenue forecasting</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Conversion and win-rate analysis</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Custom report creation</li>
                        </ul>
                    </div>

                    {/* Card 7: Security (Centered if odd, or just grid) */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 lg:col-span-3 lg:w-1/3 lg:mx-auto">
                        <ShieldCheck className="text-[#4F9CF9] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#043873] mb-4">User Management & Security</h3>
                        <p className="text-gray-600 mb-4">
                            Enterprise-grade security and role-based access controls protect sensitive data.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Role-based permissions</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> User activity tracking</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Secure cloud hosting</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Compliance-ready architecture</li>
                        </ul>
                    </div>

                </div>

                {/* Benefits Section */}
                <div className="bg-[#043873] text-white rounded-2xl p-10 md:p-16 mb-20 shadow-xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">Benefits of a SaaS Sales CRM</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#4F9CF9] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Anytime, anywhere accessibility</h3>
                                <p className="text-gray-200">Access your data and manage deals from any device, anywhere in the world.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#4F9CF9] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Scalable for growing teams</h3>
                                <p className="text-gray-200">Easily add new users and features as your sales team expands.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#4F9CF9] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Cost-efficient subscription</h3>
                                <p className="text-gray-200">Predictable costs with no heavy upfront infrastructure investment.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle className="text-[#4F9CF9] shrink-0" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Fast adoption & updates</h3>
                                <p className="text-gray-200">Intuitive interface with continuous automatic updates.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conclusion */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#043873] mb-6">Conclusion</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The Sales CRM empowers sales teams to manage leads, nurture relationships, close deals faster,
                        and gain full visibility into their sales pipeline. By combining automation, analytics, and centralized
                        data, it enables sustainable revenue growth.
                    </p>
                </div>

            </section>
        </div>
    );
}
