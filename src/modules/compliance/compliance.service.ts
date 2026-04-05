export type ComplianceRecord = { id: string; owner: string; state: string };
export function loadComplianceRecords(): ComplianceRecord[] { return [{ id: 'compliance-seed', owner: 'compliance-owner', state: 'ACTIVE' }]; }
