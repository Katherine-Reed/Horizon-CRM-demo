export const DEMO_PEOPLE = [
  { id: 'u1', name: 'Amelia Hart', email: 'amelia.hart@horizon.org', role: 'administrator', type: 'staff', status: 'active', lastActive: 'Today' },
  { id: 'u2', name: 'Ben Okonkwo', email: 'ben.okonkwo@horizon.org', role: 'manager', type: 'staff', status: 'active', lastActive: 'Yesterday' },
  { id: 'u3', name: 'Rachel Osei', email: 'rachel.osei@horizon.org', role: 'employment_adviser', type: 'staff', status: 'active', lastActive: 'Today', caseload: 34, placements: 4 },
  { id: 'u4', name: 'Tom Fletcher', email: 'tom.fletcher@horizon.org', role: 'employment_adviser', type: 'staff', status: 'active', lastActive: 'Today', caseload: 41, placements: 6 },
  { id: 'u5', name: 'Aisha Rahman', email: 'aisha.rahman@horizon.org', role: 'employment_adviser', type: 'staff', status: 'active', lastActive: '2 days ago', caseload: 29, placements: 3 },
  { id: 'u6', name: 'Sophie Bennett', email: 'sophie.bennett@horizon.org', role: 'trainer', type: 'staff', status: 'active', lastActive: 'Today', sessions: 8, learners: 42 },
  { id: 'u7', name: 'Marcus Reid', email: 'marcus.reid@horizon.org', role: 'trainer', type: 'staff', status: 'active', lastActive: 'Yesterday', sessions: 6, learners: 38 },
  { id: 'u8', name: 'Lena Kowalski', email: 'lena.kowalski@horizon.org', role: 'recruitment', type: 'staff', status: 'active', lastActive: 'Today' },
  { id: 'u9', name: 'Omar Haddad', email: 'omar.haddad@horizon.org', role: 'recruitment', type: 'staff', status: 'active', lastActive: 'Today' },
  { id: 'c1', name: 'Emma Watson', email: 'emma.watson@client.org', role: 'client', type: 'client', status: 'active', lastActive: 'Today', adviser: 'Rachel Osei' },
  { id: 'c2', name: 'James Chen', email: 'james.chen@client.org', role: 'client', type: 'client', status: 'active', lastActive: 'Yesterday', adviser: 'Tom Fletcher' },
  { id: 'c3', name: 'Priya Patel', email: 'priya.patel@client.org', role: 'client', type: 'client', status: 'paused', lastActive: '1 week ago', adviser: 'Rachel Osei' },
  { id: 'c4', name: "Liam O'Brien", email: 'liam.obrien@client.org', role: 'client', type: 'client', status: 'active', lastActive: 'Today', adviser: 'Aisha Rahman' },
  { id: 'c5', name: 'Sofia Rossi', email: 'sofia.rossi@client.org', role: 'client', type: 'client', status: 'active', lastActive: 'Yesterday', adviser: 'Tom Fletcher' },
  { id: 'e1', name: 'Northwind Retail', email: 'hiring@northwind.co.uk', role: 'employer', type: 'employer', status: 'active', sector: 'Retail', openRoles: 4 },
  { id: 'e2', name: 'BrightCare Ltd', email: 'hr@brightcare.co.uk', role: 'employer', type: 'employer', status: 'active', sector: 'Healthcare', openRoles: 7 },
  { id: 'e3', name: 'Trellis Logistics', email: 'jobs@trellis.co.uk', role: 'employer', type: 'employer', status: 'active', sector: 'Logistics', openRoles: 3 },
];

