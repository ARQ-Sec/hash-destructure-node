import * as crypto from 'crypto';
const { createHash: createLegacyHash } = crypto;
function legacyFactory() { return { build: () => createLegacyHash('md5') }; }
export function digest(value: string): string { return legacyFactory().build().update(value).digest('hex'); }
