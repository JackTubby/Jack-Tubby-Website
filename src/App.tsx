import './App.css'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Nav from './components/Nav'
import { ArrowFatLineDownIcon, CodeIcon, EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { FolderGit2, Pen, PersonStanding } from 'lucide-react'
import { Link } from 'react-router-dom'

function App() {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [velocity, setVelocity] = useState({ x: 2, y: 2 })
  const iconSize = 32

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x
        let newY = prev.y + velocity.y
        let newVelocityX = velocity.x
        let newVelocityY = velocity.y

        if (newX <= 0 || newX >= window.innerWidth - iconSize) {
          newVelocityX = -velocity.x
          newX = newX <= 0 ? 0 : window.innerWidth - iconSize
        }
        if (newY <= 0 || newY >= window.innerHeight - iconSize) {
          newVelocityY = -velocity.y
          newY = newY <= 0 ? 0 : window.innerHeight - iconSize
        }

        if (newVelocityX !== velocity.x || newVelocityY !== velocity.y) {
          setVelocity({ x: newVelocityX, y: newVelocityY })
        }

        return { x: newX, y: newY }
      })
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [velocity])

  return (
    <>
      <div className="min-h-screen max-w-[1200px] mx-auto relative">
        <Nav />
        <section className="flex justify-between items-center min-h-[80vh]">
          <div className="w-1/2 flex flex-col gap-y-2">
            <h3 className="text-3xl cursor-default">Hello, I'm</h3>
            <h2 className="font-lato text-9xl font-extrabold mb-4 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600">
              Jack
            </h2>
            <p className="max-w-xl text-lg/loose cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum earum ab adipisci nemo incidunt
              vero, ex aliquid optio quaerat culpa facilis maiores quibusdam atque ea reiciendis nesciunt!
            </p>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-y-6 justify-end items-end">
              <Link to="/about">
                <motion.div
                  className="cursor-pointer transition-all duration-500 ease-out hover:text-teal-500 hover:font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-[200px] h-[100px] border-4 border-white rounded-xl flex justify-center items-center bg-gray-100 transition-all duration-500 ease-out hover:border-teal-500">
                    <PersonStanding size={40} className="text-teal-500" />
                  </div>
                  <ArrowFatLineDownIcon size={20} className="mx-auto mt-1" />
                  <div className="bg-white rounded-xl px-6 py-3 text-base mt-1 text-center">About Me</div>
                </motion.div>
              </Link>

              <Link to="/projects">
                <motion.div
                  className="mr-20 cursor-pointer transition-all duration-500 ease-out hover:text-teal-500 hover:font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-[200px] h-[100px] border-4 border-white rounded-xl flex justify-center items-center bg-gray-100 transition-all duration-500 ease-out hover:border-teal-500">
                    <FolderGit2 size={40} className="text-teal-500" />
                  </div>
                  <ArrowFatLineDownIcon size={20} className="mx-auto mt-1" />
                  <div className="bg-white rounded-xl px-6 py-3 text-base mt-1 text-center">Projects</div>
                </motion.div>
              </Link>

              <Link to="/contact">
                <motion.div
                  className="cursor-pointer transition-all duration-500 ease-out hover:text-teal-500 hover:font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-[200px] h-[100px] border-4 border-white rounded-xl flex justify-center items-center bg-gray-100 transition-all duration-500 ease-out hover:border-teal-500">
                    <Pen size={40} className="text-teal-500" />
                  </div>
                  <ArrowFatLineDownIcon size={20} className="mx-auto mt-1" />
                  <div className="bg-white rounded-xl px-6 py-3 text-base mt-1 text-center">Contact</div>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
        <div>
          <ul className="flex gap-x-4">
            <motion.li
              className="relative flex flex-col items-center"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#" className="transition-all duration-500 ease-out hover:text-teal-500">
                <EnvelopeIcon size={32} />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="transition-all duration-500 ease-out hover:text-teal-500">
                <LinkedinLogoIcon size={32} />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="transition-all duration-500 ease-out hover:text-teal-500">
                <GithubLogoIcon size={32} />
              </a>
            </motion.li>
          </ul>
        </div>
        <motion.div
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            pointerEvents: 'none',
            zIndex: -1,
          }}
          className="text-teal-500"
        >
          <CodeIcon size={iconSize} />
        </motion.div>
      </div>
    </>
  )
}

export default App
