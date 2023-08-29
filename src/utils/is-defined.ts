export const isDefined = <T extends unknown>(value: T) => {
  return value ?? undefined
};
