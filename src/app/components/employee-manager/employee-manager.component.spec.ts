import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagerComponent } from './employee-manager.component';

describe('EmployeeManagerComponent', () => {
  let component: EmployeeManagerComponent;
  let fixture: ComponentFixture<EmployeeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
