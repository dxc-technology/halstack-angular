import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewUseComponent } from './overview-use.component';

describe('OverviewUseComponent', () => {
  let component: OverviewUseComponent;
  let fixture: ComponentFixture<OverviewUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
