export default function Contact() {
  return (
    <div id="contact" className="w-full bg-primary mt-20">
      <section className="py-5 px-4 sm:px-12 md:px-40">
        <div className="contact py-5">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-white font-bold mb-4">Get in touch</p>

            <div className="flex flex-col items-center md:flex-row gap-4 md:gap-20">
              {/* WhatsApp */}
              <a
                href="https://wa.me/213664817414?text=Hi%20Mehdi,%20I%20saw%20your%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-[30px] md:h-[50px] w-fit px-4 bg-white
                rounded-full text-black cursor-pointer
                transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/icons/whatsapp.svg"
                  alt="Whatsapp"
                  className="h-5 w-auto md:h-8"
                  width={20}
                  height={20}
                />
                <p className="text-sm md:text-lg font-bold">Chat on WhatsApp</p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dadixcod/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-[30px] md:h-[50px] w-fit px-4 bg-white
                rounded-full text-black cursor-pointer
                transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/icons/linkedin-black.svg"
                  alt="Linkedin"
                  className="h-5 w-auto md:h-8"
                  width={20}
                  height={20}
                />
                <p className="text-sm md:text-lg font-bold">Chat on LinkedIn</p>
              </a>
            </div>

            <a
              href="mailto:elmehdimokhtarelouissi@gmail.com"
              className="flex justify-center items-center mt-7 gap-2 h-[30px] md:h-[50px] md:w-[58%] px-4 bg-white
             rounded-full text-black cursor-pointer
             transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/icons/email.png"
                alt="Email"
                className="h-5 w-auto md:h-8"
                width={20}
                height={20}
              />
              <p className="text-sm md:text-lg font-bold">Send me an email</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
