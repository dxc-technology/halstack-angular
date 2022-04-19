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

export interface ToggleGroupProperties {
  label: string;
  helperText?: string;
  value?: string | string[];
  multiple?: boolean;
  disabled?: boolean;
  tabIndexValue?: number;
  margin?: Space | Spacing;
  defaultValue?: string | string[];
}

export interface ToggleProperties {
  value: string;
  label: string;
}
