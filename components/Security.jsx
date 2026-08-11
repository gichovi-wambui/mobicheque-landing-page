export default function Security() {

  const securityFeatures = [
    {
      title: "Secure Data Processing",
      description:
        "Cheque information is handled through secure digital workflows designed to protect sensitive financial data.",
      icon: "🔒",
    },
    {
      title: "Fraud Monitoring",
      description:
        "Intelligent verification checks help identify suspicious cheque activity and potential risks.",
      icon: "🛡️",
    },
    {
      title: "Duplicate Prevention",
      description:
        "Digital verification mechanisms help prevent repeated cheque submissions and improve transaction integrity.",
      icon: "✓",
    },
    {
      title: "Transaction Visibility",
      description:
        "Maintain clear records and track cheque processing stages for improved accountability.",
      icon: "📊",
    },
  ];


  return (
    <section id="security"className="bg-[#F3FFF9] py-20">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-mobicheque-green">
            Built With Security At The Core
          </h2>


          <p className="mt-5 text-lg text-gray-600">
            MobiCheque combines digital verification, intelligent monitoring,
            and secure processing to support reliable cheque management.
          </p>

        </div>



        {/* Security Cards */}
        <div className="mt-14 grid md:grid-cols-4 gap-8">


          {securityFeatures.map((item) => (
            <div
              key={item.title}
              className="bg-[#F3FFF9] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >


              {/* Icon */}
              <div className="text-4xl">
                {item.icon}
              </div>


              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-mobicheque-dark">
                {item.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.description}
              </p>


            </div>
          ))}


        </div>


      </div>

    </section>
  );
}