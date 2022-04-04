import { RadioItem } from "./interfaces/radio-item.interface";
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
  tabIndexValue?: number;
  error?: string;
}

export type BlurEvent = {
  value: string;
  error: string;
};
