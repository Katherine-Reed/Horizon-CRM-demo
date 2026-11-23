export const ROLES = {
  ADMINISTRATOR: 'administrator',
  MANAGER: 'manager',
  TEAM_MANAGER: 'team_manager',
  OFFICE_MANAGER: 'office_manager',
  OPERATIONS_MANAGER: 'operations_manager',
  REGIONAL_MANAGER: 'regional_manager',
  EMPLOYMENT_ADVISER: 'employment_adviser',
  RECRUITMENT: 'recruitment',
  TRAINER: 'trainer',
  CLIENT: 'client',
  WELLBEING_LEAD: 'wellbeing_lead',
  WELLBEING_OFFICER: 'wellbeing_officer',
};

export const MANAGER_ROLES = [
  ROLES.MANAGER, ROLES.TEAM_MANAGER, ROLES.OFFICE_MANAGER,
  ROLES.OPERATIONS_MANAGER, ROLES.REGIONAL_MANAGER,
];

export const ROLE_LABELS = {
  [ROLES.ADMINISTRATOR]: 'Administrator',
  [ROLES.MANAGER]: 'Manager',
  [ROLES.TEAM_MANAGER]: 'Team Manager',
  [ROLES.OFFICE_MANAGER]: 'Office Manager',
  [ROLES.OPERATIONS_MANAGER]: 'Operations Manager',
  [ROLES.REGIONAL_MANAGER]: 'Regional Manager',
  [ROLES.EMPLOYMENT_ADVISER]: 'Employment Adviser',
  [ROLES.RECRUITMENT]: 'Recruitment',
  [ROLES.TRAINER]: 'Trainer',
  [ROLES.CLIENT]: 'Client',
  [ROLES.WELLBEING_LEAD]: 'Wellbeing Lead',
  [ROLES.WELLBEING_OFFICER]: 'Wellbeing Officer',
};

export const KPIS_BY_ROLE = {
  [ROLES.ADMINISTRATOR]: [
    { label: 'Total users', value: '84', trend: '+5' },
    { label: 'Active programs', value: '12', trend: 'Stable' },
    { label: 'Monthly revenue', value: '£48k', trend: '+11%' },
    { label: 'System health', value: '98%', trend: 'Stable' },
  ],
  [ROLES.MANAGER]: [
    { label: 'Team advisers', value: '8', trend: 'Stable' },
    { label: 'Satisfaction', value: '94%', trend: '+2%' },
    { label: 'Placements', value: '32', trend: '+7' },
    { label: 'Open cases', value: '67', trend: '-4' },
  ],
  [ROLES.TEAM_MANAGER]: [
    { label: 'Team caseload', value: '84', trend: '+4' },
    { label: 'Meetings (week)', value: '38', trend: '+3' },
    { label: 'Placements (mo.)', value: '9', trend: '+2' },
    { label: 'SLA compliance', value: '97%', trend: '+1%' },
  ],
  [ROLES.OFFICE_MANAGER]: [
    { label: 'Office staff', value: '18', trend: 'Stable' },
    { label: 'Clients on site', value: '62', trend: '+5' },
    { label: 'Room utilisation', value: '78%', trend: '+4%' },
    { label: 'Open incidents', value: '2', trend: '-1' },
  ],
  [ROLES.OPERATIONS_MANAGER]: [
    { label: 'Active offices', value: '6', trend: 'Stable' },
    { label: 'Total clients', value: '612', trend: '+24' },
    { label: 'Avg. throughput', value: '42/wk', trend: '+6' },
    { label: 'Process exceptions', value: '7', trend: '-3' },
  ],
  [ROLES.REGIONAL_MANAGER]: [
    { label: 'Offices', value: '4', trend: 'Stable' },
    { label: 'Regional clients', value: '248', trend: '+11' },
    { label: 'Placements (YTD)', value: '68', trend: '+12' },
    { label: 'Budget variance', value: '-2.1%', trend: 'On track' },
  ],
  [ROLES.EMPLOYMENT_ADVISER]: [
    { label: 'My clients', value: '34', trend: '+2' },
    { label: 'Meetings today', value: '5', trend: '2 left' },
    { label: 'Job matches', value: '18', trend: '+3' },
  ],
  [ROLES.RECRUITMENT]: [
    { label: 'Open positions', value: '18', trend: '+3' },
    { label: 'Applications', value: '143', trend: '+22' },
    { label: 'Interviews', value: '27', trend: '+4' },
    { label: 'Offers', value: '9', trend: '+2' },
  ],
  [ROLES.TRAINER]: [
    { label: 'Sessions', value: '6', trend: 'This week' },
    { label: 'Learners', value: '52', trend: '+8' },
    { label: 'Completion', value: '88%', trend: '+3%' },
  ],
  [ROLES.CLIENT]: [
    { label: 'My progress', value: '72%', trend: '+5%' },
    { label: 'Next meeting', value: 'Tomorrow', trend: '10:30' },
    { label: 'Applications', value: '9', trend: '+1' },
  ],
  [ROLES.WELLBEING_LEAD]: [
    { label: 'Open cases', value: '48', trend: '+3' },
    { label: 'Check-ins (week)', value: '132', trend: '+12' },
    { label: 'Avg. wait time', value: '3.2d', trend: '-0.4d' },
    { label: 'Referrals out', value: '17', trend: '+2' },
  ],
  [ROLES.WELLBEING_OFFICER]: [
    { label: 'My cases', value: '14', trend: '+1' },
    { label: 'Check-ins today', value: '6', trend: '2 left' },
    { label: 'Urgent flags', value: '2', trend: 'Needs review' },
  ],
};

export const KANBAN_ROLES = [ROLES.ADMINISTRATOR, ROLES.MANAGER, ROLES.RECRUITMENT];