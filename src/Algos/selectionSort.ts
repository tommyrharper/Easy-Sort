import { Animation } from "../Helpers/Interfaces";

export const getSelectionSortAnimations = (array: number[]): Animation[] => {
  const arr = [...array];
  const animations = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    const animation: Animation = {
      positions: [i, i + 1],
      endValues: [arr[i], arr[i + 1]],
      colors: ['red', 'red']
    };
    animations.push(animation);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
      const animation: Animation = {
        positions: [i, j, minIndex],
        endValues: [arr[i], arr[j], arr[minIndex]],
      colors: ['red', 'yellow', 'red']
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
