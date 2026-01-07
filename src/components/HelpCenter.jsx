import {
    Rocket,
    LayoutDashboard,
    Users,
    TrendingUp,
    Calendar,
    FileBarChart,
    ShieldCheck,
    HelpCircle,
    Search,
    BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#043873] text-white py-20 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-[#4F9CF9] p-4 rounded-full">
                        <BookOpen size={48} className="text-[#043873]" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales CRM Help Center</h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
                    Welcome to the Sales CRM Help Center. This guide helps you quickly understand and use the core features of the CRM to manage leads, deals, and sales performance effectively.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search for articles, guides, and help..."
                        className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#4F9CF9]/50 shadow-lg"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Getting Started */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <Rocket className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Getting Started</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            The Sales CRM helps you organize leads, track deals, automate follow-ups, and analyze sales performance from one centralized platform.
                        </p>
                        <p className="text-gray-700 font-medium bg-white p-3 rounded border border-gray-200 text-sm">
                            Log in using your registered email and password. Use <span className="text-[#4F9CF9]">Forgot Password</span> if needed.
                        </p>
                    </div>

                    {/* Card 2: Dashboard */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <LayoutDashboard className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Dashboard</h2>
                        <p className="text-gray-600 mb-4">The dashboard shows an overview of:</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Leads and deals</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Pipeline status</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Tasks and follow-ups</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4F9CF9] rounded-full"></div> Sales performance metrics</li>
                        </ul>
                    </div>

                    {/* Card 3: Leads & Contacts */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <Users className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Leads & Contacts</h2>
                        <ul className="space-y-3 text-gray-600 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                Add leads manually, via imports, or integrations
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                Track lead status and priority
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                Store contact details, notes, and communication history
                            </li>
                        </ul>
                    </div>

                    {/* Card 4: Deals & Pipeline */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <TrendingUp className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Deals & Pipeline</h2>
                        <ul className="space-y-3 text-gray-600 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                Create deals and assign values and close dates
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                Move deals through stages like Prospecting, Proposal, and Closed Won/Lost
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                Track progress using the pipeline view
                            </li>
                        </ul>
                    </div>

                    {/* Card 5: Tasks & Activities */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <Calendar className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Tasks & Activities</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Schedule calls, emails, meetings, and reminders to ensure timely follow-ups.
                        </p>
                    </div>

                    {/* Card 6: Automation & Reports */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <FileBarChart className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Automation & Reports</h2>
                        <ul className="space-y-3 text-gray-600 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                Automate lead assignment, follow-ups, and updates
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4F9CF9] font-bold">•</span>
                                View sales reports, pipeline health, and team performance
                            </li>
                        </ul>
                    </div>

                    {/* Card 7: Users & Security */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <ShieldCheck className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Users & Security</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Admins can manage users, roles, and permissions. Data is securely stored with role-based access control.
                        </p>
                    </div>

                    {/* Card 8: Support */}
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4F9CF9] transition-colors">
                            <HelpCircle className="text-[#043873] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#043873] mb-4">Support</h2>
                        <p className="text-gray-600 leading-relaxed">
                            For help, visit FAQs, contact support, or submit a ticket directly from the CRM.
                        </p>
                        <Link to="/contact" className="mt-4 text-[#4F9CF9] font-bold hover:underline">Contact Support</Link>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="text-center mt-12 pt-12 border-t border-gray-100">
                    <p className="text-gray-500 italic">
                        This Help Center is your quick reference for using the Sales CRM efficiently.
                    </p>
                </div>

            </section>
        </div>
    );
}
