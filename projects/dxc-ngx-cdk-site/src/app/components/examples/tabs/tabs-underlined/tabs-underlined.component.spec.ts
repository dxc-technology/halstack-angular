import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsUnderlinedComponent } from './tabs-underlined.component';
describe('TabsUnderlinedComponent', () => {
  let component: TabsUnderlinedComponent;
  let fixture: ComponentFixture<TabsUnderlinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsUnderlinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsUnderlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
