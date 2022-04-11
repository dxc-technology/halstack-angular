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

export interface ChipProperties {
  label: string;
  disabled: boolean;
  margin: Space | Spacing;
  tabIndexValue: number;
  suffixIconSrc?: string;
  prefixIconSrc?: string;
}
