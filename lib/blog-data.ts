export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image?: string;
}

export const categories = [
  "EdTech & Social Impact",
  "Digital Public Infrastructure",
  "GovTech & Public Sector Innovation",
  "Internet & Digital Governance",
  "Policy to Implementation"
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "speaking-up-for-girls-in-ict-radio-interview",
    title: "Speaking Up for Girls in ICT: My International Girls in ICT Day Radio Interview",
    excerpt: "On 24 April 2026, SMART Zambia Institute invited me to speak on a radio interview for International Girls in ICT Day. A few minutes on air. But those few minutes represented something I did not have growing up.",
    date: "April 11, 2026",
    readTime: "3 min read",
    category: "GovTech & Public Sector Innovation",
    tags: ["Women in Tech", "Public Service", "Girls in ICT", "Zambia", "SMART Zambia"],
    image: "/radio.jpeg",
    content: `On 24 April 2026, SMART Zambia Institute invited me to speak on a radio interview for International Girls in ICT Day. A few minutes on air. But those few minutes represented something I did not have growing up: a woman in a government technology role saying out loud that this field is for you.

## What I actually do

I am a Senior Systems Developer at SMART Zambia Institute. I build and maintain digital systems that sit behind government services. Most people never see this infrastructure but interact with it every day. It is detailed, methodical work. You spend a lot of time understanding how things connect before you write a single line of code.

I wanted to name that reality on air because the image most girls have of ICT is either a lone genius in a dark room or a Silicon Valley startup. Some of the most meaningful technology work happens inside public institutions, solving problems that actually matter.

## What I said

I told them they do not need to wait until they feel ready. Readiness is not something you arrive at before you begin. It is something you build by beginning.

I also told them that one step is enough. One course. One project. One question they were afraid to ask. That is how most of us started.

## A note to any girl reading this

I was once exactly where you are. Unsure. Wondering if I was the right kind of person for this field.

I was not waiting for permission. I was just stubborn enough to keep going.

Come and build the next generation of systems. We need you here.`
  },
  {
    slug: "building-code-sheros",
    title: "Building Code SHEROs: Why I am Teaching African Girls to Code",
    excerpt: "I have spent the better part of a decade building software systems. And in all of that time, one thing has been consistently obvious: the rooms where technology gets built do not have enough women in them.",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "EdTech & Social Impact",
    tags: ["Code SHEROs", "EdTech", "Girls in STEM", "Zambia", "Coding Education", "Social Impact"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    content: `I have spent the better part of a decade building software systems. For government. For businesses. For clients across Zambia and beyond. And in all of that time, across all of those projects, one thing has been consistently, painfully obvious: the rooms where technology gets built do not have enough women in them. And they almost never have women who look like the girls I grew up with in Lusaka.

That observation is not new. Anyone working in African tech knows the numbers. But knowing a statistic and seeing it play out in front of you are different things. The moment that really stuck with me was not in a boardroom or at a conference. It was watching my younger relatives interact with phones and tablets. The boys were curious about how things worked. They wanted to take things apart, build things, break things and fix them. The girls were users. They consumed content, they scrolled, they watched. Nobody had ever told them they could be the ones building what they were looking at.

That is not because they lack ability. It is because nobody showed them it was possible. Nobody put a line of code in front of them and said, here, type this, and watch what happens.

Code SHEROs started with that simple idea. What if the first time a girl sees code, it is wrapped in a story where she is the hero? What if learning to code feels like playing a game, not sitting through a lecture? What if the characters on screen look like her, sound like her, and come from the same world she knows?

The platform teaches HTML, CSS, and JavaScript through story driven missions. There are three mentor characters. Byte is the Problem Solver who teaches logic and HTML. Pixel is the Creator who handles design and CSS. Nova is the Explorer who covers data and JavaScript. Together they fight Dr. Glitch, a villain who has unleashed Code Bugs across the internet. Every coding challenge is a battle. Every correct answer pushes back the chaos. Every completed mission makes the player a little more confident that yes, she can do this.

I chose to build it as a game because the research is clear: girls begin losing interest in STEM subjects between the ages of 11 and 15, and unlike other subjects, that interest does not come back. Code SHEROs targets girls aged 7 to 12, right at the edge of that window. If we can reach them before the world tells them technology is not for them, we can change the trajectory entirely.

The design philosophy is what I call "story first, code second." Every mission starts with a narrative. The Code Bugs have corrupted a school newsletter. Dr. Glitch has broken the links on a website. A recipe page has lost its structure. The girl is not just learning what an h1 tag does. She is saving something. She has a reason to care about getting the code right. And when she does get it right, the page comes back to life on her screen. That moment, watching text appear because you typed the right tag, is genuinely magical the first time it happens. I have seen it. It changes something.

Building the platform has been one of the hardest things I have done. I work full time at Smart Zambia Institute on the Government Service Bus, leading digital transformation for public services. Code SHEROs gets built in the evenings, on weekends, during any gap I can find. I chose Django for the backend and Next.js for the frontend because they are the tools I know best, and when you are building something alone you cannot afford to learn a new framework at the same time. The entire platform, every API endpoint, every mission, every animation, every line of dialogue, was built by me.

There were weeks where I questioned whether it was worth the exhaustion. Then I would test a new mission and imagine a 9 year old girl in Lusaka completing it, seeing her heading turn purple for the first time, and knowing she made that happen with code. That image kept me going.

The pilot is coming. Three to five schools in Lusaka. One hundred to two hundred girls. Their first real experience writing code. I am not going to pretend this will single handedly close the gender gap in African tech. That would be naive. But if even a handful of those girls finish the programme and think, I want to learn more, I want to build more, then Code SHEROs will have done what it was designed to do.

There is a specific moment I am working toward. It is not a launch event or a press feature. It is a girl, maybe 10 years old, opening her laptop at home and showing her parents a webpage she built. Her name in a big heading. Her favourite things in a list. A link to something she cares about. A background colour she chose herself. And her parents looking at that screen and realising their daughter just did something they do not know how to do.

That is the moment. That is why I am building this.

If you want to see what we are building, visit codesheros.co.zm. And if you know a girl between 7 and 12 who might want to try coding for the first time, the platform will be ready for her soon.`
  },
  {
    slug: "govstack-women-in-govtech-challenge-2026-mentee",
    title: "Selected as a GovStack Women in GovTech Challenge 2026 Mentee",
    excerpt: "Out of over 1,300 applicants from 137 countries, I am honoured to be among those chosen to participate in this global programme focused on advancing women in digital government.",
    content: `
Last week, I received news that I had been selected as a mentee for the GovStack Women in GovTech Challenge 2026. Out of over 1,300 applicants from 137 countries, I am honoured to be among those chosen to participate in this global programme focused on advancing women in digital government.

The selection still feels surreal. When I submitted my application, I knew the competition would be intense. GovStack has become a significant force in the digital public infrastructure space, and the opportunity to learn from and collaborate with practitioners and leaders across the global GovTech ecosystem is extraordinary.

## What is GovStack?

For those unfamiliar, GovStack is an initiative supported by the International Telecommunication Union, the German development agency GIZ, Estonia, and the Digital Impact Alliance. The initiative provides governments with open source, reusable digital components called building blocks that can be assembled to deliver public services efficiently. Rather than building systems from scratch, countries can adopt tested, interoperable solutions and adapt them to local contexts.

The philosophy aligns closely with the Digital Public Infrastructure approach that has gained momentum since the G20 endorsement in 2023. Identity, payments, data exchange, and service delivery can be built on shared foundations rather than siloed, proprietary systems. GovStack translates this philosophy into practical tools and frameworks that governments can actually implement.

## Why This Matters to Me

Working at SMART Zambia Institute, I have seen firsthand how digital transformation can improve public service delivery. I have also seen the challenges: coordination across agencies, building technical capacity, earning public trust, and sustaining systems beyond initial implementation. These are not problems with simple solutions. They require continuous learning, collaboration, and exposure to how others are navigating similar terrain.

The GovStack mentorship programme offers exactly this. Over the coming months, I will have access to experienced practitioners, structured learning, and a global cohort of women working on similar challenges in their own countries. The cross border exchange of ideas and experiences is what excites me most.

Too often, those of us working in digital government in African countries operate in relative isolation. We read about what India or Estonia or Singapore have done, but we rarely have the opportunity to engage directly with peers facing comparable constraints and opportunities. This programme creates that space.

## Women in GovTech

The focus on women in this programme is not incidental. Across the technology sector, and particularly in government technology, women remain underrepresented in technical and leadership roles. This matters not just for equity but for the quality of the systems we build. Digital public infrastructure serves everyone. The teams designing and implementing these systems should reflect that diversity.

I have been fortunate to work in environments that supported my growth. Not every woman in technology has that experience. Programmes like the GovStack Women in GovTech Challenge create pathways, visibility, and networks that can make a meaningful difference in how careers develop and how perspectives are included in the work.

## What I Hope to Contribute

Mentorship is not a one way exchange. While I am eager to learn from those with more experience, I also come to this programme with perspectives shaped by working on real implementation challenges in Zambia. The eKYC rollouts, the Government Service Bus integration work, the OpenG2P training in Bangalore, the daily reality of translating policy intent into functioning systems: these experiences have taught me things that might be valuable to others.

I hope to bring questions grounded in practice. What governance models actually work when multiple agencies must share data? How do you build public trust in biometric systems when misinformation spreads faster than facts? What does sustainable capacity building look like when resources are constrained? These are the questions I wrestle with professionally, and I suspect others in the cohort will recognise them.

## Looking Ahead

The programme kicks off in February, and I am already preparing. There is reading to do, connections to make, and a mindset to cultivate: open to learning, willing to share, and focused on outcomes that matter.

For anyone considering applying to future cohorts of this programme or similar initiatives, my encouragement is simple: apply. The worst outcome is a rejection. The best outcome is an opportunity that reshapes your trajectory. I almost did not submit my application, thinking the odds were too long. I am grateful I did.

To the GovStack team, the ITU, GIZ, and everyone involved in making this programme possible: thank you. To my colleagues at SMART Zambia who supported my application: thank you. And to the other women selected for this cohort: I look forward to learning alongside you.

This is the kind of opportunity that does not come often. I intend to make the most of it.
    `,
    date: "2025-01-22",
    category: "GovTech & Public Sector Innovation",
    tags: ["GovStack", "Women in Tech", "Mentorship", "Digital Government", "Zambia"],
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
  },
  {
    slug: "working-at-intersection-technology-public-service",
    title: "Working at the Intersection of Technology and Public Service",
    excerpt: "Technology and public institutions create a particular kind of complexity. The real challenge lies in coordination: making systems work together across agencies and ensuring digital services reach citizens.",
    content: `
Technology and public institutions create a particular kind of complexity. Not the complexity of code or infrastructure. Those challenges have known solutions. The real complexity lies in coordination: making systems work together across agencies, aligning technical capabilities with policy intent, and ensuring digital services actually reach the citizens they serve.

This is the space where I work.

## The Work

As a Business Analyst and Systems Developer at SMART Zambia Institute, I contribute to initiatives at the core of Zambia's digital transformation. My current focus is the Government Service Bus, a national integration platform developed in partnership with the Ministry of Finance and National Planning and supported by the World Bank.

The work involves translating between worlds. Stakeholders articulate needs in policy language. Technical teams think in systems and data flows. The gap between these perspectives is where requirements get lost and where projects stall.

I have seen this firsthand. Working on national integration platforms means navigating not just technical complexity but institutional complexity. Different agencies with different systems, different data standards, and different assumptions about how information should flow. The technical work is often the straightforward part. The harder work is aligning stakeholders before code gets written.

Bridging that gap through requirements analysis, documentation, and coordination is central to what I do.

I also build systems. This dual role shapes my approach. When gathering requirements, I understand what is technically feasible and where implementation risks lie. When writing code, I think about users, institutions, and the policy context the system must serve.

## What Drives This Work

Public systems carry different weight than commercial products. When a government platform fails, citizens do not switch to a competitor. They go without services or return to paper processes that cost time and money they may not have.

This accountability draws me to public sector work. Effective digital public infrastructure reduces friction between citizens and services. It makes institutions more transparent. It frees human capacity for work that requires judgment rather than data entry.

These outcomes require more than technology. They require thoughtful implementation, strong governance, and systems designed with real operational constraints in mind.

## What This Space Explores

This blog works through ideas at the intersection of technology, governance, and public systems. The focus is digital public infrastructure, GovTech implementation, and the practical challenges of making these systems work in emerging economies.

The perspective is practitioner oriented. I write from the position of someone doing this work in Zambia and engaging with the broader African digital public infrastructure community, not observing from a distance. The questions here are the ones I encounter professionally. How do integration architectures scale across agencies with different technical maturity? What makes governance frameworks effective when institutional capacity is limited? Why do some digital transformation initiatives succeed where others stall?

If you work in this space or are trying to understand it, I hope you find something useful here.
    `,
    date: "2025-01-20",
    category: "Policy to Implementation",
    tags: ["Digital Transformation", "Public Service", "GovTech", "Governance"],
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    slug: "mosip-transforming-digital-identity-global-south",
    title: "MOSIP: How Open Source Identity Infrastructure is Transforming the Global South",
    excerpt: "The Modular Open Source Identity Platform is reshaping how nations approach digital identity, offering a sovereign, interoperable foundation for inclusive public services.",
    content: `
Digital identity sits at the foundation of modern public service delivery. Without reliable ways to verify who citizens are, governments struggle to target benefits, prevent fraud, and ensure services reach those who need them most. For decades, building national identity systems required either massive investment in proprietary solutions or dependence on external vendors with ongoing licensing costs.

MOSIP, the Modular Open Source Identity Platform, is changing this equation.

## What Makes MOSIP Different

Developed by the International Institute of Information Technology Bangalore with support from the Bill and Melinda Gates Foundation, MOSIP provides countries with a complete, open source foundation for building national digital identity systems. The platform handles the complex technical requirements of biometric capture, identity deduplication, credential issuance, and authentication services.

What sets MOSIP apart is not just that it is free to use. The platform was designed from the ground up with the needs of developing nations in mind. It works on modest hardware, supports offline scenarios common in rural areas, and provides flexibility to accommodate different legal frameworks and use cases.

For technology teams in government, this matters. Proprietary identity platforms often arrive as black boxes. When something breaks or needs customisation, you wait for the vendor. With MOSIP, the code is visible, modifiable, and supported by a growing community of implementers facing similar challenges.

## Adoption Across Africa and Beyond

The momentum behind MOSIP adoption is significant. The Philippines has deployed MOSIP as the foundation for their PhilSys national ID program, enrolling over 90 million citizens. Morocco has launched its system. Ethiopia, Guinea, Sierra Leone, and Togo are at various stages of implementation. Sri Lanka and other nations across Asia have committed to the platform.

Zambia recently joined this movement, with government developers completing MOSIP training focused on healthcare system integration as part of the World Bank supported Digital Zambia Acceleration Project. The country is preparing to launch an open source eKYC system that will enable identity verification using National Registration Card data.

For African nations building foundational digital infrastructure, MOSIP represents an opportunity to leapfrog proprietary solutions. Countries can deploy sovereign identity systems without the ongoing costs and vendor dependencies that constrained previous generations of government technology. The global "50 in 5" campaign aims to implement digital identity systems in 50 countries within five years, and MOSIP is central to that ambition.

## Integration with Broader DPI Initiatives

MOSIP does not exist in isolation. The platform is designed to work within the broader digital public infrastructure ecosystem. Identity credentials issued through MOSIP can integrate with payment systems, data exchange platforms, and service delivery applications.

This interoperability matters. When identity, payments, and data exchange work together, governments can deliver services more efficiently. Citizens can access benefits without repeated verification. Fraud becomes harder as systems cross check information automatically.

The India Stack demonstrated this at scale. Aadhaar identity credentials linked to UPI payments and consent based data sharing created infrastructure that enabled everything from direct benefit transfers to rapid COVID vaccination tracking. MOSIP offers other countries a foundation to build similar integrated systems.

## Challenges and Considerations

Adopting MOSIP is not without challenges. Countries need technical capacity to deploy and maintain the platform. Privacy frameworks must be established to govern how identity data is collected, stored, and used. Enrollment infrastructure must reach populations across diverse geographies, including rural areas with limited connectivity and citizens without existing documentation.

The governance questions are often harder than the technical ones. Who controls the identity database? What safeguards prevent misuse? How do you build public trust in a system that collects biometric data? These questions require clear policy answers before implementation begins, not after.

One pattern emerging across implementations is the emphasis on local capacity building. Sustainable digital infrastructure requires domestic teams who can manage and maintain systems independently rather than depending on external vendors indefinitely. The growing community of MOSIP implementers shares lessons learned and contributes improvements back to the platform, but ultimately successful deployment depends on sustained political commitment and institutional investment that outlasts any single administration.

## Looking Forward

The shift toward open source identity infrastructure represents a fundamental change in how nations approach digital transformation. Rather than purchasing solutions they cannot inspect or modify, countries can build on transparent foundations they control and adapt to their specific needs.

For those of us working in digital public infrastructure, MOSIP demonstrates what becomes possible when technology is designed as a public good. The platform proves that world class identity infrastructure need not be the exclusive domain of wealthy nations or proprietary vendors.

The question for each country is not whether to digitise identity. That transition is already underway. The question is whether to do so on terms that preserve sovereignty, enable interoperability, and serve citizens rather than vendors.
    `,
    date: "2025-01-18",
    category: "Digital Public Infrastructure",
    tags: ["MOSIP", "Digital Identity", "Open Source", "Africa", "Zambia"],
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    slug: "g20-dpi-framework-emerging-economies",
    title: "The G20 DPI Framework: What It Means for Emerging Economies",
    excerpt: "The G20's endorsement of Digital Public Infrastructure principles marks a pivotal moment for how nations approach foundational digital systems and international cooperation.",
    content: `
In 2023, under India's presidency, the G20 endorsed a framework for Digital Public Infrastructure that has significant implications for how nations approach foundational digital systems. This was not merely a technical document. It represented a shift in how the international community thinks about digital development.

But frameworks do not build systems. The real question is what happens when these principles meet the realities of implementation in countries with limited resources, competing priorities, and institutional constraints.

## From Products to Infrastructure

The traditional approach to government digitisation focused on procuring specific solutions for specific problems. A tax system here, a benefits platform there, each implemented as a standalone product with its own database, authentication mechanism, and vendor relationship.

The DPI framework proposes something different: shared digital infrastructure that multiple services can build upon.

This shift matters because it changes the economics of digital transformation. When identity verification, payment processing, and data exchange exist as shared infrastructure, individual services do not need to build these capabilities from scratch. Development costs decrease. Interoperability improves. Innovation accelerates as builders focus on services rather than plumbing.

The logic is compelling. But it also requires a different kind of coordination than most governments are structured to deliver.

## The Three Foundational Layers

The G20 framework identifies three core components of digital public infrastructure. Digital identity systems enable citizens to prove who they are across services. Payment infrastructure allows money to move efficiently between parties. Data exchange frameworks permit information to flow between systems with appropriate consent and governance.

India's experience with Aadhaar and UPI, implemented through the broader India Stack, demonstrated how these layers could work together at scale. Over a billion identity credentials. Billions of real time payments monthly. A foundation that enabled innovations from direct benefit transfers to the CoWIN vaccination platform during the pandemic.

The India example is powerful but also exceptional. India had decades of investment in technical institutions, a massive domestic market, and programme continuity that sustained the effort across administrations. Countries looking to replicate these results must be realistic about what is transferable and what is context specific.

## What This Means for African Nations

For countries building digital infrastructure, the G20 framework provides both validation and direction. It confirms that investing in foundational layers rather than isolated systems is the right approach. It provides a common vocabulary for discussing digital transformation with international partners and development finance institutions.

More practically, the framework has catalysed funding and technical assistance for DPI initiatives. The World Bank, bilateral development agencies, and private foundations have aligned programmes around the DPI approach. Countries can now access resources specifically designed to support foundational infrastructure rather than piecemeal projects.

This alignment is evident across the continent. Zambia's Digital Zambia Acceleration Project, supported by a $100 million World Bank grant, is structured around DPI principles. Similar initiatives are underway in Ethiopia, Nigeria, and elsewhere. The framework has given these efforts a shared language and a clearer path to international support.

But funding is only part of the equation. The harder work is institutional.

## The Governance Problem

Shared infrastructure requires shared governance. When multiple agencies depend on common platforms, decisions about standards, access, and evolution involve competing interests across government. Who controls the identity system? What data can flow through exchange platforms? How are costs and benefits distributed across agencies that did not choose to depend on each other?

These questions are often harder than the technical ones.

Consider a practical example. A government service bus that integrates data across ministries sounds efficient in theory. In practice, it means agencies must agree on data standards, accept dependencies on systems they do not control, and trust that the platform will remain available and secure. Ministries accustomed to operating their own systems may resist this loss of autonomy even when the collective benefits are clear.

Countries implementing DPI must build institutional arrangements that balance efficiency with accountability, innovation with stability, inclusion with security. This requires sustained attention to governance design, not just technology deployment.

## What the Framework Does Not Solve

The G20 framework is useful but incomplete. It describes what to build without fully addressing how to build it in contexts where technical capacity is limited, institutional attention is stretched, and existing systems cannot simply be replaced.

A few gaps are worth noting.

The framework assumes a level of state capacity that many countries are still developing. Building and maintaining foundational infrastructure requires not just initial investment but ongoing operational capability. Who trains the engineers? Who maintains the systems when vendors leave?

The framework is largely silent on the transition problem. Most countries are not starting from scratch. They have existing identity databases, payment systems, and data silos that may be outdated but are also operational. Migrating to new infrastructure while keeping services running is a different challenge than greenfield development.

The framework underemphasises the importance of public trust. I experienced this firsthand during an eKYC rollout at a government ministry. The hesitation and distrust among staff and citizens over biometric data collection was significant. In a context where online misinformation spreads rapidly and where religious concerns about surveillance and identity systems run deep, fear can outpace facts. Some worried about how their data would be used. Others had heard alarming theories online about what biometric systems really mean.

This is not irrational. People are being asked to hand over their most personal identifiers to systems they do not fully understand, managed by institutions they may not fully trust. Without sustained public sensitisation, clear communication about data protection, and visible accountability mechanisms, even well designed systems will face resistance.

The framework also underemphasises the need for clear legal foundations. Singapore offers a useful contrast here. The Government Technology Agency, known as GovTech, was established as a statutory board in 2016 with a clear legislative mandate to drive digital transformation across government. Singapore's Cybersecurity Act provides a legal framework for protecting critical information infrastructure, and a new Digital Infrastructure Act is being introduced to regulate foundational digital services including cloud providers and data centres. This legislative clarity creates accountability structures that define who owns what, who is responsible for security, and how incidents are handled.

Many countries implementing DPI lack equivalent legal frameworks. Without legislation that clearly designates ownership of national digital systems, establishes data protection requirements, and assigns accountability for failures, implementation happens in a governance vacuum. Building these legal foundations should be a prerequisite, not an afterthought.

None of this means the framework is wrong. It means implementation requires more than following a blueprint.

## The Path Forward

The G20 endorsement was a milestone, not a conclusion. Translating principles into practice requires sustained effort across technical, institutional, and policy dimensions. Countries must build implementation capacity, establish appropriate governance frameworks, and maintain focus through transitions in government.

For practitioners in this space, the framework provides common ground for collaboration. We can share lessons across borders, contribute to open source platforms, and build communities of practice around DPI implementation.

The opportunity is significant. Digital public infrastructure, implemented well, can transform how governments serve citizens. The G20 framework helps point the way. But the work of building these systems, earning public trust, and sustaining them over time remains with those of us doing it on the ground.
    `,
    date: "2025-01-10",
    category: "Internet & Digital Governance",
    tags: ["G20", "DPI", "Policy", "International Cooperation", "Zambia", "Governance"],
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80"
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}
