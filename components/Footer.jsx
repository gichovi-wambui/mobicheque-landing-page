export default function Footer() {
  return (
    <footer className="bg-[#063D2C] text-white py-16">

      <div className="max-w-7xl mx-auto px-6">


        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand */}
          <div>

            <h3 className="text-2xl font-bold text-white">
              MobiCheque
            </h3>


            <p className="mt-4 text-gray-300 leading-relaxed">
              Bringing cheque transactions into the digital age through
              secure, connected, and convenient digital experiences.
            </p>

          </div>



          {/* Platform */}
          <div>

            <h4 className="font-semibold text-lg">
              Platform
            </h4>


            <ul className="mt-4 space-y-3">


              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>


              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white transition"
                >
                  How It Works
                </a>
              </li>


              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition"
                >
                  Features
                </a>
              </li>


              <li>
                <a
                  href="#solutions"
                  className="text-gray-300 hover:text-white transition"
                >
                  Solutions
                </a>
              </li>


              <li>
                <a
                  href="#security"
                  className="text-gray-300 hover:text-white transition"
                >
                  Security
                </a>
              </li>


            </ul>

          </div>



          {/* Company */}
          <div>

            <h4 className="font-semibold text-lg">
              Company
            </h4>


            <ul className="mt-4 space-y-3">


              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </a>
              </li>


              <li>
                <a
                  href="mailto:mobicheque@gmail.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>
              </li>


            </ul>

          </div>



          {/* Get Started */}
          <div>

            <h4 className="font-semibold text-lg">
              Get Started
            </h4>


            <p className="mt-4 text-gray-300 leading-relaxed">
              Interested in bringing digital cheque processing to your
              organization?
            </p>


            <a
              href="mailto:mobicheque@gmail.com"
              className="block mt-4 text-gray-300 hover:text-white transition"
            >
              mobicheque@gmail.com
            </a>

          </div>


        </div>



        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">


          <p>
            © {new Date().getFullYear()} MobiCheque. All rights reserved.
          </p>


          <div className="flex gap-6">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>


            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>

          </div>


        </div>


      </div>

    </footer>
  );
}