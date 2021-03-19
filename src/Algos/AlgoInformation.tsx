import { Text } from "@chakra-ui/react";

export const AlgoInformation: React.FC<{ algo: string }> = ({ algo }) => {
  switch (algo) {
    case "Bubble Sort":
      return (
        <Text className="algoInfoContainer">
          <b>Time complexity:</b>
          <br />
          Best case: O(n)
          <br />
          Worst case: O(n<sup>2</sup>)<br />
          Average: O(n<sup>2</sup>)<br />
          <br />
          <b>Space complexity:</b>
          <br />
          Worst case: O(1)
        </Text>
      );
    case "Insertion Sort":
      return (
        <Text className="algoInfoContainer">
          <b>Time complexity:</b>
          <br />
          Best case: O(n)
          <br />
          Worst case: O(n<sup>2</sup>)<br />
          Average: O(n<sup>2</sup>)<br />
          <br />
          <b>Space complexity:</b>
          <br />
          Worst case: O(1)
        </Text>
      );
    case "Selection Sort":
      return (
        <Text className="algoInfoContainer">
          <b>Time complexity:</b>
          <br />
          Best case: O(n<sup>2</sup>)<br />
          Worst case: O(n<sup>2</sup>)<br />
          Average: O(n<sup>2</sup>)<br />
          <br />
          <b>Space complexity:</b>
          <br />
          Worst case: O(1)
        </Text>
      );
    case "Merge Sort":
      return (
        <Text className="algoInfoContainer">
          <b>Time complexity:</b>
          <br />
          Best case: O(n log(n))
          <br />
          Worst case: O(n log(n))<br />
          Average: O(n log(n))<br />
          <br />
          <b>Space complexity:</b>
          <br />
          Worst case: O(n)
        </Text>
      );
    default:
      return <noscript />;
  }
};
