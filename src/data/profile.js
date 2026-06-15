export const profile = {
  name: "Arun Eswara",
  tagline: "Software engineer working across AI products, systems, research engineering, and business strategy.",
  location: "San Francisco, California",
  sourceUrl: "https://www.aruneswara.com",
  contact: {
    phone: "469-835-7052",
    emails: ["aruneswara@icloud.com", "arun22@utexas.edu"],
    linkedin: "https://www.linkedin.com/in/aruneswara",
    github: "https://github.com/aruneswara",
    website: "https://www.aruneswara.com",
  },
  focusAreas: [
    {
      title: "AI Product Systems",
      description: "Model-facing product and engineering systems shaped by work at OpenAI.",
    },
    {
      title: "Applied ML & Tooling",
      description: "YouTube abuse detection, network analysis tooling, and workflow automation.",
    },
    {
      title: "Research Engineering",
      description: "C/C++ MCU firmware, BLE/Android libraries, sensor studies, and Python code generation.",
    },
    {
      title: "Cybersecurity & Systems",
      description: "Zero-trust architecture, distributed firewall automation, and large-scale log monitoring.",
    },
    {
      title: "Business Analytics",
      description: "Fortune 100 and Fortune 500 operating models, interviews, and sales-funnel research.",
    },
    {
      title: "Projects & Writing",
      description: "Ribbon, Ortho, BioProtect, LyricLearner, MediData, and essays from aruneswara.com.",
    },
  ],
  experience: [
    {
      company: "OpenAI",
      role: "Software Engineer",
      period: "2025 - Present",
      location: "San Francisco, California",
      bullets: ["Building at OpenAI from San Francisco."],
    },
    {
      company: "Google",
      role: "Research Engineering Intern",
      period: "2023 Fall",
      bullets: [
        "Designed C/C++ MCU firmware modules to accelerate async sensor serialization by 90%+; used by 10 teams/~800+ SWEs.",
        "Supported 9 cross-team research studies including formulating design specs and creating drivers + Python codegens.",
        "Engineered robust Java/Android support libraries to enable BLE config transmission and reduce sensor latency by ~75%.",
      ],
    },
    {
      company: "McKinsey",
      role: "Business Analyst Intern",
      period: "2023 Summer",
      bullets: [
        "Forecasted organizational performance via comprehensive Excel multiples model (20K+ data points) for a F100 tech firm.",
        "Directed 20+ internal/external interviews and performed in-depth research to improve sales funnel for a F500 SaaS firm.",
        "Presented market research analyses, data forecasts, and actionable cross-team insights directly to client executives.",
      ],
    },
    {
      company: "Google",
      role: "Software Engineering Intern",
      period: "2022 Summer",
      bullets: [
        "Created Binary Classification ML Model for YouTube API logs, aiding internal abuse detection with 96%+ Precision.",
        "Developed ~200 log/sec. analysis/visualization model for network traces in C++, including HTTP header regressions.",
        "Led design and implementation of Android network pipeline in Java/Kotlin by collaborating across multiple teams.",
      ],
    },
    {
      company: "National Security Agency",
      role: "Cybersecurity Intern",
      period: "2021 Summer",
      bullets: [
        "Developed infrastructure and network policy for the NSA Zero-Trust Architecture in line with Executive Order 14028.",
        "Created distributed firewall architecture with automated scaling across 150+ virtual machine nodes in Ansible.",
        "Implemented packet monitoring and log aggregation/visualization for 60M+ daily logs alongside Palo Alto Networks.",
        "Managed vendor partnerships including performing due diligence on MFA solutions for future purchases.",
      ],
    },
    {
      company: "Alpharank",
      role: "Product Management Intern",
      period: "2020 Fall",
      bullets: [
        "Developed company strategies and partner materials alongside the CEO, increased client sales 15%+.",
        "Aggregated and analyzed customer data to determine sales funnel performance and account opening success rates.",
        "Managed 12,000+ company accounts via Salesforce by to optimize best practices and source new leads.",
      ],
    },
    {
      company: "Beta Bowl Business Program",
      role: "PM Intern and Student Mentor",
      period: "2019-2020",
      bullets: [
        "Youth Mentor for the Beta Bowl start-up incubator program via daily lectures to 200+ cumulative students.",
        "Applied Search Engine Optimization (SEO) to the website, added 113K total views with 4.25K additional engagements.",
        "Increased website impressions by 7x and click-through traffic by 3x via keyword optimization and client seminars.",
        "Product management lead for an auxiliary product (lead magnet) and leader for a group of interns.",
      ],
    },
    {
      company: "NTT DATA Services",
      role: "Software Engineering Intern",
      period: "2019 Summer",
      bullets: [
        "Demarcated Hanging and Active Zones of 500+ server addresses in MS Excel to decommission faulty servers.",
        "Trained in AWS (Amazon Web Services) and RAID implementation, earned Amazon accreditation.",
      ],
    },
    {
      company: "Junior Achievement of Dallas (Non-Profit)",
      role: "Business Analytics Intern",
      period: "2019 Summer",
      bullets: [
        "Reported aggregated metrics of partner organizations' practices and financial information to alter company strategies.",
        "Analyzed trends in pre and post-class achievement of 1000+ students to develop performance-based insights.",
      ],
    },
  ],
  education: [
    {
      school: "University of Texas at Austin",
      degree: "Dual Bachelor's Degree",
      period: "2020-2024",
      meta: "3.93 GPA",
      bullets: [
        "BS in Computer Science, Honors; BBA in Business Honors Program (BHP).",
        "Computer Science Honors and Business Honors Program (Texas CSB) and Freshman Research Initiative (FRI).",
        "Invited to Turing Scholars and College of Natural Sciences' Polymathic Scholars.",
        "Activities: Texas Undergraduate Investment Team, Association for Computing Machinery, Honors Business Association.",
      ],
    },
    {
      school: "Plano East Senior High School",
      degree: "High School Diploma",
      period: "2016-2020",
      bullets: [
        "International Baccalaureate (IB) Program with Higher Level specialization in Mathematics, Computer Science, and English with a 4.54/4.00 GPA.",
        "Perfect (36) ACT Score and 1580/1600 SAT Score.",
        "Activities: Talks on Innovation, Leadership, and Entrepreneurship Founder; Science Fair Club Mentor; Computer Science Club Mentor and Competitor; Boy Scouts; National Honors Society Tech. Committee; Science Bowl.",
      ],
    },
  ],
  awards: [
    {
      title: "Regeneron Science Talent Search (STS) Scholar",
      description: "Awarded $2,000 for Science Fair project on the application of machine learning principles to biomechanical and biomedical technologies.",
    },
    {
      title: "Congressional App Challenge Winner",
      description: "Invited to Washington D.C. Congressional HouseOfCode for MediManage, an app analyzing medicine authenticity and facilitating doctor/patient communication.",
    },
    {
      title: "MIT Think National Semi-Finalist",
      description: "9th nationwide for MIT Think Scholars Science and Innovation competition.",
    },
  ],
  projects: [
    {
      title: "Ortho, an Intelligent Exoskeleton",
      description: "Created an arm brace in C++ that interprets neuromuscular signals via a Bayesian Artificial Neural Network developed in MATLAB to facilitate arm movement and rehabilitation with 98% accuracy.",
      slug: "ortho-an-intelligent-exoskeleton-powered-orthosis-via-neural-network-for-rehabilitative-assistance",
    },
    {
      title: "BioProtect: A Phased Array Spatial Sensor for Visual Detection and Assistance",
      description: "A Python-based system for visually impaired users that reads a phased array of sensors and computes vector intersections to detect nearby objects in real-time.",
      slug: "bioprotect-a-phased-array-spatial-sensor-for-visual-detection-and-assistance",
    },
    {
      title: "LyricLearner",
      description: "A Twitter bot that uses Genius and Twitter APIs in Python and Java/Maven to generate predictive artist lyrics with Markov Chains and analyze artist sentiment via Stanford NLP.",
      slug: "lyriclearner-an-ai-music-generator-and-interpreter",
    },
    {
      title: "Ribbon",
      description: "A Chrome extension that transforms browser navigation into a shortcut-based, mouse-less overlay experience.",
      slug: "ribbon",
    },
    {
      title: "MediData",
      description: "A hackathon project to digitally facilitate doctor/patient communication during the COVID-19 pandemic.",
      slug: "medidata-bringing-the-hospital-to-you",
    },
  ],
};

export default profile;
