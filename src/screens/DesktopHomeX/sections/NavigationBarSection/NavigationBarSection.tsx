import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const navigationItems = [
  { label: "Menu" },
  { label: "Rewards" },
  { label: "About Kawfee" },
];

interface NavigationBarSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const NavigationBarSection = ({ activeTab, onTabChange }: NavigationBarSectionProps): JSX.Element => {
  return (
    <header className="w-full bg-white shadow-[0px_4px_4px_#00000040] sticky top-0 z-50">
      <nav className="flex items-center justify-between px-[35px] py-[15px] max-w-[1512px] mx-auto">
        <div className="flex items-center gap-[35px]">
          <button onClick={() => onTabChange("Home")} className="cursor-pointer">
            <img className="w-[85px] h-[85px]" alt="Logo" src="/logo-1.png" />
          </button>

          <ul className="flex items-center gap-[50px] list-none">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <li key={item.label} className="relative">
                  <button
                    onClick={() => onTabChange(item.label)}
                    className="flex items-center justify-center h-[57px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-2xl tracking-[-0.43px] leading-5 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <div className="absolute bottom-[-15px] left-0 w-full h-[9px] bg-[#ff8d28]" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="[font-family:'Lilita_One',Helvetica] font-normal text-[#e0863e] text-5xl tracking-[0] leading-[normal] whitespace-nowrap">
          Kawfee
        </div>

        <div className="flex items-center gap-[51px]">
          <Select>
            <SelectTrigger className="w-[359px] h-12 bg-white shadow-[0px_4px_4px_#00000040] border-none [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black text-[17px] tracking-[-0.43px] leading-5">
              <SelectValue placeholder="Choose Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="location1">Kawfee BIT</SelectItem>
              <SelectItem value="location2">Kawfee DC</SelectItem>
              <SelectItem value="location3">Kawfee Windfields</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-[12px]">
            <Button
              variant="outline"
              className="px-2.5 py-1 bg-white rounded-[1000px] border border-solid border-black font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-black text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] [font-style:var(--subheadline-regular-font-style)] hover:bg-gray-50"
            >
              Login
            </Button>

            <Button className="px-2.5 py-1 bg-[#ff8d28] rounded-[1000px] border-none font-subheadline-regular font-[number:var(--subheadline-regular-font-weight)] text-white text-[length:var(--subheadline-regular-font-size)] tracking-[var(--subheadline-regular-letter-spacing)] leading-[var(--subheadline-regular-line-height)] [font-style:var(--subheadline-regular-font-style)] hover:bg-[#ff7d18]">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
