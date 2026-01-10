import { motion } from "framer-motion";
import crm1 from "../assets/crm1.jpeg";
import crm2 from "../assets/crm2.jpeg";
import crm3 from "../assets/crm3.jpeg";

const features = [
  {
    image: crm1,
    title: "Visual Pipeline",
    description: "Track deals visually and never miss an opportunity."
  },
  {
    image: crm2,
    title: "Advanced Analytics",
    description: "Gain deep insights into your sales performance."
  },
  {
    image: crm3,
    title: "Seamless Automation",
    description: "Automate routine tasks and focus on closing deals."
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
              className="border border-gray-700 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-300 bg-[#111827] overflow-hidden group flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center flex flex-col flex-grow">
                <h4 className="font-bold text-xl mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}