import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Metadata } from 'next'
import Image from 'next/image'
import logoHpes from '@/images/logos/hpes.svg'
import logoKimberlyClark from '@/images/logos/kimberly-clark.svg'
import logoThd from '@/images/logos/homedepot.svg'
import logoEds from '@/images/logos/eds.svg'
import logoFnd from '@/images/logos/fnd.svg'
import logoBitfire from '@/images/logos/bitfire.png'
import logoBitfireAi from '@/images/logos/bitfireai.png'
import logoJustikar from '@/images/logos/justikar.png'
import logoDLA from '@/images/logos/dla_logo.png'
import logoExpressScripts from '@/images/logos/express_scripts.jpg'
import logoHoneybakedHam from '@/images/logos/hbh.png'
import logoTSG from '@/images/logos/tsg-crop.png'
import logoCEC from '@/images/logos/cec.jpg'
import logoGSA from '@/images/logos/gsa.jpg'
import logoICE from '@/images/logos/ice.jpg'
import logoDISA from '@/images/logos/disa.jpg'
import logoSymantec from '@/images/logos/symantec.jpg'
import logoIntel from '@/images/logos/intel.png'
import logoGuidepoint from '@/images/logos/guidepoint.png'
import logoTesla from '@/images/logos/tesla.png'
import logoHearst from '@/images/logos/hearst.jpg'
import logoMckesson from '@/images/logos/mckesson.png'
import logoAndMore from '@/images/logos/rectangle-history-plus.svg'

// TODO: Verify links
// TODO: Change to "Work" and update links

const industryCompanies = [
  {
    name: 'Hewlett-Packard Enterprise Services',
    description:
      'Security Architecture and Engineering',
    link: { href: 'https://www.hp.com', label: 'hp.com', icon: ArrowTopRightIcon },
    logo: logoHpes,
  },
  {
    name: 'Kimberly-Clark Corporation',
    description:
      'Deputy CISO',
    link: { href: 'https://www.kimberly-clark.com', label: 'kimberly-clark.com', icon: ArrowTopRightIcon },
    logo: logoKimberlyClark,
  },
  {
    name: 'The Home Depot',
    description:
      'Information Risk Managment',
    link: { href: 'https://www.homedepot.com', label: 'homedepot.com', icon: EmailAtIcon },
    logo: logoThd,
  },
  {
    name: 'Electronic Data Systems',
    description:
      'Security Service Delivery',
    link: { href: 'https://www.dxc.com', label: 'eds.com', icon: EmailAtIcon },
    logo: logoEds,
  },
  {
    name: 'Floor and Decor',
    description:
      'CISO',
    link: { href: 'https://www.flooranddecor.com', label: 'flooranddecor.com', icon: 'external' },
    logo: logoFnd,
  },
  {
    name: 'Bitfire Security',
    description:
      'Partner, Consulting Principle',
    link: { href: 'https://www.bitfiresecurity.com', label: 'bitfiresecurity.com', type: 'external' },
    logo: logoBitfire,
  },
  {
    name: 'Bitfire.ai',
    description:
      'Founder, CTO',
    link: { href: 'https://www.bitfire.ai', label: 'bitfire.ai', icon: 'external' },
    logo: logoBitfireAi,
  },
]

const consultedFor = [
  {
    name: 'Defense Logistics Agency',
    description:
      'Architecture and Engineering',
    link: { href: 'https://www.dla.mil', label: 'dla.mil', icon: ArrowTopRightIcon },
    logo: logoDLA,
  },
  {
    name: 'Express Scripts International',
    description:
      'Compliance Remediation',
    link: { href: 'https://www.express-scripts.com', label: 'express-scripts.com', icon: ArrowTopRightIcon },
    logo: logoExpressScripts,
  },
  {
    name: 'Honeybaked Ham',
    description:
      'Policy, Governance and Application Security',
    link: { href: 'https://www.honeybaked.com', label: 'honeybaked.com', icon: EmailAtIcon },
    logo: logoHoneybakedHam,
  },
  {
    name: 'TSG Resolute',
    description:
      'Strategy, Architecture and Engineering',
    link: { href: 'https://www.tsgresolute.com', label: 'tsgresolute.com', icon: EmailAtIcon },
    logo: logoTSG,
  },
  {
    name: 'Consolidated Engineering Company',
    description:
      'Security Assessment and Compliance',
    link: { href: 'https://www.cecfurnaces.com', label: 'cecfurnaces.com', icon: 'external' },
    logo: logoCEC,
  },
  {
    name: 'Symantec',
    description:
      'Integrations and Automation',
    link: { href: 'https://www.symantec.com', label: 'symantec.com', icon: 'external' },
    logo: logoSymantec,
  },
  {
    name: 'Intel',
    description:
      'Integrations and Automation',
    link: { href: 'https://www.intel.com', label: 'intel.com', icon: 'external' },
    logo: logoIntel,
  },
  {
    name: 'Guidepoint',
    description:
      'Policy and Strategy',
    link: { href: 'https://www.guidepointsecurity.com', label: 'guidepointsecurity.com', icon: 'external' },
    logo: logoGuidepoint,
  },
  {
    name: 'General Services Administration (GSA)',
    description:
      'Architecture and Engineering',
    link: { href: 'https://www.gsa.gov', label: 'gsa.gov', icon: 'external' },
    logo: logoGSA,
  },
  {
    name: 'Immigration and Customs Enforcement (ICE)',
    description:
      'Architecture and Engineering',
    link: { href: 'https://www.ice.gov', label: 'ice.gov', icon: 'external' },
    logo: logoICE,
  },
  {
    name: 'Defense Information Systems Agency (DISA)',
    description:
      'Policy and Strategy',
    link: { href: 'https://www.disa.mil', label: 'disa.mil', icon: 'external' },
    logo: logoDISA,
  },
  {
    name: 'More',
    description:
      'Omitted for privacy',
    link: { href: '#', label: '', icon: 'external' },
    logo: logoAndMore,
  },
]

