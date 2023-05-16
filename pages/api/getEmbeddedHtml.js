import fs from 'fs';
import path from 'path';

export default function handlerIndex(req, res) {
  const htmlFilePath = path.join(process.cwd(), 'public', 'index.html');
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
  res.setHeader('Content-Type', 'text/html');
  res.send(htmlContent);
}

