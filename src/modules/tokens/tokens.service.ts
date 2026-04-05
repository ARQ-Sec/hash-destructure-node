export type TokensRecord = { id: string; owner: string; state: string };
export function loadTokensRecords(): TokensRecord[] { return [{ id: 'tokens-seed', owner: 'tokens-owner', state: 'ACTIVE' }]; }
