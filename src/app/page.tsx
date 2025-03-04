"use client"

import { ContentOnFocusOrHover } from "@/components/SCs/ContentOnHoverOrFocus"
import { FocusVisible } from "@/components/SCs/FocusVisible"
import { NameRoleValue } from "@/components/SCs/NameRoleValue"
import { TextSpacing } from "@/components/SCs/TextSpacing"
import { useScrollToAnchorHash } from "@/hooks/useScrolltoAnchorHash"

export default function Home() {
  useScrollToAnchorHash()

  return (
    <div>
      <h1 className="text-4xl text-center mt-12 mb-24">WCAG Success Criteria examples gallery</h1>
      <div className="mb-36">
        <TextSpacing />
      </div>
      <div className="mb-36">
        <ContentOnFocusOrHover />
      </div>
      <div className="mb-36">
        <FocusVisible />
      </div>
      <div className="mb-36">
        <NameRoleValue />
      </div>
    </div>
  )
}
