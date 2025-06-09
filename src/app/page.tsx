"use client"

import { ContentOnFocusOrHover } from "@/components/SCs/ContentOnHoverOrFocus"
import { FocusVisible } from "@/components/SCs/FocusVisible"
import { NameRoleValue } from "@/components/SCs/NameRoleValue"
import { TextSpacing } from "@/components/SCs/TextSpacing"
import { Reflow } from "@/components/SCs/Reflow"
import { useScrollToAnchorHash } from "@/hooks/useScrolltoAnchorHash"
import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { useReflowStore } from "@/store/reflowStore"
import { useEffect } from "react"

export default function Home() {
  useScrollToAnchorHash()
  const setIsResponsive = useReflowStore((state) => state.setIsResponsive)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const isCompliant = urlParams.get('compliant') === 'true'

    if (isCompliant) {
      setIsResponsive(true)
    }
  }, [])

  return (
    <main id="main-content" className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
      <h1
        className="font-extrabold flex justify-between items-center text-4xl mt-4 mb-16"
      >
        <span className="flex gap-4 items-center">
          WCAG examples gallery
          <Button
            variant="ghost"
            aria-label="Copy compliant link to this page"
            title="Copy compliant link to this page"
            onClick={() => {
              const url = new URL(location.href)
              url.searchParams.set('compliant', 'true')
              const link = url.toString()
              navigator.clipboard.writeText(link)
              alert("You found the easter egg! Direct link with compliance ON for all examples, copied to clipboard!")

              window.location.href = link
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "2.5rem" }}
            >
              person_celebrate
            </span>
          </Button>
        </span>
        <Button
          variant="ghost"
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
          onClick={() => {
            document.querySelector("html")?.classList.toggle("dark")
          }}
        >
          <span className="text-sm material-symbols-outlined text-brand-default">
            dark_mode
          </span>
        </Button>
      </h1>
      <Section>
        <Reflow />
      </Section>
      <Section>
        <TextSpacing />
      </Section>
      <Section>
        <ContentOnFocusOrHover />
      </Section>
      <Section>
        <FocusVisible />
      </Section>
      <Section>
        <NameRoleValue />
      </Section>
    </main>
  )
}
