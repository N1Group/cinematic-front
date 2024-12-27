export const isNotEmptyArray = <T>(arr?: T[]): arr is T[] => !!arr && arr.length > 0;
