export interface RadioProperties {
  margin?: Space | Spacing;
  checked?: boolean;
  value?: string;
  label: string;
  labelPosition?: "before" | "after";
  name?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
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
