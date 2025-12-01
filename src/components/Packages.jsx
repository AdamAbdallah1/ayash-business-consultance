export default function Packages() {

  const handlePackageClick = (name) => {
    const text = `Hello, I want the ${name} package.`;
    window.open(`https://wa.me/96181090757?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section data-aos="fade-up" id="packages" className="w-full px-6 py-16 bg-[#111] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Packages</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Monthly */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-800 hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-transform duration-300 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Monthly Package</h3>
          <p className="text-yellow-400 font-semibold text-xl mb-4">QAR 6,000 / month</p>
          <ul className="text-gray-400 space-y-2 mb-6 text-sm">
            <li>• Weekly consulting sessions (4 per month)</li>
            <li>• Full sales strategy</li>
            <li>• Marketing plan + content calendar</li>
            <li>• Customer acquisition strategy</li>
            <li>• Lead generation blueprint</li>
            <li>• Conversion optimization</li>
            <li>• Team training (sales or marketing)</li>
            <li>• KPI tracking dashboard (monthly)</li>
            <li>• Support via email</li>
          </ul>
          <button
            onClick={() => handlePackageClick("Monthly")}
            className="w-full py-3 mt-auto rounded-xl bg-white text-black font-semibold hover:bg-yellow-400 hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Choose Package
          </button>
        </div>

        {/* 3-Month */}
        <div className="relative bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-yellow-500 hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">3-Month Package</h3>
          <p className="text-yellow-400 font-semibold text-xl">QAR 15,000 total</p>
          <p className="text-green-400 text-sm mb-4">(You save QAR 3,000)</p>
          <ul className="text-gray-400 space-y-2 mb-6 text-sm">
            <li>• Everything in Monthly Package</li>
            <li>• Long-term growth roadmap</li>
            <li>• Deep competitor analysis</li>
            <li>• Quarterly performance review</li>
            <li>• Priority session scheduling</li>
          </ul>
          <button
            onClick={() => handlePackageClick("3-Month")}
            className="w-full py-3 mt-auto rounded-xl bg-white text-black font-semibold hover:bg-yellow-400 hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Choose Package
          </button>
        </div>

        {/* 6-Month */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-800 hover:scale-105 hover:shadow-2xl hover:-rotate-2 transition-transform duration-300 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">6-Month Package</h3>
          <p className="text-yellow-400 font-semibold text-xl">QAR 28,500 total</p>
          <p className="text-green-400 text-sm mb-4">(You save QAR 7,500)</p>
          <ul className="text-gray-400 space-y-2 mb-6 text-sm">
            <li>• Everything in the 3-Month Package</li>
            <li>• Full business development plan</li>
            <li>• Market expansion strategy</li>
            <li>• Brand positioning review</li>
            <li>• Team process optimization</li>
            <li>• Monthly in-person meeting (Doha)</li>
          </ul>
          <button
            onClick={() => handlePackageClick("6-Month")}
            className="w-full py-3 mt-auto rounded-xl bg-white text-black font-semibold hover:bg-yellow-400 hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Choose Package
          </button>
        </div>

      </div>
    </section>
  );
}
