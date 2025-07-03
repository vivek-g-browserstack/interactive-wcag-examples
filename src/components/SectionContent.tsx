import { useReflowStore } from "@/store/globalStore"

export default function SectionContent({ children }: { children: React.ReactNode }) {
    const { isEmbedded } = useReflowStore()

    return (
        <div className={`${isEmbedded ? `px-10 mb-10` : `px-6 mb-6`}`}>
            {children}
        </div>
    )
}