// ============================================================
// SECURITY+ SY0-701 REVIEW APP - Caroline's Study Tool
// ============================================================

// --- DATA: Topics ---
const TOPICS = [
  {
    id: "web-spiders",
    title: "Web Spiders & Crawlers",
    module: "NET400-M1-1",
    domain: 2,
    domainLabel: "Threats, Vulnerabilities & Mitigations",
    icon: "&#128375;",
    summary: "Web crawlers, robots.txt, spider traps, User-Agent spoofing, and defense mechanisms.",
    content: `
<h2>What is a Web Spider?</h2>
<p>Web spiders (also called <strong>web crawlers</strong> or <strong>bots</strong>) are automated software programs that systematically browse the web. They start from seed URLs, fetch pages, extract hyperlinks, and recursively visit new URLs to discover and catalog web content.</p>

<div class="key-concept"><strong>Key Goals of Web Spiders:</strong><br>
&#8226; <strong>Indexing</strong> &ndash; Search engines (Googlebot, Bingbot) crawl to build searchable indexes<br>
&#8226; <strong>Web Scraping</strong> &ndash; Extracting specific data (prices, contacts, articles)<br>
&#8226; <strong>Vulnerability Assessment</strong> &ndash; Security tools mapping site structure and finding flaws<br>
&#8226; <strong>Archiving</strong> &ndash; Internet Archive's Wayback Machine preserving web history</div>

<h2>Spider Types (Behavioral Classification)</h2>

<h3>Polite Spiders</h3>
<p>Pay attention to schedule, load, and web server advisories. They respect <code>robots.txt</code>, limit request rates, and adhere to crawl-delay directives. Examples: Googlebot, Bingbot.</p>

<h3>Rude Spiders</h3>
<p>Ignore all guidelines &ndash; disregard <code>robots.txt</code>, crawl aggressively, no respect for server capacity. Often malicious scrapers or poorly written bots.</p>

<h3>Simple Spiders</h3>
<p>Scan HTML for links (<code>&lt;a&gt;</code> tags), follow them, and repeat. Basic link-following without intelligence &ndash; can get caught in loops.</p>

<h3>Intelligent Spiders</h3>
<p>Maintain a visited-URL list (or Bloom filters) to avoid re-crawling. Prioritize pages by PageRank, update frequency, or sitemap info. Can detect and escape spider traps.</p>

<h2>Benign vs. Malicious Spider Usage</h2>

<h3>Malicious Uses</h3>
<ul>
<li><strong>Vulnerability scanning</strong> for exploits (finding outdated software, SQL injection flaws, XSS)</li>
<li><strong>Content theft / copyright infringement</strong></li>
<li><strong>Harvesting email addresses</strong> for spam or PII for identity theft</li>
<li><strong>Denial of Service (DoS)</strong> through aggressive crawling</li>
<li><strong>Exploiting robots.txt</strong> &ndash; checking disallowed paths to find sensitive content</li>
</ul>

<h3>Benign Uses</h3>
<ul>
<li>Search engine indexing</li>
<li>Website archiving (Internet Archive)</li>
<li>Academic research and data aggregation</li>
<li>Site health monitoring (broken links, SEO analysis)</li>
<li>Legitimate market research</li>
</ul>

<h2>Robots.txt (Robots Exclusion Protocol)</h2>
<p>A plain text file placed in a website's root directory (e.g., <code>http://example.com/robots.txt</code>) that communicates crawling rules to bots.</p>

<div class="key-concept"><strong>Directives:</strong><br>
&#8226; <code>User-agent: *</code> &ndash; applies to all bots<br>
&#8226; <code>User-agent: Googlebot</code> &ndash; applies only to Google's spider<br>
&#8226; <code>Disallow: /admin/</code> &ndash; requests bots not crawl /admin/<br>
&#8226; <code>Disallow: /</code> &ndash; requests bots not crawl anything</div>

<div class="warning"><strong>Critical Security Point:</strong> robots.txt is <strong>purely advisory</strong>. It is NOT a security mechanism. Malicious bots ignore it or use it to <em>find</em> sensitive directories. Always protect sensitive content with proper authentication and authorization on the server itself.</div>

<h2>Spider Traps (Defense Mechanisms)</h2>

<h3>Invisible Links</h3>
<p>HTML links hidden from users (same color as background, off-screen via CSS, single pixel). If a client requests the trap URL, it's likely a bot &ndash; ban that IP. Risk: could accidentally ban polite bots.</p>

<h3>Dynamic Webpage Traps</h3>
<p>Search functions or calendar pages that generate near-infinite unique URLs via query parameters. Smart spiders often ignore or limit URLs with <code>?</code> parameters.</p>

<h3>Nested Directory Traps</h3>
<p>Server-side scripts generate fake nested directories (<code>/a/b/c/d/e/...</code>) infinitely. Naive spiders crawl deeper and deeper, consuming their own resources. Intelligent spiders assign decreasing weight to deep pages and stop at a threshold.</p>

<h2>Writing Spiders & User-Agent Strings</h2>
<p>When writing a spider, you can change the <strong>User-Agent string</strong> to appear as a normal browser. Polite bots identify themselves clearly (e.g., <code>Googlebot/2.1</code>).</p>

<div class="exam-tip"><strong>Exam Tip &ndash; Never Trust Client Data:</strong> User-Agent strings are generated client-side and can be easily spoofed (using a proxy or custom configuration). This is why <strong>server-side input validation and sanitization</strong> is critical &ndash; never rely on client-supplied data for security decisions. This applies to all HTTP headers, form inputs, URL parameters, and cookies.</div>

<h2>Security+ Exam Relevance</h2>
<ul>
<li><strong>2.2</strong> &ndash; Threat actors and motivations (malicious crawlers as reconnaissance)</li>
<li><strong>2.4</strong> &ndash; Network attacks (DoS via aggressive crawling)</li>
<li><strong>2.5</strong> &ndash; Mitigation techniques (spider traps, robots.txt, input validation)</li>
<li><strong>4.1</strong> &ndash; Security monitoring (detecting bot traffic)</li>
</ul>
`
  },
  {
    id: "cti-strategy",
    title: "Cyber Threat Intelligence: Strategy",
    module: "CTI-Strategy",
    domain: 5,
    domainLabel: "Security Program Management & Oversight",
    icon: "&#9876;",
    summary: "Strategy definition, levels of planning, Sun Tzu principles, layered security model, and strategic leadership.",
    content: `
<h2>Defining Strategy</h2>
<p>Strategy is the process of determining a <strong>desired end-state</strong> and marshaling necessary resources and operations to achieve it. Formula: <strong>WAYS + MEANS = END</strong>.</p>

<div class="key-concept"><strong>Strategy characteristics:</strong><br>
&#8226; Broad, not focused on minute specifics<br>
&#8226; Shaped by the strategist's goals and values<br>
&#8226; Operates with incomplete information in changing environments<br>
&#8226; About actively creating and shaping the future</div>

<h2>Levels of Planning and Execution</h2>

<h3>Strategic Level (Highest)</h3>
<p>Fewest people involved. Sets the overall vision and long-term direction. Considers current and future resources. Example: A CISO defining the 3-5 year security roadmap.</p>

<h3>Operational Level (Middle)</h3>
<p>Bridges strategy and tactics. Organizes tools and capabilities to achieve defined objectives. Orchestrates tactical actions toward broader goals.</p>

<h3>Tactical Level (Ground)</h3>
<p>Execution level &ndash; "boots on the ground" / "hands on keyboards." Uses fundamental tools and processes daily. Focused on specific tasks and actions.</p>

<div class="exam-tip"><strong>Exam Tip:</strong> Know the three levels &ndash; Strategic (vision/direction), Operational (organizing capabilities), Tactical (day-to-day execution). This maps directly to Security+ Domain 5 objectives on security governance.</div>

<h2>Some Basic Truths of Strategy</h2>
<ul>
<li><strong>Holistic</strong> &ndash; Considers all players, is multifaceted, plays out over multiple engagements, must align with organizational policy and ethics</li>
<li><strong>Planned</strong> &ndash; Requires consideration of resources, time, threats; must be communicated effectively</li>
<li><strong>Built on experience</strong> &ndash; Learn from others' mistakes (Bismarck: "I prefer to profit by others' experience")</li>
<li><strong>Considers the threat</strong> &ndash; Threat landscape must be constantly reassessed</li>
<li><strong>Efficient use of resources</strong> &ndash; Work with what you have or can reliably attain</li>
<li><strong>Part of Grand Strategy</strong> &ndash; Cyber security strategy is one component of larger organizational strategy</li>
</ul>

<h2>Sun Tzu and Cyber War</h2>
<p><strong>Sun Tzu</strong> (died 496 BC) &ndash; Chinese general, strategist, philosopher. Author of <em>The Art of War</em>.</p>

<div class="key-concept"><strong>Key Quote:</strong> "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle."</div>

<h3>Six Principles Applied to Cybersecurity</h3>
<ol>
<li><strong>Capture your market without destroying it</strong> &ndash; Secure assets without disrupting operations</li>
<li><strong>Avoid strength, attack weakness</strong> &ndash; Focus defenses on vulnerabilities</li>
<li><strong>Know the enemy and know yourself</strong> &ndash; Threat intelligence + self-assessment</li>
<li><strong>Use speed and preparation</strong> &ndash; Rapid incident response</li>
<li><strong>Use alliances and control points</strong> &ndash; Strategic partnerships, network chokepoints</li>
<li><strong>Develop leadership character</strong> &ndash; Maximize security team potential</li>
</ol>

<h2>Traditional Layered Security Model</h2>
<p>Resembles medieval defense-in-depth (concentric castle walls). Works well for centralized, controlled networks.</p>

<h3>Security Layers (Outside to Inside)</h3>
<ul>
<li><strong>Perimeter Layer:</strong> Firewalls, Antimalware at gateway, VPN encryption</li>
<li><strong>Network Layer:</strong> IDS/IPS, Vulnerability Assessment tools, IAM, DLP, NAC</li>
<li><strong>Host Layer:</strong> Host-based IDS, Host-based VA, IAM, Host-based DLP</li>
<li><strong>Application Layer:</strong> Application IDS, App scanners (SAST/DAST), IAM, Input Validation</li>
<li><strong>Data Layer:</strong> IAM, DLP, Encryption (at rest and in transit)</li>
</ul>
<p><strong>Integration Layer:</strong> SIEM ties everything together.</p>

<div class="key-concept"><strong>Key Security Technologies Across Layers:</strong><br>
&#8226; <strong>IAM</strong> &ndash; Identity Access Management (every layer)<br>
&#8226; <strong>DLP</strong> &ndash; Data Loss Prevention (network, host, data)<br>
&#8226; <strong>IDS/IPS</strong> &ndash; Intrusion Detection/Prevention (perimeter, network, host, app)<br>
&#8226; <strong>NAC</strong> &ndash; Network Access Control (network layer)<br>
&#8226; <strong>SIEM</strong> &ndash; Security Information & Event Management (integration)<br>
&#8226; <strong>VA</strong> &ndash; Vulnerability Assessment (all layers)</div>

<h2>Modern Security Approaches</h2>
<ul>
<li>Security controls deployed to <strong>individual nodes/devices</strong> (bottom-up)</li>
<li><strong>Context</strong> is critical &ndash; understanding which devices can be trusted</li>
<li>Firewalls, IPS, 2FA still relevant but at <strong>device level</strong></li>
<li><strong>Offense/Defense games</strong>: Penetration testing, Threat modeling</li>
<li>IoT and distributed networks require rethinking centralized models</li>
</ul>

<h3>Threat Evolution (Cisco Model)</h3>
<ul>
<li>2000: Worms &#8594; Host-based Antivirus</li>
<li>2005: Spyware/Rootkits &#8594; Network Perimeter IDS/IPS</li>
<li>2010: APTs/Cyberware &#8594; Global Reputation & Sandboxing</li>
<li>Future: Increased attack surface (mobility/cloud) &#8594; Intelligence & Analytics</li>
</ul>

<h2>U.S. National Security Strategy (NSS)</h2>
<p>A high-level strategic document produced by the White House. Four pillars: Protect homeland, Promote prosperity, Preserve peace through strength, Advance influence.</p>

<h3>NSS Cyber Priority Actions</h3>
<ol>
<li><strong>Improve Attribution, Accountability, and Response</strong></li>
<li><strong>Enhance Cyber Tools and Expertise</strong></li>
<li><strong>Improve Integration and Agility</strong></li>
</ol>

<div class="exam-tip"><strong>Exam Relevance:</strong> This maps to Security+ Domain 5 &ndash; governance, risk management, security policies, frameworks, and strategic leadership in security programs.</div>

<h2>Strategic Plan Components</h2>
<ul>
<li>Executive Summary</li>
<li>Vision &ndash; Values &ndash; Mission</li>
<li>Key Results Areas (Centers of Gravity)</li>
<li>Strategic Objectives (3-5 years)</li>
<li>Operational Objectives (1-2 years)</li>
<li>Tactical Objectives (3-12 months)</li>
</ul>

<h2>Eisenhower on Planning</h2>
<div class="key-concept">"Plans are worthless, but planning is everything." &ndash; The value lies in the <em>process</em> of thinking through scenarios, understanding resources, and coordinating efforts. The process enables adaptation even when the written plan becomes outdated.</div>

<h2>Strategy is NOT...</h2>
<p>Strategy is NOT simply management, leadership, operational effectiveness, best practices, or benchmarking. These <em>contribute to</em> strategy but are not strategy itself.</p>
`
  }
];

