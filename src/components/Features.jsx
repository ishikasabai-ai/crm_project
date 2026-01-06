import { Users, BarChart2, Zap } from "lucide-react";

const features = [
  {
    icon: <Users size={40} className="text-[#4F9CF9]" />,
    title: "Lead & Contact Management",
    description: "Keep all your leads and contacts organized in one central place."
  },
  {
    icon: <BarChart2 size={40} className="text-[#4F9CF9]" />,
    title: "Sales Pipeline & Deal Tracking",
    description: "Visualize your sales process and track deals from lead to close."
  },
  {
    icon: <Zap size={40} className="text-[#4F9CF9]" />,
    title: "Automation & Workflows",
    description: "Automate repetitive tasks and save time for what matters most."
  }
];

export default function Features() {
  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#043873]">Powerful Features</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to manage your customer relationships effectively.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border border-gray-100 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col items-center text-center group">
              <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl mb-3 text-[#043873]">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}