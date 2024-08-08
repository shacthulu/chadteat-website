import { type Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Chad Teat',
    default:
      'Chad Teat - CISO, Professor, Speaker, Entrepreneur.',
  },
  description:
    'I’m Chad, a security leader in the Greater Atlanta Area. I’m the founder of Bitfire Security, and enthusiastic advisory partner of many amazing businesses.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics/>
      </body>
    </html>
  )
}
