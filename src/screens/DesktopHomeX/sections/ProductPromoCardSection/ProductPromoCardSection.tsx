import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProductPromoCardSection = (): JSX.Element => {
  return (
    <section className="flex items-center w-full">
      <Card className="flex items-center overflow-hidden rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0">
        <CardContent className="flex items-center p-0 w-full">
          <div className="bg-[#fcf5de] flex flex-col items-center justify-center px-12 py-16 min-w-[724px] h-[379px]">
            <div className="w-[346px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-center leading-normal mb-6">
              <span className="text-black">
                A fan favourite!
                <br />
                Try our{" "}
              </span>
              <span className="text-[#ff8d28]">classic</span>
              <span className="text-black">
                {" "}
                Matcha Latte
                <br />
                Now with extra{" "}
              </span>
              <span className="text-[#ff8d28]">protein</span>
              <span className="text-black">!</span>
            </div>
            <Button className="bg-[#ff8d28] hover:bg-[#ff8d28]/90 text-white rounded-full px-4 py-2 h-auto font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)]">
              Order Now
            </Button>
          </div>
          <img
            className="w-[568px] h-[379px] object-cover"
            alt="Matcha Latte"
            src="/image-10.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
