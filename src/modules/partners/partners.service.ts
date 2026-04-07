export type PartnersRecord = { id: string; owner: string; state: string };
export function loadPartnersRecords(): PartnersRecord[] { return [{ id: 'partners-seed', owner: 'partners-owner', state: 'ACTIVE' }]; }
