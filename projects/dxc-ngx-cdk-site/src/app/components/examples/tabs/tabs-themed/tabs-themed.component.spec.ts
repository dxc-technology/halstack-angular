import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsThemedComponent } from './tabs-themed.component';

describe('TabsThemedComponent', () => {
  let component: TabsThemedComponent;
  let fixture: ComponentFixture<TabsThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
