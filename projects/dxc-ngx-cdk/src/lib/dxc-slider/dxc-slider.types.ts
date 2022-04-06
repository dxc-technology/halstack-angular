export interface SliderProperties {
  margin?: Space | Spacing;
  step?: number;
  maxValue?: number;
  minValue?: number;
  size?: "medium" | "large" | "fillParent";
  showLimitsValues?: boolean;
  showInput?: boolean;
  value?: number;
  name?: string;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  marks?: boolean;
  tabIndexValue?: number;
}

export type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

export type Spacing = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
