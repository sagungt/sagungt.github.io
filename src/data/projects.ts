interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  github?: string;
  tags: Array<string>;
}

const projects: Array<ProjectProps> = [
  {
    title: "snake-neat",
    description:
      "Train and play snake with NEAT (NeuroEvolution of Augmenting Topologies) and Astar Algorithm",
    github: "https://github.com/sagungt/snake-neat",
    link: "https://sagungt.github.io/snake-neat/",
    tags: ["web", "typescript", "ai", "react", "algorithm", "frontend"],
  },
  {
    title: "Re:staurant",
    description: "Fully optimized landing page of restaurants list",
    github: "https://github.com/sagungt/re-staurant",
    link: "https://restaurant-app-c9350.web.app/",
    tags: ["web", "lit", "pwa", "web-vitals", "javascript", "frontend"],
  },
  {
    title: "Projekt",
    description: "Simple CRUD app with react redux firebase",
    github: "https://github.com/sagungt/projekt-plan",
    link: "https://projekt-plan.web.app/signin",
    tags: ["web", "react", "redux", "firebase", "javascript", "frontend"],
  },
  {
    title: "openmusic-api",
    description: "Backend app to manage music and playlist",
    github: "https://github.com/sagungt/openmusic-api",
    tags: [
      "hapi",
      "backend",
      "nodejs",
      "javascript",
      "postgre",
      "redis",
      "jwt",
    ],
  },
  {
    title: "Hotspot",
    description:
      "Hotspot management implemented in BIJB Kertajati and Kopi Anjis Caffee",
    tags: ["web", "php", "oauth"],
  },
  {
    title: "MessyRoom",
    description: "Machine learning to detect room if it is messy or not",
    link: "https://colab.research.google.com/drive/1uTSQ-pVbo4FcsLCwYW81Rm6KpHWiQ3Kb?usp=sharing",
    tags: ["python", "ai", "tensorflow"],
  },
  {
    title: "SPR",
    description: "Predict scissor, papper or rock with machine learning",
    link: "https://colab.research.google.com/drive/1Nh5YpSGeSjnlGQ8QTfBUaQ7LROzxYMSh?usp=sharing",
    tags: ["python", "ai", "tensorflow"],
  },
  {
    title: "Simple GA",
    description: "Simple Genetic Algorithm with Python GUI",
    github: "https://github.com/sagungt/simple-genetic-algorithm-gui",
    tags: ["python", "algorithm", "gui"],
  },
  {
    title: "Chat Room",
    description: "Chat room with Python GUI with multithreading",
    github: "https://github.com/sagungt/Multi-Room-Chat",
    tags: ["python", "multithread", "gui"],
  },
  {
    title: "Snake Astar",
    description: "Play snake with Astar algorithm in python",
    github: "https://github.com/sagungt/snake-python",
    tags: ["python", "algorithm", "gui"],
  },
  {
    title: "Harmonograph",
    description: "Visualize harmonograph with python",
    github: "https://github.com/sagungt/harmonograph",
    tags: ["python", "algorithm", "gui"],
  },
];

export default projects;
