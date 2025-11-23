import React, { useState } from "react";
import { useBag } from "../../../../context/BagContext";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

interface ProductPageProps {
  onBack: () => void;
  onNavigateToCategory: (category: string) => void;
  onNavigateToSubcategory: (subcategory: string) => void;
  category: string;
  subcategory: string;
  productName: string;
  productImage: string;
}

export const ProductPage = ({
  onBack,
  onNavigateToCategory,
  onNavigateToSubcategory,
  category,
  subcategory,
  productName,
  productImage,
}: ProductPageProps): JSX.Element => {
  const { addItem } = useBag();
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [showNotification, setShowNotification] = useState(false);
  const [vanillaSyrup, setVanillaSyrup] = useState(3);
  const [toppings, setToppings] = useState("Caramel Drizzle");
  const [dairy, setDairy] = useState("2% Milk");
  const [shots, setShots] = useState(2);
  const [addIns, setAddIns] = useState("Regular Ice");

  const sizes: Record<string, number> = {
    Small: 2.95,
    Medium: 4.95,
    Large: 5.95,
  };

  const handleAddToOrder = () => {
    const newItem = {
      id: Date.now().toString(),
      name: productName,
      size: selectedSize,
      price: sizes[selectedSize],
      customizations: {
        vanillaSyrup,
        toppings,
        dairy,
        shots,
        addIns,
      },
    };

    addItem(newItem);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <div className="sticky top-[142px] z-40 bg-gray-200 border-b border-gray-300 px-6 py-3">
        <p className="text-gray-600 [font-family:'SF_Pro-Regular',Helvetica] text-sm flex items-center gap-2">
          <button onClick={onBack} className="hover:text-black transition-colors">
            Menu
          </button>
          <span>/</span>
          <button onClick={() => onNavigateToCategory(category)} className="hover:text-black transition-colors">
            {category}
          </button>
          <span>/</span>
          <button onClick={() => onNavigateToSubcategory(subcategory)} className="hover:text-black transition-colors">
            {subcategory}
          </button>
          <span>/</span>
          <span className="text-black font-bold">{productName}</span>
        </p>
      </div>

      <div className="flex-1 bg-[#fdf5de] px-12 py-8">
        <div className="flex items-start gap-12 mb-8">
          <img
            src={productImage}
            alt={productName}
            className="w-[200px] h-[200px] rounded-[16px] object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <h1 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-5xl text-black mb-2">
              {productName}
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-orange-500 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm">
                200 🛍 item
              </span>
            </div>
            <p className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-lg mb-4 flex items-center gap-2">
              <span>📍</span> This item is available at: Kawfee BIT
            </p>
          </div>
        </div>
      </div>

      <div className="px-12 py-8 grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-2xl text-black mb-6 pb-4 border-b-2 border-black">
              Size Options
            </h3>
            <div className="flex gap-6">
              {["Small", "Medium", "Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-[12px] transition-all ${
                    selectedSize === size
                      ? "bg-[#ff8d28] text-white"
                      : "bg-white border-2 border-gray-300 text-black hover:border-[#ff8d28]"
                  }`}
                >
                  <img
                    src="/logo.png"
                    alt={size}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] font-semibold text-sm">
                    {size}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-2xl text-black mb-6 pb-4 border-b-2 border-orange-500">
              What's Included
            </h3>

            <div className="space-y-4">
              <div className="border-b border-gray-300 pb-4">
                <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-gray-700 mb-2">
                  Flavours
                </p>
                <div className="flex items-center gap-2">
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] text-black flex-1">
                    Vanilla Syrup Pumps
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setVanillaSyrup(Math.max(0, vanillaSyrup - 1))}
                      className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">{vanillaSyrup}</span>
                    <button
                      onClick={() => setVanillaSyrup(vanillaSyrup + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-[#ff8d28] text-white rounded hover:bg-[#ff7d18]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-gray-700 mb-2">
                  Toppings
                </p>
                <select
                  value={toppings}
                  onChange={(e) => setToppings(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md [font-family:'SF_Pro-Regular',Helvetica] bg-white"
                >
                  <option>Caramel Drizzle</option>
                  <option>Chocolate Drizzle</option>
                  <option>No Topping</option>
                </select>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-gray-700 mb-2">
                  Dairy
                </p>
                <select
                  value={dairy}
                  onChange={(e) => setDairy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md [font-family:'SF_Pro-Regular',Helvetica] bg-white"
                >
                  <option>2% Milk</option>
                  <option>Whole Milk</option>
                  <option>Almond Milk</option>
                  <option>Oat Milk</option>
                </select>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-gray-700 mb-2">
                  Espresso & Shot options
                </p>
                <div className="flex items-center gap-2">
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] text-black flex-1">
                    Shots
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShots(Math.max(0, shots - 1))}
                      className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">{shots}</span>
                    <button
                      onClick={() => setShots(shots + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-[#ff8d28] text-white rounded hover:bg-[#ff7d18]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-gray-700 mb-2">
                  Add-ins
                </p>
                <select
                  value={addIns}
                  onChange={(e) => setAddIns(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md [font-family:'SF_Pro-Regular',Helvetica] bg-white"
                >
                  <option>Regular Ice</option>
                  <option>Extra Ice</option>
                  <option>Light Ice</option>
                  <option>No Ice</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-[#fdf5de] rounded-[12px] p-6 text-center">
            <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-orange-500 text-lg mb-2">
              {sizes[selectedSize]} 🛍 item
            </p>
            <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black mb-4">
              ${sizes[selectedSize].toFixed(2)}
            </p>
            <div className="text-sm [font-family:'SF_Pro-Regular',Helvetica] text-gray-700 space-y-1 mb-4">
              <p>350 calories | 49g sugar</p>
              <p>10g protein | 9g fat</p>
            </div>
            <Button
              onClick={handleAddToOrder}
              className="w-full bg-[#ff8d28] hover:bg-[#ff7d18] text-white rounded-full py-3 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-lg"
            >
              Add to Order
            </Button>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-200 rounded-[16px] p-12 flex flex-col items-center gap-4">
            <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-2xl text-black">
              Added to Order!
            </p>
            <div className="text-6xl">✓</div>
          </div>
        </div>
      )}
    </div>
  );
};
