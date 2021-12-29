/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";
import { ENTER, SPACE, hasModifierKey } from "@angular/cdk/keycodes";
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewEncapsulation,
  Directive,
  HostBinding,
} from "@angular/core";
import { FocusOptions, FocusableOption, FocusOrigin } from "@angular/cdk/a11y";
import { Subject } from "rxjs";
import {
  MatOptionParentComponent,
  MAT_OPTION_PARENT_COMPONENT,
} from "./option-parent";
import { SelectService } from "../services/select.service";
import { css } from "emotion";

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;

/** Event object emitted by MatOption when selected or deselected. */
export class MatOptionSelectionChange {
  constructor(
    /** Reference to the option that emitted the event. */
    public source: _MatOptionBase,
    /** Whether the change in the option's value was a result of a user action. */
    public isUserInput = false
  ) {}
}

@Directive()
export class _MatOptionBase
  implements FocusableOption, AfterViewChecked, OnDestroy
{
  private _selected = false;
  private _active = false;
  private _disabled = false;
  private _mostRecentViewValue = "";

  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }

  /** Whether or not the option is currently selected. */
  get selected(): boolean {
    return this._selected;
  }

  /** The form value of the option. */
  @Input() value: any;

  /** The label displayed in option. */
  @Input() label: any;

  /** The unique ID of the option. */
  @Input() id: string = `mat-option-${_uniqueIdCounter++}`;

  /** Whether the option is disabled. */
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return this._parent && this._parent.disableRipple;
  }

  /** Whether the parent is controlled */
  get controlled() {
    return this._parent && this._parent.controlled;
  }

  /** Event emitted when the option is selected or deselected. */
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  readonly onSelectionChange = new EventEmitter<MatOptionSelectionChange>();

  /** Emits when the state of the option changes and any parents have to be notified. */
  readonly _stateChanges = new Subject<void>();

  private iconPosition = "";

  checkboxMargin = { right: "xsmall" };

  @HostBinding("class") className = `mat-option ${this.getDynamicStyle()}`;

  backgroundColor = "";

  constructor(
    public _element: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    private _parent: MatOptionParentComponent,
    private service: SelectService
  ) {
    this.service.iconPosition.subscribe((position) => {
      this.iconPosition = position;
      this.className = `mat-option ${this.getDynamicStyle()}`;
    });
    // this.service.isDarkThemeOption.subscribe((value) => {
    //   this.backgroundColor = value;
    // });
  }

  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active(): boolean {
    return this._active;
  }

  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue(): string {
    // TODO(kara): Add input property alternative for node envs.
    return (this._getHostElement().textContent || "").trim();
  }

  /** Selects the option. */
  select(): void {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }

  /** Deselects the option. */
  deselect(): void {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    }
  }

  /** Sets focus onto this option. */
  focus(_origin?: FocusOrigin, options?: FocusOptions): void {
    // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
    // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
    const element = this._getHostElement();

    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }

  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles(): void {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles(): void {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }

  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel(): string {
    return this.viewValue;
  }

  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event: KeyboardEvent): void {
    if (
      (event.keyCode === ENTER || event.keyCode === SPACE) &&
      !hasModifierKey(event)
    ) {
      this._selectViaInteraction();

      // Prevent the page from scrolling down and form submits.
      event.preventDefault();
    }
  }

  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction(): void {
    if (!this.disabled) {
      if (this.controlled && this.multiple) {
        this.service.selected.next(new MatOptionSelectionChange(this, true));
      } else {
        this._selected = this.multiple ? !this._selected : true;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent(true);
      }
    }
  }

  /**
   * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
   * attribute from single-selection, unselected options. Including the `aria-selected="false"`
   * attributes adds a significant amount of noise to screen-reader users without providing useful
   * information.
   */
  _getAriaSelected(): boolean | null {
    return this.selected || (this.multiple ? false : null);
  }

  /** Returns the correct tabindex for the option depending on disabled state. */
  _getTabIndex(): string {
    return this.disabled ? "-1" : "0";
  }

  /** Gets the host DOM element. */
  _getHostElement(): HTMLElement {
    return this._element.nativeElement;
  }

  ngAfterViewChecked() {
    // Since parent components could be using the option's label to display the selected values
    // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
    // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
    // relatively cheap, however we still limit them only to selected options in order to avoid
    // hitting the DOM too often.
    if (this._selected) {
      const viewValue = this.viewValue;

      if (viewValue !== this._mostRecentViewValue) {
        this._mostRecentViewValue = viewValue;
        this._stateChanges.next();
      }
    }
  }

  getDynamicStyle() {
    return css`
      height: ${this.multiple ? "48px" : "36px"};
      &.mat-option:not(.mat-option-disabled) {
        color: var(--select-labelFontColor) !important;
      }
      .mat-option-text {
        display: flex;
        justify-content: ${this.iconPosition == "after"
          ? "flex-end"
          : "flex-start"};
        flex-direction: ${this.iconPosition == "after" ? "row-reverse" : "row"};
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          font-family: var(--select-fontFamily);
          color: ${this.service.isDarkTheme
            ? "var(--select-optionFontColorOnDark)"
            : "var(--select-optionFontColor)"};
          font-size: var(--select-optionFontSize);
          font-style: var(--select-optionFontStyle);
        }
      }
      &.mat-option.mat-active {
        outline: -webkit-focus-ring-color auto 1px;
        outline-color: var(--select-focusColor);
        background: white;
      }
      &.mat-option:hover:not(.mat-option-disabled) {
        background: ${this.service.isDarkTheme
          ? "var(--select-hoverOptionBackgroundColorOnDark)"
          : "var(--select-hoverOptionBackgroundColor)"} !important;
      }
      &.mat-option.mat-selected:not(.mat-option-disabled) {
        background: ${this.service.isDarkTheme
          ? "var(--select-selectedOptionBackgroundColorOnDark)"
          : "var(--select-selectedOptionBackgroundColor)"};
      }
      &.mat-option:focus:not(.mat-option-disabled) {
        outline: -webkit-focus-ring-color auto 1px;
        outline-color: var(--select-focusColor);
      }
      &.mat-option-disabled {
        color: var(--select-disabledColor) !important;
      }
      dxc-option-icon {
        display: flex;
        align-items: center;
        ${this.iconPosition == "after"
          ? "margin-left: var(--select-optionIconSpacing)"
          : "margin-right: var(--select-optionIconSpacing)"};
        color: var(--select-optionIconColor);
        img,
        svg {
          height: var(--select-optionIconSize);
          width: var(--select-optionIconSize);
        }
      }
      mat-checkbox.cdk-focused {
        label.mat-checkbox-layout {
          .mat-checkbox-inner-container {
            .mat-checkbox-background {
              outline: none !important;
            }
          }
        }
      }
    `;
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

  /** Emits the selection change event. */
  private _emitSelectionChangeEvent(isUserInput = false): void {
    this.onSelectionChange.emit(
      new MatOptionSelectionChange(this, isUserInput)
    );
  }

  static ngAcceptInputType_disabled: BooleanInput;
}

