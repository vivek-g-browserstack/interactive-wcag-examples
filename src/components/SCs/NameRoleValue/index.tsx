import { useState } from "react"
// import { SectionHeading } from "@/components/SectionHeading"
import { HoverableCardBroken } from "./broken/HoverableCardBroken"
import { Space_Mono } from "next/font/google"
import { HoverableCardFixed } from "./fixed/HoverableCardFixed"
import { useGlobalStore } from "@/store/globalStore"
// import SectionContent from "@/components/SectionContent"
// import ExampleCard from "@/components/ExampleCard"
import { Speech } from "@/components/Speech"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
})


export function NameRoleValue() {
    // const [isFixed, setIsFixed] = useState(false)
    const { isResponsive } = useGlobalStore()
    const id = "name-role-value"

    return (
        <section id={id}>
            {/* <SectionContent> */}
            <p className={`mb-8 text-neutral-weaker`}>Non standard UI components cannot be consumed by assistive technology, if they do not have proper name, role, state and value.</p>
            <div className="flex flex-col gap-12">
                <Render isFixed={false} isResponsive={isResponsive} />
                <Render isFixed={true} isResponsive={isResponsive} />
            </div>
            {/* </SectionContent> */}
        </section>
    )
}

function Render({ isFixed, isResponsive }: { isFixed: boolean, isResponsive: boolean }) {
    const [isSpeechSupported, setIsSpeechSupported] = useState(true)

    return (
        <div>
            {/* <ExampleCard isFixed={isFixed}> */}
            <h2 className={`font-bold flex gap-2 text-xl mb-2 ${isFixed ? `text-success-default` : `text-danger-default`}`}>
                <span className="material-symbols-outlined">deployed_code</span>
                {isFixed ? `A hover interaction that is accessible` : `A hover interaction that is not accessible`}
            </h2>
            <div className={`grid ${isResponsive ? 'grid-cols-3 md:grid-cols-3 lg:grid-cols-3' : 'grid-cols-3'} gap-8 md:gap-4`}>
                <div className="flex flex-col justify-between">
                    <h3 className={`font-medium text-lg mb-2`}>How mouse users experience it</h3>
                    {isFixed
                        ? <HoverableCardFixed interactionMethod="mouse" />
                        : <HoverableCardBroken interactionMethod="mouse" />
                    }
                </div>
                <div className="flex flex-col justify-between">
                    <h3 className={`font-medium text-lg mb-2`}>How keyboard users experience it</h3>
                    {isFixed
                        ? <HoverableCardFixed interactionMethod="keyboard" />
                        : <HoverableCardBroken interactionMethod="keyboard" />
                    }
                </div>
                <div className="flex flex-col">
                    <h3 className={`font-medium text-lg mb-2`}> How screen reader users experience it</h3>
                    {isFixed
                        ?
                        <div
                            className={`min-h-64 h-full p-8 bg-cover bg-no-repeat ${isSpeechSupported ? `flex justify-center items-center` : ``} border border-slate-700`}
                            style={{
                                backgroundImage: `url('${process.env.NODE_ENV === "production" ? `/wcag-hands-on` : ``}/geometric-spiral-blue.png')`
                            }}
                        >
                            {isSpeechSupported
                                ?
                                <Speech
                                    text={`Focus me with keyboard? 
                                        This text is shown on hover—often inaccessible to keyboard users and screen reader users.`}
                                    className="mt-4"
                                    setIsSupported={setIsSpeechSupported} />
                                :
                                <>
                                    <p className={`${spaceMono.className}`}>
                                        <b>Focus me with keyboard?</b>
                                    </p>
                                    <p className={`${spaceMono.className}`}>
                                        This text is shown on hover—often inaccessible to keyboard users and screen reader users.
                                    </p>
                                </>
                            }
                        </div>
                        : <div
                            className={`min-h-64 h-full p-8 bg-cover bg-no-repeat ${isSpeechSupported ? `flex justify-center items-center` : ``} border border-slate-700`}
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
            {/* </ExampleCard> */}
        </div>
    )
}