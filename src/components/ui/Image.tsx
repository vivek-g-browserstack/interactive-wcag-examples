

export default function Image({ src, alt, className }: { src: string, alt: string, className: string }) {
    return (
        <img
            src={`${process.env.LINK_PREFIX}/${src}`}
            alt={alt}
            className={className}
        />
    )
}