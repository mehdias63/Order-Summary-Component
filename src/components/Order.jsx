import React from "react";

export default function Order() {
  return (
    <div className="w-[20.4375rem] h-[35.4375rem] md:w-[28.125rem] md:h-[43.5625rem] bg-white flex justify-center rounded-xl font-red">
      <div className="flex flex-col items-center">
        <img src="../images/illustration-hero.svg" className="rounded-t-xl" />
        <h1 className="text-[1.375rem] md:text-[1.75rem] font-black mt-6 mb-4 md:mt-10">
          Order Summary
        </h1>
        <p className="text-[0.9375rem] md:text-[1rem] font-medium px-9 md:px-12 leading-6 text-[#717FA6] text-center mb-8">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex gap-8 bg-[#F5F7FF] p-3 rounded-lg mb-4 md:px-6">
          <img src="../images/icon-music.svg" />
          <div className="ml-[-1rem] md:ml-[-1rem]">
            <h2 className="font-black text-[0.875rem] md:text-[1rem]">
              Annual Plan
            </h2>
            <p className="font-medium text-[0.875rem] md:text-[1rem]">
              $59.99/year
            </p>
          </div>
          <a
            href="#"
            className="font-bold text-[0.8125rem] md:text-[0.875rem] mt-3 ml-[1rem] underline text-[#382AE1] md:ml-[3rem]"
          >
            Change
          </a>
        </div>
        <button className="bg-[#382AE1] text-white px-14 md:px-[6rem] py-2 md:py-4 md:mt-6 rounded-lg font-black text-[0.9375rem] mb-4 mt-2 hover:opacity-80">
          Proceed to Payment
        </button>
        <button className="font-black text-[0.9375rem] mt-2 md:mt-4 hover:text-[#717FA6]">
          Cancel Order
        </button>
      </div>
    </div>
  );
}
