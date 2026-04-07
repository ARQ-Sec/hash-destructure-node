import { loadProfilesRecords } from '../src/modules/profiles/profiles.service';
test('loads profiles records', () => { expect(loadProfilesRecords().length).toBeGreaterThan(0); });