export const DEMO_CANDIDATES = [
  { id: 'cd1', name: 'Emma Watson', role: 'Barista', employer: 'Northwind Retail', status: 'applied', updated: 'Today' },
  { id: 'cd2', name: 'James Chen', role: 'Warehouse Operative', employer: 'Trellis Logistics', status: 'resume sent', updated: 'Yesterday' },
  { id: 'cd3', name: 'Priya Patel', role: 'Retail Assistant', employer: 'Northwind Retail', status: 'interview', updated: 'Today' },
  { id: 'cd4', name: "Liam O'Brien", role: 'Administrator', employer: 'BrightCare Ltd', status: 'applied', updated: '2 days ago' },
  { id: 'cd5', name: 'Sofia Rossi', role: 'Customer Service', employer: 'Northwind Retail', status: 'interview', updated: 'Today' },
  { id: 'cd6', name: 'Ahmed Hassan', role: 'IT Support', employer: 'BrightCare Ltd', status: 'offer', updated: 'Today' },
  { id: 'cd7', name: 'Julia Novak', role: 'Receptionist', employer: 'BrightCare Ltd', status: 'offer', updated: 'Yesterday' },
  { id: 'cd8', name: 'Mark Johnson', role: 'Chef', employer: 'Northwind Retail', status: 'offer', updated: 'Today' },
  { id: 'cd9', name: 'Zoe Clark', role: 'Sales Assistant', employer: 'Northwind Retail', status: 'resume sent', updated: '3 days ago' },
];

export const DEMO_OFFERS = [
  { id: 'o1', candidate: 'Ahmed Hassan', role: 'IT Support', employer: 'BrightCare Ltd', salary: '£26,000', status: 'accepted', sentOn: '2025-04-05' },
  { id: 'o2', candidate: 'Julia Novak', role: 'Receptionist', employer: 'BrightCare Ltd', salary: '£22,500', status: 'sent', sentOn: '2025-04-06' },
  { id: 'o3', candidate: 'Mark Johnson', role: 'Chef', employer: 'Northwind Retail', salary: '£28,000', status: 'sent', sentOn: '2025-04-06' },
];

export const DEMO_TRAINING = [
  { id: 't1', title: 'CV Writing Essentials', trainer: 'Sophie Bennett', duration: '2h', enrolled: 18, status: 'active' },
  { id: 't2', title: 'Interview Confidence', trainer: 'Marcus Reid', duration: '3h', enrolled: 12, status: 'active' },
  { id: 't3', title: 'Customer Service Basics', trainer: 'Sophie Bennett', duration: '4h', enrolled: 22, status: 'active' },
  { id: 't4', title: 'Digital Skills Level 1', trainer: 'Marcus Reid', duration: '6h', enrolled: 15, status: 'draft' },
];

export const DEMO_SESSIONS = [
  { id: 's1', title: 'CV Writing Essentials', date: '2025-04-09', time: '10:00', location: 'Room A', capacity: 20, status: 'scheduled' },
  { id: 's2', title: 'Interview Confidence', date: '2025-04-10', time: '14:00', location: 'Room B', capacity: 15, status: 'scheduled' },
  { id: 's3', title: 'Customer Service Basics', date: '2025-04-12', time: '09:30', location: 'Room A', capacity: 25, status: 'scheduled' },
  { id: 's4', title: 'Digital Skills Level 1', date: '2025-04-15', time: '13:00', location: 'Room C', capacity: 18, status: 'draft' },
];

export const DEMO_MATERIALS = [
  { id: 'm1', title: 'CV Template (2025)', type: 'PDF', updated: '2025-03-28', author: 'Sophie Bennett' },
  { id: 'm2', title: 'Interview Question Bank', type: 'DOCX', updated: '2025-04-01', author: 'Marcus Reid' },
  { id: 'm3', title: 'Digital Skills Workbook', type: 'PDF', updated: '2025-04-03', author: 'Sophie Bennett' },
];

export const DEMO_ATTENDANCE = [
  { id: 'att1', learner: 'Emma Watson', session: 'CV Writing Essentials', date: '2025-04-02', status: 'present' },
  { id: 'att2', learner: 'James Chen', session: 'CV Writing Essentials', date: '2025-04-02', status: 'present' },
  { id: 'att3', learner: 'Priya Patel', session: 'CV Writing Essentials', date: '2025-04-02', status: 'absent' },
  { id: 'att4', learner: "Liam O'Brien", session: 'Interview Confidence', date: '2025-04-04', status: 'present' },
  { id: 'att5', learner: 'Sofia Rossi', session: 'Interview Confidence', date: '2025-04-04', status: 'late' },
];

