"use client"
import React, { useEffect } from "react"
import { Reflow } from "@/components/SCs/Reflow"
import { TextSpacing } from "@/components/SCs/TextSpacing"
import { ContentOnFocusOrHover } from "@/components/SCs/ContentOnHoverOrFocus"
import { FocusVisible } from "@/components/SCs/FocusVisible"
import { NameRoleValue } from "@/components/SCs/NameRoleValue"
import Section from "@/components/Section"
import { useReflowStore } from "@/store/reflowStore"
import { useScrollToAnchorHash } from "@/hooks/useScrolltoAnchorHash"
import { ScMeta } from "@/constants/scList"

const components: Record<string, React.FC> = {
    Reflow,
    TextSpacing,
    ContentOnFocusOrHover,
    FocusVisible,
    NameRoleValue,
}

export default function SCClientPage({ scMeta }: { scMeta: ScMeta }) {
    useScrollToAnchorHash()
    const { setIsResponsive, setIsEmbedded } = useReflowStore()
    const SCComponent = components[scMeta.importName]

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const isCompliant = urlParams.get("compliant") === "true"
        if (isCompliant) {
            setIsResponsive(true)
        }
    }, [setIsResponsive])

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const isEmbedded = urlParams.get("embedded") === "true"
        if (isEmbedded) {
            setIsEmbedded(true)
        }
    }, [setIsEmbedded])

    return (
        <main id="main-content" className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
            <Section>
                <SCComponent />
            </Section>
        </main>
    )
}