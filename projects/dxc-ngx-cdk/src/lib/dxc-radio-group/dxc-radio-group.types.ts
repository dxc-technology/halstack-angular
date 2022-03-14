export interface RadioGroupProperties {
  label: string;
  helperText?: string;
  name: string;
  value?: string;
  readOnly?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  options: Option[];
  stacking?: "row"|"column";
  tabIndex?: number;
}

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

