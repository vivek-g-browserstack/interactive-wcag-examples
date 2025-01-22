import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function DismissibleBroken() {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild >
                    <Button variant="outline" className="w-fit mx-auto">Hover</Button>
                </TooltipTrigger>
                <TooltipContent onEscapeKeyDown={(e) => e.preventDefault()}>
                    <p className="w-48">I am the content inside the tooltip. Do you know the cheat code to send me away?</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}