export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Scan Your Cheque",
      description:
        "Capture your cheque securely using your mobile device and submit it digitally through MobiCheque.",
    },
    {
      number: "02",
      title: "Select Your Bank",
      description:
        "Choose the bank or financial institution you want to process your cheque.",
    },
    {
      number: "03",
      title: "Submit Your Cheque",
      description:
        "Review your cheque details and submit your transaction securely for processing.",
    },
    {
      number: "04",
      title: "Track Your Cheque",
      description:
        "Follow your cheque in real time and receive updates as it moves through processing, including when it is cleared or rejected.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#F3FFF9] py-24"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-mobicheque-green text-3xl font-bold uppercase tracking-wide">
            How It Works
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-mobicheque-dark">
            Cheque Processing Made Simple
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Submit your cheque digitally, choose your preferred bank, and
            follow its progress every step of the way.
          </p>

        </div>



        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">


          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >


              {/* Step Number */}
              <div className="w-12 h-12 rounded-full bg-mobicheque-green text-white flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>


              {/* Step Title */}
              <h3 className="mt-6 text-xl font-semibold text-mobicheque-dark">
                {step.title}
              </h3>


              {/* Step Description */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {step.description}
              </p>


              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-full w-8 border-t-2 border-mobicheque-green/30"></div>
              )}


            </div>
          ))}


        </div>


      </div>

    </section>
  );
}