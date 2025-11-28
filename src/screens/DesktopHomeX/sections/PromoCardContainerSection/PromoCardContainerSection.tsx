import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PromoCardContainerSection = (): JSX.Element => {
  return (
    <section className="flex items-center w-full">
      <Card className="flex flex-row items-stretch overflow-hidden rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0">
        <img
          className="w-[568px] h-[379px] object-cover"
          alt="Refreshersblog"
          src="/refreshersblog-68fd8a8a-2270-49a6-a5a1-73adc933b10a-1000x-1.png"
        />

        <CardContent className="bg-[#fdf5de] w-[724px] h-[379px] flex flex-col items-center justify-center gap-6 p-0">
          <div className="w-[367px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-center leading-normal">
            <span className="text-black">
              Reminisce summer!
              <br />
              Try our{" "}
            </span>
            <span className="text-[#ff8d28]">rejuvenating</span>
            <span className="text-black">
              {" "}
              Fruit Refreshers
              <br />
              Available all{" "}
            </span>
            <span className="text-[#ff8d28]">year round</span>
            <span className="text-black">!</span>
          </div>

          <Button className="bg-[#ff8d28] hover:bg-[#ff8d28]/90 text-white rounded-[1000px] px-2.5 py-1 h-auto font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)]">
            Order Now
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
