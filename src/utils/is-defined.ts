export const isDefined = <T extends unknown>(value: T) => {
  return typeof value !== 'undefined';
};
