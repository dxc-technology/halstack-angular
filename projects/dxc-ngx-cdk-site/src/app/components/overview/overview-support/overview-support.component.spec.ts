import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSupportComponent } from './overview-support.component';

describe('OverviewSupportComponent', () => {
  let component: OverviewSupportComponent;
  let fixture: ComponentFixture<OverviewSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
