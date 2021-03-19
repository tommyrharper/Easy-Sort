import { Animation } from "../Helpers/Interfaces";

export interface ArrObj {
  arr: number[];
  index: number[];
  animations: Animation[]
}

export const format = (array: number[]): ArrObj => {
  return {
    arr: [...array],
    index: [0, array.length - 1],
    animations: []
  };
};

export const generateMergeSortAnimations = (arrayObj: ArrObj): ArrObj => {
  if (arrayObj.arr.length < 2) return arrayObj;
  const { arr } = arrayObj;
  const mid = Math.floor(arr.length / 2);
  const left = {
    arr: arr,
    index: [arrayObj.index[0], mid - 1],
    animations: [],
  };
  const right = {
    arr: arr.splice(mid),
    index: [mid, arrayObj.index[1]],
    animations: [],
  };

  return merge(generateMergeSortAnimations(left), generateMergeSortAnimations(right));
};

export const merge = (left: ArrObj, right: ArrObj): ArrObj => {
  let arr = [];
  const animations = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.arr.length && rightIndex < right.arr.length) {
    let leftVal;
    let rightVal;
    if (left.arr[leftIndex] < right.arr[rightIndex]) {
      leftVal = left.arr[leftIndex];
      rightVal = right.arr[rightIndex];
      arr.push(left.arr[leftIndex]);
      leftIndex++;
    } else {
      leftVal = right.arr[rightIndex];
      rightVal = left.arr[leftIndex];
      arr.push(right.arr[rightIndex]);
      rightIndex++;
    }
    animations.push({
      positions: [left.index[0] + leftIndex, right.index[0] + rightIndex],
      endValues: [leftVal, rightVal],
    });
  }
  for (let i = leftIndex; i < left.arr.length; i++) {
    arr.push(left.arr[leftIndex]);
  }
  for (let i = rightIndex; i < right.arr.length; i++) {
    arr.push(right.arr[rightIndex]);
  }
  const mergeResult = {
    arr: arr,
    index: [left.index[0], right.index[1]],
    animations: [...left.animations, ...right.animations, ...animations]
  };
  return mergeResult;
};

export const getMergeSortAnimations = (array: number[]): Animation[] => {
  return generateMergeSortAnimations(format(array)).animations;
}

export const getMergeSortData = (array: number[]) => {
  return generateMergeSortAnimations(format(array));
}
