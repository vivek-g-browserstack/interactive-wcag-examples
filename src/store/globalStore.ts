import { create } from 'zustand'

interface ReflowState {
  isResponsive: boolean
  setIsResponsive: (state: boolean) => void
  isCompliant: boolean
  setIsCompliant: (state: boolean) => void
  isEmbedded: boolean
  setIsEmbedded: (state: boolean) => void
  isIframe: boolean
  setIsIframe: (state: boolean) => void
}

export const useGlobalStore = create<ReflowState>()((set) => ({
  isResponsive: true,
  setIsResponsive: (state: boolean) => set({ isResponsive: state }),
  isCompliant: false,
  setIsCompliant: (state: boolean) => set({ isCompliant: state }),
  isEmbedded: false,
  setIsEmbedded: (state: boolean) => set({ isEmbedded: state }),
  isIframe: false,
  setIsIframe: (state: boolean) => set({ isIframe: state })
})) 