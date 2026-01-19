import React, { useState } from "react";

export default function Packages() {
  const handlePackageClick = (name) => {
    const text = `Hello, I want the ${name} package.`;
    window.open(`https://wa.me/97439995533?text=${encodeURIComponent(text)}`, "_blank");
  };

  const growthCoreFeatures = [
    "Weekly strategy sessions",
    "Documented sales & marketing plans",
    "Lead generation & conversion planning",
    "Monthly team training workshop",
    "KPI report",
    "Email support (24-hour response)"
  ];

  const scaleSystemizeFeatures = [
    "Long-term growth roadmap",
    "Competitor analysis report",
    "Quarterly performance review",
    "Priority scheduling"
  ];

  const transformLeadFeatures = [
    "Business development plan",
    "Market expansion strategy",
    "Brand positioning audit",
    "Team process optimization",
    "Monthly in-person strategic review (Doha)"
  ];

  const packages = [
    {
      title: "Diagnostic & Action Plan",
      price: "QAR 3,000 (One-Time)",
      desc: "For the founder who needs clarity and a starting point.",
      uniqueFeatures: [
        "Business performance & market analysis",
        "Findings report",
        "90-minute strategy session with a prioritized action plan"
      ],
      stackedFeatures: [],
      btnColor: "#B82E33",
      highlight: true
    },
    {
      title: "Growth & Core",
      price: "QAR 9,000 / month",
      desc: "For the business ready to build a repeatable growth system.",
      uniqueFeatures: growthCoreFeatures,
      stackedFeatures: [],
      btnColor: "#B82E33"
    },
    {
      title: "Scale & Systemize",
      price: "QAR 15,000 / month",
      desc: "For the team committed to scaling with structure and insight.",
      uniqueFeatures: scaleSystemizeFeatures,
      stackedFeatures: growthCoreFeatures,
      btnColor: "#B82E33",
      badge: "Most Popular"
    },
    {
      title: "Transform & Lead",
      price: "QAR 25,000 / month",
      desc: "For the leader transforming their business into a market leader.",
      uniqueFeatures: transformLeadFeatures,
      stackedFeatures: [...growthCoreFeatures, ...scaleSystemizeFeatures],
      btnColor: "#da3b40"
    }
  ];

  return (
    <section id="packages" className="w-full px-6 py-24 text-black">
      <h2 className="text-3xl font-bold text-center mb-3">Our Packages</h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-sm">
        Choose the package that fits your business growth stage.
      </p>

      <div className="max-w-md mx-auto mb-12">
        {packages.filter((p) => p.highlight).map((pkg) => (
          <PackageCard key={pkg.title} pkg={pkg} handlePackageClick={handlePackageClick} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {packages.filter((p) => !p.highlight).map((pkg) => (
          <PackageCard key={pkg.title} pkg={pkg} handlePackageClick={handlePackageClick} />
        ))}
      </div>
    </section>
  );
}

function PackageCard({ pkg, handlePackageClick }) {
  const [showAll, setShowAll] = useState(false);

  const featuresToShow = showAll
    ? [...(pkg.uniqueFeatures || []), ...(pkg.stackedFeatures || [])]
    : pkg.uniqueFeatures || [];

  return (
    <div
      className={`${
        pkg.highlight
          ? "bg-linear-to-br from-[#B82E33]/50 via-white/10 to-[#3B82F6]/50 p-6"
          : "bg-white/10 p-5"
      } backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-lg self-start`}
    >
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B82E33] text-white font-semibold px-3 py-1 rounded-full text-sm">
          {pkg.badge}
        </div>
      )}

      <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
      <p className="text-[#B82E33] font-semibold text-[16px] mb-2">{pkg.price}</p>
      <p className="text-gray-700 mb-4 text-sm">{pkg.desc}</p>

      <ul
        className={`text-gray-700 space-y-1 mb-2 text-sm transition-all duration-300 ${
          showAll ? "max-h-96 overflow-y-auto" : "max-h-36 overflow-hidden"
        }`}
      >
        {featuresToShow.map((feat) => (
          <li key={feat} className="flex items-start">
            <span className="text-[#B82E33] font-bold mr-2">•</span>
            {feat}
          </li>
        ))}
      </ul>

      {pkg.stackedFeatures && pkg.stackedFeatures.length > 0 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-sm text-[#B82E33] font-semibold mb-4 hover:underline self-start"
        >
          {showAll ? "Show Less" : `Show More`}
        </button>
      )}

      <button
        onClick={() => handlePackageClick(pkg.title)}
        className="w-full py-2.5 text-white rounded-2xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
        style={{ backgroundColor: pkg.btnColor }}
      >
        {pkg.highlight ? "Book Your Session" : "Choose Package"}
      </button>
    </div>
  );
}
