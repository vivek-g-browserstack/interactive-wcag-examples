export function HoverableCardBroken({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    return (
        <div className={`h-64 p-8 bg-gradient-to-b from-[#4568DC] to-[#B06AB3] rounded-lg text-white group ${interactionMethod === "keyboard" ? `pointer-events-none` : ``}`}>
            <h4 className="text-2xl mb-4 group-hover:hidden">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard? (spoiler, you cannot)`}
            </h4>
            <p className="hidden group-hover:block animate__animated animate__fadeIn animate__fast">
                This is one of those fancy cards on home pages. They change on hover and might also sprinkle some interaction magic.
            </p>
        </div >
    )
}