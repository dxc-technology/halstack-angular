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

export interface TabsProperties {
  activeTabIndex?: number;
  iconPosition?: "top" | "left";
  margin?: Space | Spacing;
  defaultActiveTabIndex?: number;
}
