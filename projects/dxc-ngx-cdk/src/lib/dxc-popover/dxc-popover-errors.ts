/**
 * Throws an exception for the case when popover trigger doesn't have a valid dxc-popover instance
 */
export function throwDxcPopoverMissingError() {
  throw Error(`dxc-popover-trigger: must pass in an dxc-popover instance.

    Example:
      <dxc-popover #popover="dxcPopover"></dxc-popover>
      <button [dxcPopoverTriggerFor]="popover"></button>`);
}

/**
 * Throws an exception for the case when popover's dxcPopoverPositionX value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
export function throwDxcPopoverInvalidPositionX() {
  throw Error(`dxcPopoverPositionX value must be either 'before' or after'.
      Example: <dxc-popover dxcPopoverPositionX="before" #popover="dxcPopover"></dxc-popover>`);
}

/**
 * Throws an exception for the case when popover's dxcPopoverPositionY value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
export function throwDxcPopoverInvalidPositionY() {
  throw Error(`dxcPopoverPositionY value must be either 'above' or below'.
      Example: <dxc-popover dxcPopoverPositionY="above" #popover="dxcPopover"></dxc-popover>`);
}
