import { Animation } from "../Helpers/Interfaces";

export const getBubbleSortAnimations = (array: number[]): Animation[] => {
  const arr = [...array];
  const animations = [];
  let changeMade = true;
  while (changeMade) {
    changeMade = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const bar1 = arr[i];
      const bar2 = arr[i + 1];
      let barsSwitched = false;
      if (bar1 > bar2) {
        barsSwitched = true;
        arr[i] = bar2;
        arr[i + 1] = bar1;
        changeMade = true;
      }
      const animation: Animation = {
        endValues: [arr[i], arr[i + 1]],
        positions: [i, i + 1],
        colors: barsSwitched ? ['red', 'red'] : ['yellow', 'yellow']
      };
      animations.push(animation);
    }
  }
  return animations;
};
