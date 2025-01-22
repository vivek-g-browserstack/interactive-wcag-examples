import { Button } from "@/components/ui/button"

export function CardFixed() {
    return (
        <div className="bg-slate-100 p-8 rounded overflow-auto h-[480px]">
            <h4 className="text-2xl">Card title</h4>
            <hr className="border border-slate-300 my-2" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="mb-4"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <div className="flex gap-4 flex-wrap">
                <Button
                    className="block"
                >
                    Buy now
                </Button>
                <Button
                    variant="outline"
                    className="block"
                >
                    Save for later
                </Button>
            </div>
        </div>
    )
}