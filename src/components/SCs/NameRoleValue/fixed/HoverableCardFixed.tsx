export function HoverableCardFixed({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    const randomNumber = Math.floor((Math.random() * 1000))
    return (
        <button
            className={`text-left w-full h-64 p-8 bg-contain rounded-lg text-white outline-offset-4 group flex flex-col justify-end cursor-default ${interactionMethod === "keyboard" ? `pointer-events-none` : ``}`}
            aria-label={interactionMethod === "mouse" ? `Hover me?` : `Focus me with keyboard?`}
            aria-describedby={`hover-card-description-${randomNumber}`}
            style={{
                backgroundImage: "url('https://png.pngtree.com/background/20210717/original/pngtree-simple-geometric-background-4-picture-image_1437847.jpg')"
            }}
        >
            <h4 id="hover-card-title" className="text-xl mb-4 group-hover:hidden group-focus-within:hidden">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard?`}
            </h4>
            <p id={`hover-card-description-${randomNumber}`} className="hidden group-hover:block group-focus-within:block animate__animated animate__fadeIn animate__fast">
                This is one of those fancy cards on landing pages. They change on hover and might also sprinkle some interaction magic.
            </p>
        </button>
    )
}