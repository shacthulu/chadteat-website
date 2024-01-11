import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  IconAcm
} from '@/components/SocialIcons'
import fullHeadshotImage from '@/images/photos/chadheadshot2.jpg'

// TODO: Revise content

const aboutHeader: string = "How I log in every day, ready to deliver.";
const aboutContentPara1: string = "With two decades of experience in the technology and security space, I've spanned the experiences of Board meetings, and troubleshooting midnight outages.  Whether it is a boardroom, conference hall, or datacenter, I have a singular passion: building and leading teams to solve complex problems. I've been a CISO, architect, developer, and engineer.  I've been a consultant, speaker, mentor, and friend. ";
const aboutContentPara2: string = "My 16 years of corporate experience kicked off strong, including technical and leadership tenures at the Fortune 10 Big Tech Hewlett-Packard Enterprise Services, and retail giant The Home Depot.  Leaving the established programs behind I shifted focus to greenfield and quick-moving organizations.  During this time I hired over 100 security professionals, built award-winning security programs in 50,000 person companies, and led as CISO to take a small private retailer public in what was the most bombastic opening on wallstreet that year. "
const aboutContentPara3: string = "I founded Bitfire Security in 2020 as a small, boutique security firm that delivered exceptional results to hand-picked customers.The practice grew... and grew. Bitfire won a \"Top 10 Security Assessment Company,\" spot in the same year it won \"Top 10 Managed Services Providers.\"  To retain Bitfire Security's identity, I split the portfolio and added partners. Bitfire.ai offers services for conversational AI. Justikar spun off to offer managed IT and security services to small and midsize enterprises.  Having partners on Bitfire Security, Bitfire.ai, and Justikar has allowed me to expand what is, by far, my favorite role - the CISO.  As a fractional CISO (vCISO) I get to work with a small number of companies, gaining an intimate knowledge of their people, vertical, and processes.  I get to be a trusted partner, enabler, advisor and coach.";

function SocialLink( {
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
} ) {
  return (
    <li className={ clsx( className, 'flex' ) }>
      <Link
        href={ href }
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{ children }</span>
      </Link>
    </li>
  )
}

function MailIcon( props: React.ComponentPropsWithoutRef<'svg'> ) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" { ...props }>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Chad Teat.',
}

export default function About() {
  const to = "chad@chadteat.com";
  const subject = encodeURIComponent( "Partnership Inquiry" );

  // Create the mailto link
  const mailtoLink = `mailto:${ to }?subject=${ subject }`;
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={ fullHeadshotImage }
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            { aboutHeader }
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>{ aboutContentPara1 }</p>
            <p>{aboutContentPara2}</p>
            <p>{aboutContentPara3}
            </p>          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/shacthulu" icon={ TwitterIcon }>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://github.com/redconstellation" icon={ GitHubIcon } className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="www.linkedin.com/in/chadteat" icon={ LinkedInIcon } className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://dl.acm.org/profile/81481651312" icon={ IconAcm } className="mt-4">
              Academy for Computing Machinery
            </SocialLink>
            <SocialLink
              href={ mailtoLink }
              icon={ MailIcon }
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              chad@chadteat.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
