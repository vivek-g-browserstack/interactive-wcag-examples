"use client"

import { ContentOnFocusOrHover } from "@/components/ContentOnHoverOrFocus"
import { TextSpacing } from "@/components/TextSpacing"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center mt-12 mb-24">Learn WCAG success criteria through examples </h1>
      <div className="mb-36">
        <TextSpacing />
      </div>
      <div className="mb-36">
        <ContentOnFocusOrHover />
      </div>
    </div>
  )
}
