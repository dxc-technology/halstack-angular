export interface NumberInputProperties {
  margin?: Space | Spacing;
  label?: string;
  name?: string;
  value?: string;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  optional?: boolean;
  error?: string;
  autocomplete?: string;
  size?: "small" | "medium" | "large" | "fillParent";
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

export type OnChangeEvent = {
  value?: string;
  error?: string | null;
};

export type OnBlurEvent = {
  value?: string;
  error?: string | null;
};
