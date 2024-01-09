import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

// TODO: Update or remove links

function SpeakingSection( {
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section> ) {
  return (
    <Section { ...props }>
      <div className="space-y-16">{ children }</div>
    </Section>
  )
}

function Appearance( {
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
} ) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={ href }>
        { title }
      </Card.Title>
      <Card.Eyebrow decorate>{ event }</Card.Eyebrow>
      <Card.Description>{ description }</Card.Description>
      { cta !== "" ? <Card.Cta>{ cta }</Card.Cta> : null }
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Public works and accolades."
      intro="While I've contributed to many publications, podcasts, and events, here are some of my favorites."
    >
      <div className="space-y-16">
        <SpeakingSection title="Accolades">
          <Appearance
            href="#"
            title="Top 3 Influential CISOs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Gartner"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Best Security Program (Three Times)"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="CSO Magazine"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Most Influential Professor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Big Chief Award"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Hewlett-Packard"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Best Paper, Pedagogy"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="InfoSec CD Eastern Conference"
            cta="Lorem ipsum"
          />
        </SpeakingSection>
        <SpeakingSection title="Speaking Engagements">
          <Appearance
            href="#"
            title="Unleash Your Program’s Full Potential Through Diversity"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="IQPC Cybersecurity Exchange Opening Keynote"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Bridging the Skill Gap through Diversity"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Gartner Global CISO Executive Summit"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Building a Cybersecurity Shock Absorber for the Enterprise"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event='CIO Magazine "CIO Perspectives" Conference'
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Run Your Security Program Like a Startup"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="CSO Magazine CSO50 Conference Keynote"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Keynote Speaker"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University Senior Design C-Day"
            cta="Lorem ipsum"
          />
          <Appearance
            href="https://www.csoonline.com/podcast/508627/episode-5-in-security-soft-skills-are-king.html"
            title="In Security, Soft Skills are King"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="CSO Online Executive Sessions Podcast"
            cta="Lorem ipsum"
          />
          <Appearance
            href="https://www.csoonline.com/podcast/508627/episode-5-in-security-soft-skills-are-king.html"
            title="Building Your Security Program"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="GlobalCISO Certification Program"
            cta="Lorem ipsum"
          />,
          <Appearance
            href="#"
            title="Effective and Secure Usage of IT for Healthcare Professionals"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="KSU Continuing Education"
            cta="Lorem ipsum"
          />
        </SpeakingSection>
        <SpeakingSection title="Lectures">
          <Appearance
            href="#"
            title="Game Design and Development with C# and Unity"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Southern Polytechnic State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Advanced Java Programming"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Southern Polytechnic State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Intro to Object Oriented Programming"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="The Academy for Computing Machinery (ACM)"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Ethical Hacking"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="System Design and Administration"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Defensive Systems"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University"
            cta="Lorem ipsum"
          />
        </SpeakingSection>
        <SpeakingSection title="Publications">
          <Appearance
            href="#"
            title="Incorporating Current Events into Information Assurance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="InfoSec CD Eastern Conference"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Friendship 101: How to Steal Data from Friends for Fun and Profit "
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="InfoSec CD Eastern Conference"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="The Security of Cryptographic Hashes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="The Academy for Computing Machinery (ACM)"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="Mitigating Mobile Risk with Continuous Diagnostic and Mitigation (CDM)"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="The Academy for Computing Machinery (ACM)"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="The Security of Cryptographic Hashes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="The Academy for Computing Machinery (ACM)"
            cta="Lorem ipsum"
          />
          <Appearance
            href="#"
            title="The Effects of Grid Computing and Cryptanalysis on Common Cryptosystems"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University Master's Thesis"
            cta="Lorem ipsum"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
