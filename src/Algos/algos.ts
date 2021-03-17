import { getBubbleSortAnimations } from "./bubbleSort";
import { getInsertionSortAnimations } from "./insertionSort";

interface AnimationFuncs {
  'Bubble Sort': any;
  'Insertion Sort': any;
}

const animationFuncs: AnimationFuncs = {
  'Bubble Sort': getBubbleSortAnimations,
  'Insertion Sort': getInsertionSortAnimations
}

export const executeAnimation = (
  array: number[],
  delay: number,
  calcHeight: (h: number) => number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  handleChange: any,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  teal: string,
  algorithm: string,
) => {
  const animations = (animationFuncs as any)[algorithm](array);
  const arrayBars = document.getElementsByClassName(
    "bar"
  ) as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < animations.length; i++) {
    const { endValues, positions } = animations[i];
    const pos1 = positions[0];
    const pos2 = positions[1];
    const height1 = `${calcHeight(endValues[0])}px`;
    const height2 = `${calcHeight(endValues[1])}px`;
    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        if (j !== pos1 && j !== pos2) {
          arrayBars[j].style.backgroundColor = teal;
        }
      }
      arrayBars[pos1].style.backgroundColor = "red";
      arrayBars[pos2].style.backgroundColor = "red";
      setTimeout(() => {
        arrayBars[pos1].style.height = height1;
        arrayBars[pos2].style.height = height2;
        arrayBars[pos1].innerHTML = `${endValues[0]}`;
        arrayBars[pos2].innerHTML = `${endValues[1]}`;
      }, Math.floor(delay / 3));
      if (i === animations.length - 1) {
        // clear all bars
        setTimeout(() => {
          for (let j = 0; j < arrayBars.length; j++) {
            arrayBars[j].style.backgroundColor = teal;
          }
          setArray(array.sort((a, b) => a - b));
          handleChange(e, false);
        }, delay);
      }
    }, i * delay);
  }
};