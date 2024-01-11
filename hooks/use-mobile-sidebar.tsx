import { create } from "zustand";

type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileSidebarStore = create<MobileSidebarStore>()((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () =>
    set({
      isOpen: true,
    }),
}));
