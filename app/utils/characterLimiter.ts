export function limitCharacters(input: string, limit: number): string {
  return (`${input.slice(0, limit)}...`);
}