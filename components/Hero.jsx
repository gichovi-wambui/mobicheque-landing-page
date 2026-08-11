export default function Hero() {
  return (
    <section className="bg-[#F3FFF9] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">


          {/* Left Content */}
          <div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mobicheque-dark leading-tight">

              Deposit Cheques Anytime, Anywhere

              <span className="text-mobicheque-green">
                {" "}Zero Hassle.
              </span>

            </h1>


            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">

              MobiCheque digitizes cheque deposits through secure digital
              submission, intelligent verification, and real-time tracking —
              making cheque processing faster and more convenient.

            </p>


            {/* Contact Us Button */}
            <div className="mt-8">

              <a
                href="#demo"
                className="inline-flex items-center justify-center bg-mobicheque-green text-white px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition shadow-sm"
              >
                Contact Us
              </a>

            </div>


          </div>


          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src="/images/Hero.jpeg"
              alt="MobiCheque mobile application"
              className="w-full max-w-md rounded-2xl"
            />

          </div>


        </div>

      </div>

    </section>
  );
}