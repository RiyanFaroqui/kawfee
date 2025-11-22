import React, { useState } from "react";

interface MenuItem {
  name: string;
  image: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const drinkCategories: MenuCategory[] = [
  {
    title: "Drinks",
    items: [
      { name: "Hot Coffee", image: "/image-10.png" },
      { name: "Cold Coffee", image: "/image-9.png" },
      { name: "Hot Tea", image: "/image-10.png" },
      { name: "Cold Tea", image: "/image-9.png" },
      { name: "Blended", image: "/image-10.png" },
      { name: "Refreshers", image: "/refreshersblog-68fd8a8a-2270-49a6-a5a1-73adc933b10a-1000x-1.png" },
      { name: "Bottled", image: "/image-9.png" },
      { name: "Other", image: "/image-10.png" },
    ],
  },
];

const foodCategories: MenuCategory[] = [
  {
    title: "Food",
    items: [
      { name: "Breakfast", image: "/image-9.png" },
      { name: "Lunch", image: "/image-10.png" },
      { name: "Bakery", image: "/image-9.png" },
      { name: "Snacks", image: "/image-10.png" },
      { name: "Treats", image: "/image-9.png" },
    ],
  },
];

const sidebarItems = [
  {
    category: "Drinks",
    items: ["Hot Coffee", "Cold Coffee", "Hot Tea", "Cold Tea", "Refreshers", "Blended", "Bottled", "Other"],
  },
  {
    category: "Food",
    items: ["Breakfast", "Lunch", "Bakery", "Treats", "Snacks"],
  },
  {
    category: "Home",
    items: ["Instant", "Pods", "Containers"],
  },
];

export const MenuSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("Menu");

  return (
    <div className="w-full bg-white">
      <div className="sticky top-[142px] z-40 bg-[#e8e8e8] border-b border-gray-300">
        <div className="flex items-center px-6 py-4 max-w-[1512px] mx-auto gap-12">
          {["Menu", "Featured", "Previous", "Favourite"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-black [font-family:'SF_Pro-Bold',Helvetica] font-bold text-lg tracking-[-0.43px] leading-5 pb-2 border-b-2 transition-colors"
              style={{
                borderColor: activeTab === tab ? "#ff8d28" : "transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-[1512px] mx-auto">
        <aside className="w-[250px] border-r border-gray-300 px-6 py-8 flex-shrink-0">
          {sidebarItems.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-lg mb-4">
                {section.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-base hover:text-[#ff8d28] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="flex-1 px-12 py-8">
          {activeTab === "Menu" && (
            <div className="space-y-16">
              {/* Drinks Section */}
              <div>
                <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-4xl mb-8 text-black border-b-2 border-black pb-4">
                  Drinks
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {drinkCategories[0].items.map((item, index) => (
                    <div key={index} className="flex items-center gap-8">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[150px] h-[150px] rounded-[16px] object-cover flex-shrink-0"
                      />
                      <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food Section */}
              <div>
                <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-4xl mb-8 text-black border-b-2 border-black pb-4">
                  Food
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {foodCategories[0].items.map((item, index) => (
                    <div key={index} className="flex items-center gap-8">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[150px] h-[150px] rounded-[16px] object-cover flex-shrink-0"
                      />
                      <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Home Section */}
              <div>
                <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-4xl mb-8 text-black border-b-2 border-black pb-4">
                  Home
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { name: "Instant", image: "/image-9.png" },
                    { name: "Pods", image: "/image-10.png" },
                    { name: "Containers", image: "/image-9.png" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-8">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[150px] h-[150px] rounded-[16px] object-cover flex-shrink-0"
                      />
                      <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Featured" && (
            <div className="text-center py-20">
              <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                Featured items coming soon
              </p>
            </div>
          )}

          {activeTab === "Previous" && (
            <div className="text-center py-20">
              <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                Your previous orders will appear here
              </p>
            </div>
          )}

          {activeTab === "Favourite" && (
            <div className="text-center py-20">
              <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                Your favorite items will appear here
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
