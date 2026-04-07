export type EventsRecord = { id: string; owner: string; state: string };
export function loadEventsRecords(): EventsRecord[] { return [{ id: 'events-seed', owner: 'events-owner', state: 'ACTIVE' }]; }
