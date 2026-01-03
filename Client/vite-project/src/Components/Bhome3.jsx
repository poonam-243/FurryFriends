import React from 'react'

function Bhome3() {
  return (
    <>
      <section className="bg-[#faf7f3] py-20 px-4">
      <div className="max-w-xl mx-auto text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-500 text-2xl">✉️</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Join Our Community
        </h2>

        {/* Sub text */}
        <p className="text-gray-500 mb-8">
          Get updates on new pets, happy tails, and shelter news.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-md transition">
            Subscribe
          </button>
        </div>

      </div>
    </section>
    </>
  )
}

export default Bhome3
