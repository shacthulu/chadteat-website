import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Method',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
<SimpleLayout
  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
>
  <div className="space-y-20">
    <ToolsSection title="Lorem Ipsum">
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
    </ToolsSection>
    <ToolsSection title="Lorem Ipsum">
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
    </ToolsSection>
    <ToolsSection title="Lorem Ipsum">
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
    </ToolsSection>
    <ToolsSection title="Lorem Ipsum">
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
      <Tool title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tool>
    </ToolsSection>
  </div>
</SimpleLayout>

  )
}
