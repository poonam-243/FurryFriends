import React from 'react'
import { useState } from 'react';

function Pet_donation() {
  const [images, setImages] = useState([]);

  const handleImageDrop = (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    const preview = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...preview]);
  };

  const handleImageSelect = (e) => {
    const files = [...e.target.files];
    const preview = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...preview]);
  };

  return (
    <>
       <div className="min-h-screen bg-[#F4E1A1] flex flex-col items-center py-10 px-4">

      {/* Header Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-[#6B3F20]">Rehome a Pet</h1>
        <p className="text-[#7A5331] mt-1">
          Help us find a loving new family for your pet. Fill the details below.
        </p>

        {/* Step Bar */}
        <div className="mt-4 h-2 w-full bg-[#E0BF7E] rounded-full">
          <div className="h-2 w-1/4 bg-[#8B5E34] rounded-full"></div>
        </div>
      </div>


      {/* Form Card */}
      <div className="w-full max-w-4xl bg-[#FFF3D2] mt-6 p-6 rounded-2xl shadow-lg border border-[#D1A45A]">

        {/* Section Title */}
        <h2 className="text-xl font-semibold text-[#6B3F20] mb-3">
          Pet Details
        </h2>


        {/* Pet Type Buttons */}
       <div className="flex flex-col mb-3">
  <label className="text-[#6B3F20] font-semibold mb-1">
    What kind of pet are you rehoming?
  </label>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

    {/* Dog */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Dog" className="accent-[#8B5E34]" />
      <span>Dog</span>
    </label>

    {/* Cat */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Cat" className="accent-[#8B5E34]" />
      <span>Cat</span>
    </label>

    {/* Rabbit */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Rabbit" className="accent-[#8B5E34]" />
      <span>Rabbit</span>
    </label>

    {/* Bird */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Bird" className="accent-[#8B5E34]" />
      <span>Bird</span>
    </label>

  </div>
</div>


        {/* Fields Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  {/* Pet Name */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Pet Name</label>
    <input className="field" placeholder="Enter pet name" />
  </div>

  {/* Breed */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Breed</label>
    <input className="field" placeholder="Enter breed" />
  </div>

  {/* Age */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Age</label>
    <input className="field" placeholder="Enter age" />
  </div>


  {/* Gender — Radio */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Gender</label>

    <div className="flex gap-4 bg-[#FAEDC8] px-3 py-2 rounded-2xl border border-[#D1A45A]">
      <label className="flex items-center gap-2 text-[#6B3F20]">
        <input type="radio" name="gender" className="accent-[#8B5E34]" />
        Male
      </label>

      <label className="flex items-center gap-2 text-[#6B3F20]">
        <input type="radio" name="gender" className="accent-[#8B5E34]" />
        Female
      </label>
    </div>
  </div>


  {/* Size — Radio */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Size</label>

    <div className="flex gap-4 bg-[#FAEDC8] px-3 py-2 rounded-2xl border border-[#D1A45A]">
      <label className="flex items-center gap-2 text-[#6B3F20]">
        <input type="radio" name="size" className="accent-[#8B5E34]" />
        Small
      </label>

      <label className="flex items-center gap-2 text-[#6B3F20]">
        <input type="radio" name="size" className="accent-[#8B5E34]" />
        Medium
      </label>

      <label className="flex items-center gap-2 text-[#6B3F20]">
        <input type="radio" name="size" className="accent-[#8B5E34]" />
        Large
      </label>
    </div>
  </div>


  {/* Color */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Color</label>
    <input className="field" placeholder="Enter color" />
  </div>

</div>

        {/* Health Section */}
        <div className='text-xl font-semibold text-[#6B3F20] mt-6 mb-2'>Describe Your Pet </div>
        <textarea
          className="field"
          rows="3" 
          placeholder="Describe your pet's behavior and habits..."
        ></textarea>


        {/* Photos Section */}
        <h2 className="text-xl font-semibold text-[#6B3F20] mt-6 mb-2">
          Photos
        </h2>

        <label
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleImageDrop}
      
        >
    

          <span className="text-sm text-[#7A5331] border-2 border-dashed rounded-2xl p-2 text-center cursor-pointer">(or click to upload)</span>

          <input type="file" multiple className="hidden" onChange={handleImageSelect} />
        </label>

        {/* Preview */}
        <div className="flex gap-3 mt-3 flex-wrap">
          {images.map((img, i) => (
            <img key={i} src={img} alt="pet" className="w-20 h-20 rounded-xl border object-cover" />
          ))}
        </div> 


        {/* Contact Info */}
        <h2 className="text-xl font-semibold text-[#6B3F20] mt-6 mb-2">
          Your Contact Info
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="field" placeholder="Full Name" />
          <input className="field" placeholder="Email Address" />
          <input className="field" placeholder="Phone Number" />
          <input className="field" placeholder="City / Location" />
        </div>


        {/* Button */}
        <button className="submitBtn mt-6">
          Submit Pet Profile →
        </button>
      </div>
    </div>
    </>
  )
}

export default Pet_donation