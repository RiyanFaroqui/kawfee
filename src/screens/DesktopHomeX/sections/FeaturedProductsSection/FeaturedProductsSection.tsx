import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeaturedProductsSection = (): JSX.Element => {
  return (
    <section className="flex items-center w-full">
      <img
        className="w-[564px] h-[376px] rounded-[20px_0px_0px_20px] object-cover"
        alt="Pumpkin Spice Latte"
        src="/image-9.png"
      />

      <div className="flex flex-col items-center justify-center w-[728px] h-[376px] bg-black rounded-[0px_20px_20px_0px] shadow-[0px_4px_4px_#00000040] px-8">
        <div className="w-[346px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-center mb-6">
          <span className="text-white">
            It&apos;s pumpkin spice season!
            <br />
            Try our{" "}
          </span>
          <span className="text-[#ff8d28]">new</span>
          <span className="text-white">
            {" "}
            Pumpkin Spice Latte
            <br />
            Iced or Hot
            <br />
            Here for a{" "}
          </span>
          <span className="text-[#ff8d28]">limited time</span>
          <span className="text-white"> only!</span>
        </div>

        <Button className="bg-[#ff8d28] hover:bg-[#ff8d28]/90 text-white rounded-[1000px] px-2.5 py-1 h-auto font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)]">
          Order Now
        </Button>
      </div>
    </section>
  );
};