// --- DATA: Quiz Questions ---
const QUIZZES = {
  "web-spiders": [
    {
      q: "What is the primary purpose of robots.txt?",
      options: [
        "To block all web traffic to a website",
        "To communicate crawling rules to web robots (advisory only)",
        "To encrypt data between the spider and the server",
        "To authenticate search engine bots before allowing access"
      ],
      correct: 1,
      explanation: "robots.txt is a plain text file in a website's root directory that provides advisory instructions to web crawlers about which parts of the site should not be crawled. It is NOT a security mechanism \u2014 it cannot enforce rules."
    },
    {
      q: "A malicious actor reviews a website's robots.txt file and discovers several Disallow entries. What is the most likely reason?",
      options: [
        "To respect the website owner's crawling preferences",
        "To identify potentially sensitive or hidden directories to probe",
        "To ensure their spider doesn't overload the server",
        "To add the website to search engine results"
      ],
      correct: 1,
      explanation: "Malicious actors may specifically parse robots.txt to find directories the owner is trying to hide, assuming those paths might contain sensitive content, admin interfaces, or less-secured areas. robots.txt should NEVER be used as a security control."
    },
    {
      q: "Which type of spider maintains a list of visited URLs to avoid re-crawling and prevents getting stuck in infinite loops?",
      options: [
        "Polite spider",
        "Rude spider",
        "Simple spider",
        "Intelligent spider"
      ],
      correct: 3,
      explanation: "Intelligent spiders use data structures like visited-URL lists or Bloom filters to track which pages they've already crawled, avoiding duplicates and spider traps. They also prioritize pages based on importance metrics."
    },
    {
      q: "A web administrator implements invisible links on their website that are hidden from normal users via CSS. What defense mechanism is this?",
      options: [
        "Honeypot",
        "Spider trap",
        "Web application firewall",
        "Intrusion detection system"
      ],
      correct: 1,
      explanation: "Spider traps use invisible links (hidden via CSS, off-screen positioning, or same-color-as-background) to detect bots. Since legitimate users won't click invisible links, any client that requests the trap URL is presumed to be an automated crawler and can be banned."
    },
    {
      q: "Why should server-side applications never trust the User-Agent string sent by a client?",
      options: [
        "User-Agent strings are encrypted and cannot be read",
        "User-Agent strings are generated client-side and can be easily spoofed",
        "User-Agent strings are only sent by legitimate browsers",
        "User-Agent strings are validated by the DNS server"
      ],
      correct: 1,
      explanation: "User-Agent strings are generated by the client (browser or application) and can be trivially modified using proxies or custom configurations. This principle extends to ALL client-side data \u2014 never trust any data from the client without server-side validation and sanitization."
    },
    {
      q: "A website generates URLs like /a/b/c/d/e/f/... using a server-side script where each level links to the next. This is an example of:",
      options: [
        "SQL injection attack",
        "Cross-site scripting (XSS)",
        "Nested directory spider trap",
        "Brute force authentication"
      ],
      correct: 2,
      explanation: "A nested directory spider trap uses dynamically generated pages that create fake nested directories going infinitely deep. Naive spiders crawl deeper and deeper, wasting their resources. Intelligent spiders detect the pattern and assign decreasing weight to each level."
    },
    {
      q: "Which of the following is a BENIGN use of web spiders?",
      options: [
        "Harvesting email addresses for spam campaigns",
        "Overloading a server with aggressive crawling requests",
        "Website archiving by the Internet Archive's Wayback Machine",
        "Scanning for SQL injection vulnerabilities to exploit"
      ],
      correct: 2,
      explanation: "The Internet Archive uses web spiders to archive web pages for historical preservation \u2014 a clearly benign and beneficial use. Other benign uses include search engine indexing, SEO analysis, and academic research."
    },
    {
      q: "A polite web spider is BEST characterized by which behavior?",
      options: [
        "It ignores robots.txt to access all content",
        "It respects robots.txt, limits request rates, and identifies itself clearly",
        "It changes its User-Agent string to mimic a browser",
        "It uses invisible links to discover hidden content"
      ],
      correct: 1,
      explanation: "Polite spiders respect robots.txt directives, limit crawling rate to avoid overloading servers, adhere to crawl-delay directives, and clearly identify themselves via their User-Agent string (e.g., Googlebot/2.1)."
    },
    {
      q: "Malicious spidering of a web server is most comparable to which other reconnaissance technique?",
      options: [
        "Phishing",
        "Port scanning",
        "Ransomware deployment",
        "Social engineering"
      ],
      correct: 1,
      explanation: "Like port scanning, malicious spidering is primarily an information-gathering/reconnaissance technique. By itself, it doesn't compromise the server, but the information gathered (vulnerable scripts, exposed files, technologies in use) can be used to plan more targeted attacks."
    },
    {
      q: "Which Security+ exam objective covers the concept of web spiders as a reconnaissance threat?",
      options: [
        "1.1 - Security concepts",
        "2.2 - Threat actors and motivations",
        "3.3 - Cloud security models",
        "5.1 - Governance elements"
      ],
      correct: 1,
      explanation: "Web spiders used for reconnaissance fall under Domain 2: Threats, Vulnerabilities, and Mitigations, specifically objective 2.2 covering threat actors, vectors, and intelligence sources."
    }
  ],
  "cti-strategy": [
    {
      q: "Which level of planning sets the overall vision and long-term direction with the fewest people involved?",
      options: [
        "Tactical level",
        "Operational level",
        "Strategic level",
        "Executive level"
      ],
      correct: 2,
      explanation: "The Strategic level is the highest level of planning, involving the fewest people. It sets overall vision and long-term direction, considering current and future resources. The Operational level bridges strategy and tactics. The Tactical level is day-to-day execution."
    },
    {
      q: "According to Sun Tzu, what is necessary to 'not fear the result of a hundred battles'?",
      options: [
        "Having superior weapons and technology",
        "Knowing both the enemy and yourself",
        "Having more soldiers than the enemy",
        "Controlling the highest ground"
      ],
      correct: 1,
      explanation: "Sun Tzu's famous quote: 'If you know the enemy and know yourself, you need not fear the result of a hundred battles.' In cybersecurity, this translates to thorough threat intelligence (knowing the enemy) combined with comprehensive self-assessment (knowing your own systems and vulnerabilities)."
    },
    {
      q: "In the traditional layered security model, which layer contains Firewalls, Antimalware at the gateway, and VPN encryption?",
      options: [
        "Data Layer",
        "Host Layer",
        "Network Layer",
        "Perimeter Layer"
      ],
      correct: 3,
      explanation: "The Perimeter Layer is the outermost boundary \u2014 the first line of defense between internal network and the outside world. It includes firewalls (enforcing access control), antimalware at the gateway, and VPN encryption for secure tunnels."
    },
    {
      q: "Which security technology is present at EVERY layer of the traditional layered security model?",
      options: [
        "NAC (Network Access Control)",
        "IAM (Identity Access Management)",
        "SIEM (Security Information Event Management)",
        "DLP (Data Loss Prevention)"
      ],
      correct: 1,
      explanation: "IAM (Identity Access Management) is applied across all layers \u2014 perimeter, network, host, application, and data \u2014 controlling user privileges and access at each level. NAC is specific to the network layer, and SIEM serves as the integration layer."
    },
    {
      q: "What is the formula that defines strategy?",
      options: [
        "RISK + IMPACT = THREAT",
        "WAYS + MEANS = END",
        "COST + TIME = VALUE",
        "PEOPLE + PROCESS = SECURITY"
      ],
      correct: 1,
      explanation: "Strategy outlines how the desired ends will be achieved using the available means \u2014 WAYS + MEANS = END. It involves thinking ahead about others' behavior and designing coordinated actions to reach the goal."
    },
    {
      q: "According to the Cisco threat evolution model, what was the primary response to APTs and cyberware around 2010?",
      options: [
        "Host-based antivirus",
        "Network perimeter IDS/IPS",
        "Global reputation and sandboxing",
        "Intelligence and analytics"
      ],
      correct: 2,
      explanation: "The evolution: 2000 (Worms \u2192 Host AV), 2005 (Spyware/Rootkits \u2192 Network IDS/IPS), 2010 (APTs/Cyberware \u2192 Global Reputation & Sandboxing), Future (Expanded attack surface \u2192 Intelligence & Analytics)."
    },
    {
      q: "Eisenhower said 'Plans are worthless, but planning is everything.' What does this mean for cybersecurity?",
      options: [
        "Written security policies are unnecessary",
        "The process of thinking through scenarios and coordinating enables adaptation",
        "Only tactical-level planning matters in cybersecurity",
        "Strategic plans should never be documented"
      ],
      correct: 1,
      explanation: "The value lies in the PROCESS of thinking through scenarios, understanding resources, anticipating challenges, and coordinating efforts. This ongoing process allows for adaptation even when the written plan becomes outdated. Strategic planning enables flexibility."
    },
    {
      q: "Which is NOT one of the four pillars of the U.S. National Security Strategy?",
      options: [
        "Protect the homeland",
        "Promote American prosperity",
        "Eliminate all cyber threats globally",
        "Advance American influence"
      ],
      correct: 2,
      explanation: "The four pillars are: (1) Protect the homeland, the American people, and their way of life, (2) Promote American prosperity, (3) Preserve peace through strength, (4) Advance American influence. 'Eliminate all cyber threats' is unrealistic and not a pillar."
    },
    {
      q: "Why is cybersecurity strategy described as 'only part of a Grand Strategy'?",
      options: [
        "Because cybersecurity is not important enough to stand alone",
        "Because resources dedicated to security are denied to other areas like R&D and production",
        "Because only the military should handle cybersecurity",
        "Because strategy only applies to national-level organizations"
      ],
      correct: 1,
      explanation: "Cybersecurity strategy exists within a larger organizational strategy. Dedicating resources to security means those resources can't go to research, development, production, or sales. This trade-off must be considered in the broader context. Strategy requires balancing competing priorities."
    },
    {
      q: "Which of the following is TRUE about strategy?",
      options: [
        "Strategy is the same as management and leadership",
        "Strategy focuses only on internal organizational factors",
        "Strategy must consider both the adversary's and your own perspective",
        "Strategy should be reactive rather than proactive"
      ],
      correct: 2,
      explanation: "A crucial part of strategy is considering BOTH the red (adversary) and blue (defender) perspectives. Strategy is not just management or leadership (those contribute but aren't strategy). It must be proactive ('Act, not React') and consider external threats."
    }
  ],
  "book-ch1": [
    { q: "Jade's organization recently suffered a security breach affecting stored credit card data. Her primary concern is violating PCI DSS provisions. What category of risk is concerning Jade?",
      options: ["Strategic", "Compliance", "Operational", "Financial"], correct: 1,
      explanation: "The breach of credit card information may cause many different risks, but Jade's primary concern is violating PCI DSS, making it a compliance risk." },
    { q: "Chris is responding to a security incident where attackers defaced pages on the organization's website. What cybersecurity objective did this attack violate?",
      options: ["Confidentiality", "Nonrepudiation", "Integrity", "Availability"], correct: 2,
      explanation: "Defacement alters content without authorization \u2014 a violation of integrity. The attackers may also have breached confidentiality or availability, but the scenario specifically describes content alteration." },
    { q: "Tonya is searching for a control that would discourage an attacker from attempting to gain access to her database server. What type of security control is she seeking?",
      options: ["Preventive", "Detective", "Corrective", "Deterrent"], correct: 3,
      explanation: "Deterrent controls discourage attackers from attempting to violate security policies. Preventive controls block attacks in progress. Corrective controls remediate issues. Detective controls detect indicators." },
    { q: "Greg is implementing a DLP system to protect against sensitive data transmissions by guests on his wireless network. What DLP technology would best meet this goal?",
      options: ["Watermarking", "Pattern recognition", "Host-based", "Network-based"], correct: 3,
      explanation: "Network-based DLP is needed because host-based DLP requires agents installed on endpoints, which wouldn't exist on guest systems. Network-based DLP monitors traffic regardless of the source device." },
    { q: "What term best describes data that is being sent between two systems over a network connection?",
      options: ["Data at rest", "Data in transit", "Data in processing", "Data in use"], correct: 1,
      explanation: "Data in transit (also called data in motion) describes information being transmitted over a network. Data at rest is stored data. Data in use/processing is actively being accessed by an application." },
    { q: "Tina is tuning her organization's intrusion prevention system to prevent false positive alerts. What type of control is Tina implementing?",
      options: ["Technical control", "Physical control", "Managerial control", "Operational control"], correct: 0,
      explanation: "An intrusion prevention system is a technical (logical) control. Technical controls use technology to protect assets. Physical controls are tangible mechanisms. Managerial and operational controls are procedural." },
    { q: "Which one of the following is NOT a common goal of a cybersecurity attacker?",
      options: ["Disclosure", "Denial", "Alteration", "Allocation"], correct: 3,
      explanation: "The three primary goals of attackers are Disclosure, Alteration, and Denial \u2014 mapping to the CIA triad (Confidentiality, Integrity, Availability). Allocation is not a common attack goal." },
    { q: "Tony believes that a compromise of the file server could prevent the company from continuing to do business. What type of risk is Tony considering?",
      options: ["Strategic", "Reputational", "Financial", "Operational"], correct: 0,
      explanation: "A risk that could prevent the company from continuing business is a strategic risk \u2014 it threatens the organization's ability to carry out its mission and strategy." },
    { q: "What technology uses mathematical algorithms to render information unreadable to those lacking the required key?",
      options: ["Data loss prevention", "Data obfuscation", "Data minimization", "Data encryption"], correct: 3,
      explanation: "Data encryption uses mathematical algorithms (ciphers) to transform readable data into unreadable ciphertext. Only those with the proper decryption key can reverse the process." },
    { q: "Which data protection technique is reversible when conducted properly?",
      options: ["Tokenization", "Masking", "Hashing", "Shredding"], correct: 0,
      explanation: "Tokenization uses a lookup table and is designed to be reversible. Masking and hashing replace data with values that can't be reversed. Shredding physically destroys data permanently." },
    { q: "Which compliance regulation most directly affects the operations of a health-care provider?",
      options: ["HIPAA", "PCI DSS", "GLBA", "SOX"], correct: 0,
      explanation: "HIPAA (Health Insurance Portability and Accountability Act) directly regulates security and privacy of protected health information. PCI DSS covers payment cards, GLBA covers financial institutions, SOX covers financial reporting." },
    { q: "Attackers stole thousands of customer records from the organization's database. What cybersecurity principle was most impacted?",
      options: ["Availability", "Nonrepudiation", "Confidentiality", "Integrity"], correct: 2,
      explanation: "The disclosure of sensitive information to unauthorized individuals is a violation of confidentiality. The stolen customer records represent unauthorized access to private data." },
  ],
  "book-ch2": [
    { q: "Which one of the following attackers is most likely to be associated with an APT?",
      options: ["Nation-state actor", "Hacktivist", "Unskilled attacker", "Insider"], correct: 0,
      explanation: "Advanced Persistent Threats (APTs) are most commonly associated with nation-state actors who have the resources, sophistication, and patience required for long-term targeted operations." },
    { q: "Which organization did the U.S. government help create to share knowledge between organizations in specific verticals?",
      options: ["DHS", "SANS", "CERTs", "ISACs"], correct: 3,
      explanation: "Information Sharing and Analysis Centers (ISACs) were created to help infrastructure owners and operators share threat information and provide tools and assistance to their members." },
    { q: "Which of the following threat actors typically has the greatest access to resources?",
      options: ["Nation-state actors", "Organized crime", "Hacktivists", "Insider threats"], correct: 0,
      explanation: "Nation-state actors are government-sponsored and typically have the greatest access to resources, including tools, money, and talent." },
    { q: "Wendy is scanning cloud-based repositories for sensitive information. Which finding should concern her MOST if discovered in a public repository?",
      options: ["Product manuals", "Source code", "API keys", "Open source data"], correct: 2,
      explanation: "API keys should never be found in public repositories because they may grant unauthorized individuals access to services and data. This is a critical security finding." },
    { q: "Vince received hash values of malicious software found on other firms' systems after a compromise. What term best describes this information?",
      options: ["Vulnerability feed", "Indicator of Compromise (IoC)", "TTP", "RFC"], correct: 1,
      explanation: "Specific details of attacks (like file hashes) that may be used to identify compromises are Indicators of Compromise (IoCs). While also describable as TTPs, file signatures more closely match IoC definition." },
    { q: "Ursula discovered developers sharing information over an unapproved cloud messaging tool. What term best describes this?",
      options: ["Shadow IT", "System integration", "Vendor management", "Data exfiltration"], correct: 0,
      explanation: "Using unapproved technology for business purposes is the classic definition of Shadow IT. There's no indication of data security compromise, so Shadow IT is a better description than data exfiltration." },
    { q: "Tom's CRM vendor is discontinuing support. What should concern Tom MOST from a security perspective?",
      options: ["Unavailability of future patches", "Lack of technical support", "Theft of customer information", "Increased costs"], correct: 0,
      explanation: "Running unsupported software exposes the organization to the risk of new, unpatchable vulnerabilities. Without vendor support, newly discovered flaws cannot be remediated through patches." },
    { q: "Which one of the following information sources would NOT be considered an OSINT source?",
      options: ["DNS lookup", "Search engine research", "Port scans", "WHOIS queries"], correct: 2,
      explanation: "Port scans are an active reconnaissance technique that probes target systems and would not be considered open source intelligence (OSINT). DNS lookups, search engines, and WHOIS queries are all passive/open source." },
    { q: "What type of assessment is particularly useful for identifying insider threats?",
      options: ["Behavioral", "Instinctual", "Habitual", "IoCs"], correct: 0,
      explanation: "Behavioral assessments are useful for identifying insider threats. Since insider threats are hard to distinguish from normal behavior, context like after-hours logins, credential misuse, and abnormal patterns are key indicators." },
  ],
  "book-ch3": [
    { q: "Ryan wants to prevent logic bombs created by insider threats from making it into production. What would be MOST effective?",
      options: ["Antivirus software", "Code review", "EDR solutions", "Network monitoring"], correct: 1,
      explanation: "Logic bombs are embedded in code, so code review is the most effective prevention. Antivirus and EDR are unlikely to detect custom logic bombs created by internal staff." },
    { q: "Amanda notices traffic between her systems and a known malicious host on TCP port 6667. What type of traffic is she most likely detecting?",
      options: ["Command and control (C&C)", "Spyware", "A worm", "A hijacked web browser"], correct: 0,
      explanation: "Port 6667 is commonly associated with IRC (Internet Relay Chat), which is frequently used as a botnet command and control channel. Spyware typically uses HTTP/HTTPS, and hijacked browsers use ports 80/443." },
    { q: "Mike discovers software allowing attackers remote access to systems on his network. How should he classify this malware?",
      options: ["A worm", "Crypto malware", "A trojan", "A backdoor"], correct: 3,
      explanation: "Remote access to a system is typically provided by a backdoor. Backdoors may appear in firmware or hardware and are designed to provide persistent unauthorized remote access." },
    { q: "A system displays a message demanding Bitcoin payment and claims data has been encrypted. What type of malware is this?",
      options: ["Worms", "A virus", "Ransomware", "Rootkit"], correct: 2,
      explanation: "Ransomware demands payment while typically using encryption to make data inaccessible. The demand for cryptocurrency payment is a hallmark of ransomware attacks." },
    { q: "Rick's antimalware scan shows no malware, but other data indicates a rootkit infection. What should be his next step?",
      options: ["Rerun the antimalware scan", "Mount the drive on another system and scan it", "Disable the antivirus", "The system is not infected"], correct: 1,
      explanation: "Rootkits hide from locally run antimalware scanners. Mounting the drive in another system in read-only mode or booting from a known-good USB and scanning can effectively detect rootkit infections." },
    { q: "A terminated developer claims they left code that will delete files if they're not employed. What type of malware is this?",
      options: ["Ransomware", "Extortionware", "A logic bomb", "A Trojan"], correct: 2,
      explanation: "A logic bomb is malicious code that activates when a specific trigger occurs. Here the trigger is the developer no longer being employed. Logic bombs are embedded in code and activate on specific conditions." },
    { q: "What is the key difference between a worm and a virus?",
      options: ["Operating system", "How they spread", "Potential impact", "Number of infections"], correct: 1,
      explanation: "Worms spread themselves autonomously via networks, while viruses rely on human interaction (opening files, running programs) to propagate. This self-propagation is the defining distinction." },
    { q: "What type of malware connects to a command and control system, allowing attackers to manage, control, and update it remotely?",
      options: ["A bot", "A drone", "A vampire", "A worm"], correct: 0,
      explanation: "Bots connect to command and control (C&C) systems, allowing them to be updated, controlled, and managed remotely. Collections of bots form botnets. Worms spread via vulnerabilities but don't necessarily have C&C." },
  ],
  "all": [] // populated dynamically
};

