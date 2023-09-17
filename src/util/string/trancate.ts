export function truncateString(text: string, length: number = 25): string {
  if (text.length <= length) {
      return text;
  }
  return text.slice(0, length) + '....';
}