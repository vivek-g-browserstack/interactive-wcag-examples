import { useState } from "react"
import { Switch } from "../ui/switch"
import { HoverableBroken } from "./broken/Hoverable"
import { PersistentBroken } from "./broken/Persistent"
import { DismissibleBroken } from "./broken/Dismissible"

export function ContentOnFocusOrHover() {
    const [isFixed, setIsFixed] = useState(false)

    return (
        <div className="px-4">
            <div className="flex gap-8 items-center mb-4">
                <h2 className="text-2xl">1.4.13 Content on hover or focus [Non-compliant examples WIP]</h2>
                <div className="flex gap-2 items-center">
                    <label htmlFor="text-spacing-compliance">Make examples compliant</label>
                    <Switch
                        id="text-spacing-compliance"
                        onCheckedChange={(state) => {
                            setIsFixed(state)
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200 flex flex-col">
                    <h3 className="font-bold mb-2 text-blue-600">Hoverable tooltips</h3>
                    <p className="text-blue-600 mb-8">Once the tooltip appears, move your mouse into the tooltip content and see if the tooltip disappears</p>
                    {isFixed ? <HoverableBroken /> : <HoverableBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200 flex flex-col">
                    <h3 className="font-bold mb-2 text-blue-600">Persistent tooltips</h3>
                    <p className="text-blue-600 mb-8">Once the tooltip appears, see if the tooltip holds as long as you hover(or focus the trigger)</p>
                    {isFixed ? <PersistentBroken /> : <PersistentBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200 flex flex-col">
                    <h3 className="font-bold mb-2 text-blue-600">Dismissible tooltips</h3>
                    <p className="text-blue-600 mb-8">Once the tooltip appears, press "Esc" and check if it can be dismissed</p>
                    {isFixed ? <DismissibleBroken /> : <DismissibleBroken />}
                </div>

            </div>
        </div>
    )
}