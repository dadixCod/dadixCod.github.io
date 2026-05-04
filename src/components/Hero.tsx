import { FileUser, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.section
      id="home"
      className="py-5 px-4 sm:px-12 md:px-40 mt-13"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Text side */}
        <div className="text-center md:text-left">
          <div className="flex flex-row justify-center md:justify-start gap-2">
            <p className="text-4xl font-black">HI I am Mehdi</p>
            <span className="text-4xl inline-block transition-transform duration-300 hover:rotate-12">
              👋
            </span>
          </div>

          <p className="text-lg mt-2 text-center md:text-left max-w-lg mx-auto md:mx-0">
            22-years-old Software developer from Algeria
          </p>

          <p className="text-lg mt-1 text-center md:text-left max-w-lg md:mx-0">
            I like to develop Full Stack Mobile applications that deliver meanings
          </p>

          <div className="flex justify-center items-center md:justify-start mt-6">
            <a
              href="/Cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-item me-5"
            >
              <p className="me-2">Resume</p>
              <FileUser className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/dadixcod"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-item me-2"
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/dadixcod"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-item me-2"
            >
              <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
            </a>
            <a
              href="mailto:elmehdimokhtarelouissi@gmail.com"
              className="btn-item me-2"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Image side */}
        <div>
          <div
            className="max-w-[270px] aspect-[9/10] rounded-sm overflow-hidden
            shadow-[0_0_15px_1px_rgba(140,0,255,0.5)]
            border-2 border-primary
            transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src="/images/profile-pic.jpg"
              alt="Profile Pic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
