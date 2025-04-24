import { SCHeading } from "@/components/SCHeading"
import { useReflowStore } from "@/store/reflowStore"

export function Reflow() {
    const { isResponsive, setIsResponsive } = useReflowStore()

    return (
        <section id="reflow" className="mx-4">
            <SCHeading
                title="1.4.10 Reflow"
                href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
                toggleId="reflow-compliance"
                isFixed={isResponsive}
                setIsFixed={setIsResponsive}
                unaffectedByResponsiveness={true}
            />
            <div className="p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200">
                <h3 className="font-bold text-lg sm:text-xl text-center mb-4">
                    Zoom this page to 400% or set the page width to 320px or height to 256px
                </h3>
                <p className={`text-center text-sm sm:text-base ${isResponsive ? `text-green-700` : `text-red-600`}`}>
                    {isResponsive ? "This page does not require scrolling in both horizontal and vertical directions to access any content. No content or functionality is hidden or obstructed, except for the table where two dimnensional scroll is permitted." : "This page requires scrolling in both horizontal and vertical directions to access content in some sections. Further, some content and functionality is difficult to access."}
                </p>
            </div>
        </section>
    )
} 