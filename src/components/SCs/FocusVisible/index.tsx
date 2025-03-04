import { useEffect, useRef, useState } from "react"
import { Switch } from "../../ui/switch"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { SCHeading } from "@/components/SCHeading"


export function FocusVisible() {
    const [isFixed, setIsFixed] = useState(false)
    const [isGameInProgress, setIsGameInProgress] = useState(false)
    const gameRef = useRef<HTMLDivElement>(null)

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
        <section id="focus-visible" className="px-4">
            <SCHeading
                title="2.4.7 Focus visible"
                href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                toggleId="focus-visible-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <div className="grid grid-cols-3 gap-8">
                <style>{`
                            .remove-focus:focus-visible {
                                outline: none;
                                box-shadow: none;
                            }
                `}</style>
                <div className="col-span-1">
                    <p className="mb-2">Let&apos;s play a game</p>
                    <Button
                        className="mb-8"
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
                        <p><b>Moral of the story:</b> Do not remove focus indicators on elements. Modify, but do not remove fully.</p>
                    }
                </div>
                {isGameInProgress &&
                    <div
                        ref={gameRef}
                        className="relative col-span-2 p-4 rounded-lg border-4 border-dashed border-slate-200"
                        onKeyDown={(e) => {
                            if (e.key.toLowerCase() === "d") {
                                setIsFixed((isFixed) => !isFixed)
                            }
                        }}
                    >
                        <h3 className="font-bold mb-2 text-orange-600">Can you toggle the &quot;switch&quot; element, with your keyboard?</h3>
                        <p className="text-orange-600 mb-8">Use Tab and Shift+Tab to move focus, Space to toggle</p>
                        <div className="flex flex-wrap p-4 bg-yellow-50">
                            <div className="order-1 basis-1/2 flex items-center justify-center p-4">
                                <a href="#">A hyper link</a>
                            </div>
                            <div className="order-3 basis-1/2 flex items-center justify-center p-4">
                                <Button className={`${isFixed ? `focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2` : `remove-focus`}`}>Don&apos;t focus me</Button>
                            </div>
                            <div className="order-2 basis-1/2 flex gap-2 items-center justify-center p-4">
                                <Switch id="switch-to-focus" className={`${isFixed ? `` : `remove-focus`}`}></Switch>
                                <label htmlFor="switch-to-focus">Focus me</label>
                            </div>
                            <div className="order-4 basis-1/2 flex items-center justify-center p-4">
                                <Input className="w-1/2 bg-white mx-auto" type="email" placeholder="Email" />
                            </div>
                        </div>
                    </div>}
            </div>
        </section>
    )
}