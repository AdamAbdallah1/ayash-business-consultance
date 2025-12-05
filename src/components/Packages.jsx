export default function Packages() {
  const handlePackageClick = (name) => {
    const text = `Hello, I want the ${name} package.`;
    window.open(`https://wa.me/96181090757?text=${encodeURIComponent(text)}`, "_blank");
  };

  const packages = [
    {
      title: "Diagnostic & Action Plan",
      price: "QAR 3,000 (One-Time)",
      desc: "For businesses that need a clear roadmap first.",
      features: [
        "Business performance & market analysis",
        "Findings report",
        "90-minute strategy session with a prioritized action plan"
      ],
      btnColor: "#B82E33"
    },
    {
      title: "Core Growth Engine",
      price: "QAR 6,000 / month",
      desc: "Continuous strategy and execution support.",
      features: [
        "Weekly strategy sessions (4/month)",
        "Documented sales & marketing plans",
        "Lead generation & conversion planning",
        "Monthly team training workshop",
        "Live KPI dashboard",
        "Email support (24-hour response)"
      ],
      btnColor: "#B82E33"
    },
    {
      title: "Scale & Systemize",
      price: "QAR 15,000 total",
      desc: "Includes Core Growth Engine, plus:",
      features: [
        "Long-term growth roadmap",
        "Competitor analysis report",
        "Quarterly performance review",
        "Priority scheduling"
      ],
      btnColor: "#B82E33",
      badge: "Most Popular"
    },
    {
      title: "Transform & Lead",
      price: "QAR 30,000 total",
      desc: "Includes Scale & Systemize, plus:",
      features: [
        "Business development plan",
        "Market expansion strategy",
        "Brand positioning audit",
        "Team process optimization",
        "Monthly in-person strategic review (Doha)"
      ],
      btnColor: "#da3b40"
    }
  ];

  return (
    <section id="packages" data-aos="fade-up" className="w-full px-6 py-24 text-black">
      
      <h2 className="text-3xl font-bold text-center mb-3">Our Packages</h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-sm">
        Choose the package that fits your business growth stage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
  {packages.map((pkg) => (
      <div
        key={pkg.title}
        className="
          bg-white/10 
          backdrop-blur-xl 
          rounded-2xl 
          shadow-2xl 
          hover:shadow-[#B82E33]/40
          p-5
          flex 
          flex-col 
          relative 
          transition-all 
          duration-300
          hover:-translate-y-2
          min-h-80
        "
      >
        {pkg.badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B82E33] text-white font-semibold px-3 py-1 rounded-full text-sm">
            {pkg.badge}
          </div>
        )}

        <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
        <p className="text-[#B82E33] font-semibold text-[16px] mb-2">{pkg.price}</p>
        <p className="text-gray-700 mb-4 text-sm">{pkg.desc}</p>

        <ul className="text-gray-700 space-y-1 mb-6 text-sm">
          {pkg.features.map((feat) => (
            <li key={feat} className="flex items-start">
              <span className="text-[#B82E33] font-bold mr-2">•</span>
              {feat}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handlePackageClick(pkg.title)}
          className="w-full py-2.5 mt-auto text-white rounded-2xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
          style={{ backgroundColor: pkg.btnColor }}
        >
          Choose Package
        </button>
      </div>
    ))}
  </div>

    </section>
  );
}
