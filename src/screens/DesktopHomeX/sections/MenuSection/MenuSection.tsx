import React, { useState } from "react";
import { useBag } from "../../../../context/BagContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { ProductPage } from "../ProductPage";
import { BagSection } from "../BagSection";

interface MenuItem {
  name: string;
  image: string;
}

const coldCoffeeItems: MenuItem[] = [
  { name: "House Cold Brew", image: "/cold brew.jpg" },
  { name: "Iced Latte", image: "/iced latte.jpg" },
  { name: "Iced Coffee", image: "/iced coffee.jpg" },
  { name: "Iced Espresso", image: "/iced espresso.jpg" },
  { name: "Iced Macchiato", image: "iced macchiato.jpg" },
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
  const { itemCount } = useBag();
  const [activeTab, setActiveTab] = useState("Menu");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState("Choose Location");
  const [showBag, setShowBag] = useState(false);

  if (showBag) {
    return (
      <BagSection
        onBack={() => setShowBag(false)}
        selectedLocation={selectedLocation}
      />
    );
  }

  const categoryImages: Record<string, string> = {
  "Hot Coffee": "/hot coffee.jpeg",
  "Cold Coffee": "/cold brew.jpg",
  "Hot Tea": "/hot tea.jpg",
  "Cold Tea": "/cold tea.jpg",
  "Refreshers": "/refresher.jpg",
  Blended: "/blended.jpg",
  Bottled: "/bottled.jpg",
  Other: "/other.jpg",

  Breakfast: "/breakfast.jpg",
  Lunch: "/lunch.jpg",
  Bakery: "/bakery.jpg",
  Snacks: "/snacks.jpg",
  Treats: "/treats.jpg",

  Instant: "/instant.jpg",
  Pods: "/pods.jpg",
  Containers: "/containers.jpg",
};


  if (selectedProduct) {
    return (
      <ProductPage
        onBack={() => {
          setSelectedProduct(null);
          setSelectedSubcategory(null);
        }}
        onNavigateToCategory={() => {
          setSelectedProduct(null);
          setSelectedSubcategory(null);
        }}
        onNavigateToSubcategory={() => setSelectedProduct(null)}
        category="Drinks"
        subcategory="Cold Coffee"
        productName={selectedProduct}
        productImage="/iced macchiato.jpg"
      />
    );
  }

  return (
    <div className="w-full bg-white flex flex-col min-h-screen">
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

      <div className="flex flex-1 w-full max-w-[1512px] mx-auto">
        <aside className="w-[250px] border-r border-gray-300 px-6 py-8 flex-shrink-0 overflow-y-auto">
          {sidebarItems.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-lg mb-4">
                {section.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button
                      onClick={() => setSelectedSubcategory(item)}
                      className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-base hover:text-[#ff8d28] transition-colors text-left w-full"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="flex-1 px-12 py-8 overflow-y-auto">
          {activeTab === "Menu" && !selectedSubcategory && (
            <div className="space-y-16">
              <div>
                <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-4xl mb-8 text-black border-b-2 border-black pb-4">
                  Drinks
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {["Hot Coffee", "Cold Coffee", "Hot Tea", "Cold Tea", "Blended", "Refreshers", "Bottled", "Other"].map(
                    (item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSubcategory(item)}
                        className="flex items-center gap-8 hover:opacity-80 transition-opacity text-left"
                      >
                        <img
                          src={categoryImages[item]}
                          alt={item}
                          className="w-[150px] h-[150px] rounded-[16px] object-cover flex-shrink-0"
                        />
                        <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                          {item}
                        </h3>
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-4xl mb-8 text-black border-b-2 border-black pb-4">
                  Food
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {["Breakfast", "Lunch", "Bakery", "Snacks", "Treats"].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSubcategory(item)}
                      className="flex items-center gap-8 hover:opacity-80 transition-opacity text-left"
                    >
                      <img
                        src={categoryImages[item]}
                        alt={item}
                        className="w-[150px] h-[150px] rounded-[16px] object-cover flex-shrink-0"
                      />
                      <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                        {item}
                      </h3>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-4xl mb-8 text-black border-b-2 border-black pb-4">
                  Home
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {["Instant", "Pods", "Containers"].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSubcategory(item)}
                      className="flex items-center gap-8 hover:opacity-80 transition-opacity text-left"
                    >
                      <img
                        src={categoryImages[item]}
                        alt={item}
                        className="w-[150px] h-[150px] rounded-[16px] object-cover flex-shrink-0"
                      />
                      <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                        {item}
                      </h3>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Menu" && selectedSubcategory === "Cold Coffee" && (
            <div>
              <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl mb-8 text-black border-b-2 border-black pb-4">
                <span className="text-gray-400">Drinks / </span>
                <span className="text-black">Cold Coffee</span>
              </h2>
              <div className="grid grid-cols-2 gap-12">
                {coldCoffeeItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProduct(item.name)}
                    className="flex items-center gap-8 hover:opacity-80 transition-opacity text-left"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[150px] h-[150px] rounded-[16px] object-cover flex-shrink-0"
                    />
                    <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black">
                      {item.name}
                    </h3>
                  </button>
                ))}
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

      <div className="sticky bottom-0 left-0 right-0 z-40 bg-[#ff8d28] py-4 px-6">
        <div className="max-w-[1512px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-white text-sm">
              For Product Availability
            </p>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[250px] h-10 bg-white border-none [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black text-sm">
                <SelectValue placeholder="Choose Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Kawfee BIT">Kawfee BIT</SelectItem>
                <SelectItem value="Kawfee Downtown">Kawfee DC</SelectItem>
                <SelectItem value="Kawfee Campus">Kawfee Windfields</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button
            onClick={() => setShowBag(true)}
            className="flex items-center justify-center w-12 h-12 bg-white rounded hover:bg-gray-100 transition-colors relative"
          >
            <span className="text-2xl">🧺</span>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
