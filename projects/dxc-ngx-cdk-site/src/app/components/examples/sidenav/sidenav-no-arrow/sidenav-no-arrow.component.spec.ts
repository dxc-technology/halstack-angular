import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavNoArrowComponent } from './sidenav-no-arrow.component';

describe('SidenavNoArrowComponent', () => {
  let component: SidenavNoArrowComponent;
  let fixture: ComponentFixture<SidenavNoArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavNoArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavNoArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
