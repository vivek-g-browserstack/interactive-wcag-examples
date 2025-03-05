export function HoverableCardBroken({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    return (
        <div
            className={`relative h-64 p-8 bg-cover rounded-lg text-white group flex flex-col justify-end overflow-clip ${interactionMethod === "keyboard" ? `pointer-events-none` : ``}`}
        >
            <img
                src="https://png.pngtree.com/background/20210717/original/pngtree-simple-geometric-background-4-picture-image_1437847.jpg"
                alt=""
                className="absolute w-full top-0 left-0 -z-20 group-hover:scale-125 transition-all duration-300"
            />
            <h4 className="text-xl mb-4 group-hover:hidden">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard? (spoiler, you cannot)`}
            </h4>
            <p className="hidden group-hover:block animate__animated animate__fadeIn animate__fast">
                This is one of those fancy cards on landing pages. They change on hover and might also sprinkle some interaction magic.
            </p>
        </div>
    )
}