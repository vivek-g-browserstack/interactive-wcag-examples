// import { useGlobalStore } from "@/store/globalStore"

export default function Section({ children }: { children: React.ReactNode }) {
    // const { isEmbedded } = useGlobalStore()

    return (
        <div className={`bg-neutral-strong rounded-md p-6`}>
            {children}
        </div>
    )
}