/**
 * Single option inside of a `<mat-select>` element.
 */
@Component({
  selector: "v3-dxc-select-option",
  exportAs: "V3DxcSelectOption",
  host: {
    role: "option",
    "[attr.tabindex]": "_getTabIndex()",
    "[class.mat-selected]": "selected",
    "[class.mat-option-multiple]": "multiple",
    "[class.mat-focused]": "focus",
    "[class.mat-active]": "active",
    "[id]": "id",
    "[attr.aria-selected]": "_getAriaSelected()",
    "[attr.aria-disabled]": "disabled.toString()",
    "[class.mat-option-disabled]": "disabled",
    "(click)": "_selectViaInteraction()",
    "(keydown)": "_handleKeydown($event)",
    class: "mat-option mat-focus-indicator",
  },
  styleUrls: ["option.scss"],
  templateUrl: "option.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V3DxcSelectOption extends _MatOptionBase {
  constructor(
    element: ElementRef<HTMLElement>,
    changeDetectorRef: ChangeDetectorRef,
    @Optional()
    @Inject(MAT_OPTION_PARENT_COMPONENT)
    parent: MatOptionParentComponent,
    service: SelectService
  ) {
    super(element, changeDetectorRef, parent, service);
  }
}

/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
export function _getOptionScrollPosition(
  optionOffset: number,
  optionHeight: number,
  currentScrollPosition: number,
  panelHeight: number
): number {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}
