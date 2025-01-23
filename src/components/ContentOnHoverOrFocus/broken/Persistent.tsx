import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"

export function PersistentBroken() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}
                open={isOpen}
                onOpenChange={(open) => {
                    setIsOpen(open)
                    if (open) {
                        setTimeout(() => setIsOpen(false), 1000)
                    }
                }}
            >
                <TooltipTrigger asChild>
                    <Button variant="outline" className="w-fit block mx-auto">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="w-48">I am the content inside the tooltip. Do I get dismissed automatically after a while or do I stay like I am your best friend?</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}