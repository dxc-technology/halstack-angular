import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsUncontrolledComponent } from './tabs-uncontrolled.component';

describe('TabsUncontrolledComponent', () => {
  let component: TabsUncontrolledComponent;
  let fixture: ComponentFixture<TabsUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
