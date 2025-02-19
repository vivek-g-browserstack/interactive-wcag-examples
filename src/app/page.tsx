"use client"

import { ContentOnFocusOrHover } from "@/components/ContentOnHoverOrFocus"
import { FocusVisible } from "@/components/FocusVisible"
import { TextSpacing } from "@/components/TextSpacing"
import { useScrollToAnchorHash } from "@/hooks/useScrolltoAnchorHash"

export default function Home() {
  useScrollToAnchorHash()

  return (
    <div>
      <h1 className="text-4xl text-center mt-12 mb-24">Learn WCAG success criteria through examples </h1>
      <div className="mb-36">
        <TextSpacing />
      </div>
      <div className="mb-36">
        <ContentOnFocusOrHover />
      </div>
      <div className="mb-36">
        <FocusVisible />
      </div>
    </div>
  )
}
