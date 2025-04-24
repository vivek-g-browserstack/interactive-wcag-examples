import { useState } from "react"
import { HoverableBroken } from "./broken/Hoverable"
import { PersistentBroken } from "./broken/Persistent"
import { DismissibleBroken } from "./broken/Dismissible"
import { HoverableFixed } from "./fixed/Hoverable"
import { PersistentFixed } from "./fixed/Persistent"
import { DismissibleFixed } from "./fixed/Dismissible"
import { SCHeading } from "@/components/SCHeading"
import { useReflowStore } from "@/store/reflowStore"

export function ContentOnFocusOrHover() {
    const [isFixed, setIsFixed] = useState(false)
    const { isResponsive } = useReflowStore()

    return (
        <section id="content-on-hover-or-focus" className="mx-4">
            <SCHeading
                title="1.4.13 Content on hover or focus"
                href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
                toggleId="content-on-hover-or-focus-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <div className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'} gap-4 sm:gap-6 md:gap-8`}>
                <div className="p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-2 ${isFixed ? `text-green-700` : `text-red-600`}`}>Hoverable tooltips</h3>
                    <p className={`text-slate-500 text-center ${isResponsive ? 'text-sm sm:text-base' : ''} mb-4 sm:mb-8`}>Once the tooltip appears, move your mouse into the tooltip content and see if the tooltip disappears</p>
                    {isFixed ? <HoverableFixed /> : <HoverableBroken />}
                </div>
                <div className="p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-2 ${isFixed ? `text-green-700` : `text-red-600`}`}>Persistent tooltips</h3>
                    <p className={`text-slate-500 text-center ${isResponsive ? 'text-sm sm:text-base' : ''} mb-4 sm:mb-8`}>Once the tooltip appears, see if the tooltip holds as long as you hover(or focus the trigger)</p>
                    {isFixed ? <PersistentFixed /> : <PersistentBroken />}
                </div>
                <div className="p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200">
                    <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-2 ${isFixed ? `text-green-700` : `text-red-600`}`}>Dismissible tooltips</h3>
                    <p className={`text-slate-500 text-center ${isResponsive ? 'text-sm sm:text-base' : ''} mb-4 sm:mb-8`}>Once the tooltip appears, press Esc and check if it can be dismissed</p>
                    {isFixed ? <DismissibleFixed /> : <DismissibleBroken />}
                </div>
            </div>
        </section>
    )
}