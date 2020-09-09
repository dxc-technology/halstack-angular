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
    this.setPropertiesCss(this.theme);
  }

  setPropertiesCss(theme: Theme){
    let obj = {
      "--button-color": theme.properties["button"]["color"],
      "--button-hoverColor": theme.properties["button"]["hoverColor"],
      "--button-primaryFontColor": theme.properties["button"]["primaryFontColor"],
      "--button-primaryHoverFontColor": theme.properties["button"]["primaryHoverFontColor"],
      "--button-secondaryFontColor": theme.properties["button"]["secondaryFontColor"],
      "--button-secondaryHoverFontColor": theme.properties["button"]["secondaryHoverFontColor"],
      "--button-textFontColor": theme.properties["button"]["textFontColor"],
      "--button-textHoverFontColor": theme.properties["button"]["textHoverFontColor"],
      "--button-primaryDisabledOpacity": theme.properties["button"]["primaryDisabledOpacity"],
      "--button-primaryActiveOpacity": theme.properties["button"]["color"] + theme.properties["button"]["primaryActiveOpacity"],
      "--button-primaryActiveHoverOpacity": theme.properties["button"]["hoverColor"] + theme.properties["button"]["primaryActiveOpacity"],
      "--button-secondaryDisabledOpacity": theme.properties["button"]["secondaryDisabledOpacity"],
      "--button-secondaryActiveOpacity": theme.properties["button"]["color"] + theme.properties["button"]["secondaryActiveOpacity"],
      "--button-secondaryActiveHoverOpacity": theme.properties["button"]["hoverColor"] + theme.properties["button"]["secondaryActiveOpacity"],
      "--button-secondaryHoverOpacity": theme.properties["button"]["hoverColor"] + theme.properties["button"]["secondaryHoverOpacity"],
      "--button-secondaryBackgroundColor": theme.properties["button"]["secondaryBackgroundColor"],
      "--button-textDisabledOpacity": theme.properties["button"]["textDisabledOpacity"],
      "--button-textActiveOpacity": theme.properties["button"]["color"] + theme.properties["button"]["textActiveOpacity"],
      "--button-textActiveHoverOpacity": theme.properties["button"]["hoverColor"] + theme.properties["button"]["textActiveOpacity"],
      "--button-textBackgroundColor": theme.properties["button"]["textBackgroundColor"],
      "--button-focusColor": theme.properties["button"]["focusColor"],
      "--checkbox-color": theme.properties["checkbox"]["color"],
      "--checkbox-checkColor": theme.properties["checkbox"]["checkColor"],
      "--checkbox-fontColor": theme.properties["checkbox"]["fontColor"],
      "--checkbox-opacityDisabled": theme.properties["checkbox"]["opacityDisabled"],
      "--checkbox-opacityDisabledCheckColor": theme.properties["checkbox"]["opacityDisabledCheckColor"],
      "--checkbox-focusColor": theme.properties["checkbox"]["focusColor"],
      "--radio-color": theme.properties["radio"]["color"],
      "--radio-fontColor": theme.properties["radio"]["fontColor"],
      "--radio-disabled": theme.properties["radio"]["disabled"],
      "--radio-focusColor": theme.properties["radio"]["focusColor"],
      "--select-selectedOptionBackgroundColor": theme.properties["select"]["selectedOptionBackgroundColor"],
      "--select-color": theme.properties["select"]["color"],
      "--select-invalidColor": theme.properties["select"]["invalidColor"],
      "--select-focusColor": theme.properties["select"]["focusColor"],
      "--select-hoverOptionBackgroundColor": theme.properties["select"]["selectedOptionBackgroundColor"] + theme.properties["select"]["hoverOptionBackgroundColor"],
      "--slider-color": theme.properties["slider"]["color"],
      "--slider-totalLine": theme.properties["slider"]["totalLine"],
      "--slider-disabledThumbBackgroundColor": theme.properties["slider"]["disabledThumbBackgroundColor"],
      "--slider-disabledDotsBackgroundColor": theme.properties["slider"]["disabledDotsBackgroundColor"],
      "--slider-disabledTrackLine": theme.properties["slider"]["disabledTrackLine"],
      "--slider-disabledtotalLine": theme.properties["slider"]["disabledtotalLine"],
      "--switch-checkedTrackBackgroundColor": theme.properties["switch"]["checkedTrackBackgroundColor"],
      "--switch-checkedThumbBackgroundColor": theme.properties["switch"]["checkedThumbBackgroundColor"],
      "--switch-uncheckedThumbBackgroundColor": theme.properties["switch"]["uncheckedThumbBackgroundColor"],
      "--switch-uncheckedTrackBackgroundColor": theme.properties["switch"]["uncheckedTrackBackgroundColor"],
      "--switch-disabledBackgroundColor": theme.properties["switch"]["disabledBackgroundColor"],
      "--switch-requiredColor": theme.properties["switch"]["requiredColor"],
      "--switch-focusColor": theme.properties["switch"]["focusColor"],
      "--box-backgroundColor": theme.properties["box"]["backgroundColor"],
      "--chip-backgroundColor": theme.properties["chip"]["backgroundColor"],
      "--chip-outlinedColor": theme.properties["chip"]["outlinedColor"],
      "--chip-fontColor": theme.properties["chip"]["fontColor"],
      "--chip-focusColor": theme.properties["chip"]["focusColor"],
      "--chip-disabled": theme.properties["chip"]["disabled"],
      "--date-pickerSelectedDateBackgroundColor": theme.properties["date"]["pickerSelectedDateBackgroundColor"],
      "--date-pickerSelectedDateColor": theme.properties["date"]["pickerSelectedDateColor"],
      "--date-pickerBackgroundColor": theme.properties["date"]["pickerBackgroundColor"],
      "--date-pickerTextColor": theme.properties["date"]["pickerTextColor"],
      "--date-pickerActualDate": theme.properties["date"]["pickerActualDate"],
      "--date-pickerHoverDateBackgroundColor": theme.properties["date"]["pickerSelectedDateBackgroundColor"] + theme.properties["date"]["pickerHoverDateBackgroundColor"],
      "--date-pickerHoverDateTextColor": theme.properties["date"]["pickerHoverDateTextColor"],
      "--date-invalidColor": theme.properties["date"]["invalidColor"],
      "--date-focusColor": theme.properties["date"]["focusColor"],
      "--sidenav-color": theme.properties["sidenav"]["color"],
      "--sidenav-arrowBackground": theme.properties["sidenav"]["arrowBackground"],
      "--sidenav-arrowColor": theme.properties["sidenav"]["arrowColor"],
      "--sidenav-arrowContainerOpacity": theme.properties["sidenav"]["arrowContainerOpacity"],
      "--sidenav-focusColor": theme.properties["sidenav"]["focusColor"],
      "--autocomplete-selectedOptionBackgroundColor": theme.properties["autocomplete"]["selectedOptionBackgroundColor"],
      "--autocomplete-hoverOptionBackgroundColor": theme.properties["autocomplete"]["selectedOptionBackgroundColor"] + theme.properties["autocomplete"]["hoverOptionBackgroundColor"],
      "--autocomplete-hoverOptionColor": theme.properties["autocomplete"]["hoverOptionColor"],
      "--autocomplete-scrollBarThumbColor": theme.properties["autocomplete"]["scrollBarThumbColor"],
      "--autocomplete-scrollBarTrackColor": theme.properties["autocomplete"]["scrollBarTrackColor"],
      "--footer-backgroundColor": theme.properties["footer"]["backgroundColor"],
      "--footer-fontColor": theme.properties["footer"]["fontColor"],
      "--footer-lineColor": theme.properties["footer"]["lineColor"],
      "--header-backgroundColor": theme.properties["header"]["backgroundColor"],
      "--header-underlinedColor": theme.properties["header"]["underlinedColor"],
      "--header-fontColor": theme.properties["header"]["fontColor"],
      "--header-backgroundColorMenu": theme.properties["header"]["backgroundColorMenu"],
      "--header-fontColorMenu": theme.properties["header"]["fontColorMenu"],
      "--header-hamburguerColor": theme.properties["header"]["hamburguerColor"],
      "--header-hoverHamburguerColor": theme.properties["header"]["hamburguerColor"] + theme.properties["header"]["hoverHamburguerColor"],
      "--header-overlayColor": theme.properties["header"]["overlayColor"],
      "--header-focusColor": theme.properties["header"]["focusColor"],
      "--tabs-selectedBackgroundColor": theme.properties["tabs"]["selectedBackgroundColor"],
      "--tabs-selectedUnderlinedColor": theme.properties["tabs"]["selectedUnderlinedColor"],
      "--tabs-selectedColor": theme.properties["tabs"]["selectedColor"],
      "--tabs-backgroundColor": theme.properties["tabs"]["selectedBackgroundColor"] + theme.properties["tabs"]["backgroundColor"],
      "--tabs-underlineColor": theme.properties["tabs"]["underlineColor"],
      "--tabs-fontColor": theme.properties["tabs"]["fontColor"],
      "--tabs-disabled": theme.properties["tabs"]["disabled"],
      "--tabs-focusColor": theme.properties["tabs"]["focusColor"],
      "--tabs-notSelectedOpacity": theme.properties["tabs"]["notSelectedOpacity"],
      "--wizard-selectedBackgroundColor": theme.properties["wizard"]["selectedBackgroundColor"],
      "--wizard-selectedFont": theme.properties["wizard"]["selectedFont"],
      "--wizard-borderColor": theme.properties["wizard"]["borderColor"],
      "--wizard-fontColor": theme.properties["wizard"]["fontColor"],
      "--wizard-lineColor": theme.properties["wizard"]["lineColor"],
      "--wizard-disabledBackground": theme.properties["wizard"]["disabledBackground"],
      "--wizard-disabledText": theme.properties["wizard"]["disabledText"],
      "--accordion-arrowColor": theme.properties["accordion"]["arrowColor"],
      "--accordion-fontColor": theme.properties["accordion"]["fontColor"],
      "--accordion-backgroundColor": theme.properties["accordion"]["backgroundColor"],
      "--accordion-hoverBackgroundColor": theme.properties["accordion"]["arrowColor"] + theme.properties["accordion"]["hoverBackgroundColor"],
      "--accordion-hoverFontColor": theme.properties["accordion"]["hoverFontColor"],
      "--accordion-disabled": theme.properties["accordion"]["disabled"],
      "--dropdown-backgroundColor": theme.properties["dropdown"]["backgroundColor"],
      "--dropdown-fontColor": theme.properties["dropdown"]["fontColor"],
      "--dropdown-dropdownBackgroundColor": theme.properties["dropdown"]["dropdownBackgroundColor"],
      "--dropdown-dropdownFontColor": theme.properties["dropdown"]["dropdownFontColor"],
      "--dropdown-hoverBackgroundOption": theme.properties["dropdown"]["hoverBackgroundOption"],
      "--dropdown-hoverBackgroundColor": theme.properties["dropdown"]["backgroundColor"] + theme.properties["dropdown"]["hoverBackgroundColor"],
      "--dropdown-disabled": theme.properties["dropdown"]["disabled"],
      "--dropdown-scrollBarThumbColor": theme.properties["dropdown"]["scrollBarThumbColor"],
      "--dropdown-scrollBarTrackColor": theme.properties["dropdown"]["scrollBarTrackColor"],
      "--link-fontColor": theme.properties["link"]["fontColor"],
      "--link-visitedColor": theme.properties["link"]["visitedColor"],
      "--link-disabledColor": theme.properties["link"]["disabledColor"],
      "--link-hoverColor": theme.properties["link"]["hoverColor"],
      "--text-color": theme.properties["text"]["color"],
      "--text-placeholderColor": theme.properties["text"]["placeholderColor"],
      "--text-disabledFontColor": theme.properties["text"]["disabledFontColor"],
      "--text-disabledLabelColor": theme.properties["text"]["disabledLabelColor"],
      "--text-disabledUnderlinedColor": theme.properties["text"]["disabledUnderlinedColor"],
      "--text-disabledAssistiveTextColor": theme.properties["text"]["disabledAssistiveTextColor"],
      "--text-disabled": theme.properties["text"]["disabled"],
      "--text-invalidColor": theme.properties["text"]["invalidColor"],
      "--text-focusColor": theme.properties["text"]["focusColor"],
      "--card-backgroundColor": theme.properties["card"]["backgroundColor"],
      "--tag-backgroundColor": theme.properties["tag"]["backgroundColor"],
      "--dialog-overlayColor": theme.properties["dialog"]["overlayColor"],
      "--dialog-separator": theme.properties["dialog"]["separator"],
      "--dialog-backgroundColor": theme.properties["dialog"]["backgroundColor"],
      "--dialog-scrollBarThumbColor": theme.properties["dialog"]["scrollBarThumbColor"],
      "--dialog-scrollBarTrackColor": theme.properties["dialog"]["scrollBarTrackColor"],
      "--table-separatorColor": theme.properties["table"]["separatorColor"],
      "--table-headerBackgroundColor": theme.properties["table"]["headerBackgroundColor"],
      "--table-headerFontColor": theme.properties["table"]["headerFontColor"],
      "--table-bodyBackgroundColor": theme.properties["table"]["bodyBackgroundColor"],
      "--table-bodyFontColor": theme.properties["table"]["bodyFontColor"],
      "--paginator-paginatorBackgroundColor": theme.properties["paginator"]["paginatorBackgroundColor"],
      "--paginator-paginatorFontColor": theme.properties["paginator"]["paginatorFontColor"],
      "--progressbar-trackColor": theme.properties["progressbar"]["trackColor"],
      "--progressbar-color": theme.properties["progressbar"]["color"],
      "--progressbar-totalLineOpacity": theme.properties["progressbar"]["totalLineOpacity"],
      "--progressbar-overlayColor": theme.properties["progressbar"]["overlayColor"],
      "--progressbar-overlayOpacity": theme.properties["progressbar"]["overlayOpacity"],
      "--spinner-trackColor": theme.properties["spinner"]["trackColor"],
      "--spinner-color": theme.properties["spinner"]["color"],
      "--spinner-overlayColor": theme.properties["spinner"]["overlayColor"],
      "--spinner-overlayOpacity": theme.properties["spinner"]["overlayOpacity"],
      "--heading-fontColor": theme.properties["heading"]["fontColor"]
    }
    for (const key in obj) {
      document.body.style.setProperty(key, obj[key]);
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
