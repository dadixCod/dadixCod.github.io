import BrightLight from './BrightLine'
import { technologies } from '../data/user-data'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ToolBoxSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="toolbox mt-12"
    >
      <div className="title flex justify-between items-center mb-16">
        <BrightLight />
        <p className="text-xl md:text-4xl font-extrabold whitespace-nowrap mx-4">
          My ToolBox
        </p>
        <BrightLight />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="left relative mb-15">
          <img
            src="/images/star-rating.png"
            alt="Stars"
            className="absolute right-0 -top-12 md:-right-10 md:-top-10 rotate-20"
          />
          <img
            src="/images/monitor.png"
            alt="Monitor"
            className="absolute -bottom-20 md:-bottom-20 md:-left-0 lg:-bottom-10 rotate-340"
          />
          <img
            src="/images/code.png"
            alt="Code"
            className="absolute -right-0 top-10 lg:top-20 rotate-20"
          />
          <p className="text-center text-xl md:text-left md:text-2xl font-extrabold">
            I got the experience.
          </p>
          <p className="text-center text-xl md:text-left md:text-2xl font-extrabold">
            Here is my toolbelt for success.
          </p>
        </div>

        <div className="right flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col justify-between items-center gap-3 mb-4">
              <img height={50} width={50} src={tech.icon} alt={tech.name} />
              <p className="text-sm font-medium text-gray-500">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
