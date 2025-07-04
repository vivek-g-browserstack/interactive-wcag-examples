import Image from "@/components/ui/Image"

export function HoverableCardFixed({ interactionMethod }: { interactionMethod: "mouse" | "keyboard" }) {
    const randomNumber = Math.floor((Math.random() * 1000))
    return (
        <button
            className={`relative text-left w-full min-h-64 p-8 bg-black rounded-lg text-white outline-offset-4 group flex flex-col justify-end overflow-clip cursor-default ${interactionMethod === "keyboard" ? `pointer-events-none` : ``}`}
            aria-label={interactionMethod === "mouse" ? `Hover me?` : `Focus me with keyboard?`}
            aria-describedby={`hover-card-description-${randomNumber}`}
        >
            <Image
                src="geometric-spiral-blue.png"
                alt=""
                className="absolute -top-[20%] left-0 opacity-75 scale-125 group-hover:scale-150 group-focus-within:scale-150 group-hover:opacity-50 group-focus-within:opacity-50 transition-all duration-300"
            />
            <h4 id="hover-card-title" className="text-xl z-10 mb-4 group-hover:hidden group-focus-within:hidden animate__animated animate__fadeIn">
                {interactionMethod === "mouse" && `Hover me?`}
                {interactionMethod === "keyboard" && `Focus me with keyboard?`}
            </h4>
            <p id={`hover-card-description-${randomNumber}`} className="hidden group-hover:block group-focus-within:block animate__animated animate__fadeIn animate__fast">
                This text is shown only on hover—often inaccessible to keyboard users and screen reader users. This is a common pattern in web design, but it can create accessibility issues for users who rely on keyboard navigation or screen readers.
            </p>
        </button>
    )
}