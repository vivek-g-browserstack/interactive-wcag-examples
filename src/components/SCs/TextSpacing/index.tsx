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
import { SCHeading } from "@/components/SCHeading"
import { useReflowStore } from "@/store/reflowStore"

export function TextSpacing() {
    const [isFixed, setIsFixed] = useState(false)
    const { isResponsive } = useReflowStore()
    // const [applyWCAGValues, setApplyWCAGValues] = useState(true)

    return (
        <section id="text-spacing" className="mx-4">
            {true &&
                <style>
                    {`
                        #text-spacing-wcag > * {
                            line-height: 1.5 !important;
                            letter-spacing: 0.12em !important;
                            word-spacing: 0.16em !important;
                        }

                        #text-spacing-wcag > p {
                            margin-bottom:2em !important;
                        }
                `}
                </style>
            }
            <SCHeading
                title="1.4.12 Text spacing"
                href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing"
                toggleId="text-spacing-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <div className={`flex ${isResponsive ? 'flex-col sm:flex-row' : 'flex-row'} gap-2 items-center mb-2`}>
                {/* <label htmlFor="text-spacing-apply-wcag-values">Apply WCAG text spacing values</label>
                <Switch
                    checked={applyWCAGValues}
                    id="text-spacing-apply-wcag-values"
                    onCheckedChange={(state) => {
                        setApplyWCAGValues(state)
                    }}
                /> */}
                <span className={`flex items-center ${isResponsive ? 'text-sm sm:text-base' : ''}`}>
                    WCAG recommended text spacing values are applied to examples
                    <TooltipProvider>
                        <Tooltip delayDuration={200}>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" className={`w-fit mx-auto px-2 py-0 ${isResponsive ? 'text-sm sm:text-base' : ''}`}>ⓘ</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className={`${isResponsive ? 'w-64 sm:w-84' : 'w-84'}`}>
                                    <code className={`${isResponsive ? 'text-xs sm:text-sm' : ''}`}>
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

            <p className={`mb-4 ${isResponsive ? 'text-sm sm:text-base' : ''}`}>To allow variation in text spacing, avoid fixed widths for buttons, fixed heights for table rows, fixed heights for heights without scroll for overflow. </p>

            <div id="text-spacing-wcag" className={`grid ${isResponsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'} gap-4 sm:gap-6 md:gap-8`}>
                <div className={`p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200`}>
                    <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-3 sm:mb-4 ${isFixed ? `text-green-700` : `text-red-600`}`}>Buttons {isFixed ? `without` : `with`}  fixed widths</h3>
                    {isFixed ? <ButtonFixed /> : <ButtonBroken />}
                </div>
                <div className={`p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200`}>
                    <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-3 sm:mb-4 ${isFixed ? `text-green-700` : `text-red-600`}`}>Table rows {isFixed ? `without` : `with`}  fixed heights</h3>
                    {isFixed ? <TableFixed /> : <TableBroken />}
                </div>
                <div className={`p-3 sm:p-4 rounded-lg border-4 border-dashed border-slate-200`}>
                    <h3 className={`font-bold ${isResponsive ? 'text-lg sm:text-xl' : 'text-xl'} text-center mb-3 sm:mb-4 ${isFixed ? `text-green-700` : `text-red-600`}`}>Cards with fixed heights{isFixed && `, no cut off`}</h3>
                    {isFixed ? <CardFixed /> : <CardBroken />}
                </div>
            </div>
        </section>
    )
}