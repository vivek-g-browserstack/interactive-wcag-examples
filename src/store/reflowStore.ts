import { create } from 'zustand'

interface ReflowState {
  isResponsive: boolean
  setIsResponsive: (state: boolean) => void
}

export const useReflowStore = create<ReflowState>()((set) => ({
  isResponsive: true,
  setIsResponsive: (state: boolean) => set({ isResponsive: state })
})) 