import { Mail, Phone, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#111827]">
      {/* Hero Section */}
      <section className="bg-[#020617] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, need support, or want to learn how our CRM can help your business grow.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Have questions about features, pricing, integrations, or implementation? Fill out the form and one of our CRM experts will get back to you shortly.
            </p>
            
            <h3 className="font-bold text-white text-xl mb-4">You can contact us for:</h3>
            <ul className="space-y-3 text-gray-300 mb-8 list-disc pl-5">
              <li>Product demos and feature inquiries</li>
              <li>Technical support and troubleshooting</li>
              <li>Customization and integration requests</li>
              <li>Pricing and subscription plans</li>
              <li>Feedback and suggestions</li>
            </ul>
          </div>

          <div>
             <h3 className="font-bold text-white text-xl mb-6">Reach Us Directly</h3>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg text-[#D946EF]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-gray-400">support@yourcrm.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#4F9CF9]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Phone</p>
                    <p className="text-gray-400">+1 (000) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#4F9CF9]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Business Hours</p>
                    <p className="text-gray-400">Monday – Friday, 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-[#1F2937] p-8 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white text-lg mb-2">Our Commitment</h3>
            <p className="text-gray-300">
              We aim to respond to all inquiries within 24 hours. Your questions matter to us, and we’re committed to providing fast, reliable, and helpful support.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1F2937] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-700 h-fit">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-[#D946EF] focus:border-transparent outline-none transition-all" placeholder="Kishan" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-[#D946EF] focus:border-transparent outline-none transition-all" placeholder="Jangid" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-[#D946EF] focus:border-transparent outline-none transition-all" placeholder="kishan@company.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Subject</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-[#D946EF] focus:border-transparent outline-none transition-all">
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Partnership</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-[#D946EF] focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <button type="button" className="w-full bg-[#D946EF] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#C026D3] transition-colors flex items-center justify-center gap-2">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
