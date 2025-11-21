import React from "react";

const footerColumns = [
  {
    title: "About Kawfee",
    links: [
      "Our Company",
      "Our Coffee",
      "Franchising",
      "Investor Relations",
      "Customer Service",
    ],
  },
  {
    title: "Careers",
    links: ["Diversity", "Culture", "Work for Kawfee", "Corporate", "Retail"],
  },
  {
    title: "Social Impact",
    links: ["Overview", "People", "Planet", "Corporate"],
  },
  {
    title: "Order",
    links: ["Order on the App", "Order on the Web", "Delivery", "Pickup"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full mt-[215px] bg-transparent">
      <div className="relative w-full bg-white border border-solid border-black px-[141px] py-10">
        <div className="grid grid-cols-4 gap-[51px] mb-[100px]">
          {footerColumns.map((column, index) => (
            <nav key={index} className="flex flex-col">
              <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-2xl tracking-[-0.09px] leading-5 mb-[15px]">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-5">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-xl tracking-[-0.06px] leading-5 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <img className="w-[85px] h-[85px]" alt="Logo" src="/logo.png" />
        </div>

        <div className="flex flex-col items-center gap-10">
          <p className="font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] [font-style:var(--subheadline-regular-font-style)] text-center">
            © 2025 Kawfee Coffee Company. All rights reserved
          </p>

          <p className="font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] [font-style:var(--subheadline-regular-font-style)] text-center">
            Privacy Policy | Terms of Use | Do Not Sell or Share My Personal
            Information | Partners | Accessibility | Cookie Preferences
          </p>
        </div>
      </div>
    </footer>
  );
};
