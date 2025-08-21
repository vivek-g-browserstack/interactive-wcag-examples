import { useState } from "react"
import { ButtonBroken } from "./broken/Button"
import { CardBroken } from "./broken/Card"
import { TableBroken } from "./broken/Table"
import { ButtonFixed } from "./fixed/Button"
import { CardFixed } from "./fixed/Card"
import { TableFixed } from "./fixed/Table"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { SectionHeading } from "@/components/SectionHeading"
import { useGlobalStore } from "@/store/globalStore"
import SectionContent from "@/components/SectionContent"
import ExampleCard from "@/components/ExampleCard"

export function TextSpacing() {
    const [isFixed, setIsFixed] = useState(false)
    const { isResponsive } = useGlobalStore()
    const id = "text-spacing"
    // const [applyWCAGValues, setApplyWCAGValues] = useState(true)

    return (
        <section id={id}>
            {true &&
                <style>
                    {`
                        .text-spacing-sc-values > * {
                            line-height: 1.5 !important;
                            letter-spacing: 0.12em !important;
                            word-spacing: 0.16em !important;
                        }

                        .text-spacing-sc-values > p {
                            margin-bottom: 2em !important;
                        }
                `}
                </style>
            }
            <SectionHeading
                title="1.4.12 Text spacing"
                id={id}
                href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing"
                toggleId="text-spacing-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <SectionContent>
                <div className={`flex gap-2 items-center mb-2`}>
                    {/* <label htmlFor="text-spacing-apply-wcag-values">Apply WCAG text spacing values</label>
                <Switch
                    checked={applyWCAGValues}
                    id="text-spacing-apply-wcag-values"
                    onCheckedChange={(state) => {
                        setApplyWCAGValues(state)
                    }}
                /> */}
                    <span
                        className={`flex items-center text-neutral-weaker `}>
                        WCAG recommended text spacing values are applied to examples
                        <TooltipProvider>
                            <Tooltip delayDuration={200}>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="WCAG text spacing values"
                                        variant="ghost"
                                        className={`w-fit mx-auto px-2 py-0`}>
                                        <span className="text-xs material-symbols-outlined text-neutral-weakest">info</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className={`w-84`}>
                                        <code>
                                            line-height: 1.5; <br />
                                            letter-spacing: 0.12em;  <br />
                                            word-spacing: 0.16em;  <br />
                                            margin-bottom: 2em;
                                        </code>
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </span>
                </div>

                <p className={`mb-4 text-neutral-weaker`}>To allow variation in text spacing, avoid fixed widths for buttons, fixed heights for table rows, fixed heights for cards without scroll for overflow. </p>

                <div className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'} gap-6`}>
                    <ExampleCard isFixed={isFixed}>
                        <h3
                            className={`font-bold font-display italic flex items-center text-xl mb-3 sm:mb-4 ${isFixed ? `text-success-default` : `text-danger-default`}`}
                        >
                            <span className="material-symbols-outlined">deployed_code</span>
                            &nbsp;Buttons {isFixed ? `without` : `with`}  fixed widths
                        </h3>
                        <div className="text-spacing-sc-values">
                            {isFixed ? <ButtonFixed /> : <ButtonBroken />}
                        </div>
                    </ExampleCard>
                    <ExampleCard isFixed={isFixed}>
                        <h3
                            className={`font-bold font-display italic flex items-center text-xl mb-3 sm:mb-4 ${isFixed ? `text-success-default` : `text-danger-default`}`}
                        >
                            <span className="material-symbols-outlined">deployed_code</span>
                            &nbsp;Table rows {isFixed ? `without` : `with`}  fixed heights
                        </h3>
                        <div className="text-spacing-sc-values">
                            {isFixed ? <TableFixed /> : <TableBroken />}
                        </div>
                    </ExampleCard>
                    <ExampleCard isFixed={isFixed}>
                        <h3
                            className={`font-bold font-display italic flex items-center text-xl mb-3 sm:mb-4 ${isFixed ? `text-success-default` : `text-danger-default`}`}
                        >
                            <span className="material-symbols-outlined">deployed_code</span>
                            &nbsp;Cards with fixed heights{isFixed && `, no cut off`}
                        </h3>
                        <div className="text-spacing-sc-values">
                            {isFixed ? <CardFixed /> : <CardBroken />}
                        </div>
                    </ExampleCard>
                </div>
            </SectionContent>
        </section>
    )
}