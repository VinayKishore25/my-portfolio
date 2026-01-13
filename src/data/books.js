// Books Data
export const booksRead = [
  {
    id: 1,
    title: "Design Patterns",
    author: "Gang of Four",
    year: 2024,
    rating: 5,
    category: "Software Design",
  },
  {
    id: 2,
    title: "System Design Interview",
    author: "Alex Xu",
    year: 2024,
    rating: 5,
    category: "System Design",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    year: 2024,
    rating: 5,
    category: "Self-Improvement",
  },
  {
    id: 4,
    title: "The Lean Startup",
    author: "Eric Ries",
    year: 2023,
    rating: 5,
    category: "Business",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    year: 2023,
    rating: 5,
    category: "Productivity",
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2023,
    rating: 5,
    category: "Best Practices",
  },
];

export const booksSuggested = [
  {
    id: 1,
    title: "Competitive Programming",
    author: "Halim & Halim",
    category: "Competitive Coding",
    why: "Comprehensive guide covering algorithms, data structures, and problem-solving techniques essential for competitive programming",
  },
  {
    id: 2,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "System Design",
    why: "Deep dive into distributed systems, database design patterns, and building scalable architecture",
  },
  {
    id: 3,
    title: "Building Intelligent Agents",
    author: "Yoav Shoham & Kevin Leyton-Brown",
    category: "Agentic AI",
    why: "Essential for understanding multi-agent systems, decision-making frameworks, and autonomous AI applications",
  },
  {
    id: 4,
    title: "Quantum Computing in Action",
    author: "Johan Vos",
    category: "Quantum Computing",
    why: "Practical introduction to quantum computing with real-world applications and hands-on examples",
  },
  {
    id: 5,
    title: "The Art of Computer Programming",
    author: "Donald Knuth",
    category: "Algorithms",
    why: "Foundational knowledge for algorithm optimization, complexity analysis, and deep computer science understanding",
  },
  {
    id: 6,
    title: "The Innovators",
    author: "Walter Isaacson",
    category: "Technology History",
    why: "Inspiring stories of tech pioneers and how innovation shaped computing, perfect for motivation and perspective",
  },
];

export const booksStats = {
  totalRead: booksRead.length,
  totalSuggested: booksSuggested.length,
  averageRating: (
    booksRead.reduce((sum, book) => sum + book.rating, 0) / booksRead.length
  ).toFixed(1),
};
