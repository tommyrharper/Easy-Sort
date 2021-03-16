export const generateArray = (length: number): number[] => {
  if (length <= 1) return [1];
  let arr = [];
  let sorted = true;
  while (sorted) {
    arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * length) + 1);
    }
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) sorted = false;
    }
  }
  return arr;
};

export const sleep = (milliseconds: number): void => {
  var currentTime = new Date().getTime();

  while (currentTime + milliseconds >= new Date().getTime()) {}
};

const MAX_DELAY = 500;
const MIN_DELAY = 1;
const EFFECTIVE_MAX_DELAY = MAX_DELAY + MIN_DELAY;
const SPEED_FACTOR = Math.ceil((MAX_DELAY - MIN_DELAY) / 100);

export const calcSpeed = (delay: number): number =>
  Math.floor((EFFECTIVE_MAX_DELAY - delay) / SPEED_FACTOR);

export const calcDelay = (speed: number): number =>
  EFFECTIVE_MAX_DELAY - SPEED_FACTOR * speed;
