import { Target, Heart, Award, ShieldCheck, Zap, TrendingUp, Cloud } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#111827]">
      {/* Hero / About Us */}
      <section className="bg-[#020617] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Crivient</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Crivient is a modern, cloud-based CRM platform designed to help businesses manage customer relationships with clarity, efficiency, and scale.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto space-y-16">
        
        {/* Intro & Founding Story */}
        <div className="text-lg text-gray-300 leading-relaxed space-y-6 text-center">
          <p>
            As a SaaS solution, Crivient enables organizations to centralize customer data, automate workflows, and gain real-time insights—without complexity or heavy infrastructure.
          </p>
          <p>
            Our platform supports sales, marketing, and customer success teams by simplifying lead management, optimizing pipelines, and enabling seamless communication across the customer lifecycle. Built for performance, security, and flexibility, Crivient adapts to the evolving needs of growing businesses and enterprises alike.
          </p>
          <div className="bg-[#1F2937] p-8 rounded-xl border-l-4 border-[#D946EF] text-left mt-8">
            <p className="italic text-gray-300">
              "Founded by <span className="font-bold text-[#D946EF]">Tushar</span>, Crivient was created with a clear SaaS-first vision: to deliver an intuitive yet powerful CRM that aligns with how modern teams work. With a strong focus on usability, scalability, and customer value, Tushar leads Crivient toward building reliable, future-ready solutions for businesses worldwide."
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg border border-gray-700">
            <TrendingUp size={40} className="text-[#D946EF] mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become a trusted global SaaS CRM platform that empowers businesses to build meaningful, long-term customer relationships through simple, intelligent, and scalable technology.
            </p>
          </div>
          <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg border border-gray-700">
            <Target size={40} className="text-[#D946EF] mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to help organizations grow smarter by providing a secure, easy-to-use CRM that improves productivity, enhances customer engagement, and delivers actionable insights—all through a flexible cloud-based platform.
            </p>
          </div>
        </div>

        {/* Culture & Values */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Culture & Values</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            At Crivient, our culture reflects the principles that guide our SaaS mindset. Our team thrives in a collaborative, learning-focused environment where innovation and accountability go hand in hand.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-700">
                <Heart className="text-[#D946EF] mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Customer-First Thinking</h3>
                <p className="text-sm text-gray-400">We build features driven by real user needs and feedback.</p>
             </div>
             <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-700">
                <Award className="text-[#D946EF] mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Product Excellence</h3>
                <p className="text-sm text-gray-400">We prioritize performance, reliability, and continuous improvement.</p>
             </div>
             <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-700">
                <Zap className="text-[#D946EF] mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Innovation at Scale</h3>
                <p className="text-sm text-gray-400">We design solutions that grow with our customers.</p>
             </div>
             <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-700">
                <ShieldCheck className="text-[#D946EF] mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Transparency & Trust</h3>
                <p className="text-sm text-gray-400">We value open communication and long-term partnerships.</p>
             </div>
             <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-700">
                <TrendingUp className="text-[#D946EF] mb-4" size={32} />
                <h3 className="font-bold text-white mb-2">Agility & Ownership</h3>
                <p className="text-sm text-gray-400">We move fast, take responsibility, and adapt to change.</p>
             </div>
          </div>
        </div>

        {/* SaaS Approach */}
        <div className="bg-[#020617] text-white p-10 rounded-2xl shadow-xl border border-gray-800">
          <Cloud size={48} className="text-[#D946EF] mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our SaaS Approach</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              Crivient follows a subscription-based, cloud-native model that ensures quick onboarding, regular updates, and minimal maintenance for customers. We continuously enhance our platform with new features, security updates, and performance improvements—so businesses always stay ahead.
            </p>
            <p>
              Our architecture is designed for scalability, data security, and high availability, ensuring reliable access anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Commitment */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We see ourselves not just as a CRM vendor, but as a long-term SaaS partner. Crivient is committed to helping businesses streamline operations, strengthen customer relationships, and achieve sustainable growth through dependable CRM technology.
          </p>
        </div>

      </section>
    </div>
  );
}
