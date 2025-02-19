import { useEffect } from "react"

export function useScrollToAnchorHash() {

    useEffect(() => {
        if (window.location.hash) {
            document.querySelector(`${window.location.hash}`)?.scrollIntoView()
        }
    }, [])
}