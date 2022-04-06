export type Size = "small" | "medium" | "large" | "fillParent" | "fitContent";

export type Mode = "primary" | "secondary" | "text";

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

export interface ButtonProperties {
    mode: Mode;
    label: string;
    disabled: boolean;
    iconSrc: string;
    iconPosition: "before" | "after";
    margin: Space | Spacing;
    size: Size;
    type: "reset" | "submit" | "button";
    tabIndexValue: number;
}