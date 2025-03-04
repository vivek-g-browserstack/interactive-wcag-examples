import { useState } from "react"
import { SCHeading } from "@/components/SCHeading"

export function NameRoleValue() {
    const [isFixed, setIsFixed] = useState(false)

    return (
        <section id="name-role-value" className="px-4">
            <SCHeading
                title="4.1.2 Name, Role, Value"
                href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
                toggleId="name-role-value-compliance"
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
        </section>
    )
}