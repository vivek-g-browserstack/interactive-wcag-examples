import { useState } from "react"
import { SectionHeading } from "@/components/SectionHeading"
import { HoverableCardBroken } from "./broken/HoverableCardBroken"
import { Space_Mono } from "next/font/google"
import { HoverableCardFixed } from "./fixed/HoverableCardFixed"
import { useGlobalStore } from "@/store/globalStore"
import SectionContent from "@/components/SectionContent"
import ExampleCard from "@/components/ExampleCard"
import { Speech } from "@/components/Speech"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
})


export function NameRoleValue() {
    const [isFixed, setIsFixed] = useState(false)
    const [isSpeechSupported, setIsSpeechSupported] = useState(true)
    const { isResponsive } = useGlobalStore()
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
                        &nbsp;{isFixed ? `An accessible hover interaction` : `An inaccessible hover interaction`}
                    </h2>
                    <div className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'} gap-8 md:gap-4`}>
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
                                <div
                                    className={`min-h-64 p-8 bg-cover bg-no-repeat ${isSpeechSupported ? `flex justify-center items-center` : ``} border border-slate-700`}
                                    style={{
                                        backgroundImage: `url('${process.env.NODE_ENV === "production" ? `/wcag-hands-on` : ``}/geometric-spiral-blue.png')`
                                    }}
                                >
                                    {isSpeechSupported
                                        ?
                                        <Speech
                                            text={`Focus me with keyboard? 
                                        This text is shown only on hover—often inaccessible to keyboard users and screen reader users. This is a common pattern in web design, but it can create accessibility issues for users who rely on keyboard navigation or screen readers.`}
                                            className="mt-4"
                                            setIsSupported={setIsSpeechSupported} />
                                        :
                                        <>
                                            <p className={`${spaceMono.className}`}>
                                                <b>Focus me with keyboard?</b>
                                            </p>
                                            <p className={`${spaceMono.className}`}>
                                                This text is shown only on hover—often inaccessible to keyboard users and screen reader users. This is a common pattern in web design, but it can create accessibility issues for users who rely on keyboard navigation or screen readers.
                                            </p>
                                        </>
                                    }
                                </div>
                                : <div
                                    className={`min-h-64 p-8 bg-cover bg-no-repeat ${isSpeechSupported ? `flex justify-center items-center` : ``} border border-slate-700`}
                                    style={{
                                        backgroundImage: `url('${process.env.NODE_ENV === "production" ? `/wcag-hands-on` : ``}/geometric-spiral-blue.png')`
                                    }}
                                >
                                    {isSpeechSupported
                                        ?
                                        <Speech
                                            text={`Focus me with keyboard?`}
                                            className="mt-4"
                                            setIsSupported={setIsSpeechSupported} />
                                        :
                                        <p className={`${spaceMono.className}`}>
                                            Focus me with keyboard?
                                        </p>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </ExampleCard>
            </SectionContent>
        </section>
    )
}