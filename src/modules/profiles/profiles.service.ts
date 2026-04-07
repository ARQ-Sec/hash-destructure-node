export type ProfilesRecord = { id: string; owner: string; state: string };
export function loadProfilesRecords(): ProfilesRecord[] { return [{ id: 'profiles-seed', owner: 'profiles-owner', state: 'ACTIVE' }]; }
