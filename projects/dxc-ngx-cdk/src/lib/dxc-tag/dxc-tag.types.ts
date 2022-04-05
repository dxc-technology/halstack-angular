export interface TagProperties {
  label: string;
  iconSrc?: string;
  iconBgColor?: string;
  labelPosition?: "before" | "after";
  linkHref?: string;
  margin?: Space | Spacing;
  newWindow?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
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
