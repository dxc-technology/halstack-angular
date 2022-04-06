export interface LinkProperties {
  margin?: Space | Spacing;
  underlined?: boolean;
  inheritColor?: boolean;
  disabled?: boolean;
  text: string;
  iconSrc?: string;
  iconPosition?: string;
  href: string;
  newWindow?: boolean;
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
