import { loadPartnersRecords } from '../src/modules/partners/partners.service';
test('loads partners records', () => { expect(loadPartnersRecords().length).toBeGreaterThan(0); });
