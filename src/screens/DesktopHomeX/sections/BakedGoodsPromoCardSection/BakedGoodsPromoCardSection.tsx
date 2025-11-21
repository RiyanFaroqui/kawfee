import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BakedGoodsPromoCardSection = (): JSX.Element => {
  return (
    <section className="flex items-center w-full">
      <Card className="flex flex-row items-stretch overflow-hidden rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0">
        <CardContent className="bg-[#fdf5de] w-[724px] h-[379px] flex flex-col items-center justify-center gap-6 p-0">
          <div className="w-[367px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-center leading-normal">
            <span className="text-black">
              A perfect{" "}
            </span>
            <span className="text-[#ff8d28]">pairing</span>
            <span className="text-black">
              !<br />
              Baked goods that taste even better
              <br />
              with your favorite latte
              <br />
              Try our{" "}
            </span>
            <span className="text-[#ff8d28]">freshly baked</span>
            <span className="text-black">
              {" "}
              goods!
            </span>
          </div>

          <Button className="bg-[#ff8d28] hover:bg-[#ff8d28]/90 text-white rounded-[1000px] px-2.5 py-1 h-auto font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)]">
            Order Now
          </Button>
        </CardContent>

        <img
          className="w-[568px] h-[379px] object-cover"
          alt="Baked Goods"
          src="/cbb44b74-98a1-40db-bf9d-4ea3fb0cb225-1.png"
        />
      </Card>
    </section>
  );
};
