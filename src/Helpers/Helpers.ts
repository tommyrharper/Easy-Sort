import {
  MAX_SPEED,
  BASE,
  logb,
} from "./Config";

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

export const calcDelay = (s: number) => BASE ** (MAX_SPEED - s);
export const calcSpeed = (d: number) => MAX_SPEED - logb(d);

export const getBarChartStyling = (arrLength: number) => {
  const barChartWidth = 0.6 * window.innerWidth;
  const barChartHeight = 0.8 * window.innerHeight;
  console.log(`barChartWidth`, barChartWidth)
  const margin = 180 / ((arrLength - 1) * 2);
  const width = barChartWidth / arrLength;
  let fontSize = 20;
  let fontWeight = "bold";
  if (width < 26) {
    fontSize = width - 5;
    fontWeight = "normal";
    if (fontSize < 1) fontSize = 0;
  }
  const HEIGHT_MULTI = barChartHeight / arrLength;
  const calcHeight = (h: number) => h * HEIGHT_MULTI;

  return {
    margin: margin,
    width: width,
    fontSize: fontSize,
    fontWeight: fontWeight,
    calcHeight: calcHeight,
  };
};
