import '../App.css'
import Nav from '../components/Nav'

function Projects() {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <Nav />
      <section className="my-8">
      </section>
      <section className="my-8">
        <h2 className='text-xl mb-2'>Current Projects</h2>
        <div className="w-full flex flex-col gap-y-6">
          <div className="w-full h-[400px] flex gap-x-6">
            {/* CARD ONE */}
            <div className="w-1/2 border h-[400px] rounded-2xl relative card">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl">
                <h5 className='text-lg text-white font-semibold'>Rate Guard</h5>
                <p className="text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                </p>
                <button className="text-white rounded-2xl px-4 py-1 max-w-1/2 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out">Learn More</button>
              </div>
            </div>
            {/* CARD TWO */}
            <div className="w-1/2 border h-[400px] rounded-2xl relative">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                <h5 className='text-lg'>Must Read</h5>
                <p className="text-sm max-w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                </p>
                <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
              </div>
            </div>
            {/* CARD THREE */}
          </div>
          <div className="w-full max-h-[600px] flex gap-x-6">
            <div className="w-1/3 border h-[600px] rounded-2xl relative">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                <h5 className='text-lg'>Assembly Theory Life Simulator</h5>
                <p className="text-sm max-w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                </p>
                <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
              </div>
            </div>
            <div className="w-1/3 max-h-[600px] flex flex-col gap-y-6">
              <div className="h-[300px] border rounded-2xl relative">
                <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                  <h5 className='text-lg'>Telegram Stock Tracker</h5>
                  <p className="text-sm max-w-1/2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                  </p>
                  <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
                </div>
              </div>
              <div className="h-[300px] border rounded-2xl relative">
                <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                  <h5 className='text-lg'>Marine Anchor Catenary Calculator</h5>
                  <p className="text-sm max-w-1/2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                  </p>
                  <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
                </div>
              </div>
            </div>
            <div className="w-1/3 border h-[600px] rounded-2xl relative">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                <h5 className='text-lg'>HOA Management App</h5>
                <p className="text-sm max-w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                </p>
                <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8">
        {/* <h2>Projects</h2> */}
      </section>
    </div>
  )
}
export default Projects
