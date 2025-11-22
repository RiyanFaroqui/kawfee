import React, { createContext, useContext, useState, ReactNode } from "react";

export interface BagItem {
  id: string;
  name: string;
  size: string;
  price: number;
  customizations: Record<string, string | number>;
}

interface BagContextType {
  items: BagItem[];
  addItem: (item: BagItem) => void;
  removeItem: (id: string) => void;
  clearBag: () => void;
  itemCount: number;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

export const BagProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<BagItem[]>([]);

  const addItem = (item: BagItem) => {
    setItems([...items, item]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearBag = () => {
    setItems([]);
  };

  const itemCount = items.length;

  return (
    <BagContext.Provider value={{ items, addItem, removeItem, clearBag, itemCount }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error("useBag must be used within BagProvider");
  }
  return context;
};
