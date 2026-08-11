export default function About() {
  return (
    <section id="about" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">


        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-mobicheque-green text-3xl font-bold uppercase tracking-wide">
            About Us
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-mobicheque-dark leading-tight">
            From Traditional Transactions to a Digital Future
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Financial services are evolving toward faster, more connected
            digital experiences. We believe cheque transactions should evolve
            with them.
          </p>

        </div>



        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">


          {/* Left - Image */}
          <div className="flex justify-center">

            <img
              src="/images/About.jpeg"
              alt="Transition from traditional cheque processing to digital financial technology"
              className="w-full max-w-xl rounded-3xl shadow-lg"
            />

          </div>



          {/* Right - Content */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-mobicheque-dark leading-tight">
              Bringing Cheque Transactions Into the Digital Age
            </h3>


            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              For years, cheque transactions have relied on physical processes,
              paperwork, and traditional workflows. As the financial world
              continues to move toward digital experiences, there is an
              opportunity to bring the same evolution to cheque processing.
            </p>


            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              MobiCheque is built around that transition — helping connect
              established cheque-based transactions with modern digital
              financial infrastructure.
            </p>


            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Our vision is to make cheque transactions more digitally
              accessible, connected, and transparent while preserving the
              role cheques continue to play for businesses, institutions,
              and customers.
            </p>



            {/* Vision Highlight */}
            <div className="mt-8 border-l-4 border-mobicheque-green pl-6">

              <p className="text-sm font-semibold uppercase tracking-wide text-mobicheque-green">
                Our Vision
              </p>

              <p className="mt-2 text-xl font-semibold text-mobicheque-dark">
                Traditional foundation. Digital future.
              </p>

            </div>


          </div>


        </div>


      </div>

    </section>
  );
}