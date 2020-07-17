import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavExampleComponent } from './sidenav-example.component';

describe('SidenavExampleComponent', () => {
  let component: SidenavExampleComponent;
  let fixture: ComponentFixture<SidenavExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
