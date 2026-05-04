import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects, type Project } from '../data/user-data'
import BrightLight from './BrightLine'

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      key={project.id}
      initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      layout
      className={`project flex flex-col ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-5 items-start mb-10`}
    >
      {/* Thumbnail */}
      <div
        className="thumbnail aspect-[16/9]
        flex flex-2 rounded-[10px] overflow-hidden
        border-2 border-primary
        shadow-[0_0_15px_1px_rgba(50,86,230,0.5)]"
      >
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Data */}
      <div className="flex-3 flex-col h-full data justify-between items-start">
        <div className="flex-col">
          <p className="text-xl sm:text-xl md:text-xl lg:text-3xl font-extrabold mb-3">
            {project.title}
          </p>
          <p className="text-justify text-sm text-gray-600 mb-2">
            {project.description}
          </p>
          <div className="technologies flex flex-wrap gap-3 mb-2">
            {project.topTechnologies.map((tech, i) => (
              <div key={i} className="top-technology btn-item h-[25px] text-xs cursor-default">
                {tech}
              </div>
            ))}
          </div>
          <div className="md:hidden mb-3">
            <hr />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link key={project.id} to={`/projects/${project.id}`}>
            <div className="more btn-item bg-primary text-white h-[28px] flex items-center gap-2 text-base transition-transform duration-300 hover:scale-105">
              <p>More</p>
              <CircleArrowRight size={16} />
            </div>
          </Link>

          {project.links.map((link, i) => (
            <div key={i} className="btn-item h-[28px]">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.iconSrc} alt={link.alt} className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 })
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-5 px-4 sm:px-12 md:px-40 mt-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="title flex items-center mb-12"
      >
        <p className="text-xl md:text-4xl font-extrabold whitespace-nowrap me-4">
          Work I'm Proud Of
        </p>
        <BrightLight />
      </motion.div>

      <div className="items">
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        onClick={() => setShowAll(!showAll)}
        layout
        className="mt-4 mb-10 flex justify-center items-center rounded-full w-full h-10 cursor-pointer
                    border-2 border-primary
                    text-lg font-bold text-primary
                    transition-colors duration-300 hover:bg-primary hover:text-white"
      >
        <p>{showAll ? 'View Less' : 'View All'}</p>
      </motion.div>
    </section>
  )
}
