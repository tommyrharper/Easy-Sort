export const bubbleSort = (array: number[]): number[] => {
  const arr = [...array];
  let changeMade = true;
  while (changeMade) {
    changeMade = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const bar1 = arr[i];
      const bar2 = arr[i + 1];
      if (bar1 > bar2) {
        arr[i] = bar2;
        arr[i + 1] = bar1;
        changeMade = true;
      }
    }
  }
  return arr;
};
