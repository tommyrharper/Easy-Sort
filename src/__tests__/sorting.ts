import { animationFuncs } from './../Algos/algos';
import { generateArray } from "./../Helpers/Helpers";
import {
  mergeSort,
  bubbleSort,
  insertionSort,
  selectionSort,
} from "../Algos/pureAlgos";
import { getMergeSortData } from "./../Algos/mergeSort";

describe("Test sorting algorithms", () => {
  let array: number[];
  let javaScriptSort: number[];
  beforeEach(() => {
    array = generateArray(50);
    javaScriptSort = [...array].sort((a, b) => a - b);
  });

  it("Pure Merge Sort Sorts an Array", () => {
    let sortedArray = mergeSort(array);
    expect(sortedArray).toEqual(javaScriptSort);
  });

  it("Pure Bubble Sorts an Array", () => {
    let sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual(javaScriptSort);
  });

  it("Pure Insertion Sort Sorts an Array", () => {
    let sortedArray = insertionSort(array);
    expect(sortedArray).toEqual(javaScriptSort);
  });

  it("Pure Selection Sort Sorts an Array", () => {
    let sortedArray = insertionSort(array);
    expect(sortedArray).toEqual(javaScriptSort);
  });

  it("Merge Sort should correctly sort an array", () => {
    let sortedArray = getMergeSortData(array).arr;
    expect(sortedArray).toEqual(javaScriptSort);
  });
});
