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
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2023,
    rating: 5,
    category: "Best Practices",
  },
  {
    id: 4,
    title: "Refactoring",
    author: "Martin Fowler",
    year: 2023,
    rating: 5,
    category: "Code Quality",
  },
  {
    id: 5,
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    year: 2023,
    rating: 5,
    category: "Development",
  },
];

export const booksSuggested = [
  {
    id: 1,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "System Design",
    why: "Deep dive into distributed systems and database design patterns",
  },
  {
    id: 2,
    title: "The Art of Computer Programming",
    author: "Donald Knuth",
    category: "Algorithms",
    why: "Foundational knowledge for algorithm optimization and complexity analysis",
  },
  {
    id: 3,
    title: "Building Microservices",
    author: "Sam Newman",
    category: "Architecture",
    why: "Essential for understanding modern scalable architecture patterns",
  },
  {
    id: 4,
    title: "Release It!",
    author: "Michael Nygard",
    category: "Production",
    why: "Critical insights on building reliable, production-ready systems",
  },
];

export const booksStats = {
  totalRead: booksRead.length,
  totalSuggested: booksSuggested.length,
  averageRating: (
    booksRead.reduce((sum, book) => sum + book.rating, 0) / booksRead.length
  ).toFixed(1),
};
