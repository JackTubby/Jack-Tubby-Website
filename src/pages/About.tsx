import "../App.css";
import Nav from "../components/Nav";
import {
  EnvelopeIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function About() {
  const events = [
    {
      year: "2023 - Current",
      title: "Software Developer",
      company: "Convertoo / Investoo",
      description:
        "I work across a mix of modern and legacy codebases, building internal tools and keeping systems running smoothly. Over time I've taken on more ownership - handling partner integrations, looking after core APIs, and building things that make the team's day-to-day easier.",
    },
    {
      year: "2022 - Current",
      title: "Software Developer",
      company: "Freelance",
      description:
        "Working with a handful of clients on full-stack projects - websites, internal tools, whatever they need. Good experience in owning things end-to-end, from the first conversation to getting it live.",
    },
    {
      year: "2021 - 2022",
      title: "Developer",
      company: "Global Block",
      description:
        "Helped build a consumer trading platform, mostly focused on internal tooling and integrations. Worked with teams across different countries and spent a lot of time making life easier for the finance team through better reporting tools.",
    },
  ];
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <Nav />
      <section>
        <div className="flex items-center gap-x-8">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}me.png`}
              alt="Jack Tubby Avatar"
              className="border-4 border-white rounded-xl"
            />{" "}
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="mb-4 text-3xl">About Me</h1>
            <h5 className="font-semibold text-lg">Jack Tubby</h5>
            <p>
              Developer based in the UK with a background in full-stack web
              development. I've built trading systems, client projects, and
              internal tools used across multiple teams. I'm most comfortable
              working with TypeScript, Node.js, and React, but I pick up
              whatever the project needs. I like building things that work and
              fixing things that don't.
            </p>
            <h5 className="font-semibold text-lg">Technologies I work with</h5>
            <div className="flex gap-x-2 mb-2">
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-typescript-plain text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>TypeScript</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-php-plain text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>PHP</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-go-original-wordmark text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>Go</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-nodejs-plain-wordmark text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>Node.js</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-googlecloud-plain text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>Google Cloud</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-digitalocean-original-wordmark text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>DigitalOcean</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-git-plain text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>Git</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-github-original text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-prisma-original-wordmark text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>Prisma</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-mysql-plain-wordmark text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>MySQL</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-postgresql-plain text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>PostgreSQL</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-jest-plain text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>Jest</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-tailwindcss-original text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>Tailwind CSS</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <i className="devicon-react-original text-4xl"></i>
                </TooltipTrigger>
                <TooltipContent>React</TooltipContent>
              </Tooltip>
            </div>
            <div>
              <ul className="flex gap-x-4">
                <motion.li
                  className="relative flex flex-col items-center"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="transition-all duration-500 ease-out hover:text-teal-500"
                    target="_"
                  >
                    <EnvelopeIcon size={32} />
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://www.linkedin.com/in/jack-tubby-08334b1b2/"
                    className="transition-all duration-500 ease-out hover:text-teal-500"
                    target="_"
                  >
                    <LinkedinLogoIcon size={32} />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://github.com/JackTubby"
                    className="transition-all duration-500 ease-out hover:text-teal-500"
                    target="_"
                  >
                    <GithubLogoIcon size={32} />
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto py-12">
          {events.map((event, index) => (
            <div key={index} className="flex gap-6 mb-8 relative">
              {/* Line */}
              {index !== events.length - 1 && (
                <div className="absolute left-[15px] top-8 w-0.5 h-full bg-gray-300" />
              )}

              {/* Dot */}
              <div className="w-8 h-8 rounded-full bg-linear-to-r from-emerald-400 via-teal-500 to-cyan-600 shrink-0 z-10 shadow-2xl" />

              {/* Content */}
              <div>
                <span className="text-sm text-gray-500">{event.year}</span>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-600">{event.company}</p>
                <p className="mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default About;
