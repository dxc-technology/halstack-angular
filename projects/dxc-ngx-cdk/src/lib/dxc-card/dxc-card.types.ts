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

export interface CardProperties {
    imageSrc: string;
    imageBgColor: string;
    imagePadding: Space | Spacing;
    imagePosition: "after" | "before";
    contentPadding: Space | Spacing;
    linkHref: string;
    imageCover: boolean;
    margin: Space | Spacing;
    tabIndexValue: number;
    outlined: boolean;
}