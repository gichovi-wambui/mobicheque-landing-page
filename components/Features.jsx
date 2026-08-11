export default function Features() {
  const features = [
    {
      title: "Smart Cheque Scanning",
      description:
        "Digitize cheque submissions through an intelligent scanning experience designed for speed and accuracy.",
      icon: "📄",
    },
    {
      title: "OCR Data Extraction",
      description:
        "Automatically extract key cheque information including amount, bank details, cheque number, and dates.",
      icon: "🔍",
    },
    {
      title: "Fraud Detection",
      description:
        "Identify suspicious cheque activity through intelligent verification and security checks.",
      icon: "🛡️",
    },
    {
      title: "Duplicate Detection",
      description:
        "Prevent repeated cheque submissions using digital verification mechanisms.",
      icon: "🔐",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Provide visibility throughout the cheque journey with live processing status updates.",
      icon: "📊",
    },
    {
      title: "Digital Records",
      description:
        "Maintain organized digital cheque histories for easier access and improved management.",
      icon: "📁",
    },
  ];


  return (
    <section id="features" className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-mobicheque-green"> 
            Built With Intelligent Financial Technology
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            MobiCheque combines digital processing, intelligent verification,
            and secure tracking to modernize cheque management.
          </p>

        </div>



        {/* Feature Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">


          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#F3FFF9] rounded-2xl p-8 hover:shadow-lg transition"
            >


              {/* Icon */}
              <div className="text-4xl">
                {feature.icon}
              </div>


              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-mobicheque-dark">
                {feature.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>


            </div>
          ))}


        </div>


      </div>

    </section>
  );
}