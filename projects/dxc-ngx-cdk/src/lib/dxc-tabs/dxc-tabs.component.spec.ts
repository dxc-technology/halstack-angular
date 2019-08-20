import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxcTabsComponent } from './dxc-tabs.component';


describe('DxcSliderComponent', () => {
  let component: DxcTabsComponent;
  let fixture: ComponentFixture<DxcTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
