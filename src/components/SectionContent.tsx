import { useGlobalStore } from "@/store/globalStore"

export default function SectionContent({ children }: { children: React.ReactNode }) {
    const { isEmbedded } = useGlobalStore()

    return (
        <div className={`${isEmbedded ? `px-0 mb-10` : `px-6 mb-6`}`}>
            {children}
        </div>
    )
}