import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Books from "@/components/books"
import Interests from "@/components/interests"

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-orange-100 via-orange-50/90 to-white">
      <Hero />
      <Experience />
      <Projects />
      <Books />
      <Interests />
    </main>
  )
}
