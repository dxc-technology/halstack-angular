import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxcSelectComponent } from './dxc-slelect.component';


describe('DxcSliderComponent', () => {
  let component: DxcSelectComponent;
  let fixture: ComponentFixture<DxcSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
