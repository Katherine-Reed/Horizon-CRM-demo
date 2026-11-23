import { ROLES } from '../lib/roles.js';
import { matchPath } from './Router.jsx';

export const ROUTES = [
  { 
    id: 'dashboard', 
    path: '/', 
    label: 'Dashboard', 
    icon: 'fa-gauge-high', 
    roles: Object.values(ROLES), 
    page: 'DashboardPage',
    // Add this override:
    pageOverrides: { [ROLES.EMPLOYMENT_ADVISER]: 'AdviserDashboardPage' } 
  },

  // Admin
  { id: 'users', path: '/users', label: 'Users', icon: 'fa-users', roles: [ROLES.ADMINISTRATOR], page: 'UsersPage' },
  { id: 'reports', path: '/reports', label: 'Reports', icon: 'fa-chart-pie', roles: [ROLES.ADMINISTRATOR, ROLES.MANAGER, ROLES.TEAM_MANAGER, ROLES.OFFICE_MANAGER, ROLES.OPERATIONS_MANAGER, ROLES.REGIONAL_MANAGER], page: 'ManagerReportsPage', pageOverrides: { [ROLES.ADMINISTRATOR]: 'ReportsPage' } },
  { id: 'settings', path: '/settings', label: 'Settings', icon: 'fa-gear', roles: [ROLES.ADMINISTRATOR], page: 'SettingsPage' },

  // Manager
  { id: 'advisers', path: '/advisers', label: 'Advisers', icon: 'fa-user-tie', roles: [ROLES.MANAGER, ROLES.TEAM_MANAGER, ROLES.OFFICE_MANAGER, ROLES.OPERATIONS_MANAGER, ROLES.REGIONAL_MANAGER], page: 'AdvisersPage', labelOverrides: { [ROLES.TEAM_MANAGER]: 'My Team' } },
  { id: 'trainers', path: '/trainers', label: 'Trainers', icon: 'fa-chalkboard-user', roles: [ROLES.MANAGER, ROLES.TEAM_MANAGER, ROLES.OPERATIONS_MANAGER], page: 'TrainersPage' },
  { id: 'performance', path: '/performance', label: 'Performance', icon: 'fa-chart-simple', roles: [ROLES.MANAGER, ROLES.TEAM_MANAGER, ROLES.OFFICE_MANAGER, ROLES.OPERATIONS_MANAGER, ROLES.REGIONAL_MANAGER], page: 'PerformancePage' },
  { id: 'team-coaching', path: '/team/coaching', label: 'Coaching', icon: 'fa-comments', roles: [ROLES.TEAM_MANAGER], page: 'TeamCoachingPage' },
  { id: 'office', path: '/office', label: 'My Office', icon: 'fa-building', roles: [ROLES.OFFICE_MANAGER], page: 'OfficesPage' },
  { id: 'office-rota', path: '/office/rota', label: 'Rota', icon: 'fa-calendar-days', roles: [ROLES.OFFICE_MANAGER], page: 'SiteRotaPage' },
  { id: 'operations', path: '/operations', label: 'Operations', icon: 'fa-diagram-project', roles: [ROLES.OPERATIONS_MANAGER], page: 'OperationsPage' },
  { id: 'regional', path: '/regional', label: 'My Region', icon: 'fa-map-location-dot', roles: [ROLES.REGIONAL_MANAGER], page: 'RegionalPage' },

  // Clients
  { id: 'clients', path: '/clients', label: 'Clients', icon: 'fa-user-tie', roles: [ROLES.ADMINISTRATOR, ROLES.MANAGER, ROLES.TEAM_MANAGER, ROLES.OFFICE_MANAGER, ROLES.OPERATIONS_MANAGER, ROLES.REGIONAL_MANAGER, ROLES.EMPLOYMENT_ADVISER], page: 'ClientsPage', labelOverrides: { [ROLES.EMPLOYMENT_ADVISER]: 'My Clients' } },

  // Recruitment
  { id: 'recruitment', path: '/recruitment', label: 'Recruitment', icon: 'fa-briefcase', roles: [ROLES.ADMINISTRATOR, ROLES.MANAGER], page: 'RecruitmentPage' },
  { id: 'pipeline', path: '/pipeline', label: 'Pipeline', icon: 'fa-columns', roles: [ROLES.RECRUITMENT], page: 'PipelinePage' },
  { id: 'candidates', path: '/candidates', label: 'Candidates', icon: 'fa-user-check', roles: [ROLES.RECRUITMENT], page: 'CandidatesPage' },
  { id: 'offers', path: '/offers', label: 'Job Offers', icon: 'fa-file-signature', roles: [ROLES.RECRUITMENT], page: 'OffersPage' },
  { id: 'employers', path: '/employers', label: 'Employers', icon: 'fa-building', roles: [ROLES.RECRUITMENT], page: 'EmployersPage' },

  // Training
  { id: 'training', path: '/training', label: 'Training', icon: 'fa-chalkboard-user', roles: [ROLES.ADMINISTRATOR, ROLES.EMPLOYMENT_ADVISER, ROLES.CLIENT], page: 'TrainingPage' },
  { id: 'sessions', path: '/sessions', label: 'Sessions', icon: 'fa-chalkboard', roles: [ROLES.TRAINER], page: 'SessionsPage' },
  { id: 'materials', path: '/materials', label: 'Materials', icon: 'fa-folder-open', roles: [ROLES.TRAINER], page: 'MaterialsPage' },
  { id: 'attendance', path: '/attendance', label: 'Attendance', icon: 'fa-clipboard-user', roles: [ROLES.TRAINER], page: 'AttendancePage' },
  { id: 'assessments', path: '/assessments', label: 'Assessments', icon: 'fa-file-pen', roles: [ROLES.TRAINER], page: 'AssessmentsPage' },

  // Adviser
  { id: 'meetings', path: '/meetings', label: 'Meetings', icon: 'fa-calendar-check', roles: [ROLES.EMPLOYMENT_ADVISER, ROLES.CLIENT], page: 'MeetingsPage' },
  { id: 'matching', path: '/matching', label: 'Job Matching', icon: 'fa-handshake', roles: [ROLES.EMPLOYMENT_ADVISER], page: 'MatchingPage' },
  { 
    id: 'adviser-dashboard', 
    path: '/adviser/dashboard', 
    label: 'My Dashboard', 
    icon: 'fa-chart-pie', 
    roles: [ROLES.EMPLOYMENT_ADVISER], 
    page: 'AdviserDashboardPage' 
  },

  // Client
  { id: 'progress', path: '/progress', label: 'My Progress', icon: 'fa-chart-line', roles: [ROLES.CLIENT], page: 'ProgressPage' },
  { id: 'apps', path: '/apps', label: 'Job Applications', icon: 'fa-paper-plane', roles: [ROLES.CLIENT], page: 'ApplicationsPage' },

  // Wellbeing
  { id: 'wellbeing-dashboard', path: '/wellbeing', label: 'Wellbeing', icon: 'fa-heart-pulse', roles: [ROLES.WELLBEING_LEAD, ROLES.WELLBEING_OFFICER], page: 'WellbeingDashboardPage' },
  { id: 'wellbeing-cases', path: '/wellbeing/cases', label: 'Cases', icon: 'fa-folder-open', roles: [ROLES.WELLBEING_LEAD, ROLES.WELLBEING_OFFICER], page: 'WellbeingCasesPage', labelOverrides: { [ROLES.WELLBEING_OFFICER]: 'My Cases' } },
  { id: 'wellbeing-checkins', path: '/wellbeing/checkins', label: 'Check-ins', icon: 'fa-clipboard-check', roles: [ROLES.WELLBEING_LEAD, ROLES.WELLBEING_OFFICER], page: 'WellbeingCheckInsPage' },
  { id: 'wellbeing-referrals', path: '/wellbeing/referrals', label: 'Referrals', icon: 'fa-share-nodes', roles: [ROLES.WELLBEING_LEAD, ROLES.WELLBEING_OFFICER], page: 'WellbeingReferralsPage' },
  { id: 'wellbeing-officers', path: '/wellbeing/officers', label: 'Officers', icon: 'fa-user-nurse', roles: [ROLES.WELLBEING_LEAD], page: 'WellbeingOfficersPage' },
  { id: 'wellbeing-resources', path: '/wellbeing/resources', label: 'Resources', icon: 'fa-book-medical', roles: [ROLES.WELLBEING_LEAD, ROLES.WELLBEING_OFFICER], page: 'WellbeingResourcesPage' },
  { id: 'wellbeing-reports', path: '/wellbeing/reports', label: 'Reports', icon: 'fa-chart-pie', roles: [ROLES.WELLBEING_LEAD], page: 'WellbeingReportsPage' },
];

