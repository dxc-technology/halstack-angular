export type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

export type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
