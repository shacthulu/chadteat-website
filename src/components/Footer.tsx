import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

// TODO: Update links and nav

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/clients">Experience</NavLink>
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/publicity">Publicity</NavLink>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                &copy; {new Date().getFullYear()} Chad Teat. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
