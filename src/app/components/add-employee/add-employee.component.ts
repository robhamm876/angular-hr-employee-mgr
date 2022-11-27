import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDepartment } from 'src/app/models/IDepartment';
import { IEmployee } from 'src/app/models/IEmployee';
import { HREmployeeService } from 'src/app/services/hremployee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public loading : boolean = false;
  public employee : IEmployee = {} as IEmployee;
  public errorMessage : string | null = null;
  public department : IDepartment[] = [] as IDepartment[];

  constructor(private hremployeeService : HREmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.hremployeeService.getAllDepartments().subscribe((data : IDepartment[]) => {
      this.department = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

    public createEmployee(){
        this.hremployeeService.createEmployee(this.employee).subscribe((data : IEmployee) => {
          this.router.navigate(['/']).then();
        }, (error) => {
          this.errorMessage = error;
          this.router.navigate(['/human-resources/add']).then();
        });
    }
}
