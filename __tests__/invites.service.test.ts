import { loadInvitesRecords } from '../src/modules/invites/invites.service';
test('loads invites records', () => { expect(loadInvitesRecords().length).toBeGreaterThan(0); });
