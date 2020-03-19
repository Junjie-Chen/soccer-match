import fs from 'fs';
import { Logger } from '../Report';

export class Html implements Logger {
  constructor(public file: string) {}

  log(analysis: string): void {
    const html = `
      <div>
        <h1>Winning Games</h1>
        <div>${analysis}</div>
      </div>
    `;

    fs.writeFileSync(this.file, html);
  }
}
