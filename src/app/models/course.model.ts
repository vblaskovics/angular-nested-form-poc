export interface Course {
  courseName: string;
  gsheetId: string;
  days: Array<{
    include: boolean;
    hours: number;
  }>
}
