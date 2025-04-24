import { useEffect } from "react"
import { Switch } from "./ui/switch"
import { useReflowStore } from "@/store/reflowStore"

type SCHeadingProps = {
    title: string,
    href: string,
    toggleId: string,
    isFixed: boolean,
    setIsFixed: (state: boolean) => void,
    unaffectedByResponsiveness?: boolean
}

export function SCHeading({ title, href, toggleId, isFixed, setIsFixed, unaffectedByResponsiveness }: SCHeadingProps) {
    const { isResponsive } = useReflowStore()

    useEffect(() => {
        if (!unaffectedByResponsiveness) {
            setIsFixed(isResponsive)
        }
    }, [isResponsive])

    return (
        <div className={`grid ${isResponsive ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-3'} gap-4 sm:gap-8 justify-between items-center bg-slate-100 rounded-lg px-4 sm:px-6 py-4 mb-4`}>
            <h2 className={`${isResponsive ? 'text-xl sm:text-2xl text-center sm:text-left' : 'text-2xl'}`}>
                {title}
            </h2>
            <a
                href={href}
                target="_blank"
                className={`${isResponsive ? 'text-center w-fit mx-auto text-sm sm:text-base' : 'text-center w-fit mx-auto'}`}
            >
                Detailed explanation
            </a>
            <div className={`flex gap-2 ${isResponsive ? 'justify-center sm:justify-end' : 'justify-end'} items-center ${isResponsive ? 'text-sm sm:text-base' : ''}`}>
                <label htmlFor={toggleId}>Make {unaffectedByResponsiveness ? 'this page' : 'examples'} compliant</label>
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