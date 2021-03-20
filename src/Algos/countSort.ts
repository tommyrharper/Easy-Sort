import { Animation } from "../Helpers/Interfaces";

export const getCountSortAnimations = (array: number[]): Animation[] => {
  const arr = [...array];
  const animations: Animation[] = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const count: any = {};
  // First populate the count object
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  /* Now, count is indexed by numbers, with values corresponding to occurrences, eg:
   * {
   *   3: 1,
   *   4: 0,
   *   5: 2,
   *   6: 1,
   *   7: 0,
   *   8: 0,
   *   9: 1
   * }
   */

  // Then, iterate over count's properties from min to max:
  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
      animations.push({
        positions: [sortedArr.length - 1, sortedArr.length - 1],
        endValues: [i, i],
        colors: ['red', 'red']
      })
    }
  }

  return animations;
};
