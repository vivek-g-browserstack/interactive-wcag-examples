import { redirect } from "next/navigation"
// import { scList } from "@/lib/scList"

export default function Home() {
  redirect(`/sc/all`)
  return null
}
