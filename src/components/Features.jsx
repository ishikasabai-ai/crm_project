import { Users, BarChart2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Users size={40} className="text-[#D946EF]" />,
    title: "Lead & Contact Management",
    description: "Keep all your leads and contacts organized in one central place."
  },
  {
    icon: <BarChart2 size={40} className="text-[#D946EF]" />,
    title: "Sales Pipeline & Deal Tracking",
    description: "Visualize your sales process and track deals from lead to close."
  },
  {
    icon: <Zap size={40} className="text-[#D946EF]" />,
    title: "Automation & Workflows",
    description: "Automate repetitive tasks and save time for what matters most."
  }
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="px-6 py-20 md:py-32 bg-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Powerful Features
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to manage your customer relationships effectively.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -10 }}
              className="p-8 border border-gray-700 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-300 bg-[#111827] flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}