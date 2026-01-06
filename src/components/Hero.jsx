import { ArrowRight } from "lucide-react";
import crm from "../assets/customer-relationship-management-concept.jpg";

export default function Hero() {
  return (
    <section className="bg-[#043873] px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Smart CRM Software for <span className="text-[#4F9CF9]">Growing Businesses</span>
          </h2>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            Organize customer data, streamline sales operations, and build
            long-lasting customer relationships all in one place.
          </p>

          <button className="bg-[#4F9CF9] text-[#043873] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#3a85e0] transition-all flex items-center gap-2 mx-auto md:mx-0 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
            Try Crivient free <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-1 bg-[#4F9CF9] blur-2xl opacity-20 rounded-full"></div>
          <img
            src={crm}
            alt="CRM Dashboard"
            className="relative rounded-xl shadow-2xl border border-white/10 w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}