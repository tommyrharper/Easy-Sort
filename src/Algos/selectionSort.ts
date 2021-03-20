import { Animation } from "../Helpers/Interfaces";

export const getSelectionSortAnimations = (array: number[]): Animation[] => {
  const arr = [...array];
  const animations = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
      const animation: Animation = {
        positions: [i, j, minIndex],
        endValues: [arr[i], arr[j], arr[minIndex]],
      colors: ['red', 'yellow', i === minIndex ? 'red' : 'blue']
      };
      animations.push(animation);
    }
    if (minIndex !== i) {
      const cache = arr[i];
      arr[i] = min;
      arr[minIndex] = cache;
      const animation: Animation = {
        positions: [i, minIndex],
        endValues: [arr[i], arr[minIndex]],
        colors: ['red', 'red', 'red']
      };
      animations.push(animation);
    }
  }
  return animations;
};
