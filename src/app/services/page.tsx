import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import undrawAcceptTask from '@/images/icons/undraw_accept_tasks_re_09mv.svg'
import undrawFractionalCISO from '@/images/icons/undraw_adventure_map_hnin.svg'
import undrawBitfireAI from '@/images/icons/undraw_robotics_kep0.svg'
import undrawSpeaking from '@/images/icons/undraw_pitching_re_fpgk.svg'
import undrawConsulting from '@/images/icons/undraw_group_hangout_re_4t8r.svg'
import undrawServices from '@/images/icons/undraw_engineering_team.svg'

// TODO: Fix coloring so icons are more visible (roadmap)
// TODO: Add data sheet for Fractional CISO and a "more" pop up with additional details (roadmap)
// TODO: Add email and mailto for consulting, speaking, and fractional CISO
// TODO: Update links to bitfire.ai, bitfiersecurity, justikar

const to = "chad@chadteat.com";
const subject = encodeURIComponent( "Partnership Inquiry" );

const services = [
  {
    name: 'Fractional CISO (vCISO)',
    description:
      'The next generation of security is here and it\'s not technology. Seasoned information risk management professionals, accelerating your business and making smart investments. All organizations can be accelerated through strategic security.  Most don\'t need a full-time CISO.  A fractional CISO provides operational and strategic governance based on a nuanced understanding of your business, technology, and threat landscape.',
    link: { href: `mailto:${ to }?subject=${ encodeURIComponent( "Fractional CISO Inquiry" ) }`, label: 'Contact', icon: ArrowTopRightIcon},
    logo: undrawFractionalCISO,
  },
  {
    name: 'Advisory',
    description:
      'Often companies have a security leader, but need a trusted advisor to help them navigate the complex world of information security.  Leaders lack the time or appetite to handle the cognitive load of daily research, peer groups, vendor relationships, and staying up to date with legal-regulatory concerns.  Advisory allows your leaders can spend time in and around the business, while still providing strategic leadership. Advisory builds internal personnel and empowers companies that prefer to insource operational and governance processes.',
    link: { href: `mailto:${ to }?subject=${ encodeURIComponent( "Advisory Inquiry" ) }`, label: 'Contact', icon: EmailAtIcon },
    logo: undrawConsulting,
  },
  {
    name: 'Speaking',
    description:
      'Effective speakers engage their audiences and paint captivating pictures, visually or mentally. I have a relaxed and direct style, capable of engaging executive, entry-level and non-technical audiences. I\'m unfailingly passionate and prefer venues that allow movement and have enough lighting for eye contact.  I have an extended skillset with ad hoc conversation, and on-the-fly Q&A; perfect for panels, interviews, and highly-interactive sessions.',
    link: { href: `mailto:${ to }?subject=${ encodeURIComponent( "Speaking Inquiry" ) }`, label: 'Contact', icon: EmailAtIcon },
    logo: undrawSpeaking,
  },
  {
    name: 'AI Operations and Governance (Bitfire.ai)',
    description:
      'Bitfire.ai is a unique offering, providing strategy and services for Large Language Models in the enterprise such as LLama, ChatGPT, Claude, and Microsoft Copilot.  Bitfire.ai is here to bring the excitement of AI, by delivering elegant solutions for strategy, engineering, operations and governance.',
    link: { href: 'https://www.bitfire.ai', label: 'bitfire.ai', icon: 'external' },
    logo: undrawBitfireAI,
  },
  {
    name: 'Professional Services (Bitfire Security)',
    description:
      'Bitfire Security is a professional services firm, differentiated by offerings that pair security and non-security domain experts in a single engagement.  Named a "Top 10 Security Assessment Company," Bitfire Security is capable of designing and delivering creative solutions that scale from small businesses to regulated Fortune 100 organizations.',
    link: { href: 'https://www.bitfiresecurity.com', label: 'bitfiresecurity.com', type:'external' },
    logo: undrawAcceptTask,
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
            <div className="relative z-10 flex h-36 w-full items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={service.logo}
                alt=""
                className="h-28"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={service.link.href}>{service.name}</Card.Link>
            </h2>
            <Card.Description>{ service.description }</Card.Description>
            <div className="mt-4"/>
            <p className="relative z-10 flex text-sm font-medium mt-auto text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            { service.link.label != '' ? <><LinkIcon className="h-6 w-6 flex-none" />
<span className="ml-2">{service.link.label}</span> </>: null}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

// { service.link.label != '' ? <><LinkIcon className="h-6 w-6 flex-none" />
// <span className="ml-2">{service.link.label}</span> </>: null}
// </p>
// </Card>
// ))}