export const DEMO_ASSESSMENTS = [
  { id: 'as1', title: 'CV Skills Check', learner: 'Emma Watson', score: 78, due: '2025-04-08', status: 'submitted' },
  { id: 'as2', title: 'Interview Role-play', learner: 'James Chen', score: 85, due: '2025-04-09', status: 'pending' },
  { id: 'as3', title: 'Digital Skills Test', learner: 'Priya Patel', score: 62, due: '2025-04-10', status: 'submitted' },
  { id: 'as4', title: 'CV Skills Check', learner: "Liam O'Brien", score: 91, due: '2025-04-11', status: 'pending' },
];

export const DEMO_MEETINGS_RECORDS = [
  { id: 'mt1', title: 'Team standup', with: 'Team', date: '2025-04-07', time: '09:30', status: 'scheduled' },
  { id: 'mt2', title: 'Client review', with: 'M. Chen', date: '2025-04-07', time: '11:00', status: 'scheduled' },
  { id: 'mt3', title: 'Interview prep', with: 'J. Patel', date: '2025-04-08', time: '14:00', status: 'scheduled' },
  { id: 'mt4', title: 'Employer call', with: 'Northwind Retail', date: '2025-04-10', time: '15:30', status: 'scheduled' },
  { id: 'mt5', title: 'Client assessment', with: 'S. Rossi', date: '2025-04-11', time: '13:00', status: 'scheduled' },
];

export const DEMO_MATCHES = [
  { id: 'ma1', client: 'Emma Watson', role: 'Barista', employer: 'Northwind Retail', match: 92, status: 'suggested' },
  { id: 'ma2', client: 'James Chen', role: 'Warehouse Operative', employer: 'Trellis Logistics', match: 88, status: 'shortlisted' },
  { id: 'ma3', client: 'Priya Patel', role: 'Retail Assistant', employer: 'Northwind Retail', match: 84, status: 'suggested' },
  { id: 'ma4', client: "Liam O'Brien", role: 'Administrator', employer: 'BrightCare Ltd', match: 79, status: 'reviewing' },
];

export const CLIENT_PROGRESS_KPIS = [
  { label: 'Overall progress', value: '72%', trend: '+5%' },
  { label: 'Next meeting', value: 'Tomorrow', trend: '10:30' },
  { label: 'Applications', value: '9', trend: '+1' },
  { label: 'Milestones done', value: '6/9', trend: '+1' },
];

export const CLIENT_PROGRESS_ROWS = [
  { id: 'pg1', milestone: 'Enrolment complete', date: '2025-01-15', status: 'done' },
  { id: 'pg2', milestone: 'Initial assessment', date: '2025-01-22', status: 'done' },
  { id: 'pg3', milestone: 'CV completed', date: '2025-02-10', status: 'done' },
  { id: 'pg4', milestone: 'First interview prep', date: '2025-03-04', status: 'done' },
  { id: 'pg5', milestone: 'First interview attended', date: '2025-03-18', status: 'done' },
  { id: 'pg6', milestone: 'Second interview attended', date: '2025-04-02', status: 'done' },
  { id: 'pg7', milestone: 'Job offer received', date: '2025-04-30', status: 'pending' },
  { id: 'pg8', milestone: 'Offer accepted', date: '2025-05-07', status: 'pending' },
  { id: 'pg9', milestone: 'In-work support', date: '2025-05-21', status: 'pending' },
];

export const DEMO_APPLICATIONS = [
  { id: 'ap1', role: 'Barista', employer: 'Northwind Retail', applied: '2025-03-20', status: 'interview' },
  { id: 'ap2', role: 'Customer Service', employer: 'BrightCare Ltd', applied: '2025-03-24', status: 'submitted' },
  { id: 'ap3', role: 'Retail Assistant', employer: 'Northwind Retail', applied: '2025-03-29', status: 'submitted' },
  { id: 'ap4', role: 'Receptionist', employer: 'BrightCare Ltd', applied: '2025-04-01', status: 'offer' },
];

