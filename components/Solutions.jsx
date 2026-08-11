export default function Solutions() {
  const solutions = [
    {
      title: "Banks",
      description:
        "Bring cheque services closer to your digital banking experience with streamlined submission, processing visibility, and a more convenient customer journey.",
      icon: "🏦",
    },
    {
      title: "SACCOs",
      description:
        "Give members a more convenient way to submit and track cheques while supporting modern, digitally connected financial services.",
      icon: "🤝",
    },
    {
      title: "Businesses",
      description:
        "Simplify cheque management with digital submission, transaction visibility, and a more organized way to keep track of cheque activity.",
      icon: "🏢",
    },
    {
      title: "Individuals",
      description:
        "Submit cheques digitally, select your preferred financial institution, and stay informed about your cheque's progress from submission to final status.",
      icon: "👤",
    },
  ];

  return (
    <section
      id="solutions"
      className="bg-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-mobicheque-green text-3xl font-bold uppercase tracking-wide">
            Solutions
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-mobicheque-dark leading-tight">
            Built For Everyone In The Cheque Ecosystem
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Whether you are a financial institution, a business, or an
            individual, MobiCheque brings cheque transactions into a more
            connected digital experience.
          </p>

        </div>



        {/* Solution Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-[#F3FFF9] rounded-3xl p-8 border border-transparent hover:border-mobicheque-green/20 hover:shadow-lg transition duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm">
                {solution.icon}
              </div>


              {/* Title */}
              <h3 className="mt-7 text-2xl font-bold text-mobicheque-dark">
                {solution.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {solution.description}
              </p>

            </div>
          ))}


        </div>



        {/* Bottom Statement */}
        <div className="mt-16 text-center">

          <p className="text-xl md:text-2xl font-semibold text-mobicheque-dark">
            One digital experience.
            <span className="text-mobicheque-green">
              {" "}Connected across the cheque ecosystem.
            </span>
          </p>

        </div>


      </div>

    </section>
  );
}