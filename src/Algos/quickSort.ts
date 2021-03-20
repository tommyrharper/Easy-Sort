import { Animation } from "../Helpers/Interfaces";

export const getQuickSortAnimations = (array: number[]): Animation[] => {
  array = [...array];
  const animations: Animation[] = [];
  const swap = (
    array: number[],
    leftIndex: number,
    rightIndex: number,
    pivot: number
  ): void => {
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    addAnimation(array, leftIndex, rightIndex, pivot, ["red", "red", "blue"]);
  };

  const addAnimation = (
    array: number[],
    left: number,
    right: number,
    pivot: number,
    colors: string[]
  ): void => {
    if (array[pivot]) {
      animations.push({
        positions: [left, right, pivot],
        endValues: [array[left], array[right], array[pivot]],
        colors: [colors[0], colors[1], colors[2]],
      });
    } else {
      animations.push({
        positions: [left, right],
        endValues: [array[left], array[right]],
        colors: [colors[0], colors[1]],
      });
    }
  };

  const partition = (array: number[], left: number, right: number): number => {
    var pivot = array[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      // addAnimation(array, i, j, pivot, ["yellow", "yellow", "blue"]);
      while (array[i] < pivot) {
        addAnimation(array, i, j, pivot, ["yellow", "yellow", "blue"]);
        i++;
      }
      while (array[j] > pivot) {
        addAnimation(array, i, j, pivot, ["yellow", "yellow", "blue"]);
        j--;
      }
      if (i <= j) {
        swap(array, i, j, pivot); //swapping two elements
        i++;
        j--;
      }
    }
    return i;
  };
  const generateQuickSortAnimations = (
    array: number[],
    left: number,
    right: number
  ): number[] => {
    var index;
    if (array.length > 1) {
      index = partition(array, left, right); //index returned from partition
      // animations.push({
      //   positions: [index, index],
      //   endValues: [array[index], array[index]]
      // })
      if (left < index - 1) {
        //more elements on the left side of the pivot
        generateQuickSortAnimations(array, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        generateQuickSortAnimations(array, index, right);
      }
    }
    return array;
  };
  generateQuickSortAnimations(array, 0, array.length - 1);
  return animations;
};
