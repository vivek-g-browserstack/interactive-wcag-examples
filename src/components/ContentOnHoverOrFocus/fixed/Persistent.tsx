import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function PersistentFixed() {
    return (
        <TooltipProvider>
            <Tooltip>
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