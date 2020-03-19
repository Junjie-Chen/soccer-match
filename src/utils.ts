export const parseDate = (date: string): Date => {
  const parsedDate = date
    .split('/')
    .map((value: string): number => {
      return parseInt(value);
    });

  return new Date(parsedDate[2], parsedDate[1] - 1, parsedDate[0]);
};
