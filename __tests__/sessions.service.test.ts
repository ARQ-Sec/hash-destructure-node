import { loadSessionsRecords } from '../src/modules/sessions/sessions.service';
test('loads sessions records', () => { expect(loadSessionsRecords().length).toBeGreaterThan(0); });
