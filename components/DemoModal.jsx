"use client";

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      
      {/* Modal */}
      <div
        className="bg-white rounded-3xl p-8 w-full max-w-lg mx-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold text-mobicheque-dark">
            Request a Demo
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
            aria-label="Close demo request"
          >
            ✕
          </button>

        </div>


        {/* Introduction */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Interested in bringing digital cheque processing to your
          organization? Fill in your details and our team will get in touch.
        </p>


        {/* Form */}
        <form className="mt-6 space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-mobicheque-green focus:ring-2 focus:ring-mobicheque-green/20"
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-mobicheque-green focus:ring-2 focus:ring-mobicheque-green/20"
            />
          </div>


          {/* Organization */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization
            </label>

            <input
              type="text"
              placeholder="Bank, SACCO, business, etc."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-mobicheque-green focus:ring-2 focus:ring-mobicheque-green/20"
            />
          </div>


          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-mobicheque-green text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Request a Demo
          </button>

        </form>

      </div>

    </div>
  );
}