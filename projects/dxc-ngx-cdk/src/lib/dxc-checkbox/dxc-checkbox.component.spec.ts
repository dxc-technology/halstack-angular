import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DxcCheckboxComponent } from './dxc-checkbox.component';
import { DxcCheckboxModule } from './dxc-checkbox.module';

describe('DxcCheckboxComponent', () => {
  let component: DxcCheckboxComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let checkboxDebugElement: any;
  let checkboxNativeElement: HTMLElement;
  let inputElement: HTMLInputElement;
  let labelElement: HTMLLabelElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DxcCheckboxModule],
      declarations: [TestAppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppComponent);
    component = fixture.debugElement.componentInstance;
    checkboxDebugElement = fixture.debugElement.query(By.css('mat-checkbox'));
    checkboxNativeElement = checkboxDebugElement.nativeElement;
    fixture.detectChanges();
    inputElement = checkboxNativeElement.querySelector(
      'input'
    ) as HTMLInputElement;
    labelElement = checkboxNativeElement.querySelector(
      'span'
    ) as HTMLLabelElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(
      checkboxDebugElement.nativeElement.classList.contains(
        'mat-checkbox-disabled'
      )
    ).toBe(true);
    expect(
      checkboxDebugElement.nativeElement.classList.contains(
        'mat-checkbox-indeterminate'
      )
    ).toBe(true);
    expect(checkboxNativeElement.classList).not.toContain(
      'mat-checkbox-checked'
    );
    expect(inputElement.checked).toBe(false);
    expect(labelElement.innerText).toContain('Test');
  });
});

/** Test component that contains an MatCheckbox. */
@Component({
  selector: 'test-app',
  template: `
    <dxc-checkbox
      [(ngModel)]="isChecked"
      indeterminate
      labelPosition="before"
      disableRipple
      disabled
      name="test"
      id="checkboxTest"
      text="Test"
      (change)="onChange($event)"
      (indeterminateChange)="onIndeterminateChange($event)"
    >
    </dxc-checkbox>
  `
})
class TestAppComponent {
  isChecked: boolean;

  constructor() {
    this.isChecked = true;
  }

  onChange(event: any) {
    console.log(event);
  }

  onIndeterminateChange(event: any) {
    console.log(event);
  }
}
