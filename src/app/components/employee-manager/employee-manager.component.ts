import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/IEmployee';
import { HREmployeeService } from 'src/app/services/hremployee.service';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {

  public loading:boolean = false;
  public employee:IEmployee[] = [];
  public errorMessage :string | null = null;

  constructor(private employeeService : HREmployeeService) { 

  }

  ngOnInit(): void {
    this.loading = true;
    this.employeeService.getAllEmployees().subscribe((data : IEmployee[]) => {
      this.employee = data;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false;
    });
  }

}
