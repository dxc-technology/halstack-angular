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
    mode: "primary" | "secondary" | "text";
    label: string;
    disabled: boolean;
    iconSrc: string;
    iconPosition: "before" | "after";
    margin: Space | Spacing;
    size: "small" | "medium" | "large" | "fillParent" | "fitContent";
    type: "reset" | "submit" | "button";
    tabIndexValue: number;
}