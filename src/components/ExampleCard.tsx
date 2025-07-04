import { useGlobalStore } from "@/store/globalStore"

export default function ExampleCard({ isFixed, children }: { isFixed: boolean, children: React.ReactNode }) {
    const { isEmbedded } = useGlobalStore()

    return (
        <div className={`${isEmbedded ? `p-6` : `p-4`} rounded-lg shadow-md border bg-gradient-to-b to-30% ${isFixed ? `border-success-default  from-green-50 dark:from-green-950 to-transparent` : `border-danger-default from-red-50 dark:from-red-950 to-transparent`}`}>
            {children}
        </div>
    )
}