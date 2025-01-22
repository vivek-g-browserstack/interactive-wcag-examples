import { Button } from "@/components/ui/button"

export function ButtonFixed() {
    return (
        <nav className="w-[278px] mx-auto border border-slate-300 p-4 rounded">
            <ul className="flex flex-col gap-4">
                <li className="border-b border-slate-300">Home</li>
                <li className="border-b border-slate-300">Reports</li>
                <li className="border-b border-slate-300">Settings</li>
                <li>
                    <div className="flex gap-4 flex-wrap">
                        <Button
                            className="block"
                        >
                            New project
                        </Button>
                        <Button
                            variant="secondary"
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