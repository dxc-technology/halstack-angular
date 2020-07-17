import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDefaultComponent } from './sidenav-default.component';

describe('SidenavDefaultComponent', () => {
  let component: SidenavDefaultComponent;
  let fixture: ComponentFixture<SidenavDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
