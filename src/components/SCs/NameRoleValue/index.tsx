import { useState } from "react"
import { SCHeading } from "@/components/SCHeading"
import { HoverableCardBroken } from "./broken/HoverableCardBroken"
import { Space_Mono } from "next/font/google"
import { HoverableCardFixed } from "./fixed/HoverableCardFixed"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
})


export function NameRoleValue() {
    const [isFixed, setIsFixed] = useState(false)

    return (
        <section id="name-role-value" className="px-4">
            <SCHeading
                title="4.1.2 Name, Role, Value"
                href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
                toggleId="name-role-value-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <div>
                <div
                    className="p-4 rounded-lg border-4 border-dashed border-slate-200"
                >
                    <h2 className="text-xl mb-6 font-bold">A card with hover interaction</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold mb-2 text-orange-600">How mouse users experience it</h3>
                            {isFixed
                                ? <HoverableCardFixed interactionMethod="mouse" />
                                : <HoverableCardBroken interactionMethod="mouse" />
                            }
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 text-orange-600">How keyboard users experience it</h3>
                            {isFixed
                                ? <HoverableCardFixed interactionMethod="keyboard" />
                                : <HoverableCardBroken interactionMethod="keyboard" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold mb-2 text-orange-600"> How screen reader users experience it</h3>
                            {isFixed
                                ?
                                // <HoverableCardFixed interactionMethod="screen-reader" />
                                <div className="flex-grow p-8 h-fit border border-slate-700">
                                    <p className={`${spaceMono.className}`}>
                                        <b>[aria-label]</b> Focus me with keyboard?
                                    </p>
                                    <p className={`${spaceMono.className}`}>
                                        <b>[aria-description]</b> This is one of those fancy cards on home pages. They show you more text on hover and sprinkle some more interaction magic.
                                    </p>
                                </div>
                                : <div className="flex-grow p-8 h-fit border border-slate-700">
                                    <p className={`${spaceMono.className}`}>
                                        Focus me with keyboard?
                                    </p>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}