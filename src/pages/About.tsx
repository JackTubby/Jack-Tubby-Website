import '../App.css'
import Nav from '../components/Nav'
import { EnvelopeIcon, LinkedinLogoIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

function About() {
  const events = [
    {
      year: '2023 - Current',
      title: 'Software Developer',
      company: 'Convertoo / Investoo',
      description:
        "At Convertoo, I work across current and legacy codebases to enhance and maintain functionality. During a significant company restructure, I contributed to new projects supporting the team's evolving needs. As I grew in the role, I took on key responsibilities including integrating new partners, managing core APIs, and developing tools to improve the team's daily workflow.",
    },
    {
      year: '2022 - 2023',
      title: 'Software Developer',
      company: 'Freelance',
      description:
        'I worked with various local clients to develop their websites and internal systems, providing tailored solutions to meet their needs.',
    },
    {
      year: '2021 - 2022',
      title: 'Developer',
      company: 'Global Block',
      description:
        'At Global Block, I developed internal tools and coordinated with external development teams across different countries. My primary focus was creating tools to support the in-house finance team and reduce company-wide reporting time.',
    },
  ]
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <Nav />
      <section>
        <div className="flex items-center gap-x-8">
          <div>
            <img src="/me.png" alt="Jack Tubby Avatar" className="border-4 border-white rounded-xl" />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="mb-4 text-3xl">About Me</h1>
            <h5 className="font-semibold text-lg">Jack Tubby</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, tempora sapiente aliquam harum
              itaque architecto officiis, hic beatae assumenda mollitia doloribus quos dignissimos quo voluptas vero at
              impedit neque maxime. Ea, tenetur. Suscipit debitis corporis voluptate mollitia cum, non amet hic. Eaque
              culpa odit alias, veritatis aliquam doloribus beatae.
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
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto py-12">
          {events.map((event, index) => (
            <div key={index} className="flex gap-6 mb-8 relative">
              {/* Line */}
              {index !== events.length - 1 && <div className="absolute left-[15px] top-8 w-0.5 h-full bg-gray-300" />}

              {/* Dot */}
              <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 z-10" />

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
  )
}
export default About
