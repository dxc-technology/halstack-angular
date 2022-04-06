export interface FooterProperties {
  margin?: Space | Spacing;
  socialLinks?: { href?: string; logoSrc?: string }[];
  bottomLinks?: { href?: string; text?: string }[];
  copyright?: string;
  padding?: Space | Spacing;
  logoSrc: string;
  tabIndexValue: number;
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
