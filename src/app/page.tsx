"use client"

import { ContentOnFocusOrHover } from "@/components/ContentOnHoverOrFocus"
import { TextSpacing } from "@/components/TextSpacing"

export default function Home() {
  return (
    <div>
      <div className="mb-36">
        <TextSpacing />
      </div>
      <div className="mb-36">
        <ContentOnFocusOrHover />
      </div>
    </div>
  )
}
