export default function Packages() {
  const handlePackageClick = (name) => {
    const text = `Hello, I want the ${name} package.`;
    window.open(`https://wa.me/96181090757?text=${encodeURIComponent(text)}`, "_blank");
  };

  const cardBase =
    "bg-black/30 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col hover:scale-[1.03] hover:shadow-2xl transition-all min-w-[180px] flex-shrink-0";

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
        "Documented sales & marketing plans (updated quarterly/monthly)",
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
    <section id="packages" data-aos="fade-up" className="w-full px-6 py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-14">Our Packages</h2>

      <div className="flex flex-row gap-6 justify-center overflow-x-auto snap-x snap-mandatory max-w-7xl mx-auto py-4">
  {packages.map((pkg) => (
    <div
      key={pkg.title}
      className={`${cardBase} snap-center w-[300px] relative`}
    >
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B82E33] text-black font-bold px-3 py-1 rounded-full text-sm z-10">
          {pkg.badge}
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
      <p className="text-[#B82E33] font-semibold text-xl mb-2">{pkg.price}</p>
      <p className="text-gray-300 mb-4 text-sm">{pkg.desc}</p>

      <ul className="text-gray-300 space-y-2 mb-6 text-sm">
        {pkg.features.map((feat) => (
          <li key={feat}>• {feat}</li>
        ))}
      </ul>

      <button
        onClick={() => handlePackageClick(pkg.title)}
        className="w-full py-3 mt-auto text-white rounded-xl font-semibold shadow-md transition hover:bg-[#f5787d]"
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
