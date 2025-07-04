import { useGlobalStore } from "@/store/globalStore"

export default function Section({ children }: { children: React.ReactNode }) {
    const { isEmbedded } = useGlobalStore()

    return (
        <div className={`${isEmbedded ? `mb-4` : `mb-36 bg-neutral-default border border-neutral-strong shadow`}  rounded-lg`}>
            {children}
        </div>
    )
}