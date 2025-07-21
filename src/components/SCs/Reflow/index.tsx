import { SectionHeading } from "@/components/SectionHeading"
import SectionContent from "@/components/SectionContent"
import { useState } from "react"
import { useGlobalStore } from "@/store/globalStore"

export function Reflow() {
    const [isFixed, setIsFixed] = useState(false)
    const { isIframe } = useGlobalStore()
    const id = "reflow"


    return (
        <section id={id}>
            <SectionHeading
                title="1.4.10 Reflow"
                id={id}
                href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                toggleId="reflow-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
                isMasterSwitch={true}
            />
            <SectionContent>
                <h3 className="font-medium text-xl mb-4">
                    Here&apos;s how a page will look at 400% zoom or 320px width
                </h3>
                <p className={`text-sm mb-6 sm:text-base ${isFixed ? `text-success-default` : `text-danger-default`}`}>
                    {isFixed ? "This page does not require scrolling in both horizontal and vertical directions to access content. No content or functionality is hidden or obstructed." : "This page requires scrolling in both horizontal and vertical directions to access content in some sections. Further, some content and functionality is difficult to access."}
                </p>
                {!isIframe &&
                    <iframe
                        src={`${process.env.NODE_ENV === "production" ? `/wcag-hands-on` : ``}/sc/all?responsive=${isFixed ? `true` : `false`}&compliant=${isFixed ? `true` : `false`}&iframe=true`}
                        className="w-[320px] h-[360px] rounded-xl shadow-lg box-content border-4 border-neutral-strong"
                    />
                }
            </SectionContent>
        </section>
    )
} 