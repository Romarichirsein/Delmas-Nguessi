import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  variant?: {
    size?: string;
    color?: string;
  };
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, variantKey?: string) => void;
  updateQuantity: (id: string, quantity: number, variantKey?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const items = get().items;
        const variantKey = JSON.stringify(item.variant);
        const existingItem = items.find(
          (i) => i.id === item.id && JSON.stringify(i.variant) === variantKey
        );

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id && JSON.stringify(i.variant) === variantKey
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...items, item] });
        }
      },
      removeItem: (id, variantKey) => {
        set({
          items: get().items.filter(
            (i) => !(i.id === id && JSON.stringify(i.variant) === variantKey)
          ),
        });
      },
      updateQuantity: (id, quantity, variantKey) => {
        set({
          items: get().items.map((i) =>
            i.id === id && JSON.stringify(i.variant) === variantKey
              ? { ...i, quantity }
              : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      getTotalPrice: () => get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),
    {
      name: "delmas-cart",
    }
  )
);
