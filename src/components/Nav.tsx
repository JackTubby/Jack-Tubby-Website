import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <h1 className="text-lg font-bold">Jack Tubby</h1>
      <ul className="flex gap-x-8">
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <a href="#" className="bg-purple-600 px-8 py-2 text-lg text-white rounded-2xl shadow-2xl">
        Let's Talk
      </a>
    </nav>
  )
}

export default Nav
