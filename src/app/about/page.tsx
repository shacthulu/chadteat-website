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

// TODO: Update content


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
            Duis nisi non consectetur exercitation sit amet.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>Ullamco qui id enim aliquip duis aute ipsum irure velit. Quis voluptate exercitation occaecat aute fugiat non incididunt laborum. Nostrud ea non laboris laboris cupidatat aliqua laboris sunt enim officia deserunt deserunt. Consectetur excepteur adipisicing dolor officia. Fugiat in ut proident elit sint et tempor enim fugiat.
            </p>
            <p>Quis cupidatat ipsum dolor aliqua ad fugiat cupidatat adipisicing nulla. Anim cillum ullamco culpa consequat commodo fugiat. Veniam irure cupidatat ea veniam sunt qui. Fugiat commodo aliqua ex culpa cillum irure minim voluptate eu officia culpa ex. Minim commodo consectetur enim et excepteur id dolor sint ipsum excepteur et qui. Dolore et occaecat laboris sunt reprehenderit voluptate fugiat sint et qui. Laboris aliquip do est ea Lorem voluptate fugiat exercitation non officia mollit incididunt occaecat aliqua.
            </p>
            <p>Et nisi laborum cupidatat aliquip adipisicing reprehenderit. Labore amet mollit officia pariatur incididunt. Reprehenderit cillum magna enim sint Lorem quis enim tempor non aute incididunt. Pariatur nulla dolor in tempor nulla ullamco. Pariatur veniam deserunt in anim excepteur enim cupidatat.
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
