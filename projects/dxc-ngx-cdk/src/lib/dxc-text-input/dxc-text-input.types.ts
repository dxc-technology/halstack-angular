export interface TextInputProperties {
  label?: string;
  name?: string;
  margin?: Space | Spacing;
  disabled?: boolean;
  tabIndexValue?: number;
  value?: string;
  defaultValue?: string;
  helperText?: string;
  placeholder?: string;
  autocomplete?: string;
  optional?: boolean;
  clearable?: boolean;
  error?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  size?: "small" | "medium" | "large" | "fillParent";
  suggestions?: any;
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
