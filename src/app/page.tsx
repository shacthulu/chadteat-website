/* eslint-disable @next/next/no-img-element */
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  IconAcm
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

const intro: String = "Explore this site if you're interested in working with me personally for executive advisory, fractional CISO, CIO, and speaking engagements. Follow me on Twitter, LinkedIN or subscribe to my privacy-respecting email updates if your here for the human-written articles, updates on my upcoming book \"Reasonable Security,\" and thousands of dollars worth of consulting resources I regularly release in various publications."

const heading: String = "CISO, Author, Professor, Entrepreneur."

const numArticlesToShow = 4

function Article( { article }: { article: ArticleWithSlug } ) {
  return (
    <Card as="article">
      <Card.Title href={ `/articles/${ article.slug }` }>
        { article.title }
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={ article.date } decorate>
        { formatDate( article.date ) }
      </Card.Eyebrow>
      <Card.Description>{ article.description }</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps[ 'src' ]
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role( { role }: { role: Role } ) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={ role.logo } alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          { role.company }
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          { role.title }
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={ `${ startLabel } until ${ endLabel }` }
        >
          <time dateTime={ startDate }>{ startLabel }</time>{ ' ' }
          <span aria-hidden="true">—</span>{ ' ' }
          <time dateTime={ endDate }>{ endLabel }</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Hewlett Packard Enterprise',
      title: 'Architecture and Advisory',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Kimberly Clark',
      title: 'Director of Security and Deputy CISO',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Home Depot',
      title: 'Security Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Floor and Decor',
      title: 'CISO',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        { resume.map( ( role, roleIndex ) => (
          <Role key={ roleIndex } role={ role } />
        ) ) }
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  let articles = ( await getAllArticles() ).slice( 0, 4 )

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            { heading }
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            { intro }</p>
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
              href="www.linkedin.com/in/chadteat"
              aria-label="Follow on LinkedIn"
              icon={ LinkedInIcon }
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12 md:mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            { articles.slice( 0, numArticlesToShow ).map( ( article ) => (
              <Article key={ article.slug } article={ article } />
            ) ) }
            <Link href={ '' } className="-my-12 text-sm font-medium text-teal-500 h-5">More...</Link>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

// Icons
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

function ArrowDownIcon( props: React.ComponentPropsWithoutRef<'svg'> ) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" { ...props }>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


// Unused components which may be re-added
// function Testimonial() {
//   return (
//     <section className="relative isolate overflow-hidden px-6 py-12 sm:py-8 lg:px-8">
//       <div className="mx-auto max-w-2xl lg:max-w-4xl">
//         <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
//         <figure className="mt-10">
//           <blockquote className="text-center text-xl font-semibold leading-8 text-gray-100 sm:text-xl sm:leading-9">
//             <p>
//               “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
//               molestiae. Numquam corrupti in laborum sed rerum et corporis.”
//             </p>
//           </blockquote>
//           <figcaption className="mt-10">
//             <img
//               className="mx-auto h-10 w-10 rounded-full"
//               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               alt=""
//             />
//             <div className="mt-4 flex items-center justify-center space-x-3 text-base">
//               <div className="font-semibold text-gray-900">Judith Black</div>
//               <svg viewBox="0 0 2 2" width={ 3 } height={ 3 } aria-hidden="true" className="fill-gray-900">
//                 <circle cx={ 1 } cy={ 1 } r={ 1 } />
//               </svg>
//               <div className="text-gray-600">Head of Manufacturing Security</div>
//             </div>
//           </figcaption>
//         </figure>
//       </div>
//     </section>
//   )
// }

// function Testimonials() {
//   return (
//     <section className="py-8 sm:py-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto grid max-w-2xl space-x-5 grid-cols-1 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-2">
//           <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 border border-zinc-700/40 p-6 rounded-2xl">
//             <img className="h-12 self-start" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/The_Honey_Baked_Ham_Company.svg/1280px-The_Honey_Baked_Ham_Company.svg.png" alt="" />
//             <figure className="mt-4 flex flex-auto flex-col justify-between">
//               <blockquote className="text-md leading-8 ">
//                 <p>
//                   “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
//                   arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
//                   ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
//                 </p>
//               </blockquote>
//               <figcaption className="my-4 flex items-center gap-x-6">
//                 <img
//                   className="h-14 w-14 rounded-full bg-gray-800"
//                   src="https://media.licdn.com/dms/image/C4E03AQGETvfdjT0yKA/profile-displayphoto-shrink_400_400/0/1516321344230?e=1709769600&v=beta&t=W--t1BMJp9bRpWbj8BFs_kKq3hUcb8Q5mkf1s0qxPwg"
//                   alt=""
//                 />
//                 <div className="text-base">
//                   <div className="font-semibold text-white">Bill Bolton</div>
//                   <div className="mt-1 text-gray-400">CIO of Honeybaked Ham</div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>
//           <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 border border-zinc-700/40 p-6 rounded-2xl">
//             <img className="h-12 w-48 self-start" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Tesla_Motors_Logo.svg" alt="" />
//             <figure className="my-4 flex flex-auto flex-col justify-between">
//               <blockquote className="text-md leading-8 ">
//                 <p>
//                   “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
//                   arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
//                   ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
//                 </p>
//               </blockquote>
//               <figcaption className="mt-4 flex items-center gap-x-6">
//                 <img
//                   className="h-14 w-14 rounded-full bg-gray-800"
//                   src="https://media.licdn.com/dms/image/C4E03AQEgeqX8vitWcg/profile-displayphoto-shrink_400_400/0/1556658590543?e=1709769600&v=beta&t=hZXdchDoFzeS-kSCIZFJykdFNkwMqp9l5KJ1iSSMWSw"
//                   alt=""
//                 />
//                 <div className="text-base">
//                   <div className="font-semibold text-white">Ismail Guneydas</div>
//                   <div className="mt-1 text-gray-400">Head of Cybersecurity at Tesla</div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Testimonial2() {
//   return (
//     <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
//       <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
//         <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
//           <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
//             <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
//               <img
//                 className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
//                 src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
//             <figure className="relative isolate pt-6 sm:pt-12">
//               <svg
//                 viewBox="0 0 162 128"
//                 fill="none"
//                 aria-hidden="true"
//                 className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
//               >
//                 <path
//                   id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
//                   d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
//                 />
//                 <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={ 86 } />
//               </svg>
//               <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
//                 <p>
//                   Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt
//                   nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque
//                   bibendum.
//                 </p>
//               </blockquote>
//               <figcaption className="mt-8 text-base">
//                 <div className="font-semibold text-white">Judith Black</div>
//                 <div className="mt-1 text-gray-400">CEO of Workcation</div>
//               </figcaption>
//             </figure>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Photos() {
//   let rotations = [ 'rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2' ]

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         { [ image1, image2, image3, image4, image5 ].map( ( image, imageIndex ) => (
//           <div
//             key={ image.src }
//             className={ clsx(
//               'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
//               rotations[ imageIndex % rotations.length ],
//             ) }
//           >
//             <Image
//               src={ image }
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ) ) }
//       </div>
//     </div>
//   )
// }