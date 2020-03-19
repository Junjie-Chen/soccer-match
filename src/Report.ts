import { Winner } from './analyzer/Winner';
import { Html } from './logger/Html';

export class Report {
  static createReport(team: string, file: string): Report {
    return new Report(new Winner(team), new Html(file));
  }
}
