import { ElementRef, EventEmitter, NgZone, TemplateRef } from '@angular/core';
import { DxcPopoverPositionX, DxcPopoverPositionY, DxcPopoverTriggerEvent, DxcPopoverScrollStrategy } from './dxc-popover-types';

export interface DxcPopoverPanel {
    positionX: DxcPopoverPositionX;
    positionY: DxcPopoverPositionY;
    containerPositioning: boolean;
    overlapTrigger: boolean;
    triggerEvent: DxcPopoverTriggerEvent;
    scrollStrategy: DxcPopoverScrollStrategy;
    enterDelay: number;
    leaveDelay: number;
    targetOffsetX: number;
    targetOffsetY: number;
    arrowOffsetX: number;
    arrowWidth: number;
    arrowColor: string;
    closeOnClick: boolean;
    closeDisabled: boolean;
    setCurrentStyles: () => void;
    templateRef: TemplateRef<any>;
    close: EventEmitter<void>;
    zone: NgZone;
    setPositionClasses: (x: DxcPopoverPositionX, y: DxcPopoverPositionY) => void;
    _emitCloseEvent: () => void;
}

export interface DxcPopoverConfig {
    positionX: DxcPopoverPositionX;
    positionY: DxcPopoverPositionY;
    overlapTrigger: boolean;
    triggerEvent: DxcPopoverTriggerEvent;
    triggerDelay: number;
    targetOffsetX: number;
    targetOffsetY: number;
    arrowOffsetX: number;
    arrowWidth: number;
    arrowColor: string;
    closeOnClick: boolean;
}

export interface DxcTarget {
    _elementRef: ElementRef;
}
