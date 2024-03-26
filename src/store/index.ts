import { create } from "zustand";

export const useStore = create<{
  txHash: string | undefined;
}>((set) => ({
  txHash: undefined,
}));
