import { useState } from "react"
import { ButtonBroken } from "./broken/Button"
import { Switch } from "../ui/switch"
import { ButtonFixed } from "./fixed/Button"
import { TableBroken } from "./broken/Table"
import { TableFixed } from "./fixed/Table"
import { CardBroken } from "./broken/Card"
import { CardFixed } from "./fixed/Card"

export function TextSpacing() {
    const [isFixed, setIsFixed] = useState(false)
    const [applyWCAGValues, setApplyWCAGValues] = useState(false)

    return (
        <div className="px-4">
            {applyWCAGValues &&
                <style>
                    {`
                        * {
                            line-height: 1.5 !important;
                            letter-spacing: 0.12em !important;
                            word-spacing: 0.16em !important;
                        }

                        p {
                            margin-bottom:2em !important;
                        }
                `}
                </style>
            }
            <div className="flex gap-8 items-center mb-4">
                <h2 className="text-2xl">1.4.12 Text spacing</h2>
                <div className="flex gap-2 items-center">
                    <label htmlFor="text-spacing-compliance">Make examples compliant</label>
                    <Switch
                        id="text-spacing-compliance"
                        onCheckedChange={(state) => {
                            setIsFixed(state)
                        }}
                    />
                </div>
            </div>

            <div className="flex gap-2 items-center mb-4">
                <label htmlFor="text-spacing-apply-wcag-values">Apply WCAG text spacing values</label>
                <Switch
                    id="text-spacing-apply-wcag-values"
                    onCheckedChange={(state) => {
                        setApplyWCAGValues(state)
                    }}
                />
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200 flex flex-col items-center">
                    <h3 className="font-bold mb-4">Buttons with fixed widths</h3>
                    {isFixed ? <ButtonFixed /> : <ButtonBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200 flex flex-col items-center">
                    <h3 className="font-bold mb-4">Table rows with fixed heights</h3>
                    {isFixed ? <TableFixed /> : <TableBroken />}
                </div>
                <div className="p-4 rounded-lg border-4 border-dashed border-slate-200 flex flex-col items-center">
                    <h3 className="font-bold mb-4">Cards with fixed heights</h3>
                    {isFixed ? <CardFixed /> : <CardBroken />}
                </div>

            </div>
        </div>
    )
}