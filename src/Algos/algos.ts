import { getCountSortAnimations } from './countSort';
import { getRadixSortAnimations } from './radixSort';
import { getBubbleSortAnimations } from "./bubbleSort";
import { getInsertionSortAnimations } from "./insertionSort";
import { getSelectionSortAnimations } from "./selectionSort";
import { getMergeSortAnimations } from "./mergeSort";
import { getQuickSortAnimations } from "./quickSort";
import { getHeapSortAnimations } from "./heapSort";
import { Animation } from "../Helpers/Interfaces";
interface AnimationFuncs {
  "Bubble Sort": (array: number[]) => Animation[];
  "Insertion Sort": (array: number[]) => Animation[];
  "Selection Sort": (array: number[]) => Animation[];
  "Merge Sort": (array: number[]) => Animation[];
  "Quick Sort": (array: number[]) => Animation[];
  "Heap Sort": (array: number[]) => Animation[];
  "Radix Sort": (array: number[]) => Animation[];
  "Count Sort": (array: number[]) => Animation[];
}

export const animationFuncs: AnimationFuncs = {
  "Bubble Sort": getBubbleSortAnimations,
  "Insertion Sort": getInsertionSortAnimations,
  "Selection Sort": getSelectionSortAnimations,
  "Merge Sort": getMergeSortAnimations,
  "Quick Sort": getQuickSortAnimations,
  "Heap Sort": getHeapSortAnimations,
  "Radix Sort": getRadixSortAnimations,
  "Count Sort": getCountSortAnimations,
};

export const executeAnimation = (
  array: number[],
  delay: number,
  calcHeight: (h: number) => number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  handleChange: (e: any, opt?: any) => void,
  teal: string,
  algorithm: string,
  setTimeouts: React.Dispatch<React.SetStateAction<NodeJS.Timeout[]>>
): NodeJS.Timeout[] => {
  const timeouts = [];
  const animations = (animationFuncs as any)[algorithm](array);
  const arrayBars = document.getElementsByClassName(
    "bar"
  ) as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < animations.length; i++) {
    const { endValues, positions, colors } = animations[i];
    const pos1 = positions[0];
    const pos2 = positions[1];
    const pos3 = positions[2];
    const color1 = colors[0];
    const color2 = colors[1];
    const color3 = colors[2];
    const height1 = `${calcHeight(endValues[0])}px`;
    const height2 = `${calcHeight(endValues[1])}px`;
    timeouts.push(setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        if (j !== pos1 && j !== pos2) {
          arrayBars[j].style.backgroundColor = teal;
        }
      }
      arrayBars[pos1].style.backgroundColor = color1;
      arrayBars[pos2].style.backgroundColor = color2;
      if (pos3) arrayBars[pos3].style.backgroundColor = color3;
      timeouts.push(setTimeout(() => {
        arrayBars[pos1].style.height = height1;
        arrayBars[pos2].style.height = height2;
        arrayBars[pos1].innerHTML = `${endValues[0]}`;
        arrayBars[pos2].innerHTML = `${endValues[1]}`;
      }, Math.floor(delay / 3)));
      if (i === animations.length - 1) {
        // clear all bars
        timeouts.push(setTimeout(() => {
          for (let j = 0; j < arrayBars.length; j++) {
            arrayBars[j].style.backgroundColor = teal;
          }
          setArray(array.sort((a, b) => a - b));
          setTimeouts([]);
          handleChange(
            {
              isSorting: false,
              isSorted: true,
            },
            "passObject"
          );
        }, delay));
      }
    }, i * delay));
  }
  return timeouts;
};
