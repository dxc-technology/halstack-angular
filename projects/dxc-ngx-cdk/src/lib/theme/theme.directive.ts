import { Directive, OnInit, OnDestroy, ElementRef, Inject, Optional } from '@angular/core';
import { ThemeService } from './theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Theme } from './symbols';

@Directive({
  selector: '[theme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private _destroy$ = new Subject();

  constructor(
    private _elementRef: ElementRef,
    @Optional() @Inject ('ThemeService') private _themeService: ThemeService
  ) {}

  ngOnInit() {
    this.getTheme();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateTheme(theme: Theme) {
    for (const key in theme.properties) {
      debugger;
      this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }
  }

  private getTheme():void {
    if (this._themeService !== null && this._themeService!== undefined){
      const active = this._themeService.getTheme();
      if (active) {
        this.updateTheme(active);
      }

      this._themeService.themeChange
        .subscribe((theme: Theme) => {
            this.updateTheme(theme);
          }
        );
    }
  }
}
