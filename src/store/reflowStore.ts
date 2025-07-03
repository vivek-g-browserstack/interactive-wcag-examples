import { create } from 'zustand'

interface ReflowState {
  isResponsive: boolean
  setIsResponsive: (state: boolean) => void
  isEmbedded: boolean
  setIsEmbedded: (state: boolean) => void
}

export const useReflowStore = create<ReflowState>()((set) => ({
  isResponsive: false,
  setIsResponsive: (state: boolean) => set({ isResponsive: state }),
  isEmbedded: false,
  setIsEmbedded: (state: boolean) => set({ isEmbedded: state })
})) 