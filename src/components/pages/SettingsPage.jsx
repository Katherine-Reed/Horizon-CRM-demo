import { useState } from 'react';
import PageHeader from '../common/PageHeader.jsx';
import Card from '../common/Card.jsx';
import Tabs from '../common/Tabs.jsx';
import Button from '../common/Button.jsx';
import './SettingsPage.css';

const TABS = [
  { id: 'general', label: 'General' },
  { id: 'roles', label: 'Roles & Permissions' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'integrations', label: 'Integrations' },
];

export default function SettingsPage() {
  const [active, setActive] = useState('general');

  return (
    <>
      <PageHeader
        title="Settings"
        description="Configure Horizon for your organisation."
        actions={<Button variant="primary" icon="fa-floppy-disk">Save changes</Button>}
      />
      <Card title="Configuration" icon="fa-gear" labelledBy="settings-heading">
        <Tabs tabs={TABS} activeId={active} onChange={setActive} />
        <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
          {active === 'general' && (
            <div className="settings__group">
              <label className="settings__field">
                <span className="settings__label">Organisation name</span>
                <input className="settings__input" type="text" defaultValue="Horizon Restart" />
              </label>
              <label className="settings__field">
                <span className="settings__label">Support email</span>
                <input className="settings__input" type="email" defaultValue="support@horizon.org" />
              </label>
              <label className="settings__field">
                <span className="settings__label">Time zone</span>
                <select className="settings__input" defaultValue="Europe/London">
                  <option>Europe/London</option>
                  <option>Europe/Dublin</option>
                  <option>Europe/Paris</option>
                </select>
              </label>
            </div>
          )}
          {active === 'roles' && <p className="settings__placeholder">Role and permission management UI goes here.</p>}
          {active === 'notifications' && <p className="settings__placeholder">Email and in-app notification preferences go here.</p>}
          {active === 'integrations' && <p className="settings__placeholder">Supabase, email provider, and calendar integrations go here.</p>}
        </div>
      </Card>
    </>
  );
}