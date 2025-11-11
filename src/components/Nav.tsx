const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <h1 className="text-lg font-bold">Jack Tubby</h1>
      <ul className="flex gap-x-8">
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <a href="/projects">Projects</a>
        </li>
        <li className="hover:text-purple-600 hover:underline hover:underline-offset-6">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <a href="#" className="bg-purple-600 px-8 py-2 text-lg text-white rounded-2xl shadow-2xl">
        Let's Talk
      </a>
    </nav>
  )
}

export default Nav
