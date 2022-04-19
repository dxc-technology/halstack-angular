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

export interface AccordionProperties {
  label: string;
  assistiveText?: string;
  disabled: boolean;
  isExpanded: boolean;
  defaultIsExpanded?:boolean
  margin?: Space | Spacing;
  padding?: Space | Spacing;
  tabIndexValue?: number;
}
