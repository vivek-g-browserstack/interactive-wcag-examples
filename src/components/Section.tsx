import { useReflowStore } from "@/store/reflowStore"

export default function Section({ children }: { children: React.ReactNode }) {
    const { isEmbedded } = useReflowStore()

    return (
        <div className={`${isEmbedded ? `mb-4` : `mb-36`} bg-neutral-default border border-neutral-strong rounded-lg shadow`}>
            {children}
        </div>
    )
}