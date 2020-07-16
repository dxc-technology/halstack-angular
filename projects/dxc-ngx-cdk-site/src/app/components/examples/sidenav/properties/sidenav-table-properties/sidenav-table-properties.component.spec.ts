import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavTablePropertiesComponent } from './sidenav-table-properties.component';

describe('SidenavTablePropertiesComponent', () => {
  let component: SidenavTablePropertiesComponent;
  let fixture: ComponentFixture<SidenavTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
