import { loadEventsRecords } from '../src/modules/events/events.service';
test('loads events records', () => { expect(loadEventsRecords().length).toBeGreaterThan(0); });
