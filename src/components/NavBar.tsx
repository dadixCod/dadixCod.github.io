import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="py-5 px-4 sm:px-12 md:px-40">
      <div className="flex justify-between items-center">
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 text-base font-medium whitespace-nowrap">
          {navLinks.map(link => (
            <li key={link.href} className="cursor-pointer hover:text-gray-600">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex w-full justify-end items-center gap-5">
          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button className="cursor-pointer" onClick={() => setLangOpen(v => !v)}>
              <img src="/icons/languages.svg" alt="Languages" width={20} height={20} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50 text-sm">
                <p className="px-3 py-2 text-gray-500 font-medium border-b">Language</p>
                <button
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                  onClick={() => setLangOpen(false)}
                >
                  English
                </button>
                <button
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                  onClick={() => setLangOpen(false)}
                >
                  French
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 p-5 space-y-4 shadow-xl">
            <div className="flex justify-between items-center">
              <b>Menu</b>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-4 text-lg font-medium">
              {navLinks.map(link => (
                <li key={link.href} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}
