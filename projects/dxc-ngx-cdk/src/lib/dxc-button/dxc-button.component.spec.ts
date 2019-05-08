import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DxcButtonComponent } from './dxc-button.component';
import { DxcButtonModule } from './dxc-button.module';

describe('DxcButtonComponent', () => {
  let component: DxcButtonComponent;
  let fixture: ComponentFixture<TestAppComponent>;
  let buttonDebugElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DxcButtonModule],
      declarations: [TestAppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    buttonDebugElement = fixture.debugElement.query(By.css('button'));
    expect(
      buttonDebugElement.nativeElement.classList.contains('mat-button')
    ).toBe(true);
    expect(buttonDebugElement.nativeElement.disabled).toBe(true);
  });
});

/** Test component that contains an MatButton. */
@Component({
  selector: 'test-app',
  template: `
    <dxc-button [disableRipple]="rippleDisabled" [disabled]="isDisabled">
      Button 1
    </dxc-button>
  `
})
class TestAppComponent {
  isDisabled: boolean;
  rippleDisabled: boolean;
  buttonType: string;

  constructor() {
    this.isDisabled = true;
    this.rippleDisabled = true;
    this.buttonType = 'outlined';
  }
}
