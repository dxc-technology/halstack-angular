export interface PasswordInputProperties {
  margin?: Space | Spacing;
  label?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  helperText?: string;
  clearable?: boolean;
  error?: string;
  autocomplete?: string;
  size?: "small" | "medium" | "large" | "fillParent";
  tabIndexValue?: number;
  minLength?: number;
  maxLength?: number;
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

export type EmittedValue = {
  value: string;
  error: string | null;
};
