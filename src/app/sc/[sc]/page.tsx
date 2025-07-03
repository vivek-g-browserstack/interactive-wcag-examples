import { scList } from "@/constants/scList"
import SCClientPage from "./SCClientPage"

export default async function SCPage({ params }: { params: Promise<{ sc: string }> }) {
    const sc = (await params).sc
    const index = scList.findIndex((item) => item.slug === sc)
    if (index === -1) return <div>SC not found</div>
    const scMeta = scList[index]

    return <SCClientPage scMeta={scMeta} />
}

export function generateStaticParams() {
    return scList.map(sc => ({ sc: sc.slug }))
} 