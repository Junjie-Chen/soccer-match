import { Logger } from '../Report';

export class Console implements Logger {
  log(analysis: string): void {
    console.log(analysis);
  }
}
