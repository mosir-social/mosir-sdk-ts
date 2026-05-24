import fs from 'node:fs';
import path from 'node:path';

fixSdk();
fixGraphql();

function fixSdk() {
  const filePath = path.resolve(process.cwd(), 'src/generated/sdk.ts');
  const source = fs.readFileSync(filePath, 'utf8');
  const fixed = source.replaceAll('./graphql.', 'Operations.');

  if (fixed !== source) {
    fs.writeFileSync(filePath, fixed, 'utf8');
  }
}

function fixGraphql() {
  const filePath = path.resolve(process.cwd(), 'src/generated/graphql.ts');
  const source = fs.readFileSync(filePath, 'utf8');
  const marker = 'export type PageInfoFieldsFragment =';
  const firstStart = source.indexOf('export type AttachmentType =');
  const markerIndex = source.indexOf(marker);

  if (firstStart === -1 || markerIndex === -1) {
    return;
  }

  const secondStart = source.indexOf('export type AttachmentType =', firstStart + 1);
  if (secondStart === -1 || secondStart > markerIndex) {
    return;
  }

  const fixed = `${source.slice(0, secondStart)}${source.slice(markerIndex)}`;

  if (fixed !== source) {
    fs.writeFileSync(filePath, fixed, 'utf8');
  }
}
