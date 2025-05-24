import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        <a href="/" className="flex items-center space-x-2" data-aos="fade-right">
          <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            S
          </div>
          <span className="font-bold text-xl text-gray-800">SaaSify</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6" data-aos="fade-down">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600">Features</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="/integrations" className="text-sm font-medium text-gray-700 hover:text-blue-600">Integrations</a>
          <a href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600">About</a>
          <a href="/blog" className="text-sm font-medium text-gray-700 hover:text-blue-600">Blog</a>
          <a href="/security" className="text-sm font-medium text-gray-700 hover:text-blue-600">Security</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4" data-aos="fade-left">
          <a href="/login" className="text-sm px-4 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">Sign In</a>
          <a href="/signup" className="text-sm px-4 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700">Get Started</a>
        </div>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu with slide down animation */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        data-aos="fade-down"
      >
        <nav className="flex flex-col px-4 py-4 space-y-3">
          <a href="#features" className="text-sm text-gray-700 hover:text-blue-600">Features</a>
          <a href="#pricing" className="text-sm text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="/integrations" className="text-sm text-gray-700 hover:text-blue-600">Integrations</a>
          <a href="/about" className="text-sm text-gray-700 hover:text-blue-600">About</a>
          <a href="/blog" className="text-sm text-gray-700 hover:text-blue-600">Blog</a>
          <a href="/security" className="text-sm text-gray-700 hover:text-blue-600">Security</a>
          <div className="pt-4 space-y-2">
            <a href="/login" className="block w-full text-center text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Sign In</a>
            <a href="/signup" className="block w-full text-center text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
