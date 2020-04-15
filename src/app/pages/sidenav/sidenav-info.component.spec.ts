import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavInfoComponent } from './sidenav-info.component';

describe('SidenavInfoComponent', () => {
  let component: SidenavInfoComponent;
  let fixture: ComponentFixture<SidenavInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
