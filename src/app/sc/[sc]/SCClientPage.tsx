"use client"
import React from "react"
import { Reflow } from "@/components/SCs/Reflow"
import { TextSpacing } from "@/components/SCs/TextSpacing"
import { ContentOnFocusOrHover } from "@/components/SCs/ContentOnHoverOrFocus"
import { FocusVisible } from "@/components/SCs/FocusVisible"
import { NameRoleValue } from "@/components/SCs/NameRoleValue"
import Section from "@/components/Section"
import { useScrollToAnchorHash } from "@/hooks/useScrolltoAnchorHash"
import { ScMeta } from "@/constants/scList"
import { useUrlParamsToStore } from "@/hooks/useUrlParam"

const components: Record<string, React.FC> = {
    Reflow,
    TextSpacing,
    ContentOnFocusOrHover,
    FocusVisible,
    NameRoleValue,
}

export default function SCClientPage({ scMeta }: { scMeta: ScMeta }) {
    useScrollToAnchorHash()
    useUrlParamsToStore()
    const SCComponent = components[scMeta.importName]

    return (
        <main id="main-content" className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
            <Section>
                <SCComponent />
            </Section>
        </main>
    )
}