export const DEMO_WELLBEING_TEAM = [
  { id: 'wb1', name: 'Priya Anand', email: 'priya.anand@horizon.org', role: 'wellbeing_lead', specialism: 'Clinical supervision', caseload: 0, status: 'active', lastActive: 'Today', type: 'wellbeing' },
  { id: 'wb2', name: 'Callum Reid', email: 'callum.reid@horizon.org', role: 'wellbeing_officer', specialism: 'Anxiety & stress', caseload: 14, status: 'active', lastActive: 'Today', type: 'wellbeing' },
  { id: 'wb3', name: 'Naomi Adeyemi', email: 'naomi.adeyemi@horizon.org', role: 'wellbeing_officer', specialism: 'Trauma-informed practice', caseload: 11, status: 'active', lastActive: 'Yesterday', type: 'wellbeing' },
  { id: 'wb4', name: 'Diego Marín', email: 'diego.marin@horizon.org', role: 'wellbeing_officer', specialism: 'Addiction support', caseload: 9, status: 'active', lastActive: 'Today', type: 'wellbeing' },
];

export const DEMO_WELLBEING_CASES = [
  { id: 'wc1', clientId: 'c1', client: 'Emma Watson', officer: 'Callum Reid', category: 'Anxiety', priority: 'medium', opened: '2025-03-12', lastReview: '2025-04-04', status: 'open', summary: 'Reported workplace anxiety following return to work.' },
  { id: 'wc2', clientId: 'c2', client: 'James Chen', officer: 'Naomi Adeyemi', category: 'Bereavement', priority: 'high', opened: '2025-02-28', lastReview: '2025-04-06', status: 'open', summary: 'Recent bereavement affecting attendance and motivation.' },
  { id: 'wc3', clientId: 'c3', client: 'Priya Patel', officer: 'Callum Reid', category: 'Stress', priority: 'low', opened: '2025-03-20', lastReview: '2025-04-01', status: 'monitoring', summary: 'Managing workload stress; weekly check-ins in place.' },
  { id: 'wc4', clientId: 'c4', client: "Liam O'Brien", officer: 'Diego Marín', category: 'Substance use', priority: 'urgent', opened: '2025-04-02', lastReview: '2025-04-07', status: 'open', summary: 'Disclosed substance use; referred to specialist service.' },
  { id: 'wc5', clientId: 'c5', client: 'Sofia Rossi', officer: 'Naomi Adeyemi', category: 'Confidence', priority: 'low', opened: '2025-03-30', lastReview: '2025-04-05', status: 'closed', summary: 'Confidence-building completed; closed with client agreement.' },
];

export const DEMO_CHECKINS = [
  { id: 'ci1', client: 'Emma Watson', officer: 'Callum Reid', date: '2025-04-04', mode: 'in-person', mood: 3, summary: 'Feeling more settled; sleep still disrupted.', followUp: '2025-04-11', status: 'done' },
  { id: 'ci2', client: 'James Chen', officer: 'Naomi Adeyemi', date: '2025-04-06', mode: 'phone', mood: 2, summary: 'Difficult week; grief affecting daily routine.', followUp: '2025-04-10', status: 'done' },
  { id: 'ci3', client: 'Priya Patel', officer: 'Callum Reid', date: '2025-04-08', mode: 'video', mood: 4, summary: 'Positive week; using breathing techniques.', followUp: '2025-04-15', status: 'scheduled' },
  { id: 'ci4', client: "Liam O'Brien", officer: 'Diego Marín', date: '2025-04-07', mode: 'in-person', mood: 2, summary: 'Crisis support; safety plan reviewed.', followUp: '2025-04-09', status: 'done' },
  { id: 'ci5', client: 'Sofia Rossi', officer: 'Naomi Adeyemi', date: '2025-04-05', mode: 'video', mood: 5, summary: 'Strong progress; closure discussed.', followUp: '', status: 'done' },
];

