import './App.css'
import {
  ArrowFatLineDownIcon,
  CodeIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react'

function App() {
  return (
    <>
      <div className="min-h-screen max-w-[1200px] mx-auto">
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
        <section className="flex justify-between items-center min-h-[80vh]">
          <div className="w-1/2 flex flex-col gap-y-2">
            <h3 className="text-3xl">Hello, I'm</h3>
            <h2 className="font-lato text-9xl font-extrabold mb-4">Jack</h2>
            <p className="max-w-xl text-lg/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum earum ab adipisci nemo incidunt
              vero, ex aliquid optio quaerat culpa facilis maiores quibusdam atque ea reiciendis nesciunt!
            </p>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-y-6 justify-end items-end">
              <div className="cursor-pointer">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="w-[200px] h-[100px] border-4 border-white rounded-xl"
                />
                <ArrowFatLineDownIcon size={20} className="mx-auto mt-1" />
                <div className="bg-white rounded-xl px-6 py-3 text-base mt-1 text-center">About Me</div>
              </div>
              <div className="mr-20 cursor-pointer">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="w-[200px] h-[100px] border-4 border-white rounded-xl"
                />
                <ArrowFatLineDownIcon size={20} className="mx-auto mt-1" />
                <div className="bg-white rounded-xl px-6 py-3 text-base mt-1 text-center">Projects</div>
              </div>
              <div className="cursor-pointer">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="w-[200px] h-[100px] border-4 border-white rounded-xl"
                />
                <ArrowFatLineDownIcon size={20} className="mx-auto mt-1" />
                <div className="bg-white rounded-xl px-6 py-3 text-base mt-1 text-center">Contact</div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <ul className="flex gap-x-4">
            <li className="relative flex flex-col items-center">
              <a href="#" className="hover:text-purple-600">
                <EnvelopeIcon size={32} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                <LinkedinLogoIcon size={32} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                <GithubLogoIcon size={32} />
              </a>
            </li>
          </ul>
        </div>
        <CodeIcon size={32} className="absolute left-80 bottom-50 text-gray-400" />
      </div>
    </>
  )
}

export default App
