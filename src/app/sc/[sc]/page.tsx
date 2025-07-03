"use client"

import React from "react"
import { scList } from "@/lib/scList"
import { Reflow } from "@/components/SCs/Reflow"
import { TextSpacing } from "@/components/SCs/TextSpacing"
import { ContentOnFocusOrHover } from "@/components/SCs/ContentOnHoverOrFocus"
import { FocusVisible } from "@/components/SCs/FocusVisible"
import { NameRoleValue } from "@/components/SCs/NameRoleValue"
import Section from "@/components/Section"

const components: Record<string, React.FC> = {
    Reflow,
    TextSpacing,
    ContentOnFocusOrHover,
    FocusVisible,
    NameRoleValue,
}

export default function SCPage({ params }: { params: Promise<{ sc: string }> }) {
    const { sc } = React.use(params)
    const index = scList.findIndex((item) => item.slug === sc)
    if (index === -1) return <div>SC not found</div>
    const scMeta = scList[index]
    const SCComponent = components[scMeta.importName]

    return (
        <main id="main-content" className="px-4 md:px-6 lg:px-8 py-8 max-w-[1600px] mx-auto">
            <Section>
                <SCComponent />
            </Section>
            {/* <div className="flex justify-between mt-8">
                {index > 0 ? (
                    <a href={`/sc/${scList[index - 1].slug}`} className="btn btn-secondary">← Previous</a>
                ) : <span />}
                {index < scList.length - 1 ? (
                    <a href={`/sc/${scList[index + 1].slug}`} className="btn btn-primary">Next →</a>
                ) : <span />}
            </div> */}
        </main>
    )
} 