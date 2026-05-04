import { useParams, Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/image-gallery.css'
import {
  ArrowLeft,
  ArrowRight,
  CalendarRange,
  CodeXml,
  Layers,
  LayoutGrid,
  Menu,
  X,
} from 'lucide-react'
import { projects } from '../data/user-data'
import BrightLight from '../components/BrightLine'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const projectId = parseInt(id ?? '0')
  const project = projects[projectId]

  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  if (!project) {
    return <p className="p-10">Project not found</p>
  }

  const images = project.screenshots.map((img) => ({
    original: img,
    thumbnail: img,
  }))

  return (
    <section className="py-5 px-4 sm:px-12 md:px-40">
      {/* Mini nav */}
      <nav>
        <div className="flex justify-between items-center">
          <ul className="md:flex gap-10 text-base font-medium whitespace-nowrap">
            <Link to="/">
              <li className="cursor-pointer hover:text-gray-600">Home</li>
            </Link>
          </ul>
          <div className="flex w-full justify-end items-center gap-5">
            <div ref={langRef} className="relative">
              <button className="cursor-pointer" onClick={() => setLangOpen(v => !v)}>
                <img src="/icons/languages.svg" alt="Languages" width={20} height={20} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50 text-sm">
                  <p className="px-3 py-2 text-gray-500 font-medium border-b">Language</p>
                  <button className="block w-full text-left px-3 py-2 hover:bg-gray-100" onClick={() => setLangOpen(false)}>English</button>
                  <button className="block w-full text-left px-3 py-2 hover:bg-gray-100" onClick={() => setLangOpen(false)}>French</button>
                </div>
              )}
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 p-5 space-y-4 shadow-xl">
            <div className="flex justify-between items-center">
              <b>Menu</b>
              <button onClick={() => setMenuOpen(false)}><X size={24} /></button>
            </div>
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </>
      )}

      <section className="mt-20 flex flex-col">
        <p className="text-primary text-3xl md:text-4xl font-extrabold mb-5">
          {project.title}
        </p>
        <p className="text-gray-600 text-xl text-justify mb-10">
          {project.description}
        </p>

        <div
          className="btn-item h-[35px] mb-15 cursor-pointer"
          onClick={() => window.open(project.links[0].url, '_blank')}
        >
          <img src="/icons/github.svg" alt="GitHub" className="w-[18px] h-[18px]" />
          <p className="ms-2">View Code</p>
        </div>

        <div className="card informations flex flex-wrap gap-10 mb-20">
          <div className="card-information">
            <div className="flex items-center text-primary font-medium">
              <CalendarRange size={18} />
              <p className="ms-2">Duration</p>
            </div>
            <div className="mt-auto">
              <p className="text-gray-500 font-medium">{project.durations}</p>
            </div>
          </div>
          <div className="card-information">
            <div className="flex items-center text-primary font-medium">
              <CalendarRange size={18} />
              <p className="ms-2">Role</p>
            </div>
            <div className="mt-auto">
              <p className="text-gray-500 font-medium">{project.role}</p>
            </div>
          </div>
          <div className="card-information">
            <div className="flex items-center text-primary font-medium">
              <CalendarRange size={18} />
              <p className="ms-2">Platforms</p>
            </div>
            <div className="mt-auto">
              <p className="text-gray-500 font-medium">{project.platforms.join(', ')}</p>
            </div>
          </div>
          <div className="card-information">
            <div className="flex items-center text-primary font-medium">
              <CalendarRange size={18} />
              <p className="ms-2">Year</p>
            </div>
            <div className="mt-auto">
              <p className="text-gray-500 font-medium">{project.year}</p>
            </div>
          </div>
        </div>

        <div className="section title flex gap-5 w-full items-center mb-10">
          <p className="font-bold text-3xl whitespace-nowrap">Look in details</p>
          <BrightLight />
        </div>

        {images && images.length > 1 && (
          <div className="aspect-video w-full max-w-4xl mx-auto mb-10 md:mb-30">
            <ImageGallery
              items={images}
              showThumbnails={true}
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={true}
              renderRightNav={(onClick, disabled) => (
                <div
                  onClick={onClick}
                  className={`absolute top-1/2 z-[999] -right-3 md:-right-15 text-primary -translate-y-1/2 h-[40px] w-[40px] rounded-full border border-primary flex items-center justify-center bg-white shadow-lg cursor-pointer hover:bg-primary hover:text-white transition ${
                    disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ArrowRight />
                </div>
              )}
              renderLeftNav={(onClick, disabled) => (
                <div
                  onClick={onClick}
                  className={`absolute top-1/2 -left-3 md:-left-15 z-[999] text-primary -translate-y-1/2 h-[40px] w-[40px] rounded-full border border-primary flex items-center justify-center bg-white shadow-lg cursor-pointer hover:bg-primary hover:text-white transition ${
                    disabled ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ArrowLeft />
                </div>
              )}
            />
          </div>
        )}

        <div className="project-details flex flex-col md:flex-row w-full gap-15 mb-10">
          <div className="left-side flex-1">
            <div className="about mb-10">
              <div className="about-title flex gap-5 items-center mb-5">
                <CodeXml size={30} className="text-primary" />
                <p className="text-lg font-semibold">About the project</p>
              </div>
              <p className="text-gray-600 text-xl text-justify">{project.about}</p>
            </div>
            <div className="features">
              <div className="keys-title flex gap-5 items-center mb-5">
                <LayoutGrid size={30} className="text-primary" />
                <p className="text-lg font-semibold">Key Features</p>
              </div>
              <ul className="list-disc pl-8 text-lg space-y-1">
                {project.keyFeatures.map((key, index) => (
                  <li key={index}>{key}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="right-side flex-1">
            <div className="technologies mb-10">
              <div className="tech-title flex gap-5 items-center mb-5">
                <Layers size={30} className="text-primary" />
                <p className="text-lg font-semibold">Technologies Used</p>
              </div>
              <div className="flex flex-wrap gap-5">
                {project.topTechnologies.map((tech, index) => (
                  <div key={index} className="btn-item rounded-full px-3">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full min-h-[130px] bg-primary rounded-2xl py-4 px-5 flex flex-col text-white">
              <p className="font-semibold text-lg">Interested in this project ?</p>
              <p className="font-light mb-4 md:mb-0">
                Let's discuss how I can help bring your ideas to life with similar solutions.
              </p>
              <a className="mt-auto" href="mailto:elmehdimokhtarelouissi@gmail.com">
                <div className="h-[30px] w-fit rounded-sm bg-white text-black flex items-center px-4 cursor-pointer">
                  <p className="font-semibold">Get in touch</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
