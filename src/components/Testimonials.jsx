import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Crivient has completely transformed how I manage my clients. Can't imagine working without it!",
    name: "Oberon Shaw",
    role: "Head of Talent Acquisition, North America",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The automation features save me hours every week. It's an indispensable tool for our team.",
    name: "Oberon Shaw",
    role: "Head of Design",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "A game changer for our sales pipeline. The visualize tracking is simply the best.",
    name: "Oberon Shaw",
    role: "Sales Director",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#043873]">What Our Clients Say</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow">
              <Quote size={40} className="text-[#4F9CF9] mb-6" />
              <p className="text-gray-600 mb-8 text-lg italic leading-relaxed flex-grow">"{item.quote}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[#043873]">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}