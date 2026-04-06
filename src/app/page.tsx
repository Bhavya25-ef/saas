import { LandingPage } from "@/components/landing/landing-page"
import { Navbar } from "@/components/navigation/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LandingPage />
    </main>
  )
}
