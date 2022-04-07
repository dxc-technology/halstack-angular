export interface SwitchProperties {
  margin?: Space | Spacing;
  checked?: boolean;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  name?: string;
  labelPosition?: "before" | "after";
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
