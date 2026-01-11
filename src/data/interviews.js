// Interview Experiences Data
export const interviewsData = [
  {
    id: "autodesk",
    company: "Autodesk",
    position: "Software Engineer",
    date: "2025",
    roundsCount: 4,
    status: "Completed",
    type: "Technical & Behavioral",
    duration: "4 rounds",
    description:
      "End-to-end process with balanced emphasis on coding depth, design skills, and communication.",
    location: "Virtual + Onsite",
    interviewers: [
      "Senior Software Engineer",
      "Staff Engineer",
      "Hiring Manager",
    ],
    topics: [
      "Data Structures",
      "System Design",
      "API Design",
      "Debugging",
      "Behavioral",
    ],
    rounds: [
      {
        title: "Round 1: Online Assessment",
        focus: "DSA fundamentals and implementation speed",
        duration: "90 min",
        format: "Online",
        summary:
          "Mixed difficulty DSA set covering arrays, strings, and tree traversal with tight time management.",
        questions: [
          "Array prefix-sum with dynamic updates",
          "String windowing for minimum substring",
          "Binary tree traversal with pruning conditions",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 2: Technical Deep Dive",
        focus: "System design + code review",
        duration: "75 min",
        format: "Virtual",
        summary:
          "Designed a rate-limited content delivery API, discussed data modeling, caching, and edge cases; brief code review on concurrency safety.",
        questions: [
          "Design content delivery with per-user rate limits",
          "Choose storage for audit logs and justify",
          "Identify race conditions in a shared counter implementation",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 3: Pair Programming",
        focus: "Maintainability and testing",
        duration: "60 min",
        format: "Virtual",
        summary:
          "Implemented a feature flag evaluator; added unit tests, logging, and error handling while narrating trade-offs.",
        questions: [
          "Implement flag evaluation with precedence rules",
          "Add guardrails for malformed payloads",
          "Refactor for readability under time pressure",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 4: Hiring Manager + Behavioral",
        focus: "Team fit, delivery, and ownership",
        duration: "45 min",
        format: "Onsite/Virtual",
        summary:
          "Discussed ownership stories, conflict resolution, release risk handling, and collaboration with design/PM.",
        questions: [
          "Example of de-risking a release on a tight timeline",
          "Handling conflicting priorities across teams",
          "How to measure success post-launch",
        ],
        outcome: "Offer",
      },
    ],
    preparation: [
      "Targeted DSA drills (arrays/graphs)",
      "Grokking System Design",
      "Mock behavioral loops",
    ],
    learnings: [
      "Explain trade-offs early, code carefully under constraints",
      "Align on requirements before diving into design",
      "Narrate testing and rollback plans while coding",
    ],
    image: "/companies/autodesk.jpg",
    featured: true,
  },
  {
    id: "josh-technology-group",
    company: "Josh Technology Group",
    position: "Software Engineer",
    date: "2025",
    roundsCount: 8,
    status: "Completed",
    type: "Intensive Technical Loop",
    duration: "8 rounds",
    description:
      "Multi-stage loop emphasizing depth in algorithms, low-level design, high-level design, and problem decomposition.",
    location: "Virtual",
    interviewers: ["Senior Engineers", "Architect", "Hiring Manager"],
    topics: ["Algorithms", "LLD", "HLD", "Concurrency", "Behavioral"],
    rounds: [
      {
        title: "Round 1: Coding OA",
        focus: "Algorithms speed",
        duration: "90 min",
        format: "Online",
        summary:
          "4 medium-hard DSA problems with emphasis on optimal time/space and edge cases.",
        questions: [
          "Graph shortest path with constraints",
          "Interval merging with weights",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 2: DS & Algo",
        focus: "Data structures depth",
        duration: "60 min",
        format: "Virtual",
        summary:
          "Live-coding balanced BST operations and heap-based scheduling; complexity discussion required.",
        questions: [
          "Augmented BST for range stats",
          "Task scheduler with cooldowns",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 3: LLD",
        focus: "Clean OOP and patterns",
        duration: "75 min",
        format: "Virtual",
        summary:
          "Designed a parking lot system with extensible pricing, SOLID adherence, and testability hooks.",
        questions: [
          "Model passes & dynamic pricing",
          "Plug-in notification channels",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 4: HLD",
        focus: "Scale & reliability",
        duration: "75 min",
        format: "Virtual",
        summary:
          "Architected a high-traffic ride-matching service; covered sharding, consistency, queues, and SLAs.",
        questions: [
          "Geo-spatial indexing choices",
          "Back-pressure strategy for surge",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 5: Problem Solving",
        focus: "Puzzles + reasoning",
        duration: "45 min",
        format: "Virtual",
        summary:
          "Logical puzzles focused on eliminating ambiguity and communicating approach under time caps.",
        questions: ["Classic water jug variant", "Coin weighing minimization"],
        outcome: "Cleared",
      },
      {
        title: "Round 6: Advanced Coding",
        focus: "Performance tuning",
        duration: "60 min",
        format: "Virtual",
        summary:
          "Optimized streaming data processing; profiled bottlenecks and applied memory-friendly structures.",
        questions: ["Sliding window with backpressure", "Top-K over streams"],
        outcome: "Cleared",
      },
      {
        title: "Round 7: Managerial",
        focus: "Delivery and ownership",
        duration: "45 min",
        format: "Virtual",
        summary:
          "Discussed delivery predictability, prioritization, mentoring juniors, and stakeholder updates.",
        questions: [
          "Handling slipping milestones",
          "Coaching plan for new hires",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 8: HR",
        focus: "Comp, values, fit",
        duration: "30 min",
        format: "Virtual",
        summary:
          "Expectation setting on role, comp bands, growth path, and relocation preferences.",
        questions: ["Why JTG?", "Preferred team setup"],
        outcome: "Offer",
      },
    ],
    preparation: [
      "Timed DSA mocks",
      "LLD/HLD dry runs with diagrams",
      "Behavioral STAR stories",
    ],
    learnings: [
      "Keep diagrams crisp and layered",
      "State constraints before choosing data structures",
      "Narrate trade-offs and rollback paths",
    ],
    image: "/companies/jtg.jpg",
    featured: true,
  },
  {
    id: "wissda",
    company: "Wissda",
    position: "Software Engineer",
    date: "2025",
    roundsCount: 3,
    status: "Completed",
    type: "Product Engineering",
    duration: "3 rounds",
    description:
      "Compact process focused on hands-on coding, problem solving, and team fit.",
    location: "Virtual",
    interviewers: ["Backend Lead", "Product Engineer"],
    topics: ["Coding", "APIs", "Debugging", "Behavioral"],
    rounds: [
      {
        title: "Round 1: Coding",
        focus: "Implementation accuracy",
        duration: "60 min",
        format: "Online",
        summary:
          "Two coding problems emphasizing correctness, edge cases, and readable code.",
        questions: [
          "LRU cache with eviction logging",
          "String diff highlighter",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 2: Technical + Debug",
        focus: "API design and debugging",
        duration: "60 min",
        format: "Virtual",
        summary:
          "Designed a minimal notes API, then debugged a failing pagination endpoint; added metrics and retries.",
        questions: ["Design /notes API", "Fix off-by-one in cursor pagination"],
        outcome: "Cleared",
      },
      {
        title: "Round 3: Culture & Ownership",
        focus: "Team fit and delivery",
        duration: "40 min",
        format: "Virtual",
        summary:
          "Discussed past delivery stories, handling ambiguity, and collaborating with design and QA.",
        questions: ["Navigating changing requirements", "Escalation style"],
        outcome: "Offer",
      },
    ],
    preparation: [
      "Refreshed REST patterns",
      "Bug bash practice",
      "STAR stories",
    ],
    learnings: [
      "Log and measure before fixing",
      "Keep APIs minimal but extensible",
      "Share risks early with stakeholders",
    ],
    image: "/companies/wissda.jpg",
    featured: true,
  },
  {
    id: "airbus",
    company: "Airbus",
    position: "Software Engineer Intern",
    date: "2024",
    roundsCount: 2,
    status: "Completed",
    type: "Systems & Behavioral",
    duration: "2 rounds",
    description:
      "Focused on systems thinking, reliability, and team collaboration.",
    location: "On-site",
    interviewers: ["System Engineer", "Engineering Manager"],
    topics: ["Systems", "Reliability", "Behavioral"],
    rounds: [
      {
        title: "Round 1: System Design + Coding",
        focus: "Reliability-first design",
        duration: "70 min",
        format: "On-site",
        summary:
          "Designed telemetry aggregation for aircraft subsystems; implemented a fault-tolerant ingestion path with retries and idempotency keys.",
        questions: [
          "Design telemetry pipeline with ordering guarantees",
          "Code a ring buffer for recent events",
        ],
        outcome: "Cleared",
      },
      {
        title: "Round 2: Managerial + Behavior",
        focus: "Collaboration and ownership",
        duration: "45 min",
        format: "On-site",
        summary:
          "Discussed working in safety-critical environments, writing clear runbooks, and handling incidents calmly.",
        questions: [
          "Experience documenting incident timelines",
          "How to communicate risk to non-engineers",
        ],
        outcome: "Offer",
      },
    ],
    preparation: [
      "System design drills",
      "Reliability patterns",
      "Behavioral prep",
    ],
    learnings: [
      "Bias toward safety and clarity",
      "Communicate trade-offs with evidence",
      "Document decisions for audits",
    ],
    image: "/companies/airbus.jpg",
    featured: true,
  },
];

export const interviewStats = {
  totalInterviews: interviewsData.length,
  completedInterviews: interviewsData.filter((i) => i.status === "Completed")
    .length,
  avgDuration: "Round-specific",
  totalTopics: [...new Set(interviewsData.flatMap((i) => i.topics))].length,
};
