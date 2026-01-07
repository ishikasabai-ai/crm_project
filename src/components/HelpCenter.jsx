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
        <div className="bg-[#111827]">
            {/* Hero Section */}
            <section className="bg-[#020617] text-white py-20 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-800 p-4 rounded-full">
                        <BookOpen size={48} className="text-[#D946EF]" />
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
                        className="w-full pl-12 pr-4 py-4 rounded-lg text-white bg-gray-800 border border-gray-700 focus:outline-none focus:ring-4 focus:ring-[#D946EF]/50 shadow-lg"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Getting Started */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <Rocket className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            The Sales CRM helps you organize leads, track deals, automate follow-ups, and analyze sales performance from one centralized platform.
                        </p>
                        <p className="text-gray-400 font-medium bg-[#111827] p-3 rounded border border-gray-600 text-sm">
                            Log in using your registered email and password. Use <span className="text-[#D946EF]">Forgot Password</span> if needed.
                        </p>
                    </div>

                    {/* Card 2: Dashboard */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <LayoutDashboard className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
                        <p className="text-gray-300 mb-4">The dashboard shows an overview of:</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Leads and deals</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Pipeline status</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Tasks and follow-ups</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Sales performance metrics</li>
                        </ul>
                    </div>

                    {/* Card 3: Leads & Contacts */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <Users className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Leads & Contacts</h2>
                        <ul className="space-y-3 text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                Add leads manually, via imports, or integrations
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                Track lead status and priority
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                Store contact details, notes, and communication history
                            </li>
                        </ul>
                    </div>

                    {/* Card 4: Deals & Pipeline */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <TrendingUp className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Deals & Pipeline</h2>
                        <ul className="space-y-3 text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                Create deals and assign values and close dates
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                Move deals through stages like Prospecting, Proposal, and Closed Won/Lost
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                Track progress using the pipeline view
                            </li>
                        </ul>
                    </div>

                    {/* Card 5: Tasks & Activities */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <Calendar className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Tasks & Activities</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Schedule calls, emails, meetings, and reminders to ensure timely follow-ups.
                        </p>
                    </div>

                    {/* Card 6: Automation & Reports */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <FileBarChart className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Automation & Reports</h2>
                        <ul className="space-y-3 text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                Automate lead assignment, follow-ups, and updates
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D946EF] font-bold">•</span>
                                View sales reports, pipeline health, and team performance
                            </li>
                        </ul>
                    </div>

                    {/* Card 7: Users & Security */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <ShieldCheck className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Users & Security</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Admins can manage users, roles, and permissions. Data is securely stored with role-based access control.
                        </p>
                    </div>

                    {/* Card 8: Support */}
                    <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-all border border-gray-700 group">
                        <div className="bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D946EF] transition-colors">
                            <HelpCircle className="text-[#D946EF] group-hover:text-white transition-colors" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Support</h2>
                        <p className="text-gray-300 leading-relaxed">
                            For help, visit FAQs, contact support, or submit a ticket directly from the CRM.
                        </p>
                        <Link to="/contact" className="mt-4 text-[#D946EF] font-bold hover:underline">Contact Support</Link>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="text-center mt-12 pt-12 border-t border-gray-700">
                    <p className="text-gray-400 italic">
                        This Help Center is your quick reference for using the Sales CRM efficiently.
                    </p>
                </div>

            </section>
        </div>
    );
}
