import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const services = [
  {
    name: 'Fractional CISO (vCISO)',
    description:
      'The next generation of security is here: Seasoned security and business professionals, working together and coming up with "right-sized" security. Our partnership will provide operational and strategic governance based on a nuanced understanding of your business, technology, and threat landscape.',
    link: { href: 'https://www.hp.com', label: 'hp.com', icon: ArrowTopRightIcon},
    logo: logoPlanetaria,
  },
  {
    name: 'Fractional CIO (vCIO)',
    description:
      'From ChatGPT to PC lifecycles.  The modern business of any size must be optimizing their current technologies and adapting the next big opportunity. Business enabling technologies are everywhere. We will partner to grow, evolve, and maintain your technology.',
    link: { href: 'https://www.kimberly-clark.com', label: 'kimberly-clark.com', icon: ArrowTopRightIcon },
    logo: logoPlanetaria,
  },
  {
    name: 'Consulting',
    description:
      'Bitfire Security provides most of your security and IT consulting needs. Sometimes you have a less-defined need and want a frank conversation.  Whether strategy, leadership, culture or technical, I\'m here to help.  Feel free to contact me directly.',
    link: { href: 'https://www.flooranddecor.com', label: 'flooranddecor.com', icon: EmailAtIcon },
    logo: logoPlanetaria,
  },
  {
    name: 'Speaking',
    description:
      'I have a relaxed and direct style, capable of engaging executive, entry-level and non-technical audiences. My strengths are ad hoc conversation, and on-the-fly Q&A, perfect for panels, interviews, and highly-interactive sessions. Visuals and slides are optional and used for visualization and engagement.',
    link: { href: 'https://www.dla.mil', label: 'dla.mil', icon: EmailAtIcon },
    logo: logoPlanetaria,
  },
  {
    name: 'AI Operations and Governance (Bitfire.ai)',
    description:
      'Bitfire.ai is a unique offering, providing strategy and services for Large Language Models in the enterprise such as LLama, ChatGPT, and Microsoft Copilot.  The easy question is "should you adopt AI?" Bitfire.ai is here to bring the excitement of AI, by delivering the elegant solutions for strategy, engineering, operations and governance to make it a reality.',
    link: { href: 'https://www.homedepot.com', label: 'homedepot.com', icon: 'external' },
    logo: logoPlanetaria,
  },
  {
    name: 'Professional Services (Bitfire Security)',
    description:
      'Bitfire Security is a security professional services firm, differentiated by offerings that pair security and non-security domain experts in a single engagement.  Named a "Top 10 Security Assessment Company," Bitfire Security is capable of designing and delivering creative solutions that scale from small businesses to regulated Fortune 100 organizations.',
    link: { href: 'https://www.homedepot.com', label: 'homedepot.com', type:'external' },
    logo: logoPlanetaria,
  },
  {
    name: 'Managed IT Services (Justikar)',
    description:
      'Justikar is a managed service provider, offering managed IT and security services to small and midsize enterprises with discerning security considerations.  Having won "Top Managed Security Provider of the Year," Bitfire Security is spinning off its managed offerings in 2024 so Justikar may focus on providing unmatched delivery while maintaining the security pedigree.',
    link: { href: 'https://www.homedepot.com', label: 'homedepot.com', icon: 'external' },
    logo: logoPlanetaria,
  },
]


function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function EmailAtIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
</svg>

  )
}

function ArrowTopRightIcon( props: React.ComponentPropsWithoutRef<'svg'> ) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
</svg>

  )
}

export const metadata: Metadata = {
  title: 'Services',
  description: 'Brilliant ways for us to partner.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="You're doing great.  Let's do better together."
      intro="You care about your company, customers, and employees. It shows. You are looking for ways to improve. I'd love to help you do that.  Here are some of the best ways for us to partner!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <Card as="li" key={service.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={service.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={service.link.href}>{service.name}</Card.Link>
            </h2>
            <Card.Description>{ service.description }</Card.Description>
            <div className="mt-4"/>
            <p className="relative z-10 flex text-sm font-medium mt-auto text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <ArrowTopRightIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{service.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
