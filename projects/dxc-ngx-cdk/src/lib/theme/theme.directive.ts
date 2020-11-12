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
    this.setVariableLinks(this.theme);
  }

  setPropertiesCss(theme: Theme){
    let obj = {
      "--alert-infoColor": theme.properties["alert"]["infoColor"],
      "--alert-confirmColor": theme.properties["alert"]["confirmColor"],
      "--alert-warningColor": theme.properties["alert"]["warningColor"],
      "--alert-errorColor": theme.properties["alert"]["errorColor"],
      "--alert-overlayColor": theme.properties["alert"]["overlayColor"],
      "--alert-overlayOpacity": theme.properties["alert"]["overlayOpacity"],
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
      "--select-disabled": theme.properties["select"]["disabled"],
      "--select-scrollBarThumbColor": theme.properties["select"]["scrollBarThumbColor"],
      "--select-scrollBarTrackColor": theme.properties["select"]["scrollBarTrackColor"],
      "--select-hoverOptionBackgroundColor": theme.properties["select"]["selectedOptionBackgroundColor"] + theme.properties["select"]["hoverOptionBackgroundColor"],
      "--slider-color": theme.properties["slider"]["color"],
      "--slider-totalLine": theme.properties["slider"]["totalLine"],
      "--slider-disabledThumbBackgroundColor": theme.properties["slider"]["disabledThumbBackgroundColor"],
      "--slider-disabledDotsBackgroundColor": theme.properties["slider"]["disabledDotsBackgroundColor"],
      "--slider-disabledTrackLine": theme.properties["slider"]["disabledTrackLine"],
      "--slider-disabledtotalLine": theme.properties["slider"]["disabledtotalLine"],
      "--slider-focusColor": theme.properties["slider"]["focusColor"],
      "--switch-checkedTrackBackgroundColor": theme.properties["switch"]["checkedTrackBackgroundColor"],
      "--switch-checkedThumbBackgroundColor": theme.properties["switch"]["checkedThumbBackgroundColor"],
      "--switch-uncheckedThumbBackgroundColor": theme.properties["switch"]["uncheckedThumbBackgroundColor"],
      "--switch-uncheckedTrackBackgroundColor": theme.properties["switch"]["uncheckedTrackBackgroundColor"],
      "--switch-disabled": theme.properties["switch"]["disabled"],
      "--switch-requiredColor": theme.properties["switch"]["requiredColor"],
      "--switch-focusColor": theme.properties["switch"]["focusColor"],
      "--switch-fontColor": theme.properties["switch"]["fontColor"],
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
      "--sidenav-backgroundColor": theme.properties["sidenav"]["backgroundColor"],
      "--sidenav-arrowContainerColor": theme.properties["sidenav"]["arrowContainerColor"],
      "--sidenav-arrowColor": theme.properties["sidenav"]["arrowColor"],
      "--sidenav-arrowContainerOpacity": theme.properties["sidenav"]["arrowContainerOpacity"],
      "--sidenav-focusColor": theme.properties["sidenav"]["focusColor"],
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
      "--tabs-selectedFontColor": theme.properties["tabs"]["selectedFontColor"],
      "--tabs-backgroundColor": theme.properties["tabs"]["selectedBackgroundColor"] + theme.properties["tabs"]["backgroundColor"],
      "--tabs-underlineColor": theme.properties["tabs"]["underlineColor"],
      "--tabs-fontColor": theme.properties["tabs"]["fontColor"],
      "--tabs-disabled": theme.properties["tabs"]["disabled"],
      "--tabs-focusColor": theme.properties["tabs"]["focusColor"],
      "--tabs-notSelectedOpacity": theme.properties["tabs"]["notSelectedOpacity"],
      "--wizard-selectedBackgroundColor": theme.properties["wizard"]["selectedBackgroundColor"],
      "--wizard-selectedFont": theme.properties["wizard"]["selectedFont"],
      "--wizard-fontColor": theme.properties["wizard"]["fontColor"],
      "--wizard-lineColor": theme.properties["wizard"]["lineColor"],
      "--wizard-disabledBackground": theme.properties["wizard"]["disabledBackground"],
      "--wizard-disabledFont": theme.properties["wizard"]["disabledFont"],
      "--wizard-notVisitedOpacity": theme.properties["wizard"]["notVisitedOpacity"],
      "--wizard-disabled": theme.properties["wizard"]["disabled"],
      "--wizard-focusColor": theme.properties["wizard"]["focusColor"],
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
      "--link-visitedFontColor": theme.properties["link"]["visitedFontColor"],
      "--link-disabledColor": theme.properties["link"]["disabledColor"],
      "--link-hoverFontColor": theme.properties["link"]["hoverFontColor"],
      "--link-underlinedBackgroundColor": theme.properties["link"]["underlinedBackgroundColor"],
      "--link-disabledUnderlinedBackgroundColor": theme.properties["link"]["disabledUnderlinedBackgroundColor"],
      "--link-visitedUnderlinedBackgroundColor": theme.properties["link"]["visitedUnderlinedBackgroundColor"],
      "--inputText-placeholderColor": theme.properties["inputText"]["placeholderColor"],
      "--inputText-disabled": theme.properties["inputText"]["disabled"],
      "--inputText-invalidColor": theme.properties["inputText"]["invalidColor"],
      "--inputText-focusColor": theme.properties["inputText"]["focusColor"],
      "--inputText-fontColor": theme.properties["inputText"]["fontColor"],
      "--inputText-selectedOptionBackgroundColor": theme.properties["inputText"]["selectedOptionBackgroundColor"],
      "--inputText-hoverOptionBackgroundColor": theme.properties["inputText"]["selectedOptionBackgroundColor"] + theme.properties["inputText"]["hoverOptionBackgroundColor"],
      "--inputText-hoverOptionColor": theme.properties["inputText"]["hoverOptionColor"],
      "--inputText-scrollBarThumbColor": theme.properties["inputText"]["scrollBarThumbColor"],
      "--inputText-scrollBarTrackColor": theme.properties["inputText"]["scrollBarTrackColor"],
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
      "--progressbar-trackLine": theme.properties["progressbar"]["trackLine"],
      "--progressbar-totalLine": theme.properties["progressbar"]["totalLine"],
      "--progressbar-totalLineOpacity": theme.properties["progressbar"]["totalLineOpacity"],
      "--progressbar-overlayColor": theme.properties["progressbar"]["overlayColor"],
      "--progressbar-overlayOpacity": theme.properties["progressbar"]["overlayOpacity"],
      "--progressbar-fontColor": theme.properties["progressbar"]["fontColor"],
      "--spinner-trackCircleColor": theme.properties["spinner"]["trackCircleColor"],
      "--spinner-totalCircleColor": theme.properties["spinner"]["totalCircleColor"],
      "--spinner-overlayColor": theme.properties["spinner"]["overlayColor"],
      "--spinner-overlayOpacity": theme.properties["spinner"]["overlayOpacity"],
      "--spinner-fontColor": theme.properties["spinner"]["fontColor"],
      "--heading-fontColor": theme.properties["heading"]["fontColor"],
      "--textarea-fontColor": theme.properties["textarea"]["fontColor"],
      "--textarea-placeholderColor": theme.properties["textarea"]["placeholderColor"],
      "--textarea-disabled": theme.properties["textarea"]["disabled"],
      "--textarea-invalidColor": theme.properties["textarea"]["invalidColor"],
      "--textarea-scrollBarThumbColor": theme.properties["textarea"]["scrollBarThumbColor"],
      "--textarea-scrollBarTrackColor": theme.properties["textarea"]["scrollBarTrackColor"],
      "--toggle-disabled": theme.properties["toggle"]["disabled"],
      "--toggle-unselectedBackgroundColor": theme.properties["toggle"]["unselectedBackgroundColor"],
      "--toggle-unselectedHoverBackgroundColor": theme.properties["toggle"]["unselectedHoverBackgroundColor"],
      "--toggle-unselectedFontColor": theme.properties["toggle"]["unselectedFontColor"],
      "--toggle-unselectedHoverFontColor": theme.properties["toggle"]["unselectedHoverFontColor"],
      "--toggle-selectedBackgroundColor": theme.properties["toggle"]["selectedBackgroundColor"],
      "--toggle-selectedHoverBackgroundColor": theme.properties["toggle"]["selectedHoverBackgroundColor"],
      "--toggle-selectedFontColor": theme.properties["toggle"]["selectedFontColor"],
      "--toggle-selectedHoverFontColor": theme.properties["toggle"]["selectedHoverFontColor"],
    }
    for (const key in obj) {
      document.body.style.setProperty(key, obj[key]);
    }
  }

  setVariableLinks(theme: Theme):void {
    const footerLogo = theme.properties["footer"]["logo"];
    const headerLogo = theme.properties["header"]["logo"];
    const headerLogoResponsive = theme.properties["header"]["logoResponsive"];
    document.body.setAttribute("footer-logo", footerLogo);
    document.body.setAttribute("header-logo", headerLogo);
    document.body.setAttribute("header-logoResponsive", headerLogoResponsive);
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
