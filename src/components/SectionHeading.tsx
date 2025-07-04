import { useEffect, useState } from "react"
import { Switch } from "./ui/switch"
import { useGlobalStore } from "@/store/globalStore"
import { Button } from "./ui/button"

type SectionHeadingProps = {
    title: string,
    id: string,
    href: string,
    toggleId: string,
    isFixed: boolean,
    setIsFixed: (state: boolean) => void,
    isMasterSwitch?: boolean,
}

export function SectionHeading({ title, id, href, toggleId, isFixed, setIsFixed, isMasterSwitch }: SectionHeadingProps) {
    const { isResponsive, isCompliant, isEmbedded, setIsResponsive, setIsCompliant } = useGlobalStore()
    const [keyPressed, setKeyPressed] = useState<string | null>(null)

    useEffect(() => {
        setIsFixed(isCompliant)
    }, [isCompliant])

    useEffect(() => {
        if (isMasterSwitch) {
            setIsCompliant(isFixed)
            setIsResponsive(isFixed)
        }
    }, [isFixed])


    useEffect(() => {
        if (id === "focus-visible") {
            document.querySelector(`#${id}`)?.addEventListener("keydown", handleKeyPress as (event: Event) => void)
            return () => {
                document.querySelector(`#${id}`)?.removeEventListener("keydown", handleKeyPress as (event: Event) => void)
            }
        }
    }, [])

    const handleKeyPress = (event: KeyboardEvent) => {
        setKeyPressed(event.key === " " ? "Space" : event.key)
    }


    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (keyPressed) {
            timeout = setTimeout(() => setKeyPressed(null), 1500)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [keyPressed])


    return (
        <div className={`md:sticky md:top-0 md:z-20 flex ${isResponsive ? `flex-wrap` : ``} gap-8 ${isEmbedded ? `mb-4 justify-between` : `px-6 py-4 mb-6 justify-between bg-neutral-stronger rounded-t-lg shadow`} items-center`}>
            {!isEmbedded ?
                <div className={`flex ${isResponsive ? `flex-wrap` : ``} gap-2 items-center`}>
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            className="w-fit -mx-2"
                            aria-label="Copy link to this section"
                            title="Copy link to this section"
                            onClick={() => {
                                const link = location.href.replace(location.hash, "") + `#${id}`
                                navigator.clipboard.writeText(link)
                                alert("Link copied to clipboard")

                                window.location.href = link
                            }}
                        >
                            <span className="text-sm material-symbols-outlined text-brand-default">
                                tag
                            </span>
                        </Button>
                        <h2 className={`font-bold text-2xl`}>
                            Examples of {title}
                        </h2>
                    </div>
                    <a
                        href={href}
                        target="_blank"
                        aria-label="Detailed explanation of this SC"
                        rel="noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover h-9 p-2`}
                    >
                        <span className="text-base material-symbols-outlined text-neutral-strong">
                            open_in_new
                        </span>
                        <span className="hidden group-hover:block group-focus:block">Detailed explanation</span>
                    </a>
                </div>
                :
                <h2 className="font-semibold text-lg">Interactive examples</h2>
            }

            <div className={`flex gap-2 items-center`}>
                {id === "focus-visible" && keyPressed && (
                    <kbd className="bg-neutral-default px-2 py-1 mr-2">{keyPressed}</kbd>
                )}
                <label htmlFor={toggleId}>Make {isMasterSwitch ? 'this page' : 'examples'} compliant</label>
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