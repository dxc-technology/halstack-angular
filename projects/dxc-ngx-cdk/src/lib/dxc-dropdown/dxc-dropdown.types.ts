export interface DropdownProperties {
  margin?: Space | Spacing;
  optionsIconPosition?: "before" | "after";
  iconPosition?: "before" | "after";
  label?: string;
  name?: string;
  caretHidden?: boolean;
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  tabIndexValue?: number;
  expandOnHover?: boolean;
  disabled?: boolean;
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
