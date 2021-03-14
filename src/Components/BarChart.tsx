import React, { useState } from "react";
// import styles from './BarChart.scss';
// import * as styles from './BarChart.scss';


const ARR_LENGTH = 5

const generateArray = (length: number): number[] => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * length) + 1);
  }
  return arr;
};

const BarChart: React.FC = () => {
  const [array, setArray] = useState<number[]>(() => generateArray(ARR_LENGTH));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
      {console.log(`array`, array)}
      {array.map((x) => {
        console.log(`x`, x);
        const height = x * 50;
        console.log(`height`, height);
        return (
          <div 
            // className={styles.bar}
            style={{
              height: `${height}px`,
              width: "50px",
              padding: "10px",
              margin: "10px",
              border: "1px solid black",
            }}
          >
            {x}
          </div>
        );
      })}
      {/* here */}
    </div>
  );
};

export default BarChart;
