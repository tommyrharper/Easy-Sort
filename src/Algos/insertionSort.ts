import { Animation } from "../Helpers/Interfaces";

export const getInsertionSortAnimations = (array: number[]): Animation[] => {
  const animations = [];
  const arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    if (arr[j - 1] <= arr[j]) {
      const animation: Animation = {
        positions: [i - 1, i],
        endValues: [arr[i - 1], arr[i]],
        colors: ['yellow', 'yellow']
      };
      animations.push(animation);
    }
    while (j > 0 && arr[j - 1] > arr[j]) {
      const cache = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = cache;
      const animation: Animation = {
        positions: [j - 1, j],
        endValues: [arr[j - 1], arr[j]],
        colors: ['red', 'red']
      };
      animations.push(animation);
      j--;
    }
  }
  return animations;
};
