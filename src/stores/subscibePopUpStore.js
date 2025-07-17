import { create } from "zustand";

const useSubscribePopupStore = create((set) => ({
  isTriggred: false,
  data: null,

  openPopup: (data = null) => set({ isTriggred: true, data: data }),
  closePopup: () => set({ isTriggred: false, data: null }),
}));

export default useSubscribePopupStore;
