import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experiences, education } from '../data/user-data'
import ToolBoxSection from './Toolbox'

export default function About() {
  const [panelSelected, setSelectedPanel] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-5 px-4 sm:px-12 md:px-40 mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="work-education"
      >
        <div className="panel w-full h-[50px] rounded-full border-2 border-primary p-1 flex">
          <div
            onClick={() => setSelectedPanel(0)}
            className={`w-1/2 h-full rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${
              panelSelected === 0 ? 'bg-primary text-white' : 'bg-transparent text-primary'
            }`}
          >
            <p className="text-lg font-bold">Work</p>
          </div>
          <div
            onClick={() => setSelectedPanel(1)}
            className={`w-1/2 h-full rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${
              panelSelected === 1 ? 'bg-primary text-white' : 'bg-transparent text-primary'
            }`}
          >
            <p className="text-lg font-bold">Education</p>
          </div>
        </div>

        {panelSelected === 0 ? (
          <div className="relative border-l-2 border-primary ml-6 mt-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-4 ml-6 relative">
                <span className="absolute -left-[50px] flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary bg-white">
                  {exp.companyIcon && (
                    <img
                      src={exp.companyIcon}
                      alt={exp.company}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  )}
                </span>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">{exp.date}</p>
                  <h3 className="text-sm font-bold">{exp.company}</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{exp.role}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative border-l-2 border-primary ml-6 mt-6">
            {education.map((edu, index) => (
              <div key={index} className="mb-12 ml-6 relative">
                <span className="absolute -left-[50px] flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary bg-white">
                  {edu.companyIcon && (
                    <img
                      src={edu.companyIcon}
                      alt={edu.company}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  )}
                </span>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">{edu.date}</p>
                  <h3 className="text-sm font-bold">{edu.company}</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{edu.role}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <ToolBoxSection />
    </section>
  )
}
