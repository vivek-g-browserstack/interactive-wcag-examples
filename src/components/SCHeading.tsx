import { Dispatch, SetStateAction } from "react"
import { Switch } from "./ui/switch"

type SCHeadingProps = {
    title: string,
    href: string,
    toggleId: string,
    isFixed: boolean,
    setIsFixed: Dispatch<SetStateAction<boolean>>
}

export function SCHeading({ title, href, toggleId, isFixed, setIsFixed }: SCHeadingProps) {

    return (
        <div className="grid grid-cols-3 gap-8 justify-between items-center bg-slate-100 rounded-lg px-2 py-4 mb-4">
            <h2 className="text-2xl">
                {title}
            </h2>
            <a
                href={href}
                target="_blank"
                className="text-center"
            >
                Detailed explanation
            </a>
            <div className="flex gap-2 justify-end items-center">
                <label htmlFor={toggleId}>Make examples compliant</label>
                <Switch
                    aria-label={`Toggle compliance of ${title}`}
                    checked={isFixed}
                    id={toggleId}
                    onCheckedChange={(state) => {
                        setIsFixed(state)
                    }}
                />
            </div>
        </div>
    )
}