export interface Option {
  /**
   * Label of the option to be shown in the select's listbox.
   */
  label: string;
  /**
   * Value of the option. It should be unique and not an empty string,
   * which is reserved to the empty option added by optional prop.
   */
  value: string;
  /**
   * Element used as the icon that will be placed before the option label.
   */
  icon?: string;
}
