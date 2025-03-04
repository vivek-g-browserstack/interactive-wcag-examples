export function HoverableCardFixed({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    return (
        <button
            className="text-left flex flex-col items-start w-full h-64 p-8 bg-gradient-to-b from-stone-700 to-stone-400 rounded-lg text-white group hover:cursor-default"
            aria-label={interactionMethod === "mouse" ? `Hover me?` : `Focus me with keyboard?`}
            aria-describedby="hover-card-description"
        >
            <h4 id="hover-card-title" className="text-xl mb-4 group-hover:font-bold group-focus-within:font-bold">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard?`}
            </h4>
            <p id="hover-card-description" className="hidden group-hover:block group-focus-within:block animate__animated animate__fadeIn animate__fast">
                This is one of those fancy cards on home pages. They show you more text on hover and sprinkle some more interaction magic.
            </p>
        </button>
    )
}