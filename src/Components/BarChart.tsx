import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray, bubbleSort } from "../Helpers/Helpers";

const ARR_LENGTH = 5;
const DELAY = 300;
const HEIGHT_MULTI = 50;

const calcHeight = (h: number) => h * HEIGHT_MULTI;
interface Animation {
  startValues: number[];
  endValues: number[];
  positions: number[];
}

const getBubbleSortAnimations = (array: number[]): Animation[] => {
  const arr = [...array];
  const animations = [];
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
      const animation: Animation = {
        startValues: [bar1, bar2],
        endValues: [arr[i], arr[i + 1]],
        positions: [i, i + 1],
      };
      animation.endValues = [arr[i], arr[i + 1]];
      animations.push(animation);
    }
  }
  return animations;
};

const newBubbleSort = (array: number[]) => {
  const animations = getBubbleSortAnimations(array);
  const arrayBars = document.getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < animations.length; i++) {
    const { startValues, endValues, positions } = animations[i];
    const pos1 = positions[0];
    const pos2 = positions[1];
    const height1 = `${calcHeight(endValues[0])}px`;
    const height2 = `${calcHeight(endValues[1])}px`;
    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        if (j !== pos1 && j !== pos2) {
          arrayBars[j].style.backgroundColor = '#4FD1C5';
        }
      }
      arrayBars[pos1].style.backgroundColor = 'red'
      arrayBars[pos2].style.backgroundColor = 'red'
      setTimeout(() => {
        arrayBars[pos1].style.height = height1;
        arrayBars[pos2].style.height = height2;
        arrayBars[pos1].innerHTML = `${endValues[0]}`;
        arrayBars[pos2].innerHTML = `${endValues[1]}`;
      }, Math.floor(DELAY / 3));
      if (i === animations.length - 1) {
        // clear all bars 
        setTimeout(() => {
          for (let j = 0; j < arrayBars.length; j++) {
            arrayBars[j].style.backgroundColor = '#4FD1C5';
          }
        }, DELAY)
      }
    }, i * DELAY);
  }
}

const BarChart: React.FC = () => {
  const [array, setArray] = useState<number[]>(() => generateArray(ARR_LENGTH));
  const [isSorted, setSorted] = useState<boolean>(false);
  return (
    <div>
      <div className="barsContainer">
        {array.map((x, i) => (
          <Box
            key={`${x}${i}`}
            className="bar"
            height={`${calcHeight(x)}px`}
            borderRadius="lg"
            backgroundColor="teal.300"
          >
            {x}
          </Box>
        ))}
      </div>
      {/* <Button margin="40px" onClick={() => setArray(a => bubbleSort(a))}> */}
      <Button margin="40px" onClick={() => {
        if (!isSorted) newBubbleSort(array);
        else {
          setArray(array.sort((a, b) => a - b));
          newBubbleSort(array);
        }
        setSorted(true);
      }}>
        Sort
      </Button>
      <Button margin="40px" onClick={() => {
        setArray(generateArray(ARR_LENGTH));
        setSorted(false);
        }}>
        Shuffle
      </Button>
    </div>
  );
};

export default BarChart;
