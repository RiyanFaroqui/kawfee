import React, { useState } from "react";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ProductPromoCardSection } from "./sections/ProductPromoCardSection";
import { PromoCardContainerSection } from "./sections/PromoCardContainerSection";
import { BakedGoodsPromoCardSection } from "./sections/BakedGoodsPromoCardSection";
import { PromotionalBannerSection } from "./sections/PromotionalBannerSection";
import { RewardsSection } from "./sections/RewardsSection";
import { MenuSection } from "./sections/MenuSection";

export const DesktopHomeX = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("Menu");

  return (
    <div className="bg-white overflow-hidden w-full flex flex-col">
      <NavigationBarSection activeTab={activeTab} onTabChange={setActiveTab} />
      <PromotionalBannerSection />
      {activeTab === "Menu" ? (
        <MenuSection />
      ) : (
        <div className="flex flex-col w-full items-center">
          <div className="w-full max-w-[1292px] px-4 flex flex-col gap-11 py-11">
            <FeaturedProductsSection />
            <PromoCardContainerSection />
            <ProductPromoCardSection />
            <BakedGoodsPromoCardSection />
          </div>
        </div>
      )}
      {activeTab === "Rewards" && <RewardsSection />}
      {activeTab === "About Kawfee" && (
        <div className="flex flex-col w-full items-center">
          <div className="w-full max-w-[1292px] px-4 flex flex-col gap-11 py-11">
            <p className="text-center text-2xl text-black">About Kawfee section coming soon</p>
          </div>
        </div>
      )}
      <FooterSection />
    </div>
  );
};
