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

const aboutHeader: string = "The people and experiences that got me here.";
const aboutContentPara1: string = "With two decades of experience in the technology and security space, I've spanned the experiences of Board meetings, and troubleshooting midnight outages. Whether it is a boardroom, conference hall, or datacenter, I have a singular passion: building and leading teams to solve complex problems. I've been a CISO, architect, developer, and engineer. I've been a consultant, speaker, mentor, and friend.";
const aboutContentPara2: string = "My corporate journey began with valuable experiences at industry giants like Hewlett-Packard Enterprise Services and The Home Depot. These roles provided a strong foundation in both technical skills and leadership. Seeking new challenges, I transitioned to more agile, growth-oriented organizations. This shift allowed me to contribute to the development of robust security programs in large enterprises and guide a private retailer through a successful IPO. "
const aboutContentPara3: string = "In 2020, I founded Bitfire Security, a boutique firm focused on delivering tailored security solutions to select clients. As the practice expanded, we diversified our offerings to meet evolving market needs. This growth led to the creation of Bitfire.ai, specializing in conversational AI services, and Bitfire Security's expansion into resourcing and GRC.";
const aboutContentPara4: string = "These ventures have allowed me to embrace what I consider my most rewarding role: serving as a fractional CISO (vCISO). In this capacity, I have the privilege of partnering closely with a select group of companies, gaining deep insights into their unique challenges and opportunities. This role allows me to serve as a trusted advisor, enabler, and coach, helping organizations navigate the complex landscape of information security.";
const aboutContentPara5: string = "Throughout this journey, my focus has remained constant: empowering teams, fostering innovation, and building resilient security programs that enable businesses to thrive in an ever-changing digital landscape.";

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
              unoptimized
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            { aboutHeader }
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>{ aboutContentPara1 }</p>
            <p>{ aboutContentPara2 }</p>
            <p>{ aboutContentPara3 }</p>
            <p>{ aboutContentPara4 }</p>
            <p>{ aboutContentPara5 }</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/shacthulu" icon={ TwitterIcon }>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://github.com/redconstellation" icon={ GitHubIcon } className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/chadteat" icon={ LinkedInIcon } className="mt-4">
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
