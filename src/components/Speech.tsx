import { useRef, useState, useEffect } from "react"
import { Button } from "./ui/button"

interface SpeechProps {
    text: string
    className?: string
    setIsSupported?: (supported: boolean) => void // Setter for parent state
}

export function Speech({ text, setIsSupported }: SpeechProps) {
    const [isSpeaking, setIsSpeaking] = useState(false)
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

    useEffect(() => {
        const supported = typeof window !== "undefined" && !!window.speechSynthesis && !!window.SpeechSynthesisUtterance
        if (setIsSupported) {
            setIsSupported(supported)
        }
    }, [setIsSupported])

    const handlePlay = () => {
        if (!window.speechSynthesis) return
        if (isSpeaking) {
            handleStop()
            return
        }
        const utterance = new window.SpeechSynthesisUtterance(text)
        utterance.onend = () => setIsSpeaking(false)
        utterance.onerror = () => setIsSpeaking(false)
        utteranceRef.current = utterance
        setIsSpeaking(true)
        window.speechSynthesis.speak(utterance)
    }

    const handleStop = () => {
        if (!window.speechSynthesis) return
        window.speechSynthesis.cancel()
        setIsSpeaking(false)
    }

    return (
        <Button
            aria-label={isSpeaking ? "Stop speech" : "Play speech"}
            variant="outline"
            onClick={handlePlay}
        >
            {isSpeaking
                ?
                <>
                    <span className="material-symbols-outlined ">
                        stop
                    </span>
                    Stop
                </>
                :
                <>
                    <span className="material-symbols-outlined">
                        play_arrow
                    </span>
                    Play
                </>
            }
        </Button>
    )
}
