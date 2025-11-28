import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex items-center relative w-full rounded-[20px_0px_0px_20px] shadow-[0px_4px_4px_#00000040]">
      <div className="bg-[#fdf5de] rounded-[20px_0px_0px_20px] flex items-center justify-center flex-1 min-h-[379px] relative">
        <div className="flex flex-col items-center gap-6 px-8 py-12 max-w-[367px]">
          <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-center leading-normal">
            <span className="text-black">A perfect </span>
            <span className="text-[#ff8d28]">pairing</span>
            <span className="text-black">
              !<br />
              Baked goods that taste even better with your favorite latte
              <br />
              Try our{" "}
            </span>
            <span className="text-[#ff8d28]">freshly baked</span>
            <span className="text-black"> goods!</span>
          </p>

          <Button className="bg-[#ff8d28] hover:bg-[#ff8d28]/90 text-white rounded-full px-4 py-2 font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)]">
            Order Now
          </Button>
        </div>
      </div>

      <img
        className="w-[568px] h-[379px] rounded-[0px_20px_20px_0px] object-cover flex-shrink-0"
        alt="Cbbb a db"
        src="/cbb44b74-98a1-40db-bf9d-4ea3fb0cb225-1.png"
      />
    </section>
  );
};
