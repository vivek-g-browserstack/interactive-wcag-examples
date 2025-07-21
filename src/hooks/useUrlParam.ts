import { useEffect } from "react"
import { useGlobalStore } from "@/store/globalStore"

export function useUrlParamsToStore() {
    const { setIsResponsive, setIsCompliant, setIsEmbedded, setIsIframe } = useGlobalStore()

    useEffect(() => {
        if (typeof window === "undefined") return
        const urlParams = new URLSearchParams(window.location.search)
        if (urlParams.get("responsive") === "true") {
            setIsResponsive(true)
        }
        if (urlParams.get("compliant") === "true") {
            setIsCompliant(true)
        }
        if (urlParams.get("embedded") === "true") {
            setIsEmbedded(true)
        }
        if (urlParams.get("iframe") === "true") {
            setIsIframe(true)
        }
    }, [setIsResponsive, setIsEmbedded, typeof window !== "undefined" ? window.location.search : null])
} 