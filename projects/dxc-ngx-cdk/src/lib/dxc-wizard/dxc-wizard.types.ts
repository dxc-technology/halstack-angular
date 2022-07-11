export interface WizardProperties {
  mode?: string;
  currentStep?: number;
  margin?: Spacing | Space;
  defaultCurrentStep?: number;
  tabIndexValue?: number;
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