// Build the "all" quiz pool
QUIZZES.all = Object.values(QUIZZES).filter(Array.isArray).flat();

// --- DATA: Labs ---
const LABS = [
  { title: "TryHackMe: What is Networking?", domain: 1, url: "https://tryhackme.com/room/whatisnetworking", desc: "Learn networking fundamentals and OSI model basics.", free: true },
  { title: "TryHackMe: Intro to Cyber Threat Intel", domain: 2, url: "https://tryhackme.com/room/introtocyberthreatintel", desc: "Explore threat intelligence concepts and frameworks.", free: true },
  { title: "TryHackMe: OWASP Top 10", domain: 2, url: "https://tryhackme.com/room/owasptop10", desc: "Hands-on web application vulnerability practice.", free: true },
  { title: "TryHackMe: OWASP Juice Shop", domain: 2, url: "https://tryhackme.com/room/owaspjuiceshop", desc: "Interactive web exploitation challenges.", free: true },
  { title: "TryHackMe: Phishing (HiddenEye)", domain: 2, url: "https://tryhackme.com/room/phishingyl", desc: "Social engineering attack techniques.", free: true },
  { title: "TryHackMe: OpenVAS", domain: 2, url: "https://tryhackme.com/room/openvas", desc: "Vulnerability scanning tools practice.", free: true },
  { title: "TryHackMe: Introduction to Cryptography", domain: 3, url: "https://tryhackme.com/room/introtocryptography", desc: "Encryption algorithms, hashing, and PKI.", free: true },
  { title: "TryHackMe: Active Directory Basics", domain: 3, url: "https://tryhackme.com/room/activedirectorybasics", desc: "Directory services and group policy.", free: true },
  { title: "TryHackMe: Extending Your Network", domain: 3, url: "https://tryhackme.com/room/extendingyournetwork", desc: "VPNs, firewalls, and network architecture.", free: true },
  { title: "TryHackMe: Intro to Logs", domain: 4, url: "https://tryhackme.com/room/introtologs", desc: "Log analysis fundamentals.", free: true },
  { title: "TryHackMe: Splunk Exploring SPL", domain: 4, url: "https://tryhackme.com/room/splunkexploringspl", desc: "SIEM query language practice.", free: true },
  { title: "TryHackMe: Governance & Regulation", domain: 5, url: "https://tryhackme.com/room/introtogrc", desc: "Compliance frameworks and GDPR.", free: true },
  { title: "TryHackMe: Risk Management", domain: 5, url: "https://tryhackme.com/room/introtorm", desc: "Risk assessment methodologies.", free: true },
];

