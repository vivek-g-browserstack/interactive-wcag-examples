import { useEffect, useRef, useState } from "react"
import { Switch } from "../../ui/switch"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { SCHeading } from "@/components/SCHeading"
import { useReflowStore } from "@/store/reflowStore"

export function FocusVisible() {
    const [isFixed, setIsFixed] = useState(false)
    const [isGameInProgress, setIsGameInProgress] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const gameRef = useRef<HTMLDivElement>(null)
    const { isResponsive } = useReflowStore()

    function handleClick(e: MouseEvent) {
        if (gameRef.current?.contains(e.target as Element)) {
            console.log(e)
            e.preventDefault()
            e.stopPropagation()
            alert("Tsk tsk tsk, keyboard only, remember?")
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick, true)

        return () => document.removeEventListener("mousedown", handleClick)
    }, [])

    return (
        <section id="focus-visible" className="mx-4">
            <SCHeading
                title="2.4.7 Focus visible"
                href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                toggleId="focus-visible-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <div className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-3'} gap-4 sm:gap-6 md:gap-8`}>
                <style>{`
                            .remove-focus:focus-visible {
                                outline: none;
                                box-shadow: none;
                            }
                `}</style>
                <div className={`${isResponsive ? 'md:col-span-1' : ''}`}>
                    <p className={`mb-2 ${isResponsive ? 'text-sm sm:text-base' : ''}`}>Let&apos;s play a game</p>
                    <Button 
                        className={`mb-4 sm:mb-8 ${isResponsive ? 'text-sm sm:text-base' : ''}`}
                        onClick={() => {
                            setIsGameInProgress((isGameInProgress) => !isGameInProgress)
                            setTimeout(() => {
                                gameRef.current?.scrollIntoView()
                            }, 100)
                        }}
                    >
                        {isGameInProgress ? `End game` : `Start game`}
                    </Button>
                    {isGameInProgress &&
                        <p className={`${isResponsive ? 'text-sm sm:text-base' : ''}`}><b>Moral of the story:</b> Do not remove focus indicators on elements. Modify, but do not remove fully.</p>
                    }
                </div>
                {isGameInProgress &&
                    <div
                        ref={gameRef}
                        className={`relative ${isResponsive ? 'md:col-span-2' : 'col-span-2'} p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200`}
                        onKeyDown={(e) => {
                            if (e.key.toLowerCase() === "d") {
                                setIsFixed((isFixed) => !isFixed)
                            }
                        }}
                    >
                        <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} mb-2`}>Can you toggle the &quot;switch&quot; element, with your keyboard?</h3>
                        <p className={`mb-4 sm:mb-8 ${isResponsive ? 'text-sm sm:text-base' : ''}`}>Use Tab and Shift+Tab to move focus, Space to toggle</p>
                        <div className="flex flex-wrap p-2 sm:p-4 bg-yellow-50">
                            <div className={`order-1 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex items-center justify-center p-2 sm:p-4`}>
                                <a href="#" className={`${isResponsive ? 'text-sm sm:text-base' : ''}`}>A hyper link</a>
                            </div>
                            <div className={`order-3 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex items-center justify-center p-2 sm:p-4`}>
                                <Button 
                                    className={`${isResponsive ? 'text-sm sm:text-base' : ''} ${isFixed ? `focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2` : `remove-focus`}`}
                                    onClick={() => setIsButtonClicked(true)}
                                    onBlur={() => setIsButtonClicked(false)}
                                >
                                    {isButtonClicked ? "Boo!!" : "Don't focus me"}
                                </Button>
                            </div>
                            <div className={`order-2 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex gap-2 items-center justify-center p-2 sm:p-4`}>
                                <Switch id="switch-to-focus" className={`${isFixed ? `` : `remove-focus`}`}></Switch>
                                <label htmlFor="switch-to-focus" className={`${isResponsive ? 'text-sm sm:text-base' : ''}`}>Focus me</label>
                            </div>
                            <div className={`order-4 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex items-center justify-center p-2 sm:p-4`}>
                                <Input className={`${isResponsive ? 'w-full sm:w-1/2' : 'w-1/2'} bg-white mx-auto`} type="email" placeholder="Email" />
                            </div>
                        </div>
                    </div>}
            </div>
        </section>
    )
}