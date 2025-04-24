import { useState } from "react"
import { SCHeading } from "@/components/SCHeading"
import { HoverableCardBroken } from "./broken/HoverableCardBroken"
import { Space_Mono } from "next/font/google"
import { HoverableCardFixed } from "./fixed/HoverableCardFixed"
import { useReflowStore } from "@/store/reflowStore"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
})


export function NameRoleValue() {
    const [isFixed, setIsFixed] = useState(false)
    const { isResponsive } = useReflowStore()

    return (
        <section id="name-role-value" className="mx-4">
            <SCHeading
                title="4.1.2 Name, Role, Value"
                href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
                toggleId="name-role-value-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <p className={`mb-4 ${isResponsive ? 'text-sm sm:text-base' : ''}`}>Non standard UI components cannot be consumed by assistive technology, if they do not have proper name, role, state and value.</p>
            <div
                className="p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200"
            >
                <h2 className={`${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} mb-4 sm:mb-6 font-bold text-center`}>A card with hover interaction</h2>
                <div className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'} gap-4 sm:gap-6 md:gap-8`}>
                    <div className="flex flex-col justify-between">
                        <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-2 ${isFixed ? `text-green-700` : `text-red-600`}`}>How mouse users experience it</h3>
                        {isFixed
                            ? <HoverableCardFixed interactionMethod="mouse" />
                            : <HoverableCardBroken interactionMethod="mouse" />
                        }
                    </div>
                    <div className="flex flex-col justify-between">
                        <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-2 ${isFixed ? `text-green-700` : `text-red-600`}`}>How keyboard users experience it</h3>
                        {isFixed
                            ? <HoverableCardFixed interactionMethod="keyboard" />
                            : <HoverableCardBroken interactionMethod="keyboard" />
                        }
                    </div>
                    <div className="flex flex-col">
                        <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-2 ${isFixed ? `text-green-700` : `text-red-600`}`}> How screen reader users experience it</h3>
                        {isFixed
                            ?
                            // <HoverableCardFixed interactionMethod="screen-reader" />
                            <div className="p-4 sm:p-8 border border-slate-700">
                                <p className={`${spaceMono.className} ${isResponsive ? 'text-sm sm:text-base' : ''}`}>
                                    <b>[aria-label]</b> Focus me with keyboard?
                                </p>
                                <p className={`${spaceMono.className} ${isResponsive ? 'text-sm sm:text-base' : ''}`}>
                                    <b>[aria-description]</b> This is one of those fancy cards on home pages. They show you more text on hover and sprinkle some more interaction magic.
                                </p>
                            </div>
                            : <div className="min-h-64 p-4 sm:p-8 border border-slate-700">
                                <p className={`${spaceMono.className} ${isResponsive ? 'text-sm sm:text-base' : ''}`}>
                                    Focus me with keyboard?
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}