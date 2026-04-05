export type InvitesRecord = { id: string; owner: string; state: string };
export function loadInvitesRecords(): InvitesRecord[] { return [{ id: 'invites-seed', owner: 'invites-owner', state: 'ACTIVE' }]; }
