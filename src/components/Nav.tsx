import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link to="/" className="relative inline-block text-lg font-bold py-1 group">
        <span className="transition-all duration-500 ease-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:via-teal-500 group-hover:to-cyan-600">
          Jack Tubby
        </span>
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out group-hover:w-full" />
      </Link>
      <ul className="flex gap-x-8">
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="py-2">
          <Link to="/" className="relative inline-block py-1 group">
            <motion.span className="transition-all duration-500 ease-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:via-teal-500 group-hover:to-cyan-600 font-semibold">
              Home
            </motion.span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out group-hover:w-full" />
          </Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="py-2">
          <Link to="/about" className="relative inline-block py-1 group">
            <motion.span className="transition-all duration-500 ease-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:via-teal-500 group-hover:to-cyan-600 font-semibold">
              About
            </motion.span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out group-hover:w-full" />
          </Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="py-2">
          <Link to="/projects" className="relative inline-block py-1 group">
            <motion.span className="transition-all duration-500 ease-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:via-teal-500 group-hover:to-cyan-600 font-semibold">
              Projects
            </motion.span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out group-hover:w-full" />
          </Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="py-2">
          <Link to="/contact" className="relative inline-block py-1 group">
            <motion.span className="transition-all duration-500 ease-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:via-teal-500 group-hover:to-cyan-600 font-semibold">
              Contact
            </motion.span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out group-hover:w-full" />
          </Link>
        </motion.li>
      </ul>
      <motion.a
        href="#"
        className="relative px-8 py-3 text-lg font-semibold text-white rounded-2xl overflow-hidden inline-block cursor-pointer"
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        {/* Gradient background layer - MORE dramatic scale */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-orange-500 via-rose-500 to-pink-600"
          variants={{
            initial: { scale: 1, rotate: 0 },
            hover: {
              scale: 1.3,
              rotate: 10,
              transition: { duration: 0.5, ease: 'easeOut' },
            },
          }}
        />

        {/* Glass overlay - gets clearer on hover */}
        <motion.div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(12px) saturate(150%)',
            WebkitBackdropFilter: 'blur(12px) saturate(150%)',
          }}
          variants={{
            initial: { background: 'rgba(255, 255, 255, 0.15)' },
            hover: {
              background: 'rgba(255, 255, 255, 0.25)',
              transition: { duration: 0.3 },
            },
          }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2"
          variants={{
            initial: {
              borderColor: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.2)',
            },
            hover: {
              borderColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: '0 12px 48px 0 rgba(139, 92, 246, 0.5)',
              transition: { duration: 0.3 },
            },
          }}
        />

        {/* Stronger shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
          variants={{
            initial: { x: '-100%', opacity: 0 },
            hover: {
              x: '100%',
              opacity: 1,
              transition: { duration: 0.7, ease: 'easeInOut' },
            },
          }}
        />

        {/* Text with scale effect */}
        <motion.span
          className="relative z-10 drop-shadow-lg inline-block"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05, transition: { duration: 0.3 } },
          }}
        >
          Let's Talk
        </motion.span>
      </motion.a>
    </nav>
  )
}

export default Nav
