export interface ProgressBarProperties {
  margin?: Space | Spacing;
  value?: number;
  label?: string;
  helperText?: string;
  showValue?: boolean;
  overlay?: boolean;
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
