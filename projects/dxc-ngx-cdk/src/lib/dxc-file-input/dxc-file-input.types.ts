import { FileData } from "./model/file-info";

export interface FileInputProperties {
  margin?: Space | Spacing;
  tabIndexValue?: number;
  name?: string;
  mode?: string;
  label?: string;
  buttonLabel?: string;
  helperText?: string;
  value?: FileData[];
  accept?: string;
  multiple?: boolean;
  showPreview?: boolean;
  disabled?: boolean;
  minSize?: number;
  maxSize?: number;
  maxFileCount?: number;
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
