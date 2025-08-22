export function HoverableCardBroken({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    return (
        <div
            className={`min-h-64 h-full p-8 bg-black rounded-lg text-white group flex flex-col justify-center overflow-clip bg-cover bg-no-repeat ${interactionMethod === "keyboard" ? `pointer-events-none` : ``}`}
            style={{
                backgroundImage: `url('${process.env.NODE_ENV === "production" ? `/wcag-hands-on` : ``}/geometric-spiral-blue.png')`
            }}
        >
            <h4 className="text-xl z-10 mb-4 group-hover:hidden animate__animated animate__fadeIn">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard? (spoiler, you cannot)`}
            </h4>
            <p className="hidden group-hover:block animate__animated animate__fadeIn animate__fast">
                This text is shown on hover—often inaccessible to keyboard users and screen reader users.
            </p>
        </div>
    )
}