import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
