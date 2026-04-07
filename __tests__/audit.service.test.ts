import { loadAuditRecords } from '../src/modules/audit/audit.service';
test('loads audit records', () => { expect(loadAuditRecords().length).toBeGreaterThan(0); });