const mentoredAt = [
  {
    name: 'Tesla',
    description:
      'Mentoring and Advisory',
    link: { href: 'https://www.tesla.com', label: 'tesla.com', icon: ArrowTopRightIcon },
    logo: logoTesla,
  },
  {
    name: 'Hearst',
    description:
      'Mentoring and Advisory',
    link: { href: 'https://www.hearst.com', label: 'hearst.com', icon: ArrowTopRightIcon },
    logo: logoHearst,
  },
  {
    name: 'McKesson',
    description:
      'Mentoring and Advisory',
    link: { href: 'https://www.mckesson.com', label: 'mckesson.com', icon: EmailAtIcon },
    logo: logoMckesson,
  },
  {
    name: 'Kimberly-Clark Corporation',
    description:
      'Mentoring and Advisory',
    link: { href: 'https://www.kimberly-clark.com', label: 'kimberly-clark.com', icon: EmailAtIcon },
    logo: logoKimberlyClark,
  },
  {
    name: 'More',
    description:
      'Omitted for privacy',
    link: { href: '#', label: '', icon: 'external' },
    logo: logoAndMore,
  },
]


function LinkIcon( props: React.ComponentPropsWithoutRef<'svg'> ) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" { ...props }>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function EmailAtIcon( props: React.ComponentPropsWithoutRef<'svg'> ) {
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
function RoleSection( {
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section> ) {
  return (
    <Section { ...props }>
      <ul role="list" className="space-y-16">
        { children }
      </ul>
    </Section>
  )
}

// function Tool({
//   title,
//   href,
//   children,
// }: {
//   title: string
//   href?: string
//   children: React.ReactNode
// }) {
//   return (
//     <Card as="li">
//       <Card.Title as="h3" href={href}>
//         {title}
//       </Card.Title>
//       <Card.Description>{children}</Card.Description>
//     </Card>
//   )
// }

export const metadata: Metadata = {
  title: 'Clients',
  description: "Great companies I've worked with.",
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Great companies I've worked with."
      intro="As a practitioner, I've been in your shoes, working within organizations to build and implement security strategies from the inside. Hands-on experience provides a deep understanding of the challenges and opportunities that drive practical security and long-term success. As a trusted partner, I've had the privilege of collaborating with diverse companies, helping them navigate and solve complex challenges in today's rapidly evolving business landscape. Consulting has allowed me to bring fresh perspectives and innovative solutions to a wide range of security programs. Mentoring and advisory grows people and enterprises on their terms, building lasting confidence and enrichment. I've mentored and guided leaders to cultivate robust, adaptive security cultures that stand the test of time."
    >
      <div className="space-y-20">
        <RoleSection title="Industry Roles">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            { industryCompanies.map( ( service ) => (
              <Card as="li" key={ service.name }>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={ service.logo }
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={ service.link.href }>{ service.name }</Card.Link>
                </h2>
                <Card.Description>{ service.description }</Card.Description>
                <div className="mt-4" />
                <p className="relative z-10 flex text-sm font-medium mt-auto text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{ service.link.label }</span>
                </p>
              </Card>
            ) ) }
          </ul>
        </RoleSection>
        <RoleSection title="Consulting">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            { consultedFor.map( ( service ) => (
              <Card as="li" key={ service.name }>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={ service.logo }
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={ service.link.href }>{ service.name }</Card.Link>
                </h2>
                <Card.Description>{ service.description }</Card.Description>
                <div className="mt-4" />
                <p className="relative z-10 flex text-sm font-medium mt-auto text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  { service.link.label != '' ? <><LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{ service.link.label }</span> </> : null }
                </p>
              </Card>
            ) ) }
          </ul>
        </RoleSection>
        <RoleSection title="Mentorship and Advisory">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            { mentoredAt.map( ( service ) => (
              <Card as="li" key={ service.name }>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={ service.logo }
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={ service.link.href }>{ service.name }</Card.Link>
                </h2>
                <Card.Description>{ service.description }</Card.Description>
                <div className="mt-4" />
                <p className="relative z-10 flex text-sm font-medium mt-auto text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  { service.link.label != '' ? <><LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{ service.link.label }</span> </> : null }
                </p>
              </Card>
            ) ) }
          </ul>
        </RoleSection>
      </div>
    </SimpleLayout>

  )
}
