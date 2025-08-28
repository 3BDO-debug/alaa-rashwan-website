// store/useSubscribePopupStore.ts
import { create } from "zustand";

export type SubscribePopupData = {
  title: string;
  duration: string | number;
  price: string | number;
  region: string;
};

type SubscribePopupStore = {
  isTriggred: boolean;
  data: SubscribePopupData | null;
  openPopup: (data: SubscribePopupData) => void;
  closePopup: () => void;
};

const useSubscribePopupStore = create<SubscribePopupStore>((set) => ({
  isTriggred: false,
  data: null,
  openPopup: (data) => set({ isTriggred: true, data }),
  closePopup: () => set({ isTriggred: false, data: null }),
}));

export default useSubscribePopupStore;
