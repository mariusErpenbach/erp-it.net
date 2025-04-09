import fs from 'fs';

const path = 'page.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Ersetzt doppelte Anführungszeichen nur innerhalb von JSX-Text (nicht in Props oder Code!)
content = content.replace(/>([^<]*?)"([^<]*?)"</g, (match, before, after) => {
  return `>${before}&quot;${after}<`;
});

fs.writeFileSync(path, content, 'utf-8');

console.log('Fertig ersetzt!');
