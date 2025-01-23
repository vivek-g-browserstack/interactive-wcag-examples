import { useState } from "react"
import { Switch } from "../ui/switch"
import { HoverableBroken } from "./broken/Hoverable"
import { PersistentBroken } from "./broken/Persistent"
import { DismissibleBroken } from "./broken/Dismissible"
import { HoverableFixed } from "./fixed/Hoverable"
import { PersistentFixed } from "./fixed/Persistent"
import { DismissibleFixed } from "./fixed/Dismissible"

export function ContentOnFocusOrHover() {
    const [isFixed, setIsFixed] = useState(false)

    return (
        <div className="px-4">
            <div className="flex gap-8 justify-between items-center bg-slate-100 rounded-lg px-2 py-4 mb-4">
                <h2 className="text-2xl">
                    1.4.13 Content on hover or focus
                </h2>
                <a href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html" target="_blank">Detailed explanation</a>
                <div className="flex gap-2 items-center">
                    <label htmlFor="content-on-hover-or-focus-compliance">Make examples compliant</label>
                    <Switch
                        id="content-on-hover-or-focus-compliance"
                        onCheckedChange={(state) => {
                            setIsFixed(state)
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
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

            </div>
        </div >
    )
}