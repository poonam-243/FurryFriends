import React from 'react'

function Bhomef() {
  return (
    <>
     <footer className="bg-white border-t py-20 px-8 h-[50vh]"  >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-400 text-[35px]">🐾</span>
            <h2 className="text-[38px] font-extrabold text-gray-800">PetHome</h2>
          </div>
          <p className="text-gray-[35px] text-sm leading-relaxed">
            Connecting loving families with pets in need since 2023.
            Non-profit organization.
          </p>
        </div>
        <div>
          <h3 className="text-gray-[35px] font-bold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-[35px] text-lg">
            <li className="hover:text-orange-400 cursor-pointer">Adopt</li>
            <li className="hover:text-orange-400 cursor-pointer">Donate</li>
            <li className="hover:text-orange-400 cursor-pointer">Success Stories</li>
            <li className="hover:text-orange-400 cursor-pointer">Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-[35px] font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-[35px] text-sm">
            <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Volunteer</li>
            <li className="hover:text-orange-400 cursor-pointer">FAQs</li>
            <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-[35px] font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 cursor-pointer">
              <span className="text-gray-600">f</span>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 cursor-pointer">
              <span className="text-gray-600">in</span>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 cursor-pointer">
              <span className="text-gray-600">ig</span>
            </div>
          </div>
        </div>

      </div>
    </footer> 
    </>
  )
}

export default Bhomef