export const DEMO_REFERRALS = [
  { id: 'wr1', client: "Liam O'Brien", service: 'Horizon Wellbeing – Specialist Substance Service', referredBy: 'Diego Marín', referredOn: '2025-04-03', urgency: 'urgent', status: 'accepted', notes: 'Accepted; first appointment booked.' },
  { id: 'wr2', client: 'James Chen', service: 'Cruse Bereavement Support', referredBy: 'Naomi Adeyemi', referredOn: '2025-03-28', urgency: 'high', status: 'in-progress', notes: 'Waiting list; first call in 2 weeks.' },
  { id: 'wr3', client: 'Emma Watson', service: 'IAPT – Talking Therapies', referredBy: 'Callum Reid', referredOn: '2025-03-15', urgency: 'medium', status: 'accepted', notes: 'Attending weekly CBT sessions.' },
  { id: 'wr4', client: 'Priya Patel', service: 'Local Mind – Peer Support', referredBy: 'Callum Reid', referredOn: '2025-03-25', urgency: 'low', status: 'completed', notes: 'Attended 6 sessions; closed successfully.' },
];

export const DEMO_WELLBEING_RESOURCES = [
  { id: 'res1', title: 'Managing Anxiety: A 4-Week Guide', type: 'PDF', audience: 'client', updated: '2025-03-20', author: 'Priya Anand' },
  { id: 'res2', title: 'Sleep Hygiene for Shift Workers', type: 'Article', audience: 'client', updated: '2025-03-10', author: 'Callum Reid' },
  { id: 'res3', title: 'Trauma-Informed Practice – Staff Handbook', type: 'PDF', audience: 'staff', updated: '2025-02-15', author: 'Priya Anand' },
  { id: 'res4', title: 'Grounding Techniques (audio)', type: 'Audio', audience: 'client', updated: '2025-03-05', author: 'Naomi Adeyemi' },
  { id: 'res5', title: 'Supporting Colleagues in Distress', type: 'Video', audience: 'staff', updated: '2025-01-30', author: 'Diego Marín' },
];

export const WELLBEING_REPORT_KPIS = [
  { label: 'Open cases', value: '48', trend: '+3' },
  { label: 'Check-ins (week)', value: '132', trend: '+12' },
  { label: 'Referral rate', value: '34%', trend: '+2%' },
  { label: 'Avg. wait time', value: '3.2d', trend: '-0.4d' },
];

export const WELLBEING_REPORT_ROWS = [
  { id: 'wbr1', team: 'Wellbeing – North', cases: 18, checkins: 52, referrals: 7, avgWait: '2.8d' },
  { id: 'wbr2', team: 'Wellbeing – Central', cases: 17, checkins: 48, referrals: 6, avgWait: '3.4d' },
  { id: 'wbr3', team: 'Wellbeing – South', cases: 13, checkins: 32, referrals: 4, avgWait: '3.9d' },
];

export const DEMO_SITES = [
  { id: 's-london', name: 'Horizon London', region: 'London & South', address: '1 Sunrise Way, London', staff: 18, clients: 62, opened: '2022-06-01', status: 'active' },
  { id: 's-croydon', name: 'Horizon Croydon', region: 'London & South', address: '12 Meadow Rd, Croydon', staff: 12, clients: 41, opened: '2023-02-15', status: 'active' },
  { id: 's-reading', name: 'Horizon Reading', region: 'London & South', address: '5 Riverside Pl, Reading', staff: 10, clients: 34, opened: '2023-09-01', status: 'active' },
  { id: 's-manchester', name: 'Horizon Manchester', region: 'North', address: '9 Northern Qtr, Manchester', staff: 16, clients: 55, opened: '2022-10-10', status: 'active' },
  { id: 's-leeds', name: 'Horizon Leeds', region: 'North', address: '3 Bridge St, Leeds', staff: 11, clients: 38, opened: '2023-04-20', status: 'active' },
  { id: 's-birmingham', name: 'Horizon Birmingham', region: 'Midlands', address: '22 Victoria Sq, Birmingham', staff: 14, clients: 48, opened: '2023-01-05', status: 'active' },
];

export const DEMO_REGIONS = [
  { id: 'r-london', region: 'London & South', manager: 'Rachel Osei', offices: 3, staff: 40, clients: 137, placements: 41, budget: '£1.8m', variance: '-1.4%' },
  { id: 'r-north', region: 'North', manager: 'Ben Okonkwo', offices: 2, staff: 27, clients: 93, placements: 27, budget: '£1.2m', variance: '+0.6%' },
  { id: 'r-mid', region: 'Midlands', manager: 'Amelia Hart', offices: 1, staff: 14, clients: 48, placements: 12, budget: '£0.7m', variance: '-2.1%' },
];

