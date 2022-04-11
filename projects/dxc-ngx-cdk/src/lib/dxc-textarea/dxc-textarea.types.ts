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

export type EmittedValue = {
  value: string;
  error: string;
};

export interface TextareaProperties {
  value?: string;
  defaultValue?: string;
  label: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  optional?: boolean;
  verticalGrow: "auto" | "manual" | "none";
  rows?: number;
  error?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  margin?: Space | Spacing;
  size?: "small" | "medium" | "large" | "fillParent";
  tabIndexValue?: number;
  autocomplete?: string;
}
