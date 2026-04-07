import { loadTokensRecords } from '../src/modules/tokens/tokens.service';
test('loads tokens records', () => { expect(loadTokensRecords().length).toBeGreaterThan(0); });
