import React from "react";
import "./BarChart.scss";
import { Box, useToken } from "@chakra-ui/react";
interface Props {
  array: number[];
  barStyle: any;
}

const BarChart: React.FC<Props> = ({ array, barStyle }) => {
  const { margin, width, fontSize, fontWeight, calcHeight } = barStyle;
  const teal = useToken("colors", "teal.300");

  return (
    <div>
      <div className="barsContainer">
        {array.map((x, i) => {
          let padding = 10;
          const height = calcHeight(x);
          if (padding >= height / 10) {
            padding = 0;
          }
          return (
            <Box
              paddingTop={`${padding}px`}
              key={`a${x}b${i}c${margin}d${width}`}
              className="bar"
              height={`${calcHeight(x)}px`}
              width={`${width}px`}
              margin={`${margin}px`}
              borderRadius="lg"
              backgroundColor={teal}
              fontWeight={fontWeight}
              fontSize={`${fontSize}px`}
            >
              {x}
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
