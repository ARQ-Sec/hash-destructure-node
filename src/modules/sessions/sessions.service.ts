export type SessionsRecord = { id: string; owner: string; state: string };
export function loadSessionsRecords(): SessionsRecord[] { return [{ id: 'sessions-seed', owner: 'sessions-owner', state: 'ACTIVE' }]; }
