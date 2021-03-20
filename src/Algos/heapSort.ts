import { Animation } from "../Helpers/Interfaces";

export const getHeapSortAnimations = (array: number[]): Animation[] => {
  const arr = [...array];
  const animations: Animation[] = [];
  function generateHeapSortAnimations(array: number[]) {
    let size = array.length;

    // build heapSort (rearrange array)
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) heapify(array, size, i);

    // one by one extract an element from heapSort
    for (let i = size - 1; i >= 0; i--) {
      // move current root to end
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;

      animations.push({
        positions: [0, i],
        endValues: [array[0], array[i]],
        colors: ['red', 'red']
      })

      // call max heapify on the reduced heapSort
      heapify(array, i, 0);
    }
  }

  // to heapify a subtree rooted with node i which is an index in array[]
  function heapify(array: number[], size: number, i: number) {
    let max = i; // initialize max as root
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // if left child is larger than root
    if (left < size && array[left] > array[max]) max = left;

    // if right child is larger than max
    if (right < size && array[right] > array[max]) max = right;

    // if max is not root
    if (max != i) {
      // swap
      let temp = array[i];
      array[i] = array[max];
      array[max] = temp;

      animations.push({
        positions: [i, max],
        endValues: [array[i], array[max]],
        colors: ['blue', 'blue']
      })

      // recursively heapify the affected sub-tree
      heapify(array, size, max);
    }
  }
  generateHeapSortAnimations(arr);
  return animations;
};