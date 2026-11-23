import { useAuth } from './hooks/useAuth.js';
import { useTheme } from './hooks/useTheme.js';
import { useRouter } from './router/Router.jsx';
import { routesForRole, findRouteByPath } from './router/routes.js';
import LoginView from './components/auth/LoginView.jsx';
import AppShell from './components/layout/AppShell.jsx';
import Sidebar from './components/layout/Sidebar.jsx';

import DashboardPage from './components/pages/DashboardPage.jsx';
import UsersPage from './components/pages/UsersPage.jsx';
import ReportsPage from './components/pages/ReportsPage.jsx';
import SettingsPage from './components/pages/SettingsPage.jsx';
import AdviserDashboardPage from './components/pages/AdviserDashboardPage.jsx';
import TrainersPage from './components/pages/TrainersPage.jsx';
import PerformancePage from './components/pages/PerformancePage.jsx';
import TeamCoachingPage from './components/pages/TeamCoachingPage.jsx';
import OfficesPage from './components/pages/OfficesPage.jsx';
import SiteRotaPage from './components/pages/SiteRotaPage.jsx';
import OperationsPage from './components/pages/OperationsPage.jsx';
import RegionalPage from './components/pages/RegionalPage.jsx';
import ManagerReportsPage from './components/pages/ManagerReportsPage.jsx';
import ClientsPage from './components/pages/ClientsPage.jsx';
import ClientDetailPage from './components/pages/ClientDetailPage.jsx';
import RecruitmentPage from './components/pages/RecruitmentPage.jsx';
import PipelinePage from './components/pages/PipelinePage.jsx';
import CandidatesPage from './components/pages/CandidatesPage.jsx';
import CandidateDetailPage from './components/pages/CandidateDetailPage.jsx';
import OffersPage from './components/pages/OffersPage.jsx';
import EmployersPage from './components/pages/EmployersPage.jsx';
import EmployerDetailPage from './components/pages/EmployerDetailPage.jsx';
import TrainingPage from './components/pages/TrainingPage.jsx';
import SessionsPage from './components/pages/SessionsPage.jsx';
import SessionDetailPage from './components/pages/SessionDetailPage.jsx';
import MaterialsPage from './components/pages/MaterialsPage.jsx';
import AttendancePage from './components/pages/AttendancePage.jsx';
import AssessmentsPage from './components/pages/AssessmentsPage.jsx';
import MeetingsPage from './components/pages/MeetingsPage.jsx';
import MatchingPage from './components/pages/MatchingPage.jsx';
import ProgressPage from './components/pages/ProgressPage.jsx';
import ApplicationsPage from './components/pages/ApplicationsPage.jsx';
import WellbeingDashboardPage from './components/pages/WellbeingDashboardPage.jsx';
import WellbeingCasesPage from './components/pages/WellbeingCasesPage.jsx';
import WellbeingCaseDetailPage from './components/pages/WellbeingCaseDetailPage.jsx';
import WellbeingCheckInsPage from './components/pages/WellbeingCheckInsPage.jsx';
import WellbeingCheckInDetailPage from './components/pages/WellbeingCheckInDetailPage.jsx';
import WellbeingReferralsPage from './components/pages/WellbeingReferralsPage.jsx';
import WellbeingOfficersPage from './components/pages/WellbeingOfficersPage.jsx';
import WellbeingResourcesPage from './components/pages/WellbeingResourcesPage.jsx';
import WellbeingReportsPage from './components/pages/WellbeingReportsPage.jsx';

const PAGES = {
  DashboardPage, UsersPage, ReportsPage, SettingsPage,
  AdviserDashboardPage, TrainersPage, PerformancePage, TeamCoachingPage,
  OfficesPage, SiteRotaPage, OperationsPage, RegionalPage, ManagerReportsPage,
  ClientsPage, ClientDetailPage,
  RecruitmentPage, PipelinePage, CandidatesPage, CandidateDetailPage,
  OffersPage, EmployersPage, EmployerDetailPage,
  TrainingPage, SessionsPage, SessionDetailPage,
  MaterialsPage, AttendancePage, AssessmentsPage,
  MeetingsPage, MatchingPage, ProgressPage, ApplicationsPage,
  WellbeingDashboardPage, WellbeingCasesPage, WellbeingCaseDetailPage,
  WellbeingCheckInsPage, WellbeingCheckInDetailPage, WellbeingReferralsPage,
  WellbeingOfficersPage, WellbeingResourcesPage, WellbeingReportsPage,
};

export default function App() {
  const { session, login, logout } = useAuth();
  const { theme, toggle: toggleTheme } = useTheme();
  const { path } = useRouter();

  if (!session) {
    return <LoginView onLogin={login} theme={theme} onToggleTheme={toggleTheme} />;
  }

  const role = session.role;
  const menuItems = routesForRole(role);
  const route = findRouteByPath(path);
  const allowed = route.roles.includes(role);
  const activeRoute = allowed ? route : menuItems[0];
  const pageKey = activeRoute.pageOverrides?.[role] ?? activeRoute.page;
  const Page = PAGES[pageKey] ?? DashboardPage;

  const pageProps = activeRoute.params?.id
    ? { id: activeRoute.params.id, role }
    : { role };

  return (
    <AppShell
      email={session.email}
      role={role}
      onLogout={logout}
      theme={theme}
      onToggleTheme={toggleTheme}
    >
      <Sidebar items={menuItems} activePath={activeRoute.path} />
      <main className="dashboard">
        <Page {...pageProps} />
      </main>
    </AppShell>
  );
}