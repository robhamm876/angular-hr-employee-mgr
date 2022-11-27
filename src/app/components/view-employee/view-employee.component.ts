import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { IDepartment } from 'src/app/models/IDepartment';
import { IEmployee } from 'src/app/models/IEmployee';
import { HREmployeeService } from 'src/app/services/hremployee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  
  public loading: boolean = false;
  public id: string | null = null;
  public employee: IEmployee = {} as IEmployee;
  public errorMessage: string | null = null; 
  public department: IDepartment = {} as IDepartment;

  constructor(private activatedRoute : ActivatedRoute, private hrEmployeeService : HREmployeeService) { 

  }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.id = param.get('id');
    });
    
    if(this.id)
    {
      this.loading = true; 
      this.hrEmployeeService.getEmployee(this.id).subscribe((data : IEmployee) => {
          this.employee = data;
          this.loading = false;
          this.hrEmployeeService.getDepartmentByEmp(data).subscribe((data:IDepartment) => {
              this.department = data;
          })
       }, (error: string | null) => {
          this.errorMessage = error;
          this.loading = false;
       });
    }

  }

  public isNotEmpty(){
    return Object.keys(this.employee).length > 0 && Object.keys(this.department).length > 0;
  }

}
