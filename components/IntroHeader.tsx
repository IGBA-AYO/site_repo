import Image from 'next/image';
import React from 'react'

function IntroHeader() {
  return (
    <div
      id="hero"
      className="mx-auto flex flex-col md:flex-row gap-2 md:gap-12 justify-center items-center pt-20 sm:pt-32 px-4"
    >
      <div>
        <Image
          src="/logo1.png"
          alt="logo"
          className="object-cover w-44 md:w-96"
          width={40}
          height={40}
        />
      </div>
      <div className="xs:mt-10">
        <div className="text-center  w-44 mx-auto md:mx-0 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Ìgbà Àyó App™
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 md:max-w-[30rem] text-center md:text-left">
          One App. Endless Adventures.™
        </h2>
      </div>
    </div>
  );
}

export default IntroHeader