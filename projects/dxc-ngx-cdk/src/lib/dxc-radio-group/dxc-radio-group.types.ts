export interface RadioGroupProperties {
  label: string;
  helperText?: string;
  name: string;
  value?: string;
  readOnly?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  options: RadioItem[];
  stacking?: "row" | "column";
  tabIndex?: number;
  error?: string;
}

export type RadioItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type BlurEvent = {
  value: string;
  error: string;
};
