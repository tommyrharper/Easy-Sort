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

export const insertionSort = (array: number[]): number[] => {
  if (array.length <= 1) return [1];
  const arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      const cache = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = cache;
      j--;
    }
  }
  return arr;
}

// let insertionSort = (array) => {
//   const arr = [...array];
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j - 1] > arr[j]) {
//       const cache = arr[j];
//       arr[j] = arr[j - 1];
//       arr[j - 1] = cache;
//       j--;
//     }
//   }
//   return arr;
// }

// export const getInsertionSortAnimations = (array: number[]) => {
//   // if (array.length <= 1) return [1];
//   // const animations = [];
//   const arr = [...array];
//   // for (let i = 1; i < arr.length; i++) {
//   //   let j = i;
//   //   animations.push({

//   //   })
//   //   while (j > 0 && arr[j - 1] > arr[j]) {
//   //     const cache = arr[j];
//   //     arr[j] = arr[j - 1];
//   //     arr[j - 1] = cache;
//   //     j--;
//   //   }
//   // }
//   return arr;
// }

// export const insertionSort = () => 4;
