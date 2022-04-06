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

export type Sizes = {
  small: "60px";
  medium: "240px";
  large: "480px";
  fillParent: "100%";
  fitContent: "fit-content";
};

export interface BoxProperties {
  shadowDepth: 0 | 1 | 2;
  display: string;
  margin: Space | Spacing;
  padding: Space | Spacing;
  size: "small" | "medium" | "large" | "fillParent" | "fitContent";
}
