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
  theme: Theme;

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
    this.theme = theme;
    this.setProperties(theme.properties);
  }

  private setProperties(obj, parent?){
    for (const key in obj) {
      if ((typeof obj[key]) === "string" || (typeof obj[key]) === "number"){
        if(parent !== undefined){
          let keyName = `--${parent}-${key}`;
          this._elementRef.nativeElement.style.setProperty(keyName.toString(), obj[key]);
        }
        else{
          this._elementRef.nativeElement.style.setProperty(key, obj[key]);
        }
      }
      else{
        if(parent !== undefined){
          let keyName = `${parent}-${key}`;
          this.setProperties(obj[key],keyName);
        }
        else{
          this.setProperties(obj[key],key);
        }
      }
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
