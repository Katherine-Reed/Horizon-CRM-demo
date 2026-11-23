/** Demo data — replace with Supabase queries in production. */

export const DEMO_MEETINGS = [
  { id: 1, title: "Team standup", date: "2025-04-07", time: "09:30" },
  {
    id: 2,
    title: "Client review – M. Chen",
    date: "2025-04-07",
    time: "11:00",
  },
  { id: 3, title: "Interview – J. Patel", date: "2025-04-08", time: "14:00" },
  { id: 4, title: "Training: CV writing", date: "2025-04-09", time: "10:00" },
  { id: 5, title: "Recruitment sync", date: "2025-04-10", time: "15:30" },
  { id: 6, title: "Client assessment", date: "2025-04-11", time: "13:00" },
  { id: 7, title: "Employer call", date: "2025-04-14", time: "11:30" },
];

export const INITIAL_KANBAN_COLUMNS = [
  {
    id: "applied",
    title: "Applied",
    cards: [
      { id: "c1", name: "Emma Watson", role: "Barista" },
      { id: "c2", name: "James Chen", role: "Warehouse" },
      { id: "c3", name: "Priya Patel", role: "Retail" },
    ],
  },
  {
    id: "resume",
    title: "Resume sent",
    cards: [
      { id: "c4", name: "Liam O'Brien", role: "Admin" },
      { id: "c5", name: "Sofia Rossi", role: "Customer Service" },
    ],
  },
  {
    id: "interview",
    title: "Interview",
    cards: [
      { id: "c6", name: "Ahmed Hassan", role: "IT Support" },
      { id: "c7", name: "Julia Novak", role: "Receptionist" },
    ],
  },
  {
    id: "offer",
    title: "Job offer",
    cards: [
      { id: "c8", name: "Mark Johnson", role: "Chef" },
      { id: "c9", name: "Zoe Clark", role: "Sales" },
    ],
  },
];

/** For the demo, "today" is fixed so sample meetings always show. */
export const DEMO_TODAY = new Date(2025, 3, 7);
