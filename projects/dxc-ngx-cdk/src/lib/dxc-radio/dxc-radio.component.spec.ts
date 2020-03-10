import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DxcRadioComponent } from './dxc-radio.component';
import { DxcRadioModule } from './dxc-radio.module';

describe('DxcRadioComponent', () => {
  let component: DxcRadioComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let radioDebugElement: any;
  let radioNativeElement: HTMLElement;
  let inputElement: HTMLInputElement;
  let labelElement: HTMLLabelElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DxcRadioModule],
      declarations: [TestAppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppComponent);
    component = fixture.debugElement.componentInstance;
    radioDebugElement = fixture.debugElement.query(By.css('mat-radio-button'));
    radioNativeElement = radioDebugElement.nativeElement;
    fixture.detectChanges();
    inputElement = radioNativeElement.querySelector(
      'input'
    ) as HTMLInputElement;
    labelElement = radioNativeElement.querySelector(
      'span'
    ) as HTMLLabelElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(
      radioDebugElement.nativeElement.classList.contains(
        'mat-radio-button-disabled'
      )
    ).toBe(false);
    expect(inputElement.checked).toBe(true);
  });
});

/** Test component that contains an MatRadio. */
@Component({
  selector: 'test-app',
  template: `
    <dxc-radio
      labelPosition="before"
      disableRipple
      disabled
      name="test"
      value="Test"
      (change)="onChange($event)"
      [checked]="checked"
    >
    </dxc-radio>
  `
})
class TestAppComponent {
  checked: boolean;

  constructor() {
    this.checked = true;
  }

  onChange(event: any) {
  }
}
