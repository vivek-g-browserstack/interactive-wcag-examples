import { useState } from "react"
import { SectionHeading } from "@/components/SectionHeading"
import { HoverableCardBroken } from "./broken/HoverableCardBroken"
import { Space_Mono } from "next/font/google"
import { HoverableCardFixed } from "./fixed/HoverableCardFixed"
import { useReflowStore } from "@/store/reflowStore"
import SectionContent from "@/components/SectionContent"
import ExampleCard from "@/components/ExampleCard"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
})


export function NameRoleValue() {
    const [isFixed, setIsFixed] = useState(false)
    const { isResponsive } = useReflowStore()
    const id = "name-role-value"

    return (
        <section id={id}>
            <SectionHeading
                title="4.1.2 Name, Role, Value"
                id={id}
                href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
                toggleId="name-role-value-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <SectionContent>
                <p className={`mb-4 text-neutral-weaker`}>Non standard UI components cannot be consumed by assistive technology, if they do not have proper name, role, state and value.</p>
                <ExampleCard isFixed={isFixed}>
                    <h2 className={`font-bold font-display italic flex items-center text-xl mb-4 sm:mb-6 ${isFixed ? `text-success-default` : `text-danger-default`}`}>
                        <span className="material-symbols-outlined">deployed_code</span>
                        &nbsp;A card with hover interaction
                    </h2>
                    <div className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'} gap-6`}>
                        <div className="flex flex-col justify-between">
                            <h3 className={`font-medium text-xl mb-2 ${isFixed ? `text-success-default` : `text-danger-default`}`}>How mouse users experience it</h3>
                            {isFixed
                                ? <HoverableCardFixed interactionMethod="mouse" />
                                : <HoverableCardBroken interactionMethod="mouse" />
                            }
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className={`font-medium text-xl mb-2 ${isFixed ? `text-success-default` : `text-danger-default`}`}>How keyboard users experience it</h3>
                            {isFixed
                                ? <HoverableCardFixed interactionMethod="keyboard" />
                                : <HoverableCardBroken interactionMethod="keyboard" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <h3 className={`font-medium text-xl mb-2 ${isFixed ? `text-success-default` : `text-danger-default`}`}> How screen reader users experience it</h3>
                            {isFixed
                                ?
                                // <HoverableCardFixed interactionMethod="screen-reader" />
                                <div className="p-8 border border-slate-700">
                                    <p className={`${spaceMono.className}`}>
                                        <b>[aria-label]</b> Focus me with keyboard?
                                    </p>
                                    <p className={`${spaceMono.className}`}>
                                        <b>[aria-description]</b> This is one of those fancy cards on home pages. They show you more text on hover and sprinkle some more interaction magic.
                                    </p>
                                </div>
                                : <div className="min-h-64 p-8 border border-slate-700">
                                    <p className={`${spaceMono.className}`}>
                                        Focus me with keyboard?
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </ExampleCard>
            </SectionContent>
        </section>
    )
}