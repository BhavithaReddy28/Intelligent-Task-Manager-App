export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  source: 'email' | 'chat' | 'meeting';
  dueDate?: string;
  extractedFrom: string;
}

export interface Conversation {
  id: string;
  source: 'email' | 'chat' | 'meeting';
  from: string;
  subject: string;
  content: string;
  time: string;
  extractedTasks: number;
  tasks?: Array<{ title: string; dueDate?: string }>;
}

export const mockTasks: Task[] = [
  {
    id: '8',
    title: 'Finish project report',
    description: 'Due today',
    completed: false,
    priority: 'high',
    source: 'email',
    dueDate: 'Today',
    extractedFrom: 'vvsbhavithareddy@gmail.com',
  },
  {
    id: '9',
    title: 'Attend dental appointment',
    description: 'Reminder for today',
    completed: false,
    priority: 'high',
    source: 'email',
    dueDate: 'Today',
    extractedFrom: 'alimilivarshini@gmail.com',
  },
  {
    id: '10',
    title: 'Update Microsoft Teams integration',
    completed: false,
    priority: 'medium',
    source: 'email',
    dueDate: 'Dec 2',
    extractedFrom: 'Microsoft CMT',
  },
  {
    id: '12',
    title: 'Review Teams API v2.0 migration guide',
    completed: false,
    priority: 'medium',
    source: 'email',
    extractedFrom: 'Microsoft CMT',
  },
  {
    id: '13',
    title: 'Test Teams integration in sandbox environment',
    completed: false,
    priority: 'medium',
    source: 'email',
    dueDate: 'Dec 2',
    extractedFrom: 'Microsoft CMT',
  },
  {
    id: '14',
    title: 'Submit research paper for ARCS 2026',
    description: 'Fill form for PhD research paper submission',
    completed: false,
    priority: 'high',
    source: 'email',
    dueDate: 'Dec 7',
    extractedFrom: 'niyati.chhaya@hyprbots.com',
  },
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    source: 'email',
    from: 'vvsbhavithareddy@gmail.com',
    subject: 'Project Report Reminder',
    content: `Hey,

Make sure to finish the project report today.`,
    time: '30 minutes ago',
    extractedTasks: 1,
    tasks: [
      { title: 'Finish project report', dueDate: 'Today' },
    ],
  },
  {
    id: '2',
    source: 'email',
    from: 'alimilivarshini@gmail.com',
    subject: 'Dental Appointment Reminder',
    content: `Hey,

Don't forget to attend your dental appointment today.`,
    time: '1 hour ago',
    extractedTasks: 1,
    tasks: [
      { title: 'Attend dental appointment', dueDate: 'Today' },
    ],
  },
  {
    id: '3',
    source: 'email',
    from: 'niyati.chhaya@hyprbots.com via acm.org',
    subject: 'Invitation to Submit Research Papers for ARCS 2026',
    content: `Dear Amrita School of Engineering/Bangalore ACM-W Student Chapter Colleagues,

We are pleased to invite Indian PhD students to submit their research papers for inclusion in ARCS 2026, an annual ACM event celebrating high-quality Computer Science research across diverse domains.

We welcome submissions of papers that:
- Have been accepted or published in A* or A-ranked conferences (as per CORE or equivalent ranking) between November 2024 and October 2025, and
- Cover any area of Computer Science, including but not limited to AI/ML, Systems, Security, Theoretical CS, HCI, Data Management, and Interdisciplinary Computing.

ACM will sponsor the accommodation, food and partially the travel for the selected applicants to participate in ACM ARCS and meet hundreds of early, mid career and established academics across Indian Institutions.

The goal of ARCS 2026 is to spotlight exceptional work by PhD scholars in India, foster research visibility, and strengthen collaboration across institutions.

Submission Details:
- Eligible applicants: First/ lead author of the paper. They should be PhD students enrolled in Indian institutions at the time of publishing the paper.
- Submission type: Camera-ready paper or preprint of an accepted/published A*/A conference paper
- Additional information required: Conference name, acceptance details, and author affiliation(s)

Please fill in the following form: https://forms.gle/5qeJsNauuVXkJBDs7 with your details by December 7, 2025 and notification of acceptance will be sent by December 10, 2025

We encourage you to submit your work and join us in showcasing and celebrating the depth and diversity of Computer Science research being carried out across India.

For any queries, please feel free to reach out.

Warm regards,
Mainack (mainack.mondal@gmail.com) & Niyati (niyati.chhaya@hyprbots.com)
ARCS 2026 Organizing Committee`,
    time: '2 hours ago',
    extractedTasks: 1,
    tasks: [
      { title: 'Submit research paper for ARCS 2026', dueDate: 'Dec 7' },
    ],
  },
  {
    id: '4',
    source: 'email',
    from: 'Microsoft CMT <notifications@microsoft.com>',
    subject: 'Action Required: Update Your Teams Integration',
    content: `Hello Microsoft Teams Developer,

We're reaching out to inform you about important updates to the Microsoft Teams API that will affect your integration.

What's changing:
- Teams API v1.0 will be deprecated on December 15, 2025
- All integrations must migrate to API v2.0 by this date
- New authentication requirements for bot applications

Action items:
• Review the migration guide: https://docs.microsoft.com/teams-api-v2
• Update your application to use the new API endpoints
• Test your integration in the Teams sandbox environment
• Submit your updated app for re-certification by December 2

Resources:
- Migration documentation: Available in Developer Portal
- Support: Contact Teams Developer Support
- Community forum: Ask questions and share experiences

Failure to update by the deadline may result in service interruption for your users.

If you have any questions, please don't hesitate to reach out to our support team.

Best regards,
Microsoft Commercial Marketing Team`,
    time: '3 hours ago',
    extractedTasks: 3,
    tasks: [
      { title: 'Review Teams API v2.0 migration guide' },
      { title: 'Update Microsoft Teams integration', dueDate: 'Dec 2' },
      { title: 'Test Teams integration in sandbox environment', dueDate: 'Dec 2' },
    ],
  },
  {
    id: '5',
    source: 'email',
    from: 'technews-editor@acm.org',
    subject: 'ACM TechNews - November 24, 2025',
    content: `Welcome to the November 24, 2025 edition of ACM TechNews, providing timely information for computer professionals three times a week.

Team Behind 1km Global Earth System Simulation Awarded Gordon Bell Climate Prize
The ACM Gordon Bell Prize for Climate Modelling was awarded to a 26-member team in recognition of being the first ever to develop a full Earth simulation at 1km resolution. The team explained its model "captures the flow of energy, water, and carbon through key components of the Earth system: atmosphere, ocean, and land." To achieve the simulation, the team utilized 8,192 GPUs on the Alps supercomputer and 4,096 GPUs on Europe's fastest supercomputer, JUPITER.
[ » Read full article ]
ACM Media Center (November 20, 2025)

U.S. Labs Race to Meld AI with Supercomputers
U.S. national laboratories are accelerating efforts to integrate advanced AI systems into scientific supercomputing. Pressured by the fast pace of private AI development, U.S. Energy Department-backed labs like Argonne and Oak Ridge are striking deals with Nvidia, Oracle, and AMD to help finance, build, and share use of new AI machines. The systems promise massive performance gains, enabling faster breakthroughs in areas like materials science, nuclear fusion, and drug discovery.
[ » Read full article *May Require Paid Registration ]
The New York Times; Don Clark (November 20, 2025)

NC Town Deploys Defibrillator Drones During 911 Emergencies
Clemmons, NC, has become the first U.S. town to deploy drones carrying automated external defibrillators (AEDs) during 911 emergencies as part of a Duke Health study. The drones fly directly to cardiac arrest scenes guided by 911 operators, reducing response times from six to seven minutes to about four minutes. Explained Duke Health's Monique Starks, if a cardiac patient "can be shocked within two to five minutes, we could see survival of 50 to 70%."
[ » Read full article ]
Gizmodo; Margherita Bassi (November 21, 2025)

Computer Scientist Kathleen Fisher to Head U.K.'s ARIA
ACM Fellow Kathleen Fisher has been named the next chief of the Advanced Research and Invention Agency (ARIA), the U.K. funding body that supports "high-risk, high-reward" science. She will replace Ilan Gur, who has headed ARIA since its launch in 2022. Fisher, who will assume the new role in February 2026, previously held senior positions at the U.S. Defense Advanced Research Projects Agency, where the cybersecurity work she led was named the agency's most influential program of the last decade.
[ » Read full article ]
Chemistry World; Jamie Durrani (November 21, 2025)

French Authorities Investigate Holocaust Denial Posts by Musk's Grok AI
French authorities are investigating allegations that Elon Musk's AI chatbot Grok posted Holocaust-denial statements on X. The Paris public prosecutor expanded an existing inquiry into X to include comments by Grok that claimed Auschwitz's gas chambers were designed for disinfection rather than mass murder and echoed antisemitic tropes about Jewish "lobbies" controlling narratives. The posts, online for three days and viewed by over a million users, were later deleted.
[ » Read full article ]
The Guardian (U.K.); Jon Henley (November 20, 2025)

Australian States Tighten Rules on Worker Surveillance
The Australian state of New South Wales (NSW) and Victoria are moving to tighten workplace surveillance laws as AI-driven management tools and remote work become widespread. A bill recently introduced in NSW would give unions the right to enter workplaces and examine AI and digital work systems to ensure they are not used to track performance unreasonably. A proposal backed by Victoria's government would require employers to prove any workplace surveillance is necessary and extend protections to remote work.
[ » Read full article ]
Australian Financial Review; Paul Karp; David Marin-Guzman (November 19, 2025)

Netgear Accused by Rival of China Smear to Fan Security Fear
TP-Link Systems has filed a federal lawsuit against Netgear, accusing the company of orchestrating a smear campaign that falsely claimed TP-Link's technology had been "infiltrated" by China. TP-Link alleges Netgear spread these claims through journalists, influencers, and earnings calls to scare off customers. The complaint also cites a 2024 patent settlement that bars Netgear from disparaging TP-Link. The suit arises amid growing U.S. scrutiny of TP-Link over national security concerns arising from its ties to China.
[ » Read full article *May Require Paid Registration ]
Bloomberg; Kate O'Keeffe; Jef Feeley (November 19, 2025)

A Student Awed Top Economists With His AI Study, Before It Fell Apart
Aidan Toner-Rodgers, a Ph.D. student at the Massachusetts Institute of Technology (MIT), gained attention for a paper claiming AI dramatically boosted innovation at a major materials-science company, earning praise from economists and policymakers. Then researchers uncovered inconsistencies that prompted an internal review by MIT professors, who concluded the study's data and corporate partner were fabricated. MIT publicly disavowed the work, and Toner-Rodgers left the program. The case highlighted the need for stronger research verification amid rising hype around AI.
[ » Read full article *May Require Paid Registration ]
The Wall Street Journal; Kevin T. Dugan; Justin Lahart (November 22, 2025)

Quantum Computers That Recycle Qubits Limit Errors
Researchers at Atom Computing developed a method to recycle ancilla qubits—error-tracking qubits—in neutral-atom quantum computers. Using ultracold ytterbium atoms manipulated by laser "optical tweezers," they organized qubits into computation, measurement, and storage zones, enabling qubits to be reset or swapped as needed. Their ancilla qubits were successfully reused 41 times, reducing the number of fresh qubits required for long computations. The technique minimizes disturbances from stray light and supports more practical error correction.
[ » Read full article *May Require Paid Registration ]
New Scientist; Karmela Padavic-Callaghan (November 19, 2025)

Cryptographers Held Elections, Can't Decrypt Results
The results of an election held by the International Association of Cryptologic Research to fill three director and four officer positions could not be determined after one of three required decryption keys was lost. The group used Helios, a verifiable electronic voting system that encrypts ballots and requires all three keys to tally the vote. Two trustees produced their keys but a third cryptographer could not, prompting the association to void the election and schedule a new one.
[ » Read full article *May Require Paid Registration ]
The New York Times; Pranav Baskar (November 21, 2025)

IoT Devices Open to Silent Takeover via Firewalls
Jincheng Wang at Nanjing University of Posts and Telecommunications in China and independent security researcher Nik Xe have demonstrated a novel attack on IoT devices that bypasses traditional software vulnerabilities and firewalls by exploiting cloud management systems. IoT devices typically authenticate to cloud platforms using static identifiers like serial numbers or MAC addresses. Attackers who obtain these identifiers and reverse-engineer the authentication logic can impersonate devices, issue commands, and gain administrative control.
[ » Read full article ]
Dark Reading; Nate Nelson (November 18, 2025)

Pentagon, Soldiers Reveal Secrets Online: GAO
In a report recently made public, the U.S. Government Accountability Office (GAO) warned that the Pentagon isn't doing enough to prevent sensitive information from leaking online through social media posts, press releases, and other digital activity by service members, civilians, and their families. Auditors posing as threat actors were able to gather data that could expose troop locations, unit details and personal information, creating risks of blackmail and operational compromise.
[ » Read full article ]
The Register (U.K.); Brandon Vigliarolo (November 17, 2025)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Association for Computing Machinery
1601 Broadway, 10th Floor
New York, NY 10019-7434

Archives | Career News | Contact Us | Unsubscribe`,
    time: '6 hours ago',
    extractedTasks: 0,
    tasks: [],
  },
];