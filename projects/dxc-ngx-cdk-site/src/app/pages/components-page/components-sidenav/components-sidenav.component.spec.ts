import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSidenavComponent } from './components-sidenav.component';

describe('ComponentsSidenavComponent', () => {
  let component: ComponentsSidenavComponent;
  let fixture: ComponentFixture<ComponentsSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
