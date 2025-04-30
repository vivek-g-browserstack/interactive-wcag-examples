import { Button } from "@/components/ui/button"

export function ButtonFixed() {
    return (
        <nav className="max-w-[278px] bg-neutral-default border border-neutral-strong p-4 rounded">
            <ul className="flex flex-col gap-4">
                <li className="border-b border-neutral-strong">Home</li>
                <li className="border-b border-neutral-strong">Reports</li>
                <li className="border-b border-neutral-strong">Settings</li>
                <li>
                    <div className="flex gap-4 flex-wrap">
                        <Button
                            className="block"
                        >
                            Create new item
                        </Button>
                        <Button
                            variant="outline"
                            className="block"
                        >
                            Get support
                        </Button>
                    </div>
                </li>
            </ul>

        </nav>
    )
}