export const DEMO_TEAMS = [
  { id: 't-north-advisers', name: 'North Advisers', site: 'Horizon London', manager: 'Rachel Osei', members: 5, caseload: 84, placements: 9, sla: '97%' },
  { id: 't-south-advisers', name: 'South Advisers', site: 'Horizon Croydon', manager: 'Tom Fletcher', members: 4, caseload: 63, placements: 6, sla: '94%' },
  { id: 't-man-advisers', name: 'Manchester Advisers', site: 'Horizon Manchester', manager: 'Aisha Rahman', members: 6, caseload: 98, placements: 11, sla: '96%' },
];

export const TEAM_MANAGER_KPIS = [
  { label: 'Team caseload', value: '84', trend: '+4' },
  { label: 'Meetings (week)', value: '38', trend: '+3' },
  { label: 'Placements (mo.)', value: '9', trend: '+2' },
  { label: 'SLA compliance', value: '97%', trend: '+1%' },
];

export const TEAM_MANAGER_ROWS = [
  { id: 'tm-a1', adviser: 'Rachel Osei', clients: 34, meetings: 12, placements: 4, sla: '98%' },
  { id: 'tm-a2', adviser: 'Tom Fletcher', clients: 41, meetings: 15, placements: 6, sla: '96%' },
  { id: 'tm-a3', adviser: 'Aisha Rahman', clients: 29, meetings: 10, placements: 3, sla: '95%' },
  { id: 'tm-a4', adviser: 'Daniel Wright', clients: 38, meetings: 14, placements: 4, sla: '97%' },
];

export const OFFICE_MANAGER_KPIS = [
  { label: 'Office staff', value: '18', trend: 'Stable' },
  { label: 'Clients on site', value: '62', trend: '+5' },
  { label: 'Room utilisation', value: '78%', trend: '+4%' },
  { label: 'Open incidents', value: '2', trend: '-1' },
];

export const OFFICE_MANAGER_ROWS = [
  { id: 'om-d1', resource: 'Interview Room 1', utilisation: '82%', bookings: 34, status: 'in-use' },
  { id: 'om-d2', resource: 'Interview Room 2', utilisation: '75%', bookings: 29, status: 'available' },
  { id: 'om-d3', resource: 'Training Room A', utilisation: '91%', bookings: 42, status: 'in-use' },
  { id: 'om-d4', resource: 'Training Room B', utilisation: '62%', bookings: 21, status: 'available' },
  { id: 'om-d5', resource: 'Quiet Room', utilisation: '44%', bookings: 12, status: 'available' },
];

export const OPERATIONS_MANAGER_KPIS = [
  { label: 'Active offices', value: '6', trend: 'Stable' },
  { label: 'Total clients', value: '612', trend: '+24' },
  { label: 'Avg. throughput', value: '42/wk', trend: '+6' },
  { label: 'Process exceptions', value: '7', trend: '-3' },
];

export const OPERATIONS_MANAGER_ROWS = [
  { id: 'op1', office: 'Horizon London', clients: 62, throughput: 48, exceptions: 1, status: 'healthy' },
  { id: 'op2', office: 'Horizon Croydon', clients: 41, throughput: 34, exceptions: 2, status: 'healthy' },
  { id: 'op3', office: 'Horizon Reading', clients: 34, throughput: 27, exceptions: 0, status: 'healthy' },
  { id: 'op4', office: 'Horizon Manchester', clients: 55, throughput: 44, exceptions: 1, status: 'healthy' },
  { id: 'op5', office: 'Horizon Leeds', clients: 38, throughput: 31, exceptions: 2, status: 'attention' },
  { id: 'op6', office: 'Horizon Birmingham', clients: 48, throughput: 39, exceptions: 1, status: 'healthy' },
];

