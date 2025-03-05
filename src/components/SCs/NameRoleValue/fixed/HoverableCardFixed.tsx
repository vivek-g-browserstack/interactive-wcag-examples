export function HoverableCardFixed({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    const randomNumber = Math.floor((Math.random() * 1000))
    return (
        <button
            className="text-left flex flex-col items-start w-full h-64 p-8 bg-gradient-to-b from-[#4568DC] to-[#B06AB3] rounded-lg text-white group cursor-default"
            aria-label={interactionMethod === "mouse" ? `Hover me?` : `Focus me with keyboard?`}
            aria-describedby={`hover-card-description-${randomNumber}`}
        >
            <h4 id="hover-card-title" className="text-2xl mb-4 group-hover:hidden group-focus-within:hidden">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard?`}
            </h4>
            <p id={`hover-card-description-${randomNumber}`} className="hidden group-hover:block group-focus-within:block animate__animated animate__fadeIn animate__fast">
                This is one of those fancy cards on home pages. They change on hover and might also sprinkle some interaction magic.
            </p>
        </button>
    )
}