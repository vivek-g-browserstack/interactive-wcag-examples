export function HoverableCardBroken({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    return (
        <div
            className={`h-64 p-8 bg-contain rounded-lg text-white group flex flex-col justify-end ${interactionMethod === "keyboard" ? `pointer-events-none` : ``}`}
            style={{
                backgroundImage: "url('https://png.pngtree.com/background/20210717/original/pngtree-simple-geometric-background-4-picture-image_1437847.jpg')"
            }}
        >
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