// --- DATA: Resources ---
const RESOURCES = {
  books: [
    { name: "CompTIA Security+ Get Certified Get Ahead (Shelley/Gibson)", desc: "Gold standard study guide. 300+ practice questions.", tag: "paid", price: "~$35" },
    { name: "CompTIA Security+ Study Guide 9th Ed (Sybex - Chapple/Seidl)", desc: "500+ practice questions, online test bank, flashcards.", tag: "paid", price: "~$40" },
    { name: "Mike Meyers' CompTIA Security+ Guide 4th Ed", desc: "Digestible modules with hundreds of practice questions.", tag: "paid", price: "~$35" },
    { name: "CompTIA CertMaster Learn for Security+ SY0-701", desc: "Official self-paced lessons with PBQs and video.", tag: "paid", price: "~$329" },
  ],
  videos: [
    { name: "Professor Messer SY0-701 Course", desc: "121 videos, 15+ hours. Complete coverage. Best free resource.", tag: "free", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/" },
    { name: "Jason Dion Security+ Complete Course (Udemy)", desc: "31 hours, 3M+ enrollments. Frequently on sale.", tag: "paid", price: "~$15" },
    { name: "Mike Meyers TOTAL Security+ (Udemy)", desc: "1M+ enrollments. 60+ years combined instructor experience.", tag: "paid", price: "~$15" },
  ],
  practice: [
    { name: "Jason Dion Practice Exams (Udemy)", desc: "6 full exams (540 questions), timed. Best paid practice.", tag: "paid", price: "~$15" },
    { name: "Professor Messer Practice Exams", desc: "3 exams with PBQs + multiple choice.", tag: "paid", price: "$35" },
    { name: "Crucial Exams", desc: "1,400 free practice questions + 374 flashcards.", tag: "free", url: "https://crucialexams.com/exams/comptia/security/sy0-701/" },
    { name: "Exam Compass", desc: "25 questions per test, multiple tests. Quick focused quizzes.", tag: "free", url: "https://www.examcompass.com/comptia-security-plus-practice-test-1-exam-sy0-701" },
  ],
  free: [
    { name: "GitHub: SY0-701 Notes & CheatSheet", desc: "Community-maintained comprehensive notes.", tag: "free", url: "https://github.com/MaheshShukla1/CompTIA-Security-Plus-SY0-701-Notes-CheatSheet-Exam-Prep" },
    { name: "StationX Security+ Cheat Sheet", desc: "Comprehensive cheat sheet with acronyms.", tag: "free", url: "https://www.stationx.net/comptia-security-cheat-sheet/" },
    { name: "Quizlet: Security+ 701 Flashcards", desc: "Comprehensive flashcard deck covering core concepts.", tag: "free", url: "https://quizlet.com/859138726/comptia-security-701-study-guide-flash-cards/" },
    { name: "Quizlet: Full 322 Acronym List", desc: "All SY0-701 acronyms you need to memorize.", tag: "free", url: "https://quizlet.com/917461370/full-comptia-security-sy0-701-acronym-list-flash-cards/" },
    { name: "Quizlet: Ports and Protocols", desc: "Network ports and protocols flashcards.", tag: "free", url: "https://quizlet.com/867176089/comptia-security-sy0-701-ports-and-protocols-flash-cards/" },
  ]
};

// --- DATA: 30-Day Schedule ---
const SCHEDULE = [
  { week: 1, title: "Week 1: Domain 1 (General Security Concepts) + Domain 2 Start", days: [
    { day: 1, topic: "Security Fundamentals", tasks: "Read GCGA Ch. 1. Watch Messer 1.1-1.2. Flashcards: CIA triad, AAA, access control models. TryHackMe: 'What is Networking?'" },
    { day: 2, topic: "Security Concepts Continued", tasks: "Read GCGA Ch. 2. Watch Messer 1.3-1.4. Study Zero Trust, defense in depth, frameworks. Quizlet acronyms (30 min)." },
    { day: 3, topic: "Cryptography Basics", tasks: "Read GCGA crypto chapter. Watch Messer 1.4. TryHackMe: 'Intro to Cryptography'. Practice symmetric vs. asymmetric." },
    { day: 4, topic: "PKI and Certificates", tasks: "Continue crypto. Watch Messer PKI videos. Study cert types, CAs, key management. Hands-on: create certs with OpenSSL." },
    { day: 5, topic: "Threats & Threat Actors", tasks: "Read GCGA threats chapter. Watch Messer 2.1. Study threat actor types. TryHackMe: 'Intro to Cyber Threat Intel'." },
    { day: 6, topic: "Malware & Social Engineering", tasks: "Read GCGA malware/SE sections. Watch Messer 2.2. Study malware types, phishing. TryHackMe: 'Phishing' room." },
    { day: 7, topic: "Review & Practice", tasks: "Review all Domain 1 notes. Take Crucial Exams Domain 1 practice. Review wrong answers. Flashcard review." },
  ]},
  { week: 2, title: "Week 2: Domain 2 (Threats, Vulnerabilities, Mitigations)", days: [
    { day: 8, topic: "Application Attacks", tasks: "Read GCGA app attacks. Watch Messer 2.3. Study injection, XSS, CSRF, buffer overflows. TryHackMe: 'OWASP Top 10'." },
    { day: 9, topic: "Network Attacks", tasks: "Read GCGA network attacks. Watch Messer 2.4. Study DoS/DDoS, MITM, DNS attacks, ARP poisoning." },
    { day: 10, topic: "Vulnerability Types & Indicators", tasks: "Read vulnerability sections. Watch Messer 2.5. Study vulnerability types, IoCs, IoAs." },
    { day: 11, topic: "Mitigation Techniques", tasks: "Read GCGA mitigation. Watch Messer 2.5. Study patching, segmentation, IDS/IPS, hardening." },
    { day: 12, topic: "Hands-on Threat Analysis", tasks: "TryHackMe: 'Vulnerability Assessment' + 'OpenVAS'. Practice Wireshark packet capture analysis." },
    { day: 13, topic: "Domain 2 Deep Dive", tasks: "Review all Domain 2 notes. Re-watch unclear Messer videos. Take Crucial Exams Domain 2 practice." },
    { day: 14, topic: "Practice Exam 1", tasks: "Take Jason Dion Practice Exam 1 (full 90-question, timed). Score and review ALL wrong answers." },
  ]},
  { week: 3, title: "Week 3: Domain 3 (Security Architecture) + Domain 4 Start", days: [
    { day: 15, topic: "Secure Network Architecture", tasks: "Read GCGA network architecture. Watch Messer 3.1. Study segmentation, DMZ, VLANs. TryHackMe: 'Extending Your Network'." },
    { day: 16, topic: "Secure Protocols & Services", tasks: "Read GCGA protocols. Watch Messer 3.1-3.2. Study TLS, IPsec, SSH, SFTP, DNSSEC. Memorize ports." },
    { day: 17, topic: "Cloud & Virtualization Security", tasks: "Read GCGA cloud. Watch Messer 3.3. Study IaaS/PaaS/SaaS, containers, hypervisors, serverless." },
    { day: 18, topic: "Secure Application Development", tasks: "Read GCGA app security. Watch Messer 3.3. Study SDLC, DevSecOps, SAST/DAST, API security." },
    { day: 19, topic: "Infrastructure Security", tasks: "Read remaining Domain 3. Watch Messer 3.4. Study endpoint, mobile, IoT, embedded systems security." },
    { day: 20, topic: "Security Operations Intro", tasks: "Read GCGA security ops. Watch Messer 4.1. TryHackMe: 'Intro to Logs' + 'Splunk: Exploring SPL'." },
    { day: 21, topic: "Practice Exam 2", tasks: "Take Jason Dion Practice Exam 2 (timed). Review all wrong answers. Focus on weak domains." },
  ]},
  { week: 4, title: "Week 4: Domain 4 + Domain 5 + Final Review", days: [
    { day: 22, topic: "Incident Response & Forensics", tasks: "Read GCGA IR. Watch Messer 4.2-4.3. Study IR phases, chain of custody, forensic imaging." },
    { day: 23, topic: "Vulnerability Mgmt & Automation", tasks: "Read GCGA vuln mgmt. Watch Messer 4.4-4.5. Study vuln scanning, pen testing, SCAP, SOAR." },
    { day: 24, topic: "Data Protection & DR", tasks: "Read GCGA data protection + DR/BCP. Watch Messer 4.6. Study DLP, backup types, RPO/RTO, RAID." },
    { day: 25, topic: "Governance & Compliance", tasks: "Read GCGA governance. Watch Messer 5.1-5.2. Study policies, data roles, GDPR, HIPAA, SOX, PCI DSS." },
    { day: 26, topic: "Risk Management & Frameworks", tasks: "Read GCGA risk mgmt. Watch Messer 5.3-5.4. Study NIST CSF, NIST RMF, ISO 27001, SOC 2, audits." },
    { day: 27, topic: "Practice Exam 3 + PBQ Practice", tasks: "Take Dion Practice Exam 3 (timed). Practice PBQ-style: configure firewalls, analyze logs, drag-and-drop." },
    { day: 28, topic: "Comprehensive Review", tasks: "Review weakest 2 domains. Re-watch Messer videos. Take targeted Crucial Exams quizzes. Acronym + port review." },
    { day: 29, topic: "Final Practice Exam", tasks: "Take Dion Practice Exam 4 or Messer exam. Target: 85%+. Review every wrong answer." },
    { day: 30, topic: "Exam Day Prep", tasks: "Light review only. Skim cheat sheets + acronyms. Review PBQ strategies. Get good sleep. TAKE THE EXAM!" },
  ]},
];

// ============================================================
// STATE MANAGEMENT
// ============================================================
let progress = {};
let userNotes = {};
let currentQuiz = null;

async function loadProgress() {
  try {
    const stored = localStorage.getItem("secplus_progress");
    progress = stored ? JSON.parse(stored) : {};
  } catch { progress = {}; }
}

async function saveProgress() {
  localStorage.setItem("secplus_progress", JSON.stringify(progress));
}

async function loadNotes() {
  try {
    const stored = localStorage.getItem("secplus_notes");
    userNotes = stored ? JSON.parse(stored) : {};
  } catch { userNotes = {}; }
}

async function saveNotes() {
  localStorage.setItem("secplus_notes", JSON.stringify(userNotes));
}

function getOverallProgress() {
  const totalItems = TOPICS.length + SCHEDULE.flatMap(w => w.days).length;
  let completed = 0;
  TOPICS.forEach(t => { if (progress[`topic_${t.id}`]) completed++; });
  SCHEDULE.flatMap(w => w.days).forEach(d => { if (progress[`day_${d.day}`]) completed++; });
  return totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;
}

function updateProgressRing() {
  const pct = getOverallProgress();
  document.getElementById("overall-pct").textContent = pct + "%";
  const circle = document.querySelector(".progress-ring-fill");
  const circumference = 2 * Math.PI * 26;
  circle.style.strokeDashoffset = circumference - (pct / 100) * circumference;
}

// ============================================================
// PAGE RENDERERS
// ============================================================

function renderDashboard() {
  const topicsComplete = TOPICS.filter(t => progress[`topic_${t.id}`]).length;
  const quizzesTaken = progress.quizzesTaken || 0;
  const bestScore = progress.bestScore || 0;
  const daysComplete = SCHEDULE.flatMap(w => w.days).filter(d => progress[`day_${d.day}`]).length;

  return `
    <div class="page-header">
      <h1>Dashboard</h1>
      <p>CompTIA Security+ SY0-701 &mdash; Caroline's Study Hub</p>
    </div>

    <div class="domain-stats">
      <div class="domain-stat"><div class="weight">12%</div><div class="label">D1: General<br>Security</div></div>
      <div class="domain-stat"><div class="weight">22%</div><div class="label">D2: Threats &<br>Vulnerabilities</div></div>
      <div class="domain-stat"><div class="weight">18%</div><div class="label">D3: Security<br>Architecture</div></div>
      <div class="domain-stat"><div class="weight">28%</div><div class="label">D4: Security<br>Operations</div></div>
      <div class="domain-stat"><div class="weight">20%</div><div class="label">D5: Program<br>Management</div></div>
    </div>

    <div class="card-grid">
      <div class="card" onclick="navigate('topics')">
        <div class="card-icon">&#128218;</div>
        <h3>Topics Studied</h3>
        <p>${topicsComplete} / ${TOPICS.length} topics completed</p>
        <div class="card-meta">
          <div class="progress-bar"><div class="progress-bar-fill" style="width:${TOPICS.length ? (topicsComplete/TOPICS.length*100) : 0}%"></div></div>
          <span>${TOPICS.length ? Math.round(topicsComplete/TOPICS.length*100) : 0}%</span>
        </div>
      </div>
      <div class="card" onclick="navigate('quiz')">
        <div class="card-icon">&#10004;</div>
        <h3>Quiz Performance</h3>
        <p>${quizzesTaken} quizzes taken &bull; Best: ${bestScore}%</p>
        <div class="card-meta">
          <span class="badge badge-domain2">Practice</span>
          <span>${Object.values(QUIZZES).flat().length} questions available</span>
        </div>
      </div>
      <div class="card" onclick="navigate('schedule')">
        <div class="card-icon">&#128197;</div>
        <h3>30-Day Plan</h3>
        <p>${daysComplete} / 30 days completed</p>
        <div class="card-meta">
          <div class="progress-bar"><div class="progress-bar-fill" style="width:${daysComplete/30*100}%"></div></div>
          <span>${Math.round(daysComplete/30*100)}%</span>
        </div>
      </div>
      <div class="card" onclick="navigate('labs')">
        <div class="card-icon">&#128187;</div>
        <h3>Hands-on Labs</h3>
        <p>${LABS.length} TryHackMe rooms ready</p>
        <div class="card-meta">
          <span class="badge badge-networking">Hands-on</span>
          <span>All domains covered</span>
        </div>
      </div>
    </div>

    <div class="page-header" style="margin-top:12px">
      <h1 style="font-size:20px">Key Ports to Memorize</h1>
    </div>
    <div class="card-grid">
      ${[
        ["22","SSH"],["25","SMTP"],["53","DNS"],["80","HTTP"],["443","HTTPS"],
        ["389","LDAP"],["636","LDAPS"],["3389","RDP"],["161/162","SNMP"],
        ["514","Syslog"],["88","Kerberos"],["1433","MSSQL"],["3306","MySQL"],["143","IMAP"]
      ].map(([port,name]) => `<div class="card" style="cursor:default;padding:12px;text-align:center"><strong style="font-size:20px;color:var(--green)">${port}</strong><br><span style="font-size:12px;color:var(--text2)">${name}</span></div>`).join("")}
    </div>
  `;
}

function renderTopics() {
  return `
    <div class="page-header">
      <h1>Study Topics</h1>
      <p>Click a topic to review the material. Mark complete when done.</p>
    </div>
    <div class="filter-pills">
      <span class="pill active" data-filter="all">All</span>
      <span class="pill" data-filter="1">D1: General Security</span>
      <span class="pill" data-filter="2">D2: Threats & Vulns</span>
      <span class="pill" data-filter="3">D3: Architecture</span>
      <span class="pill" data-filter="4">D4: Operations</span>
      <span class="pill" data-filter="5">D5: Management</span>
    </div>
    <div class="card-grid" id="topic-cards">
      ${TOPICS.map(t => `
        <div class="card topic-card" data-domain="${t.domain}" data-topic="${t.id}" onclick="openTopic('${t.id}')">
          <div class="card-icon">${t.icon}</div>
          <h3>${t.title}</h3>
          <p>${t.summary}</p>
          <div class="card-meta">
            <span class="badge badge-domain${t.domain}">Domain ${t.domain}</span>
            ${progress[`topic_${t.id}`] ? '<span style="color:var(--green)">&#10003; Complete</span>' : '<span style="color:var(--text2)">Not started</span>'}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderTopicDetail(topicId) {
  const topic = TOPICS.find(t => t.id === topicId);
  if (!topic) return "<p>Topic not found.</p>";
  const isComplete = progress[`topic_${topic.id}`];

  return `
    <button class="back-btn" onclick="navigate('topics')">&#8592; Back to Topics</button>
    <div class="page-header">
      <h1>${topic.icon} ${topic.title}</h1>
      <p>${topic.module} &mdash; ${topic.domainLabel}</p>
    </div>
    <div class="topic-content">${topic.content}</div>
    <div class="topic-nav">
      <button onclick="startQuiz('${topic.id}')">&#10004; Take Quiz on This Topic</button>
    </div>
    <button class="mark-complete-btn ${isComplete ? 'completed' : ''}" onclick="toggleTopicComplete('${topic.id}')">
      ${isComplete ? '&#10003; Completed! Click to unmark' : 'Mark as Complete'}
    </button>
  `;
}

function renderQuiz() {
  const topicOptions = TOPICS.map(t =>
    `<option value="${t.id}">${t.title}</option>`
  ).join("");

  return `
    <div class="page-header">
      <h1>Quiz Mode</h1>
      <p>Test your knowledge. Select a topic or take a mixed quiz.</p>
    </div>
    <div class="card-grid">
      <div class="card" onclick="startQuiz('all')">
        <div class="card-icon">&#127922;</div>
        <h3>Mixed Quiz (All Topics)</h3>
        <p>Random questions from all available topics.</p>
        <div class="card-meta">
          <span class="badge badge-domain4">${QUIZZES.all.length} questions</span>
        </div>
      </div>
      ${TOPICS.map(t => {
        const qs = QUIZZES[t.id] || [];
        return `
          <div class="card" onclick="startQuiz('${t.id}')">
            <div class="card-icon">${t.icon}</div>
            <h3>${t.title}</h3>
            <p>${qs.length} practice questions.</p>
            <div class="card-meta">
              <span class="badge badge-domain${t.domain}">Domain ${t.domain}</span>
            </div>
          </div>`;
      }).join("")}

      <div style="grid-column:1/-1;margin-top:12px"><h2 style="color:var(--accent2);font-size:18px;border-bottom:1px solid var(--bg3);padding-bottom:8px">Chapple/Seidl Study Guide Questions</h2></div>

      <div class="card" onclick="startQuiz('book-ch1')">
        <div class="card-icon">&#128214;</div>
        <h3>Ch1: Security Professional</h3>
        <p>${(QUIZZES["book-ch1"]||[]).length} review questions. CIA triad, controls, risk types, DLP, encryption.</p>
        <div class="card-meta"><span class="badge badge-domain1">Domain 1</span></div>
      </div>
      <div class="card" onclick="startQuiz('book-ch2')">
        <div class="card-icon">&#128214;</div>
        <h3>Ch2: Threat Landscape</h3>
        <p>${(QUIZZES["book-ch2"]||[]).length} review questions. Threat actors, APTs, ISACs, OSINT, Shadow IT.</p>
        <div class="card-meta"><span class="badge badge-domain2">Domain 2</span></div>
      </div>
      <div class="card" onclick="startQuiz('book-ch3')">
        <div class="card-icon">&#128214;</div>
        <h3>Ch3: Malicious Code</h3>
        <p>${(QUIZZES["book-ch3"]||[]).length} review questions. Malware types, rootkits, logic bombs, botnets.</p>
        <div class="card-meta"><span class="badge badge-domain2">Domain 2</span></div>
      </div>
    </div>
  `;
}

function renderQuizActive() {
  if (!currentQuiz) return renderQuiz();
  const { questions, current, answers, showExplanation } = currentQuiz;
  const q = questions[current];
  const pct = ((current + 1) / questions.length) * 100;
  const answered = answers[current] !== undefined;

  return `
    <button class="back-btn" onclick="currentQuiz=null;navigate('quiz')">&#8592; Back to Quiz Selection</button>
    <div class="quiz-container">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      <div class="quiz-question-num">Question ${current + 1} of ${questions.length}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => {
          let cls = "quiz-option";
          if (answered) {
            if (i === q.correct) cls += " correct";
            else if (i === answers[current] && i !== q.correct) cls += " incorrect";
          } else if (currentQuiz.selected === i) {
            cls += " selected";
          }
          return `<button class="${cls}" onclick="quizSelect(${i})" ${answered ? 'disabled' : ''}>${String.fromCharCode(65+i)}. ${opt}</button>`;
        }).join("")}
      </div>
      <div class="quiz-explanation ${answered ? 'show' : ''}">${q.explanation}</div>
      <div class="quiz-actions">
        ${!answered ?
          `<button class="quiz-btn quiz-btn-primary" onclick="quizSubmit()" ${currentQuiz.selected === undefined ? 'disabled' : ''}>Submit Answer</button>` :
          `<button class="quiz-btn quiz-btn-primary" onclick="quizNext()">${current < questions.length - 1 ? 'Next Question' : 'See Results'}</button>`
        }
      </div>
    </div>
  `;
}

function renderQuizResults() {
  const { questions, answers } = currentQuiz;
  let correct = 0;
  questions.forEach((q, i) => { if (answers[i] === q.correct) correct++; });
  const pct = Math.round((correct / questions.length) * 100);
  const pass = pct >= 75;

  // Save stats
  progress.quizzesTaken = (progress.quizzesTaken || 0) + 1;
  if (pct > (progress.bestScore || 0)) progress.bestScore = pct;
  saveProgress();

  return `
    <button class="back-btn" onclick="currentQuiz=null;navigate('quiz')">&#8592; Back to Quiz Selection</button>
    <div class="quiz-container">
      <div class="quiz-score">
        <h2>Quiz Complete!</h2>
        <div class="score-num ${pass ? 'pass' : 'fail'}">${pct}%</div>
        <p>${correct} out of ${questions.length} correct</p>
        <p style="margin-top:12px;color:var(--text2)">${pass ? 'Great job! Keep it up!' : 'Keep studying \u2014 review the explanations and try again.'}</p>
        <p style="margin-top:6px;color:var(--text2);font-size:13px">Passing score on the real exam: 750/900 (~83%)</p>
        <div style="margin-top:20px;display:flex;gap:12px;justify-content:center">
          <button class="quiz-btn quiz-btn-primary" onclick="startQuiz(currentQuiz.topicId)">Retake Quiz</button>
          <button class="quiz-btn quiz-btn-secondary" onclick="currentQuiz=null;navigate('quiz')">Choose Different Quiz</button>
        </div>
      </div>
    </div>

    <div style="margin-top:24px">
      <h2 style="color:var(--accent2);margin-bottom:16px">Review Answers</h2>
      ${questions.map((q, i) => {
        const isCorrect = answers[i] === q.correct;
        return `
          <div class="quiz-container" style="margin-bottom:12px;border-color:${isCorrect ? 'var(--green)' : 'var(--red)'}33">
            <div class="quiz-question-num" style="color:${isCorrect ? 'var(--green)' : 'var(--red)'}">
              ${isCorrect ? '&#10003; Correct' : '&#10007; Incorrect'} &mdash; Q${i+1}
            </div>
            <div class="quiz-question" style="font-size:14px">${q.q}</div>
            <p style="font-size:13px;color:var(--green)">Answer: ${String.fromCharCode(65+q.correct)}. ${q.options[q.correct]}</p>
            ${!isCorrect ? `<p style="font-size:13px;color:var(--red)">Your answer: ${String.fromCharCode(65+answers[i])}. ${q.options[answers[i]]}</p>` : ''}
            <div class="quiz-explanation show" style="margin-top:8px">${q.explanation}</div>
          </div>`;
      }).join("")}
    </div>
  `;
}

function renderLabs() {
  return `
    <div class="page-header">
      <h1>Hands-on Labs</h1>
      <p>TryHackMe rooms mapped to Security+ domains. Click to open.</p>
    </div>
    <div class="filter-pills">
      <span class="pill active" data-filter="all">All</span>
      <span class="pill" data-filter="1">Domain 1</span>
      <span class="pill" data-filter="2">Domain 2</span>
      <span class="pill" data-filter="3">Domain 3</span>
      <span class="pill" data-filter="4">Domain 4</span>
      <span class="pill" data-filter="5">Domain 5</span>
    </div>
    <div id="lab-list">
      ${LABS.map(l => `
        <div class="lab-card" data-domain="${l.domain}">
          <h3>${l.title}</h3>
          <p>${l.desc}</p>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <a class="lab-link" href="${l.url}" target="_blank">Open Lab &#8594;</a>
            <span class="badge badge-domain${l.domain}">Domain ${l.domain}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderResources() {
  function renderSection(title, items) {
    return `
      <div class="resource-section">
        <h2>${title}</h2>
        ${items.map(r => `
          <div class="resource-item">
            <div class="ri-info">
              <h4>${r.url ? `<a href="${r.url}" target="_blank" style="color:var(--text);text-decoration:none">${r.name}</a>` : r.name}</h4>
              <p>${r.desc}${r.price ? ' &bull; ' + r.price : ''}</p>
            </div>
            <span class="ri-tag ${r.tag === 'free' ? 'ri-free' : 'ri-paid'}">${r.tag === 'free' ? 'FREE' : 'PAID'}</span>
          </div>
        `).join("")}
      </div>`;
  }

  return `
    <div class="page-header">
      <h1>Study Resources</h1>
      <p>Curated materials for Security+ SY0-701 preparation.</p>
    </div>
    ${renderSection("Books & Study Guides", RESOURCES.books)}
    ${renderSection("Video Courses", RESOURCES.videos)}
    ${renderSection("Practice Exams", RESOURCES.practice)}
    ${renderSection("Free Resources", RESOURCES.free)}
  `;
}

function renderSchedule() {
  return `
    <div class="page-header">
      <h1>30-Day Study Plan</h1>
      <p>Click the circle to mark a day complete. 2-3 hours/day recommended.</p>
    </div>
    ${SCHEDULE.map(week => `
      <div class="schedule-week">
        <h2>${week.title}</h2>
        ${week.days.map(d => `
          <div class="schedule-day">
            <div class="day-num">D${d.day}</div>
            <div class="day-content">
              <h4>${d.topic}</h4>
              <p>${d.tasks}</p>
            </div>
            <button class="day-check ${progress[`day_${d.day}`] ? 'done' : ''}" onclick="toggleDay(${d.day})">
              ${progress[`day_${d.day}`] ? '&#10003;' : ''}
            </button>
          </div>
        `).join("")}
      </div>
    `).join("")}
  `;
}

function renderNotes() {
  return `
    <div class="page-header">
      <h1>My Notes</h1>
      <p>Personal notes for each topic. Saved automatically to the server.</p>
    </div>
    <div style="margin-bottom:16px">
      <select id="notes-topic" onchange="loadNoteTopic()" style="padding:10px;background:var(--bg2);color:var(--text);border:1px solid var(--bg3);border-radius:8px;font-size:14px;width:100%">
        <option value="general">General Notes</option>
        ${TOPICS.map(t => `<option value="${t.id}">${t.title}</option>`).join("")}
      </select>
    </div>
    <textarea class="notes-area" id="notes-textarea" placeholder="Start typing your notes here...">${userNotes.general || ""}</textarea>
    <button class="save-btn" onclick="saveCurrentNote()">Save Notes</button>
    <p id="notes-status" style="margin-top:8px;font-size:12px;color:var(--green);display:none">Notes saved!</p>
  `;
}

// ============================================================
// NAVIGATION & INTERACTION
// ============================================================

function navigate(page, detail) {
  const content = document.getElementById("content");
  document.querySelectorAll("#nav-links a").forEach(a => a.classList.remove("active"));
  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add("active");

  switch (page) {
    case "dashboard": content.innerHTML = renderDashboard(); break;
    case "topics": content.innerHTML = renderTopics(); setupFilters(); break;
    case "topic-detail": content.innerHTML = renderTopicDetail(detail); break;
    case "quiz": content.innerHTML = currentQuiz ? (currentQuiz.finished ? renderQuizResults() : renderQuizActive()) : renderQuiz(); break;
    case "labs": content.innerHTML = renderLabs(); setupLabFilters(); break;
    case "resources": content.innerHTML = renderResources(); break;
    case "schedule": content.innerHTML = renderSchedule(); break;
    case "notes": content.innerHTML = renderNotes(); break;
  }

  updateProgressRing();
  window.scrollTo(0, 0);
}

function openTopic(id) { navigate("topic-detail", id); }

async function toggleTopicComplete(id) {
  progress[`topic_${id}`] = !progress[`topic_${id}`];
  await saveProgress();
  navigate("topic-detail", id);
}

async function toggleDay(day) {
  progress[`day_${day}`] = !progress[`day_${day}`];
  await saveProgress();
  navigate("schedule");
}

function setupFilters() {
  document.querySelectorAll(".filter-pills .pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pills .pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      document.querySelectorAll(".topic-card").forEach(card => {
        card.style.display = (filter === "all" || card.dataset.domain === filter) ? "" : "none";
      });
    });
  });
}

