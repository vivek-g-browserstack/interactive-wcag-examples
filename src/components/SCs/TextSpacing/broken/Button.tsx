import { Button } from "@/components/ui/button"

export function ButtonBroken() {
    return (
        <nav className="max-w-[278px] bg-neutral-default border border-slate-300 p-4 rounded">
            <ul className="flex flex-col gap-4">
                <li className="border-b border-slate-300">Home</li>
                <li className="border-b border-slate-300">Reports</li>
                <li className="border-b border-slate-300">Settings</li>
                <li>
                    <div className="flex gap-4">
                        <Button
                            className="block overflow-hidden"
                        >
                            Create new item
                        </Button>
                        <Button
                            variant="outline"
                            className="block overflow-hidden"
                        >
                            Get support
                        </Button>
                    </div>
                </li>
            </ul>

        </nav>
    )
}