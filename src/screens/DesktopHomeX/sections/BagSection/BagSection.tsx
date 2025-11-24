import React from "react";
import { useBag } from "../../../../context/BagContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

interface BagSectionProps {
  onBack: () => void;
  selectedLocation: string;
}

export const BagSection = ({ onBack, selectedLocation }: BagSectionProps): JSX.Element => {
  const { items, removeItem } = useBag();
  const [store, setStore] = React.useState(selectedLocation || "Kawfee BIT");
  const [fulfillmentMethod, setFulfillmentMethod] = React.useState("Pickup");
  const [pickupTime, setPickupTime] = React.useState("in 6-7 minutes");
  const [location, setLocation] = React.useState("OTU Science Building");
  const [room, setRoom] = React.useState("SCI 1350");
  const [notes, setNotes] = React.useState("");
  const [tips, setTips] = React.useState("0.00");

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = fulfillmentMethod === "Delivery" ? 2.50 : 0;
  const tipAmount = parseFloat(tips) || 0;
  const taxBase = subtotal + deliveryFee + tipAmount;
  const tax = taxBase * 0.13;
  const total = subtotal + deliveryFee + tipAmount + tax;
  const rewards = Math.round(subtotal * 5);

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <div className="sticky top-[142px] z-40 bg-gray-200 border-b border-gray-300 px-6 py-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-black [font-family:'SF_Pro-Regular',Helvetica] hover:opacity-70 transition-opacity"
        >
          ←
        </button>
        <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-lg text-black">
          Back to Menu
        </p>
      </div>

      <div className="flex flex-1 gap-12 max-w-[1512px] mx-auto w-full px-8 py-8">
        <div className="flex-1 bg-[#ff8d28] rounded-[16px] p-8">
          <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-3xl text-black mb-8">
            Review Order ({items.length})
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <label className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-black block mb-2">
                Store
              </label>
              <Select value={store} onValueChange={setStore}>
                <SelectTrigger className="w-full h-12 bg-white [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kawfee BIT">Kawfee BIT</SelectItem>
                  <SelectItem value="Kawfee Downtown">Kawfee Downtown</SelectItem>
                  <SelectItem value="Kawfee Campus">Kawfee Campus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-black block mb-2">
                Fulfillment Method
              </label>
              <Select value={fulfillmentMethod} onValueChange={setFulfillmentMethod}>
                <SelectTrigger className="w-full h-12 bg-white [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pickup">Pickup</SelectItem>
                  <SelectItem value="Delivery">Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {fulfillmentMethod === "Pickup" ? (
              <div>
                <label className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-black block mb-2">
                  Pickup Time
                </label>
                <Select value={pickupTime} onValueChange={setPickupTime}>
                  <SelectTrigger className="w-full h-12 bg-white [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in 6-7 minutes">in 6-7 minutes</SelectItem>
                    <SelectItem value="in 15 minutes">in 15 minutes</SelectItem>
                    <SelectItem value="in 30 minutes">in 30 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <>
                <div>
                  <label className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-black block mb-2">
                    Location
                  </label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-full h-12 bg-white [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="OTU Science Building">OTU Science Building</SelectItem>
                      <SelectItem value="OTU Engineering">OTU Engineering</SelectItem>
                      <SelectItem value="OTU Library">OTU Library</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-black block mb-2">
                    Room
                  </label>
                  <Select value={room} onValueChange={setRoom}>
                    <SelectTrigger className="w-full h-12 bg-white [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SCI 1350">SCI 1350</SelectItem>
                      <SelectItem value="SCI 1351">SCI 1351</SelectItem>
                      <SelectItem value="SCI 1352">SCI 1352</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-black block mb-2">
                    Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Deliver to the middle of the front row, red sweater, black cap."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md [font-family:'SF_Pro-Regular',Helvetica] bg-white text-black placeholder-gray-500 min-h-[120px] resize-none"
                  />
                </div>

                <div>
                  <label className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-sm text-black block mb-2">
                    Tips
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tips}
                    onChange={(e) => setTips(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md [font-family:'SF_Pro-Regular',Helvetica] bg-white text-black"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="w-[500px] flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="bg-[#fdf5de] rounded-[16px] p-8 text-center py-12">
              <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-gray-500">
                Your bag is empty
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#fdf5de] rounded-[12px] p-4 flex items-start gap-4"
                  >
                    <img
                      src="/cbb44b74-98a1-40db-bf9d-4ea3fb0cb225-1.png"
                      alt={item.name}
                      className="w-20 h-20 rounded-[8px] object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-lg text-black">
                        {item.name}
                      </h3>
                      <p className="[font-family:'SF_Pro-Regular',Helvetica] text-sm text-gray-600">
                        {item.size} • {item.price * 100} calories
                      </p>
                    </div>
                    <div className="text-right flex flex-col gap-2">
                      <p className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-lg text-black">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex gap-2 justify-end">
                        <button className="text-lg hover:opacity-70 transition-opacity">😊</button>
                        <button className="text-lg hover:opacity-70 transition-opacity">♡</button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-lg hover:opacity-70 transition-opacity"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#fdf5de] rounded-[12px] p-6 space-y-3">
                <div className="flex justify-between [font-family:'SF_Pro-Regular',Helvetica] text-gray-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {fulfillmentMethod === "Delivery" && (
                  <>
                    <div className="flex justify-between [font-family:'SF_Pro-Regular',Helvetica] text-gray-700">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between [font-family:'SF_Pro-Regular',Helvetica] text-gray-700">
                      <span>Tip</span>
                      <span>${tipAmount.toFixed(2)}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between [font-family:'SF_Pro-Regular',Helvetica] text-gray-700">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between">
                  <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-black">
                    Total
                  </span>
                  <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-xl text-black">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="bg-[#fdf5de] rounded-[12px] p-6">
                <p className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-center">
                  You can get {rewards} 🛍 from this order!
                </p>
              </div>

              <button className="w-full bg-[#ff8d28] hover:bg-[#ff7d18] text-white [font-family:'SF_Pro-Bold',Helvetica] font-bold text-lg rounded-full py-4 transition-colors">
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
