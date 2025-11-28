import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const RewardsSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-[1292px] px-4 flex flex-col gap-11 py-11">
          <Card className="flex flex-row items-stretch overflow-hidden rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0">
            <img
              className="w-[568px] h-[379px] object-cover"
              alt="Rewards Program"
              src="/image-9.png"
            />

            <CardContent className="bg-[#fdf5de] w-[724px] h-[379px] flex flex-col items-center justify-center gap-6 p-0">
              <div className="w-[367px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-center leading-normal">
                <span className="text-black">
                  You know what's better than
                  <br />
                  quality coffee?
                  <br />
                  Free quality coffee.
                  <br />
                  <br />
                </span>
                <span className="text-sm font-normal [font-family:'SF_Pro-Regular',Helvetica]">
                  Sign up today to start collecting{" "}
                </span>
                <span className="text-[#ff8d28]">Beans</span>
                <span className="text-sm font-normal [font-family:'SF_Pro-Regular',Helvetica]">
                  {" "}
                  🎉
                </span>
              </div>

              <Button className="bg-[#ff8d28] hover:bg-[#ff8d28]/90 text-white rounded-[1000px] px-2.5 py-1 h-auto font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)]">
                Join now
              </Button>

              <div className="text-sm [font-family:'SF_Pro-Regular',Helvetica] text-black">
                It's easier through{" "}
                <a href="#" className="text-[#ff8d28] font-bold hover:underline">
                  the app
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="w-full">
            <h2 className="text-center [font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl mb-11 text-black">
              How to start earning
            </h2>

            <div className="flex items-center justify-center gap-12">
              {[
                {
                  number: "1",
                  title: "Create an Account",
                  description:
                    "To get started, join now. You can also join in the app to get access to the full range of benefits.",
                },
                {
                  number: "2",
                  title: "Make an Order",
                  description:
                    "Use cash, credit/debit card or save time and pay right through the app. You'll collect Beans regardless.",
                },
                {
                  number: "3",
                  title: "Earn Beans. get Rewards",
                  description:
                    "As you earn Beans, you can redeem them for rewards, like free food, drinks, and more.",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center gap-6 flex-1">
                  <div className="w-20 h-20 rounded-full bg-[#ffb347] flex items-center justify-center [font-family:'SF_Pro-Bold',Helvetica] font-bold text-4xl text-white">
                    {step.number}
                  </div>
                  <div className="text-center">
                    <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-lg mb-3 text-black">
                      {step.title}
                    </h3>
                    <p className="text-sm [font-family:'SF_Pro-Regular',Helvetica] text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
