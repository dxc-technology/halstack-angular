export interface DateInputProperties {
  margin?: Space | Spacing;
  label?: string;
  name?: string;
  value?: string;
  helperText?: string;
  format?: string;
  disabled?: boolean;
  placeholder?: boolean;
  optional?: boolean;
  clearable?: boolean;
  error?: string;
  size?: "medium" | "large" | "fillParent";
  tabIndexValue?: number;
  autocomplete?: string;
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
  date: Date | null;
};
