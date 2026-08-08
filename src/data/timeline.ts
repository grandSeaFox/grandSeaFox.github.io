export type EntryType = 'work' | 'gap' | 'education' | 'project' | 'stack';

export interface Entry {
  when: string;
  what: string;
  kind: string;
  type: EntryType;
  where?: string;
  bullets?: string[];
}

/**
 * Newest first. Jobs, education, projects and first-use-of-a-language markers
 * share one spine on purpose: the overlaps are the point. Co-founding Better
 * Beta while holding the Park role says more than either fact alone.
 */
export const timeline: Entry[] = [
  {
    when: 'Aug 2026',
    what: 'GGBA, a Game Boy Advance emulator',
    kind: 'Project',
    type: 'project',
    where: 'Rust and Android. 270 tests, 60 fps on device.',
  },
  {
    when: 'Jun 2026–Present',
    what: 'Co-founder',
    kind: 'Work',
    type: 'work',
    where: 'Better Beta · alongside the Park role. iOS and Android, in internal beta.',
  },
  {
    when: '2026',
    what: 'Rust · Anthropic SDK · Drizzle · BullMQ',
    kind: 'Stack',
    type: 'stack',
  },
  {
    when: 'Jul 2026',
    what: 'Growth Cockpit · Gonc Investing',
    kind: 'Projects',
    type: 'project',
  },
  {
    when: 'May 2026',
    what: 'Sphala · Arka',
    kind: 'Projects',
    type: 'project',
  },
  {
    when: '2025',
    what: 'Swift · SwiftUI',
    kind: 'Stack',
    type: 'stack',
  },
  {
    when: '2025',
    what: 'ImoCerto',
    kind: 'Project',
    type: 'project',
    where: 'A Portuguese property portal. Over 20,000 listings published. On pause.',
  },
  {
    when: 'Sep 2024–Present',
    what: 'Senior Software Engineer',
    kind: 'Work',
    type: 'work',
    where: 'Park · Lisbon, hybrid',
    bullets: [
      'Own product features end to end across React, Ruby on Rails and TypeScript.',
      'Modernised an aging codebase, introducing engineering standards that lifted quality and reliability.',
      'Drove the shift to a product-led approach, instrumenting features with analytics and A/B testing.',
      'Built integrations with physical devices: thermal printers, barcode scanners, Stripe terminals.',
      'Championed an AI-first development workflow; mentored engineers on review practice.',
    ],
  },
  {
    when: '2024',
    what: 'Ruby on Rails · PHP · AWS · Stripe · Amplitude · PostHog · BigQuery · Go',
    kind: 'Stack',
    type: 'stack',
  },
  {
    when: 'Apr–Sep 2024',
    what: 'Independent projects',
    kind: 'Between roles',
    type: 'gap',
    where:
      'Bun vs Node benchmark, stock-streamer, a supermarket price scraper in Go, Kabanza, and a Next.js 14 onboarding walkthrough.',
  },
  {
    when: 'Apr 2023–Apr 2024',
    what: 'Senior Growth Software Engineer',
    kind: 'Work',
    type: 'work',
    where: 'Roofr · Toronto, remote',
    bullets: [
      'Built and shipped growth strategies driving application growth and user engagement.',
      'Instrumented every new feature with Amplitude to track usage against growth metrics.',
      'Turned concepts into shipped solutions, optimising for value delivered per unit of time.',
    ],
  },
  {
    when: 'Mar 2023',
    what: 'Stock-streamer',
    kind: 'Project',
    type: 'project',
    where: 'Node, Express, MongoDB, Docker, Nginx, Portainer.',
  },
  {
    when: 'Nov 2021–Apr 2023',
    what: 'Fullstack Software Engineer',
    kind: 'Work',
    type: 'work',
    where: 'Nokia · Lisbon',
    bullets: [
      'Designed and built new interfaces and React components.',
      'Re-architected project components for maintainability and scale.',
      'Ran training sessions and mentored new team members.',
    ],
  },
  {
    when: '2021',
    what: 'Java OCP training',
    kind: 'Training',
    type: 'education',
    where:
      'Towards the end of the Climber years, alongside the Java and Spring work. Training only, not a certification.',
  },
  {
    when: '2021',
    what: 'TypeScript · React · Next.js · Angular · Kubernetes · Docker',
    kind: 'Stack',
    type: 'stack',
  },
  {
    when: 'Jun 2019–Sep 2022',
    what: 'Melius',
    kind: 'Project',
    type: 'project',
    where: 'Case-change notifications for lawyers. Angular 8, Node, PostgreSQL.',
  },
  {
    when: 'Sep 2018–Nov 2021',
    what: 'Junior Software Engineer',
    kind: 'Work',
    type: 'work',
    where: 'Climber · Lisbon',
    bullets: [
      'Worked with the Product Manager on UI/UX research for new screens.',
      'Built integrations and algorithms extending application functionality.',
      'Kept the production environment reliable through monitoring and maintenance.',
    ],
  },
  {
    when: '2018',
    what: 'Java · Spring · AngularJS · PostgreSQL',
    kind: 'Stack',
    type: 'stack',
  },
  {
    when: '2017–2018',
    what: 'AP Degree, Computer Science',
    kind: 'Education',
    type: 'education',
    where: 'UCN, University College Nordjylland, Aalborg, Denmark. Did not complete.',
  },
  {
    when: 'Sep 2016–Jan 2017',
    what: 'Retail',
    kind: 'Work',
    type: 'work',
    where: 'Worten.',
  },
];
