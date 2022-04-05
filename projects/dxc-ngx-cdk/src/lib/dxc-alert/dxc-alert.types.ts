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

export interface AlertProperties {
  type: "info" | "warning" | "error" | "confirm";
  mode: "inline" | "modal";
  inlineText?: string;
  tabIndexValue?: number;
  margin?: Space | Spacing;
  size: "small" | "medium" | "large" | "fillParent" | "fitContent";
}
