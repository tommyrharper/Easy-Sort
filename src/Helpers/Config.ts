export const DEFAULT_ARR_LENGTH = 10;
export const DEFAULT_DELAY = 50;

export const MAX_DELAY = 2048;
export const MIN_SPEED = 1;
export const MIN_DELAY = 1;

export const MAX_ARRLENGTH = 50;
export const MIN_ARRLENGTH = 5;

export const BASE = 1.8;
export const logb = (n: number) => Math.log(n) / Math.log(BASE);
export const MAX_SPEED = logb(MAX_DELAY);
