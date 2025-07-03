import { redirect } from "next/navigation"

export default function Home() {
  redirect(`/sc/all?responsive=false`)
  return null
}
