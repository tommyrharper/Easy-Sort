import React from "react";
import "./BarChart.scss";
import { Box } from "@chakra-ui/react";
interface Props {
  array: number[];
  barStyle: any;
  color: string;
}

const BarChart: React.FC<Props> = ({ array, barStyle, color }) => {
  const { margin, width, fontSize, fontWeight, calcHeight } = barStyle;

  return (
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
            backgroundColor={color}
            fontWeight={fontWeight}
            fontSize={`${fontSize}px`}
          >
            {x}
          </Box>
        );
      })}
      </div>
  );
};

export default BarChart;
