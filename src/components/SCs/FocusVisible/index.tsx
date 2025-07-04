import { useEffect, useRef, useState } from "react"
import { Switch } from "../../ui/switch"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { SectionHeading } from "@/components/SectionHeading"
import { useGlobalStore } from "@/store/globalStore"
import SectionContent from "@/components/SectionContent"
import ExampleCard from "@/components/ExampleCard"

export function FocusVisible() {
    const [isFixed, setIsFixed] = useState(false)
    const [isGameInProgress, setIsGameInProgress] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const gameRef = useRef<HTMLDivElement>(null)
    const { isResponsive } = useGlobalStore()
    const id = "focus-visible"

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

    useEffect(() => {
        if (isButtonClicked) {
            alert(`Boo! You pressed the decoy button! Switch on "Make examples compliant" for the cheat code.`)
        }
    }, [isButtonClicked])

    return (
        <section id={id}>
            <SectionHeading
                title="2.4.7 Focus visible"
                id={id}
                href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                toggleId="focus-visible-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <SectionContent>
                <div className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-3'} gap-6`}>
                    <style>{`
                            .remove-focus:focus-visible {
                                outline: none;
                                box-shadow: none;
                            }
                `}</style>
                    <div className={`${isResponsive ? 'md:col-span-1' : ''}`}>
                        <p className={`mb-2`}>Let&apos;s play a game</p>
                        <Button
                            className={`${isGameInProgress ? `mb-8` : ``}`}
                            onClick={() => {
                                setIsGameInProgress((isGameInProgress) => !isGameInProgress)
                                setTimeout(() => {
                                    document.querySelector(`#${id}`)?.scrollIntoView()
                                }, 100)
                            }}
                        >
                            {isGameInProgress ? `End game` : `Start game`}
                        </Button>
                        {(isGameInProgress && isFixed) &&
                            < p > <b>Moral of the story:</b> Do not remove focus indicators on elements. Modify, but do not remove fully.</p>
                        }
                    </div>
                    {isGameInProgress &&
                        <div
                            ref={gameRef}
                            className={`relative ${isResponsive ? 'md:col-span-2' : 'col-span-2'} `}
                            onKeyDown={(e) => {
                                if (e.key.toLowerCase() === "d") {
                                    setIsFixed((isFixed) => !isFixed)
                                }
                            }}
                        >
                            <ExampleCard isFixed={isFixed}>
                                <h3 className={`font-medium text-xl mb-2`}>Can you toggle &quot;dark mode&quot;, using only your keyboard?</h3>
                                <p className={`mb-2 sm:mb-4`}>Use Tab and Shift+Tab to move focus, Space to toggle</p>
                                <div className="flex flex-wrap p-2 sm:p-4 bg-neutral-default border border-neutral-strong rounded">
                                    <div className={`order-1 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex items-center justify-center p-4`}>
                                        <a href={`#${id}`} className="underline underline-offset-4 text-brand-default">A hyper link</a>
                                    </div>
                                    <div className={`order-3 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex items-center justify-center p-4`}>
                                        <Button
                                            className={`${isFixed ? `focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2` : `remove-focus`}`}
                                            onClick={() => setIsButtonClicked(true)}
                                            onBlur={() => setIsButtonClicked(false)}
                                        >
                                            {isButtonClicked ? "Boo!" : "A decoy button"}
                                        </Button>
                                    </div>
                                    <div className={`order-2 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex gap-2 items-center justify-center p-4`}>
                                        <Switch
                                            aria-label="Toggle me"
                                            id="switch-to-focus"
                                            className={`${isFixed ? `` : `remove-focus`}`}
                                            onClick={() => {
                                                document.querySelector("html")?.classList.toggle("dark")
                                            }}
                                        >
                                        </Switch>
                                        <label htmlFor="switch-to-focus">Toggle dark mode</label>
                                    </div>
                                    <div className={`order-4 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex items-center justify-center p-4`}>
                                        <Input
                                            className={`${isResponsive ? 'w-full sm:w-1/2' : 'w-1/2'} bg-neutral-default mx-auto`} type="email"
                                            placeholder="Email"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </ExampleCard>
                        </div>}
                </div >
            </SectionContent >
        </section >
    )
}