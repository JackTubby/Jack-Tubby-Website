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
            <div className="w-1/2 border h-[400px] rounded-2xl relative">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                <h5 className='text-lg'>Title</h5>
                <p className="text-sm max-w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                </p>
                <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
              </div>
            </div>
            <div className="w-1/2 border h-[400px] rounded-2xl relative">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                <h5 className='text-lg'>Title</h5>
                <p className="text-sm max-w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                </p>
                <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
              </div>
            </div>
          </div>
          <div className="w-full max-h-[600px] flex gap-x-6">
            <div className="w-1/3 border h-[600px] rounded-2xl relative">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                <h5 className='text-lg'>Title</h5>
                <p className="text-sm max-w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                </p>
                <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
              </div>
            </div>
            <div className="w-1/3 max-h-[600px] flex flex-col gap-y-6">
              <div className="h-[300px] border rounded-2xl relative">
                <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                  <h5 className='text-lg'>Title</h5>
                  <p className="text-sm max-w-1/2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                  </p>
                  <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
                </div>
              </div>
              <div className="h-[300px] border rounded-2xl relative">
                <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                  <h5 className='text-lg'>Title</h5>
                  <p className="text-sm max-w-1/2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis debitis quos?
                  </p>
                  <button className="bg-purple-600 text-white rounded-2xl px-4 py-1 max-w-1/2">Learn More</button>
                </div>
              </div>
            </div>
            <div className="w-1/3 border h-[600px] rounded-2xl relative">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2">
                <h5 className='text-lg'>Title</h5>
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
