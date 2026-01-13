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

type Tech = { name: string; icon: string }[];
type Project = { company: string; brief: string };
type Event = { year: string; title: string; company: string; description: string; projects?: Project[] };

function About() {
  const events: Event[] = [
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
      projects: [
        { company: "Conduitfp", brief: "Website and technical infrastructure setup" },
        { company: "TrueHOA", brief: "HOA management platform with anonymous, auditable elections and resident proposals" },
        { company: "Bomi", brief: "Marketing platform connecting florists across the USA with customers on major delivery apps" },
        { company: "Pixel Code Co.", brief: "Working on a wide range of open-source and private projects" },
      ],
    },
    {
      year: "2021 - 2022",
      title: "Developer",
      company: "Global Block",
      description:
        "Helped build a consumer trading platform, mostly focused on internal tooling and integrations. Worked with teams across different countries and spent a lot of time making life easier for the finance team through better reporting tools.",
    },
  ];

  const currentTech: Tech = [
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "NodeJS", icon: "devicon-nodejs-plain-wordmark" },
    { name: "GCP", icon: "devicon-googlecloud-plain" },
    { name: "Digital Ocean", icon: "devicon-digitalocean-original-wordmark" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Postgres", icon: "devicon-postgresql-plain" },
    { name: "Jest", icon: "devicon-jest-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Cloudflare", icon: "devicon-cloudflare-plain" },
    { name: "Supabase", icon: "devicon-supabase-plain" },
  ];
  const excitedTech: Tech = [
    { name: "Go", icon: "devicon-go-original-wordmark" },
    { name: "Ghostty", icon: "" },
    { name: "Omarchy", icon: "" },
    { name: "D3js", icon: "devicon-d3js-plain" },
    { name: "GTK4", icon: "" },
  ];
  const previousTech: Tech = [
    { name: "PHP", icon: "devicon-php-plain" },
    { name: "Prisma", icon: "devicon-prisma-original-wordmark" },
    { name: "WordPress", icon: "devicon-wordpress-plain" },
    { name: "Heroku", icon: "devicon-heroku-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Chakra UI", icon: "devicon-chakraui-plain" },
    { name: "Django", icon: "devicon-django-plain" },
    { name: "Flask", icon: "devicon-flask-original" },
  ];
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto px-4 md:px-0">
      <Nav />
      <section>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}me.png`}
              alt="Jack Tubby Avatar"
              className="border-4 border-white rounded-xl"
            />{" "}
          </div>
          <div className="flex flex-col gap-y-2 text-center md:text-left items-center md:items-start">
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

            <h5 className="font-semibold text-lg">What I'm working with</h5>
            <div className="flex flex-wrap gap-3 mb-2">
              {currentTech.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger>
                    {tech.icon ? (
                      <i className={`${tech.icon} text-4xl`}></i>
                    ) : (
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded">
                        {tech.name}
                      </span>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            <h5 className="font-semibold text-lg">What I'm exploring</h5>
            <div className="flex flex-wrap gap-3 mb-2">
              {excitedTech.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger>
                    {tech.icon ? (
                      <i className={`${tech.icon} text-4xl`}></i>
                    ) : (
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded">
                        {tech.name}
                      </span>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            <h5 className="font-semibold text-lg">What I've used before</h5>
            <div className="flex flex-wrap gap-3 mb-4">
              {previousTech.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger>
                    {tech.icon ? (
                      <i className={`${tech.icon} text-4xl`}></i>
                    ) : (
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded">
                        {tech.name}
                      </span>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            <div>
              <ul className="flex gap-x-4 justify-center md:justify-start">
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
                {event.projects && event.projects.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Clients</p>
                    <ul className="space-y-1">
                      {event.projects.map((project, i) => (
                        <li key={i} className="text-sm">
                          <span className="font-medium">{project.company}</span>
                          <span className="text-gray-500"> — {project.brief}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default About;
