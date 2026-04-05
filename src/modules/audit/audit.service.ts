export type AuditRecord = { id: string; owner: string; state: string };
export function loadAuditRecords(): AuditRecord[] { return [{ id: 'audit-seed', owner: 'audit-owner', state: 'ACTIVE' }]; }
