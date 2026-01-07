import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RequestDemo() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        employees: '1-10',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log("Form submitted:", formData);
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="bg-[#111827] min-h-screen py-20 px-6 flex items-center justify-center">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-[#1F2937] p-8 rounded-2xl max-w-lg text-center border border-gray-700"
                >
                    <div className="flex justify-center mb-6">
                        <CheckCircle size={64} className="text-[#D946EF]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Request Received!</h2>
                    <p className="text-gray-300 mb-6">
                        Thank you for your interest in Crivient. Our team will contact you shortly to schedule your personalized demo.
                    </p>
                    <a href="/" className="inline-block bg-[#D946EF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c026d3] transition-colors">
                        Return Home
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-[#111827] min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column: Content */}
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        See Crivient in <span className="text-[#D946EF]">Action</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Book a personalized demo to discover how Crivient can help you streamline operations, boost sales, and improve customer relationships.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1F2937] p-3 rounded-lg text-[#D946EF]">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Tailored Walkthrough</h3>
                                <p className="text-gray-400">See features relevant to your specific industry and needs.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1F2937] p-3 rounded-lg text-[#D946EF]">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Expert Q&A</h3>
                                <p className="text-gray-400">Get answers to all your technical and operational questions.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1F2937] p-3 rounded-lg text-[#D946EF]">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">No Commitment</h3>
                                <p className="text-gray-400">Free consultation with no obligation to purchase.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#1F2937] p-8 md:p-10 rounded-2xl border border-gray-700 shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    value={formData.company} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                    placeholder="Acme Inc."
                                />
                            </div>
                            <div>
                                <label htmlFor="employees" className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
                                <select 
                                    id="employees" 
                                    name="employees" 
                                    value={formData.employees} 
                                    onChange={handleChange} 
                                    className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                >
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="201-500">201-500 employees</option>
                                    <option value="500+">500+ employees</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">How can we help? (Optional)</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                rows="3" 
                                className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                placeholder="Tell us about your needs..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-[#D946EF] hover:bg-[#c026d3] text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
                        >
                            <span>Request Demo</span>
                            <Send size={20} />
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            By submitting this form, you agree to our <a href="/terms-services" className="text-[#D946EF] hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-[#D946EF] hover:underline">Privacy Policy</a>.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
