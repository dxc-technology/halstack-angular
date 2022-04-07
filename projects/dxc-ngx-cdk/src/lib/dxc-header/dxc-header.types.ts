export interface HeaderProperties {
  margin?: Space;
  underlined?: boolean;
  logoSrc?: string;
  logoResponsiveSrc?: string;
  tabIndexValue?: number;
  padding?: Space | Spacing;
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
