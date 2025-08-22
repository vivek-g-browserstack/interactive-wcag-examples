import { useEffect, useRef, useState } from "react"
import { Switch } from "../../ui/switch"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
// import { SectionHeading } from "@/components/SectionHeading"
import { useGlobalStore } from "@/store/globalStore"
// import SectionContent from "@/components/SectionContent"
import ExampleCard from "@/components/ExampleCard"

export function FocusVisible() {
    const id = "focus-visible"

    return (
        <section id={id}>
            {/* <SectionContent> */}
            <div className="flex flex-col gap-8">
                <style>{`
                            .remove-focus:focus-visible {
                                outline: none;
                                box-shadow: none;
                            }
                `}</style>
                <Render isFixed={false} />
                <Render isFixed={true} />
            </div>
            {/* </SectionContent > */}
        </section >
    )
}

function Render({ isFixed }: { isFixed: boolean }) {
    const [isGameInProgress, setIsGameInProgress] = useState(true)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const gameRef = useRef<HTMLDivElement>(null)
    const { isResponsive } = useGlobalStore()

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
        <div>
            <div className="flex justify-between mb-2">
                <h3
                    className={`font-bold flex items-center text-xl ${isFixed ? `text-success-default` : `text-danger-default`}`}
                >
                    <span className="material-symbols-outlined">deployed_code</span>
                    &nbsp;{isFixed ? `A game that is accessible` : `A game that is not accessible`}
                </h3>
            </div>
            {isGameInProgress
                ? <div
                    ref={gameRef}
                    className={`relative`}
                >
                    <ExampleCard>
                        <h3 className={`font-medium text-xl mb-2`}>Game: Can you toggle the switch, using only your keyboard?</h3>
                        <p className={`mb-2 sm:mb-4 text-neutral-weaker text-sm`}>Use Tab and Shift+Tab to move focus, Space to toggle</p>
                        <div className="flex flex-wrap p-2 sm:p-4 bg-neutral-default">
                            <div className={`order-1 ${isResponsive ? 'basis-full sm:basis-1/2' : 'basis-1/2'} flex items-center justify-center p-4`}>
                                <a href={`#`} className="underline underline-offset-4 text-brand-default">A hyper link</a>
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
                                    aria-label="Switch"
                                    id="switch-to-focus"
                                    className={`${isFixed ? `` : `remove-focus`}`}
                                >
                                </Switch>
                                <label htmlFor="switch-to-focus">Switch</label>
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
                </div>
                : <div
                    className={`relative h-[268px] bg-brand-weakest border border-brand-default p-8 flex justify-center items-center rounded-lg ${isResponsive ? 'md:col-span-2' : 'col-span-2'} `}
                >
                    <div className="w-full text-center">
                        <p className="text-lg font-medium mb-4">Click start to begin the game!</p>
                        <Button
                            onClick={() => {
                                setIsGameInProgress((isGameInProgress) => !isGameInProgress)
                            }}
                        >
                            {isGameInProgress ? `Stop game` : `Start game`}
                        </Button>
                    </div>
                </div>
            }
        </div>)
}