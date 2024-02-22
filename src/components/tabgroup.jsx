import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyTabs() {
  let [categories] = useState({
    "About Me": [
        {
            id: 1,
            title: ``,
            description: `I'm a passionate Full-Stack Software Engineer with a background in customer service and operations management. Skilled in developing web applications and solving complex technical challenges. Adept at leading teams, improving operational efficiencies, and delivering exceptional customer experiences. Seeking to leverage software engineering skills in a dynamic and forward-thinking tech environment.`
        }
    ],
    "Projects": [
      {
        id: 1,
        title: 'JobJob',
        link: 'https://github.com/plusflora/Project4-JobJob',
        description: `Simplifies job hunting with essential tools for managing applications.
        Features include secure sign-up/sign-in, saving jobs, organizing by status, updating application status, adding/updating notes, and deleting jobs.
        Built a RESTful API to power JobJob's backend functionality.
        `,
        technologies: 'React, MongoDB, Postman ',
        
      },
      {
        id: 2,
        title: 'Dreamhues',
        link: 'https://github.com/plusflora/Project3-DreamHues',
        description: `Collaboratively developed the backend for DreamHues app, utilizing PostgreSQL.
        A dream journal app enabling users to log dreams, associate imagery/colors, edit/delete logs, upload images, generate color palettes, and reflect on dream logs.`,
        technologies: 'Django, PostgreSQL, Python, JavaScript, CSS3'
      },
      {
        id: 3,
        title: '15 Puzzle',
        link: 'https://github.com/plusflora/15-Puzzle',
        description: 'Developed a digital rendition of the classic fifteen puzzle game solo, with the goal of arranging tiles from 1 to 15 sequentially. Employed HTML, JavaScript, and CSS to ensure a smooth gaming experience. The implementation includes intuitive click-to-move functionality, a restart/shuffle button for convenience, subtle hover effects, and a design that adapts seamlessly to various screen sizes.',
        technologies: 'HTML, JavaScript, CSS'
      },
    ],
    "Connect": [
      {
        id: 1,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/vincent-bouquet/',
      },
      {
        id: 2,
        title: "Github",
        link: 'https://github.com/plusflora',
      },
      {
        id: 3,
        title: "Email",
        description: 'v.bouquet707@gmail.com',
      },

    ],

  })

  return (
    <div className="widthers min-w-full px-2 pt-0 pb-10 sm:px-0">
      <Tab.Group >
      <Tab.List className="grid grid-cols-3 gap-1 min-w-max rounded-xl bg-blue-900/20 p-1 grow">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-black hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <a
                      href={post.link} // Provide the link here
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classNames(
                        'block w-full h-full', // Make the entire block clickable
                        'text-black' // Adjust styles as needed
                      )}
                    >
                      <h3 className="text-sm font-medium leading-5">{post.title}</h3>
                      <p className="text-sm text-gray-600">{post.description}</p>
                      <p className="text-sm text-gray-600">{post.technologies}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
