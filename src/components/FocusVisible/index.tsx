import { useRef, useState } from "react"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { Input } from "../ui/input"


export function FocusVisible() {
    const [isFixed, setIsFixed] = useState(false)
    const [isGameInProgress, setIsGameInProgress] = useState(false)
    const gameRef = useRef<HTMLParagraphElement>(null)

    return (
        <div className="px-4">
            <div className="grid grid-cols-3 gap-8 justify-between items-center bg-slate-100 rounded-lg px-2 py-4 mb-4">
                <h2 className="text-2xl">
                    2.4.7 Focus visible
                </h2>
                <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html" target="_blank"
                    className="text-center"
                >
                    Detailed explanation
                </a>
                <div className="flex gap-2 justify-end items-center">
                    <label htmlFor="focus-visible-compliance">Make examples compliant</label>
                    <Switch
                        checked={isFixed}
                        id="focus-visible-compliance"
                        onCheckedChange={(state) => {
                            setIsFixed(state)
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <style>{`
                            .remove-focus:focus {
                                outline: none !important;
                                box-shadow: none !important;
                                }

                                .remove-focus:focus-visible {
                                outline: none !important;
                                box-shadow: none !important;
                                }

                                .remove-focus:focus-within {
                                outline: none !important;
                                box-shadow: none !important;
                            }
                `}</style>
                <div className="col-span-1">
                    <p className="mb-2">Let&apos;s play a game called <br /> <b>Hocus Pocus, where&apos;s the focus?</b></p>
                    <Button
                        onClick={() => {
                            setIsGameInProgress((isGameInProgress) => !isGameInProgress)
                            setTimeout(() => {
                                gameRef.current?.scrollIntoView()
                            }, 100)
                        }}
                    >
                        {isGameInProgress ? `End game` : `Start game`}
                    </Button>
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
                        <h3 className="font-bold mb-2 text-orange-600">In the group below, can you focus the switch element with your keyboard?</h3>
                        <p className="text-orange-600 mb-8">Use Tab and Shift+Tab to move focus</p>
                        <div className="relative h-44 mb-8 bg-yellow-50">
                            <a href="#" className="absolute top-1/3 right-[40%]">A hyyyper link</a>
                            <Button className={`absolute top-1/2 left-2/3 ${isFixed ? `` : `remove-focus`}`}>I might be focussed</Button>
                            <Switch className={`absolute top-1/4 left-1/3 ${isFixed ? `` : `remove-focus`}`}></Switch>
                            <Input className="absolute top-2/3 left-1/4 w-1/3 bg-white" type="email" placeholder="Email" />
                        </div>
                        <p className="text-orange-600">Once you are sure that you have focussed the switch, press &quot;D&quot; to see if you got it right</p>
                    </div>}

            </div>
            {/* <div className="grid grid-cols-3 gap-8">
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className="font-bold mb-2 text-orange-600">Hoverable tooltips</h3>
                    <p className="text-orange-600 mb-8">Once the tooltip appears, move your mouse into the tooltip content and see if the tooltip disappears</p>
                    {isFixed ? <HoverableFixed /> : <HoverableBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className="font-bold mb-2 text-orange-600">Persistent tooltips</h3>
                    <p className="text-orange-600 mb-8">Once the tooltip appears, see if the tooltip holds as long as you hover(or focus the trigger)</p>
                    {isFixed ? <PersistentFixed /> : <PersistentBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className="font-bold mb-2 text-orange-600">Dismissible tooltips</h3>
                    <p className="text-orange-600 mb-8">Once the tooltip appears, press Esc and check if it can be dismissed</p>
                    {isFixed ? <DismissibleFixed /> : <DismissibleBroken />}
                </div>

            </div> */}
        </div >
    )
}