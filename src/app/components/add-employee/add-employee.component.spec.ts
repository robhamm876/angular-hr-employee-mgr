/*Author: Robert Hammond 25-11-2022 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
