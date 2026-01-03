import React from 'react'

function Bhome2() {
  return (
    <>
     <section className="bg-[#fff6ee] min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#ffe4c7] flex items-center justify-center">
            <span className="text-2xl">💛</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Mission is Simple: Love & Care
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-8">
          We believe every pet deserves a loving home. That’s why adoption is
          100% free. Our shelter is supported entirely by your generous
          donations and purchases from our shop.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-md transition">
            Donate Now
          </button>

          <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium shadow-sm transition">
            Learn More
          </button>
        </div>
      </div>
    </section> 
    </>
  )
}

export default Bhome2
