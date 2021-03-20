export interface Animation {
  endValues: number[];
  positions: number[];
  colors: string[];
}

export interface BarStyle {
  margin: number;
  width: number;
  fontSize: number;
  fontWeight: string;
  calcHeight: (h: number) => number;
}
