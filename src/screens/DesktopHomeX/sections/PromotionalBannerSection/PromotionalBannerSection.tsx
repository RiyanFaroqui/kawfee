import React from "react";

export const PromotionalBannerSection = (): JSX.Element => {
  return (
    <section className="w-full h-[35px] bg-[#ff8d28] flex items-center justify-center sticky top-[115px] z-40">
      <div className="flex items-center justify-center [font-family:'SF_Pro-Bold',Helvetica] font-normal text-black text-2xl tracking-[-0.43px] leading-5">
        <span className="font-bold tracking-[-0.10px]">
          Student Exclusive!{" "}
        </span>
        <span className="[font-family:'SF_Pro-Regular',Helvetica] tracking-[-0.10px]">
          Coffee + Muffin for $4.95
        </span>
      </div>
    </section>
  );
};
