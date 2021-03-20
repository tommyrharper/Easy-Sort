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
    case "Quick Sort":
      return (
        <Text className="algoInfoContainer">
          <b>Time complexity:</b>
          <br />
          Best case: O(n log(n))
          <br />
          Worst case: O(n<sup>2</sup>)<br />
          Average: O(n log(n))<br />
          <br />
          <b>Space complexity:</b>
          <br />
          Worst case: O(n log(n))
        </Text>
      );
    case "Heap Sort":
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
          Worst case: O(1)
        </Text>
      );
    case "Radix Sort":
      return (
        <Text className="algoInfoContainer">
          <b>Time complexity:</b>
          <br />
          Best case: O(nk)
          <br />
          Worst case: O(nk)<br />
          Average: O(nk)<br />
          <br />
          <b>Space complexity:</b>
          <br />
          Worst case: O(n + k)
        </Text>
      );
    default:
      return <noscript />;
  }
};
