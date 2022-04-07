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

export interface CheckboxProperties {
  checked?: boolean;
  value?: string;
  label: string;
  labelPosition?: "before" | "after";
  name?: string;
  disabled?: boolean;
  required?: boolean;
  tabIndexValue?: number;
  margin?: Space | Spacing;
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
}
