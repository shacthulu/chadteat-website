import Image from 'next/image'
import Link from 'next/link'
// import clsx from 'clsx'

// import { Button } from '@/components/Button'
// import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  IconAcm
} from '@/components/SocialIcons'
import logoUndrawPieGraph from '@/images/icons/undraw_pie_graph_re_fvol.svg'
import logoUndrawTeaching from '@/images/icons/undraw_teaching_re_g7e3.svg'
import logoUndrawGroupHangout from '@/images/icons/undraw_group_hangout_re_4t8r.svg'
import logoUndrawAcceptTasks from '@/images/icons/undraw_accept_tasks_re_09mv.svg'

const intro: String = "Explore this site if you're interested in working with me personally for executive advisory, fractional CISO, CIO, and speaking engagements. Follow me on Twitter, LinkedIn or subscribe to my minimalist email updates if you are here for the articles and thousands of dollars worth of consulting resources I regularly release."

const heading: String = "Chad Teat: CISO, Professor, Speaker, Technologist."

function SocialLink( {
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
} ) {
  return (
    <Link className="group -m-1 p-1" { ...props }>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Ready to Talk?</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Enough about me, I&apos;d love to hear about you!
      </p>
      <div className="mt-3">
        <EmailButton />
      </div>
    </div>
  )
}

function EmailButton() {
  const to = "chad@chadteat.com";
  const subject = encodeURIComponent( "Partnership Inquiry" );
  const mailtoLink = `mailto:${ to }?subject=${ subject }`;

  return (
    <a href={ mailtoLink } className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      Contact Me
    </a>
  );
}

interface Service {
  service: string
  subtitle: string
  logo: string
}

function Service( { service }: { service: Service } ) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-13 w-13 flex-none items-center justify-center rounded-lg shadow-md dark:bg-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
        <Image src={ service.logo } alt="" className="h-11 w-11 m-1" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Service</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          { service.service }
        </dd>
        <dt className="sr-only">Subtitle</dt>
        <dd className="text-xs -mt-2 text-zinc-500 dark:text-zinc-400">
          { service.subtitle }
        </dd>
      </dl>
    </li>
  )
}

function Services() {
  let services: Array<Service> = [
    {
      service: 'Fractional CISO',
      subtitle: '13 years CISO experience',
      logo: logoUndrawGroupHangout,
    },
    {
      service: 'Executive Advisory',
      subtitle: 'Strategic guidance trusted by 16 organizations',
      logo: logoUndrawPieGraph,
    },
    {
      service: 'Consulting',
      subtitle: '90 consulting engagements performed',
      logo: logoUndrawAcceptTasks,
    },
    {
      service: 'Speaker',
      subtitle: '14 conferences and over 100 lectures given',
      logo: logoUndrawTeaching,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Services</span>
      </h2>
      <ol className="mt-6 space-y-4">
        { services.map( ( service, serviceIndex ) => (
          <Service key={ serviceIndex } service={ service } />
        ) ) }
      </ol>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            { heading }
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            { intro }
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/shacthulu"
              aria-label="Follow on Twitter"
              icon={ TwitterIcon }
            />
            <SocialLink
              href="https://dl.acm.org/profile/81481651312"
              aria-label="View ACM Profile"
              icon={ IconAcm }
            />
            <SocialLink
              href="https://github.com/redconstellation"
              aria-label="Follow on GitHub"
              icon={ GitHubIcon }
            />
            <SocialLink
              href="https://linkedin.com/in/chadteat"
              aria-label="Follow on LinkedIn"
              icon={ LinkedInIcon }
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Services />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Contact/>
          </div>
        </div>
      </Container>
    </>
  )
}

function MailIcon( props: React.ComponentPropsWithoutRef<'svg'> ) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      { ...props }
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon( props: React.ComponentPropsWithoutRef<'svg'> ) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      { ...props }
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}