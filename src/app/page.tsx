import HomePage from "./components/hero/hero"
import AboutMe from "./components/about/page"
import Projects from "./components/projects/projects"
import Contact from "./components/call-to-action/call-to-action"
import ContactPage from "./(pages)/contact/page"
export default function Page() {
  return (
    <div className="bg-gray-100">
      <HomePage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}