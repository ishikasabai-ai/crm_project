import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard", "Connect primary Google Calendar", "Add due dates, reminders, and notifications to your tasks"]
  },
  {
    name: "Personal",
    price: "$11.99",
    description: "Keep home and family on track",
    isPopular: true,
    features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard", "Connect primary Google Calendar", "Add due dates, reminders, and notifications to your tasks"]
  },
  {
    name: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard", "Connect primary Google Calendar", "Add due dates, reminders, and notifications to your tasks"]
  }
];

export default function Pricing() {
  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-[#043873]">Choose Your Plan</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Crivient has the right plan for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 relative flex flex-col ${
                plan.isPopular
                  ? "bg-[#043873] text-white shadow-2xl scale-105 z-10 border-[#043873]"
                  : "bg-white text-gray-900 border-yellow-400 hover:shadow-xl"
              }`}
            >
              <h4 className="font-semibold text-lg mb-2">{plan.name}</h4>
              <p className={`text-3xl font-bold mb-4 ${plan.isPopular ? "text-white" : "text-[#043873]"}`}>
                {plan.price}
              </p>
              <p className={`mb-8 ${plan.isPopular ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className={`mt-0.5 flex-shrink-0 ${plan.isPopular ? "text-[#4F9CF9]" : "text-[#043873]"}`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.isPopular
                    ? "bg-[#4F9CF9] text-[#043873] hover:bg-[#3a85e0]"
                    : "border border-yellow-400 text-[#043873] hover:bg-yellow-50"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}