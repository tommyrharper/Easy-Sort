import { Animation } from "../Helpers/Interfaces";

export interface ArrObj {
  arr: number[];
  index: number[];
  animations: Animation[];
}

export const format = (array: number[]): ArrObj => {
  return {
    arr: [...array],
    index: [0, array.length - 1],
    animations: [],
  };
};

export const generateMergeSortAnimations = (arrayObj: ArrObj): ArrObj => {
  const { arr, index } = arrayObj;
  if (arr.length < 2) return arrayObj;

  const mid = Math.floor(arr.length / 2);

  const left = {
    arr: arr,
    // index: [index[0], mid - 1],
    index: [index[0], index[0] + mid - 1],
    animations: [],
  };
  const right = {
    arr: arr.splice(mid),
    // index: [mid, index[1]],
    index: [index[0] + mid, index[1]],
    animations: [],
  };
  return merge(
    generateMergeSortAnimations(left),
    generateMergeSortAnimations(right)
  );
};

const merge = (leftObj: ArrObj, rightObj: ArrObj): ArrObj => {
  let arr: number[] = [];
  const animations = [];
  const { arr: left, index: leftIndexes, animations: leftAnimations } = leftObj;
  const {
    arr: right,
    index: rightIndexes,
    animations: rightAnimations,
  } = rightObj;

  const leftMostIndex = Math.min(
    leftIndexes[0],
    leftIndexes[1],
    rightIndexes[0],
    rightIndexes[1]
  );
  const rightMostIndex = Math.max(
    leftIndexes[0],
    leftIndexes[1],
    rightIndexes[0],
    rightIndexes[1]
  );

  let leftIndex = 0;
  let rightIndex = 0;
  while (left.length && right.length) {
    let leftNum = left[0];
    let rightNum = right[0];
    if (leftNum <= rightNum) {
      const leftNumber = left.shift();
      if (typeof leftNumber === "number") arr.push(leftNumber);
      const pos = leftIndexes[0] + leftIndex + rightIndex;
      animations.push({
        positions: [pos, rightIndexes[0] + rightIndex],
        endValues: [leftNum, rightNum],
      });
      leftIndex++;
    } else {
      const rightNumber = right.shift();
      if (typeof rightNumber === "number") arr.push(rightNumber);
      const pos = leftIndexes[0] + leftIndex + rightIndex;
      animations.push({
        positions: [pos, rightIndexes[0] + rightIndex],
        endValues: [rightNum, rightNum],
      });
      rightIndex++;
    }
  }
  for (let i = 0; i < left.length; i++) {
    const pos = leftIndexes[0] + arr.length + i;
    animations.push({
      positions: [pos, pos],
      endValues: [left[i], left[i]],
    });
  }
  for (let i = 0; i < right.length; i++) {
    const pos = leftIndexes[0] + arr.length + i;
    animations.push({
      positions: [pos, pos],
      endValues: [right[i], right[i]],
    });
  }

  return {
    arr: [...arr, ...left, ...right],
    index: [leftMostIndex, rightMostIndex],
    animations: [...leftAnimations, ...rightAnimations, ...animations],
  };
};

export const getMergeSortAnimations = (array: number[]): Animation[] => {
  return generateMergeSortAnimations(format(array)).animations;
};

export const getMergeSortData = (array: number[]): number[] => {
  return generateMergeSortAnimations(format(array)).arr;
};
