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
};

export const selectionSort = (array: number[]): number[] => {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const cache = arr[i];
      arr[i] = min;
      arr[minIndex] = cache;
    }
  }
  return arr;
};

export const mergeSort = (array: number[]): number[] => {
  const mergeSort = (array: number[]): any => {
    const arr = [...array];
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = arr;
    const right = arr.splice(mid);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left: number[], right: number[]): (number | undefined)[] => {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) arr.push(left.shift());
      else arr.push(right.shift());
    }
    return [...arr, ...left, ...right];
  };
  return mergeSort(array);
};

export const quickSort = (array: number[]) => {
  const swap = (
    array: number[],
    leftIndex: number,
    rightIndex: number
  ): void => {
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  };

  const partition = (array: number[], left: number, right: number): number => {
    var pivot = array[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  };

  const quickSort = (
    array: number[],
    left: number,
    right: number
  ): number[] => {
    var index;
    if (array.length > 1) {
      index = partition(array, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(array, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(array, index, right);
      }
    }
    return array;
  };
  return quickSort(array, 0, array.length - 1);
};

export const heapSort = (array: number[]): number[] => {
  const arr = [...array];
  function heapSort(array: number[]) {
    let size = array.length;

    // build heapSort (rearrange array)
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) heapify(array, size, i);

    // one by one extract an element from heapSort
    for (let i = size - 1; i >= 0; i--) {
      // move current root to end
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;

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

      // recursively heapify the affected sub-tree
      heapify(array, size, max);
    }
  }
  heapSort(arr);
  return arr;
};
