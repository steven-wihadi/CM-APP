import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarCustomerComponent } from './tool-bar-customer.component';

describe('ToolBarCustomerComponent', () => {
  let component: ToolBarCustomerComponent;
  let fixture: ComponentFixture<ToolBarCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
