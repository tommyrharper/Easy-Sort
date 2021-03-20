import { Animation } from "../Helpers/Interfaces";

export const getRadixSortAnimations = (array: number[]): Animation[] => {
  const arr = [...array];
  const animations: Animation[] = [];
  const getNum = (num: number, index: number): number | string => {
    const strNum = String(num);
    let end = strNum.length - 1;
    const foundNum = strNum[end - index];

    if (foundNum === undefined) return 0;
    else return foundNum;
  };

  const largestNum = (arr: number[]): number => {
    let largest = "0";

    arr.forEach((num: number) => {
      const strNum = String(num);

      if (strNum.length > largest.length) largest = strNum;
    });

    return largest.length;
  };

  const getArrayPosition = (buckets: any, num: number) => {
    let count = 0;
    for (let i = 0; i < num + 1; i++) {
      count += buckets[i].length;
    }
    count--;
    return count;
  }

  const generateRadixSortAnimations = (arr: number[]) => {
    let maxLength = largestNum(arr);

    for (let i = 0; i < maxLength; i++) {
      let buckets: any = Array.from({ length: 10 }, () => []);

      for (let j = 0; j < arr.length; j++) {
        let num = getNum(arr[j], i);

        if (num !== undefined) {
          buckets[num].push(arr[j]);

          let intNum;
          if (typeof num === 'string') intNum = parseInt(num);
          else intNum = num;

          const pos = getArrayPosition(buckets, intNum);

          animations.push({
            positions: [pos, pos],
            endValues: [arr[j], arr[j]],
            colors: ['blue', 'blue']
          })
        }
      }
      arr = buckets.flat();
      for (let i = 0; i < arr.length; i ++) {
        animations.push({
          positions: [i, i],
          endValues: [arr[i], arr[i]],
          colors: ['red', 'red']
        })
      }
    }
    return arr;
  };
  generateRadixSortAnimations(arr);

  return animations;
};
