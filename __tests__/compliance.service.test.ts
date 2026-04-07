import { loadComplianceRecords } from '../src/modules/compliance/compliance.service';
test('loads compliance records', () => { expect(loadComplianceRecords().length).toBeGreaterThan(0); });
