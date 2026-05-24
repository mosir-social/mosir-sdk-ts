import fs from 'node:fs';
import path from 'node:path';

const filePath = path.resolve(process.cwd(), 'src/generated/sdk.ts');
const source = fs.readFileSync(filePath, 'utf8');
const fixed = source.replaceAll('./graphql.', 'Operations.');

if (fixed !== source) {
  fs.writeFileSync(filePath, fixed, 'utf8');
}
