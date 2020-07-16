import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignGuidelinesPageComponent } from './design-guidelines-page.component';

describe('DesignGuidelinesPageComponent', () => {
  let component: DesignGuidelinesPageComponent;
  let fixture: ComponentFixture<DesignGuidelinesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignGuidelinesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignGuidelinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
