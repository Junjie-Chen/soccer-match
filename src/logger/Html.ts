import fs from 'fs';

export class Html {
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
