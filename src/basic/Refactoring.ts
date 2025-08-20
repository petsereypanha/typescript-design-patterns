function find<T>(array: T[], predicate: (item: T) => boolean) {
  for (const item of array) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}
export function findUserByName(users: { name: string }[], name: string) {
  return find(users, user => user.name === name);
}