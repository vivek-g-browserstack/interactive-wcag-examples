import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function DismissibleFixed() {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="w-fit block mx-auto">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="w-48">Do you know the cheat code to send me away?</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}