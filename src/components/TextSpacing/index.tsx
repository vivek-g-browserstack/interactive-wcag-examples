import { useState } from "react"
import { ButtonBroken } from "./broken/Button"
import { Switch } from "../ui/switch"
import { ButtonFixed } from "./fixed/Button"

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
            <div className="flex items-center justify-between">
                <h2 className="text-2xl mb-2">1.4.12 Text spacing</h2>
                <div className="flex gap-2 items-center mb-4">
                    <label htmlFor="text-spacing-apply-wcag-values">Compliant</label>
                    <Switch
                        id="text-spacing-apply-wcag-values"
                        onCheckedChange={(state) => {
                            setIsFixed(state)
                        }}
                    />
                </div>
            </div>

            <div className="flex gap-2 items-center mb-4">
                <label htmlFor="text-spacing-apply-wcag-values">Apply WCAG values</label>
                <Switch
                    id="text-spacing-apply-wcag-values"
                    onCheckedChange={(state) => {
                        setApplyWCAGValues(state)
                    }}
                />
            </div>

            <div>
                {isFixed ? <ButtonFixed /> : <ButtonBroken />}
            </div>
        </div>
    )
}