import { useGlobalStore } from "@/store/globalStore"

export default function ExampleCard({ children }: { children: React.ReactNode }) {
    const { isEmbedded } = useGlobalStore()

    return (
        <div className={`${isEmbedded ? `p-8` : `p-4`} rounded-lg shadow-md bg-surface-default border border-neutral-strong`}>
            {children}
        </div>
    )
}