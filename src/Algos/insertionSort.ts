interface Animation {
  endValues: number[];
  positions: number[];
}

export const getInsertionSortAnimations = (array: number[]): Animation[] => {
  const animations = [];
  const arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    if (arr[j - 1] <= arr[j]) {
      const animation: Animation = {
        positions: [i - 1, i],
        endValues: [arr[i - 1], arr[i]]
      }
      animations.push(animation);
    }
    while (j > 0 && arr[j - 1] > arr[j]) {
      const cache = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = cache;
      const animation: Animation = {
        positions: [j - 1, j],
        endValues: [arr[j - 1], arr[j]]
      }
      animations.push(animation);
      j--;
    }
  }
  return animations;
};

export const insertionSort = (
  array: number[],
  delay: number,
  calcHeight: (h: number) => number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  handleChange: any,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  teal: string,
) => {
  const animations = getInsertionSortAnimations(array);
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