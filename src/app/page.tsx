"use client"

import { ContentOnFocusOrHover } from "@/components/SCs/ContentOnHoverOrFocus"
import { FocusVisible } from "@/components/SCs/FocusVisible"
import { NameRoleValue } from "@/components/SCs/NameRoleValue"
import { TextSpacing } from "@/components/SCs/TextSpacing"
import { Reflow } from "@/components/SCs/Reflow"
import { useScrollToAnchorHash } from "@/hooks/useScrolltoAnchorHash"

export default function Home() {
  useScrollToAnchorHash()

  return (
    <main id="main-content" className="px-2 md:px-4 lg:px-4 max-w-[1600px] mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-8 sm:mt-10 md:mt-12 mb-16 sm:mb-20 md:mb-24">WCAG Success Criteria examples gallery</h1>
      <div className="mb-24 sm:mb-28 md:mb-32 lg:mb-36">
        <Reflow />
      </div>
      <div className="mb-24 sm:mb-28 md:mb-32 lg:mb-36">
        <TextSpacing />
      </div>
      <div className="mb-24 sm:mb-28 md:mb-32 lg:mb-36">
        <ContentOnFocusOrHover />
      </div>
      <div className="mb-24 sm:mb-28 md:mb-32 lg:mb-36">
        <FocusVisible />
      </div>
      <div className="mb-24 sm:mb-28 md:mb-32 lg:mb-36">
        <NameRoleValue />
      </div>
    </main>
  )
}
