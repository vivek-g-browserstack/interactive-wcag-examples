import Image from "@/components/ui/Image"

export function HoverableCardBroken({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    return (
        <div
            className={`relative min-h-64 p-8 bg-black rounded-lg text-white group flex flex-col justify-end overflow-clip ${interactionMethod === "keyboard" ? `pointer-events-none` : ``}`}
        >
            <Image
                src="geometric-spiral-blue.png"
                alt=""
                className="absolute -top-[20%] left-0 opacity-75 scale-125 group-hover:scale-150  group-hover:opacity-50 transition-all duration-300"
            />
            <h4 className="text-xl z-10 mb-4 group-hover:hidden animate__animated animate__fadeIn">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard? (spoiler, you cannot)`}
            </h4>
            <p className="hidden group-hover:block animate__animated animate__fadeIn animate__fast">
                This text is shown only on hover—often inaccessible to keyboard users and screen reader users. This is a common pattern in web design, but it can create accessibility issues for users who rely on keyboard navigation or screen readers.
            </p>
        </div>
    )
}