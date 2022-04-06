export interface SpinnerProperties {
  margin?: Space | Spacing;
  showValue?: boolean;
  value?: number;
  label?: string;
  mode?: "large" | "small" | "overlay";
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
