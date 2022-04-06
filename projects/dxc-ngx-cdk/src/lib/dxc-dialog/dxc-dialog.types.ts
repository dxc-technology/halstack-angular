export interface DialogProperties {
  margin?: Space | Spacing;
  overlay?: boolean;
  isCloseVisible?: boolean;
  padding?: Space | Spacing;
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
