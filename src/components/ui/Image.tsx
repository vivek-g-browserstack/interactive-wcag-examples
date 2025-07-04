

export default function Image({ src, alt, className }: { src: string, alt: string, className: string }) {
    return (
        <img
            src={`${process.env.NODE_ENV === "production" ? `/wcag-hands-on` : ``}/${src}`}
            alt={alt}
            className={className}
        />
    )
}