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
  title: 'Publicity',
  description:
    'A listing of accolades and appearances.',
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
            href="https://www.gartner.com/"
            title="Top 3 Influential CISOs"
            description='Gartner nominates a list of noteworthy CISOs in one of three areas. The "influence" category is a peer-voted award for CISOs who have made a significant impact on the industry, voted on by over one-hundred CISOs.'
            event="Gartner"
            cta=""
          />
          <Appearance
            href="https://www.csoonline.com/awards/"
            title="Best Security Program (2015, 2016, 2017)"
            description="CSO Online evaluates large and small security programs from across the world and recognizes extraordinary, outsized impacts."
            event="CSO Magazine"
            cta=""
          />
          <Appearance
            href="https://www.kennesaw.edu/"
            title="Most Influential Professor"
            description='"Most Influential Professor" is a distinction granted solely by graduating seniors at Kennesaw State University.  They choose one professor who has made the most impact on their education and career.'
            event="Kennesaw State University"
            cta=""
          />
          <Appearance
            href="https://gcisoleadershipfoundation.org/certification-governing-board/"
            title="GCISO Certification Governing Board Member"
            description="The GCISO certification is the most modern and progressive executive security training certification.  The governing body is responsible for the certification's content and direction."
            event="GCISO Foundation"
            cta=""
          />
          <Appearance
            href="https://www.gartner.com/en/conferences/na/security-risk-management-us/programs/ciso-circle"
            title="Gartner CISO Coalition Governing Body - Georgia"
            description="Hundreds of security leaders are members of the invite-only Gartner CISO Coalition. The Georgia Governing Body is responsible for the continued community involvement, growth, and membership of the Georgia chapter."
            event="Gartner"
            cta=""
          />
          <Appearance
            href="#"
            title="Best Paper, Pedagogy"
            description="The Academy for Computing Machinery coordinated a conference, focused on cutting-edge research and pedagogy. They pedagogy category is for novel and progressive ways to teach computer science."
            event="InfoSec CD Eastern Conference"
            cta=""
          />
        </SpeakingSection>
        <SpeakingSection title="Speaking Engagements">
          <Appearance
            href="https://www.cshub.com/events-cybersecurityexchange/speakers/chad-teat"
            title="Unleash Your Program's Full Potential Through Diversity"
            description="IQPC Cybersecurity Exchange hosted a conference in Amelia Island where CISOs and CIOs from companies of all sizes gathered to discuss the evolving landscape of security and risk management. More than 40 CISOs and CIOs were present for my speech."
            event="IQPC Cybersecurity Exchange Opening Keynote"
            cta=""
          />
          <Appearance
            href="https://www.gartner.com/en/conferences/na/security-risk-management-us"
            title="Bridging the Skill Gap through Diversity"
            description="Gartner hosts an annual, three-day destination Global CISO Executive Summit.  My speech was delivered to the full, 100+ security leader audience ."
            event="Gartner Global CISO Executive Summit"
            cta=""
          />
          <Appearance
            href="https://www.cio.com/"
            title="Building a Cybersecurity Shock Absorber for the Enterprise"
            description="CIO Magazine held a conference for over 50 CIOs and senior IT leaders at the Atlanta Perimeter Center Marriott.  This panel included three other IT executives and fielded rapid-fire questions from the audience."
            event='CIO Magazine "CIO Perspectives" Conference'
            cta=""
          />
          <Appearance
            href="https://www.csoonline.com/"
            title="Run Your Security Program Like a Startup"
            description="CSO Magazine held its annual CSOConfab, invite-only security conference at a resort in Phoenix, AZ.  Over 80 IT and security leaders attended my speech on the main stage."
            event="CSO Magazine CSO50 Conference Keynote"
            cta=""
          />
          <Appearance
            href="https://www.kennesaw.edu/"
            title="Opening Keynote"
            description="Kennesaw State University hosts a large event where their seniors highlight innovative and impactful research and projects for IT executives across the nation.  I was the opening keynote speech."
            event="Kennesaw State University Senior Design C-Day"
            cta=""
          />
          <Appearance
            href="https://www.csoonline.com/podcasts/cso-executive-sessions/"
            title="In Security, Soft Skills are King"
            description="The SVP and founder of CSO Magazine hosted a series of podcasts where he interviewed industry-regarded CISOs.  On his third episode, I pleaded the case for business acumen, empathy, and communication skills in security leaders."
            event="CSO Online Executive Sessions Podcast"
            cta=""
          />
          <Appearance
            href="https://cpe.kennesaw.edu/"
            title="Effective and Secure Usage of IT for Healthcare Professionals"
            description="I presented and fielded questions for a large room of healthcare professionals.  I guided them through secure technology usage, compliance requirements, and leveraging technology to improve patient outcomes."
            event="KSU Continuing Education"
            cta=""
          />
        </SpeakingSection>
        <SpeakingSection title="Lectures">
          <Appearance
            href="https://www.kennesaw.edu/"
            title="Game Design and Development with C# and Unity"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Southern Polytechnic State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="https://www.kennesaw.edu/"
            title="Advanced Java Programming"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Southern Polytechnic State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="https://www.kennesaw.edu/"
            title="Intro to Object Oriented Programming"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="The Academy for Computing Machinery (ACM)"
            cta="Lorem ipsum"
          />
          <Appearance
            href="https://www.kennesaw.edu/"
            title="Ethical Hacking"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="https://www.kennesaw.edu/"
            title="System Design and Administration"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            event="Kennesaw State University"
            cta="Lorem ipsum"
          />
          <Appearance
            href="https://www.kennesaw.edu/"
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
