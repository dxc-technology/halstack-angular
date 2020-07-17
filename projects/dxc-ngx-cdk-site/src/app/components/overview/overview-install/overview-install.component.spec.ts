import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewInstallComponent } from './overview-install.component';

describe('OverviewInstallComponent', () => {
  let component: OverviewInstallComponent;
  let fixture: ComponentFixture<OverviewInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
