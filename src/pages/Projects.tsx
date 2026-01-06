import "../App.css";
import Nav from "../components/Nav";

function Projects() {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto px-4 md:px-0">
      <Nav />
      <section className="my-8"></section>
      <section className="my-8">
        <h2 className="text-xl mb-2">Current Projects</h2>
        <div className="w-full flex flex-col gap-y-6">
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* CARD ONE */}
            <div className="w-full md:w-1/2 border h-[400px] rounded-2xl relative card">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl w-[90%]">
                <h5 className="text-lg text-white font-semibold">Rate Guard</h5>
                <p className="text-sm text-white">
                  A TypeScript rate limiting middleware for Express.js. Supports
                  memory and Redis storage, multiple algorithms supported.
                </p>
                <a
                  href="https://github.com/JackTubby/rate-guard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center cursor-pointer text-white rounded-2xl px-4 py-1 max-w-1/2 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* CARD TWO */}
            <div className="w-full md:w-1/2 border h-[400px] rounded-2xl relative card">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl w-[90%]">
                <h5 className="text-lg text-white font-semibold">Must Read</h5>
                <p className="text-sm text-white">Release soon...</p>
                <button className="cursor-not-allowed text-white rounded-2xl px-4 py-1 max-w-1/2 bg-linear-to-r from-gray-400 via-gray-500 to-gray-600 transition-all duration-500 ease-out">
                  In Development
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:max-h-[600px] flex flex-col md:flex-row gap-6">
            {/* CARD THREE */}
            <div className="w-full md:w-1/3 border h-[400px] md:h-[600px] rounded-2xl relative card">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl w-[90%]">
                <h5 className="text-lg text-white font-semibold">
                  Aevum Continuum
                </h5>
                <p className="text-sm text-white">
                  Aevum Continuum is an interactive, zoomable world-history
                  timeline that lets users explore and connect events across all
                  eras, regions, and cultures with concise summaries, sources,
                  and media in a single seamless interface.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4">
                  <a
                    href="https://github.com/PixelCodeCo/Aevum-Continuum-UI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center cursor-pointer text-white rounded-2xl px-4 py-1 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out text-sm"
                  >
                    View UI on GitHub
                  </a>
                  <a
                    href="https://github.com/PixelCodeCo/Aevum-Continuum-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center cursor-pointer text-white rounded-2xl px-4 py-1 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out text-sm"
                  >
                    View API on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-h-[600px] flex flex-col gap-6">
              {/* CARD FOUR */}
              <div className="h-[300px] border rounded-2xl relative card">
                <div className="absolute bottom-2 left-2 flex flex-col gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl w-[90%]">
                  <h5 className="text-lg text-white font-semibold">
                    Telegram Stock Tracker
                  </h5>
                  <p className="text-sm text-white">In progress...</p>
                  <button className="cursor-not-allowed text-white rounded-2xl px-4 py-1 max-w-1/2 bg-linear-to-r from-gray-400 via-gray-500 to-gray-600 transition-all duration-500 ease-out">
                    In Development
                  </button>
                </div>
              </div>
              {/* CARD FIVE */}
              <div className="h-[300px] border rounded-2xl relative card">
                <div className="absolute bottom-2 left-2 flex flex-col gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl w-[90%]">
                  <h5 className="text-lg text-white font-semibold">
                    Marine Anchor Catenary Calculator
                  </h5>
                  <p className="text-sm text-white">In progress...</p>
                  <button className="cursor-not-allowed text-white rounded-2xl px-4 py-1 max-w-1/2 bg-linear-to-r from-gray-400 via-gray-500 to-gray-600 transition-all duration-500 ease-out">
                    In Development
                  </button>
                </div>
              </div>
            </div>
            {/* CARD SIX */}
            <div className="w-full md:w-1/3 border h-[400px] md:h-[600px] rounded-2xl relative card">
              <div className="absolute bottom-2 left-2 flex flex-col gap-y-2 bg-black/40 backdrop-blur-md p-4 rounded-xl w-[90%]">
                <h5 className="text-lg text-white font-semibold">
                  HOA Management App
                </h5>
                <p className="text-sm text-white">
                  A freelance project for one of my clients. Building a
                  transparent, user-friendly, and secure HOA management app.
                </p>
                <a
                  href="https://truehoa.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center cursor-pointer text-white rounded-2xl px-4 py-1 max-w-1/2 bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 ease-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8">{/* <h2>Projects</h2> */}</section>
    </div>
  );
}
export default Projects;
