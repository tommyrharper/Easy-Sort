import { MAX_DELAY, MIN_DELAY } from "./Config";

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

export const calcSpeed = (delay: number): number => MAX_DELAY - delay;

export const calcDelay = (speed: number): number => {
  let delay = MAX_DELAY - speed;
  if (delay <= MIN_DELAY) return MIN_DELAY;
  return delay;
};

export const getBarChartStyling = (arrLength: number) => {
  const margin = 180 / ((arrLength - 1) * 2);
  const width = 500 / arrLength;
  let fontSize = 20;
  let fontWeight = "bold";
  if (width < 26) {
    fontSize = width - 5;
    fontWeight = "normal";
    if (fontSize < 1) fontSize = 0;
  }
  const HEIGHT_MULTI = 500 / arrLength;
  const calcHeight = (h: number) => h * HEIGHT_MULTI;

  return {
    margin: margin,
    width: width,
    fontSize: fontSize,
    fontWeight: fontWeight,
    calcHeight: calcHeight,
  };
};
