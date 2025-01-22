import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function PersistentBroken() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="w-fit mx-auto">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="w-48">I am the content inside the tooltip. Do I get dismissed automatically after a while or do I stay like I'm your best friend?</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}