function setupLabFilters() {
  document.querySelectorAll(".filter-pills .pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pills .pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      document.querySelectorAll(".lab-card").forEach(card => {
        card.style.display = (filter === "all" || card.dataset.domain === filter) ? "" : "none";
      });
    });
  });
}

// Quiz functions
function startQuiz(topicId) {
  let questions = [...(QUIZZES[topicId] || QUIZZES.all)];
  // Shuffle
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  currentQuiz = { topicId, questions, current: 0, answers: {}, selected: undefined, finished: false };
  navigate("quiz");
}

function quizSelect(i) {
  if (currentQuiz.answers[currentQuiz.current] !== undefined) return;
  currentQuiz.selected = i;
  navigate("quiz");
}

function quizSubmit() {
  if (currentQuiz.selected === undefined) return;
  currentQuiz.answers[currentQuiz.current] = currentQuiz.selected;
  navigate("quiz");
}

function quizNext() {
  currentQuiz.selected = undefined;
  if (currentQuiz.current < currentQuiz.questions.length - 1) {
    currentQuiz.current++;
  } else {
    currentQuiz.finished = true;
  }
  navigate("quiz");
}

// Notes functions
function loadNoteTopic() {
  const topic = document.getElementById("notes-topic").value;
  document.getElementById("notes-textarea").value = userNotes[topic] || "";
}

async function saveCurrentNote() {
  const topic = document.getElementById("notes-topic").value;
  userNotes[topic] = document.getElementById("notes-textarea").value;
  await saveNotes();
  const status = document.getElementById("notes-status");
  status.style.display = "block";
  setTimeout(() => { status.style.display = "none"; }, 2000);
}

// ============================================================
// INIT
// ============================================================
async function init() {
  await Promise.all([loadProgress(), loadNotes()]);
  navigate("dashboard");

  // Handle nav clicks
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentQuiz = null;
      navigate(link.dataset.page);
    });
  });
}

init();
