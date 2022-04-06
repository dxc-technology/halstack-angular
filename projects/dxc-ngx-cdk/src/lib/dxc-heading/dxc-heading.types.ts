export interface HeadingProperties {
  margin?: Space | Spacing;
  level: 1 | 2 | 3 | 4 | 5;
  asTag: "h1" | "h2" | "h3" | "h4" | "h5";
  text: string;
  weight: "light" | "normal" | "bold";
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
