import "../App.css";
import Nav from "../components/Nav";

function Contact() {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <Nav />
      <section className="flex items-center justify-center mx-auto">
        <div className="w-1/2 my-12 rounded-2xl bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 p-1 shadow-xl">
          <div className="rounded-2xl bg-white p-8 text-center flex flex-col gap-y-6">
            <h1 className="font-semibold text-3xl">Contact Me</h1>
            <p className="mt-4 text-base sm:text-lg/loose cursor-default">
              Feel free to reach out to me via email or connect with me on
              LinkedIn or GitHub. I'm always open to discussing new projects,
              collaborations, or opportunities to contribute to exciting
              ventures.
            </p>
            <ul className="flex flex-col gap-y-2">
              {/* <li className="mb-10">
              <span className="font-semibold">Contact</span>
              <form action="" className="flex flex-col gap-y-2 pt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 px-2 py-1 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border-2 px-2 py-1 rounded-md"
                />
                <textarea
                  name="desc"
                  placeholder="Information"
                  className="border-2 px-2 py-1 rounded-md"
                ></textarea>
                <button className="">Send</button>
              </form>
            </li> */}
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:jacktubby1@gmail.com">jacktubby1@gmail.com</a>
              </li>
              <li>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/jack-tubby-08334b1b2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/jack-tubby-08334b1b2
                </a>
              </li>
              <li>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href="https://github.com/jacktubby"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/jacktubby
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
