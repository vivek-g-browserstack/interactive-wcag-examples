import { SectionHeading } from "@/components/SectionHeading"
import SectionContent from "@/components/SectionContent"
import { useState } from "react"

export function Reflow() {
    const [isFixed, setIsFixed] = useState(false)
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
                    Zoom this page to 400% or set the page width to 320px
                </h3>
                <p className={`text-sm sm:text-base ${isFixed ? `text-success-default` : `text-danger-default`}`}>
                    {isFixed ? "This page does not require scrolling in both horizontal and vertical directions to access content. No content or functionality is hidden or obstructed." : "This page requires scrolling in both horizontal and vertical directions to access content in some sections. Further, some content and functionality is difficult to access."}
                </p>
            </SectionContent>
        </section>
    )
} 