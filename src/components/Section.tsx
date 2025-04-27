export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-36 bg-neutral-default border border-neutral-strong rounded-lg shadow">
            {children}
        </div>
    )
}