export const REGIONAL_MANAGER_KPIS = [
  { label: 'Offices', value: '4', trend: 'Stable' },
  { label: 'Regional clients', value: '248', trend: '+11' },
  { label: 'Placements (YTD)', value: '68', trend: '+12' },
  { label: 'Budget variance', value: '-2.1%', trend: 'On track' },
];

export const REGIONAL_MANAGER_ROWS = [
  { id: 'rg1', region: 'London & South', offices: 3, clients: 137, placements: 41, budget: '£1.8m', variance: '-1.4%' },
  { id: 'rg2', region: 'North', offices: 2, clients: 93, placements: 27, budget: '£1.2m', variance: '+0.6%' },
  { id: 'rg3', region: 'Midlands', offices: 1, clients: 48, placements: 12, budget: '£0.7m', variance: '-2.1%' },
];

export const DEMO_COACHING_LOG = [
  { id: 'cl1', adviser: 'Rachel Osei', date: '2025-04-03', type: '1-to-1', topic: 'Caseload triage', outcome: 'Agreed new prioritisation' },
  { id: 'cl2', adviser: 'Tom Fletcher', date: '2025-04-04', type: 'Shadowing', topic: 'Interview coaching', outcome: 'Observed session, positive feedback' },
  { id: 'cl3', adviser: 'Aisha Rahman', date: '2025-04-05', type: 'Group', topic: 'Vulnerable client handling', outcome: 'Attended workshop' },
  { id: 'cl4', adviser: 'Daniel Wright', date: '2025-04-08', type: '1-to-1', topic: 'Performance review', outcome: 'On track for target' },
];

export const DEMO_ROTA = [
  { id: 'rt1', day: 'Monday', adviser: 'Rachel Osei', hours: '09:00–17:00', room: 'Front desk' },
  { id: 'rt2', day: 'Monday', adviser: 'Tom Fletcher', hours: '10:00–18:00', room: 'Interview 1' },
  { id: 'rt3', day: 'Tuesday', adviser: 'Aisha Rahman', hours: '09:00–17:00', room: 'Front desk' },
  { id: 'rt4', day: 'Tuesday', adviser: 'Daniel Wright', hours: '11:00–19:00', room: 'Training A' },
  { id: 'rt5', day: 'Wednesday', adviser: 'Rachel Osei', hours: '09:00–17:00', room: 'Front desk' },
];

export const DEMO_MEETINGS = [
  { id: 1, title: 'Team standup', date: '2025-04-07', time: '09:30' },
  { id: 2, title: 'Client review – M. Chen', date: '2025-04-07', time: '11:00' },
  { id: 3, title: 'Interview – J. Patel', date: '2025-04-08', time: '14:00' },
  { id: 4, title: 'Training: CV writing', date: '2025-04-09', time: '10:00' },
  { id: 5, title: 'Recruitment sync', date: '2025-04-10', time: '15:30' },
  { id: 6, title: 'Client assessment', date: '2025-04-11', time: '13:00' },
  { id: 7, title: 'Employer call', date: '2025-04-14', time: '11:30' },
];

export const INITIAL_KANBAN_COLUMNS = [
  { id: 'applied', title: 'Applied', cards: [
    { id: 'c1', name: 'Emma Watson', role: 'Barista' },
    { id: 'c2', name: 'James Chen', role: 'Warehouse' },
    { id: 'c3', name: 'Priya Patel', role: 'Retail' },
  ]},
  { id: 'resume', title: 'Resume sent', cards: [
    { id: 'c4', name: "Liam O'Brien", role: 'Admin' },
    { id: 'c5', name: 'Sofia Rossi', role: 'Customer Service' },
  ]},
  { id: 'interview', title: 'Interview', cards: [
    { id: 'c6', name: 'Ahmed Hassan', role: 'IT Support' },
    { id: 'c7', name: 'Julia Novak', role: 'Receptionist' },
  ]},
  { id: 'offer', title: 'Job offer', cards: [
    { id: 'c8', name: 'Mark Johnson', role: 'Chef' },
    { id: 'c9', name: 'Zoe Clark', role: 'Sales' },
  ]},
];

export const DEMO_TODAY = new Date(2025, 3, 7);