export const DETAIL_ROUTES = [
  { id: 'client-detail', path: '/clients/:id', roles: [ROLES.ADMINISTRATOR, ROLES.MANAGER, ROLES.TEAM_MANAGER, ROLES.OFFICE_MANAGER, ROLES.OPERATIONS_MANAGER, ROLES.REGIONAL_MANAGER, ROLES.EMPLOYMENT_ADVISER], page: 'ClientDetailPage' },
  { id: 'candidate-detail', path: '/candidates/:id', roles: [ROLES.RECRUITMENT, ROLES.MANAGER, ROLES.ADMINISTRATOR], page: 'CandidateDetailPage' },
  { id: 'employer-detail', path: '/employers/:id', roles: [ROLES.RECRUITMENT, ROLES.ADMINISTRATOR], page: 'EmployerDetailPage' },
  { id: 'session-detail', path: '/sessions/:id', roles: [ROLES.TRAINER, ROLES.ADMINISTRATOR], page: 'SessionDetailPage' },
  { id: 'wb-case-detail', path: '/wellbeing/cases/:id', roles: [ROLES.WELLBEING_LEAD, ROLES.WELLBEING_OFFICER], page: 'WellbeingCaseDetailPage' },
  { id: 'wb-checkin-detail', path: '/wellbeing/checkins/:id', roles: [ROLES.WELLBEING_LEAD, ROLES.WELLBEING_OFFICER], page: 'WellbeingCheckInDetailPage' },
];

export function routesForRole(role) {
  return ROUTES
    .filter((r) => r.roles.includes(role))
    .map((r) => ({ ...r, label: r.labelOverrides?.[role] ?? r.label }));
}

export function findRouteByPath(path) {
  const clean = path.replace(/\/+$/, '') || '/';

  for (const route of DETAIL_ROUTES) {
    const match = matchPath(route.path, clean);
    if (match) return { ...route, params: match.params };
  }

  const exact = ROUTES.find((r) => r.path === clean);
  return exact ? { ...exact, params: {} } : { ...ROUTES[0], params: {} };
}