/*Author: Robert Hammond 25-11-2022 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { IDepartment } from 'src/app/models/IDepartment';
import { IEmployee } from 'src/app/models/IEmployee';
import { HREmployeeService } from 'src/app/services/hremployee.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  public loading : boolean = false;
  public id : string | null = null;
 public employee: IEmployee = {} as IEmployee;
 public errorMessage: string | null = null;
 public department:  IDepartment[] = [] as IDepartment[];

  constructor(private activatedRoute: ActivatedRoute, private hrEmployeeService : HREmployeeService, private router : Router) { 

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param : ParamMap) => {
      this.id = param.get('id');
    });

    if(this.id){
            this.loading = true;  
            this.hrEmployeeService.getEmployee(this.id).subscribe((data : IEmployee) => {
            this.employee = data;
            this.loading = false;
            this.hrEmployeeService.getAllDepartments().subscribe((data : IDepartment[]) =>{
                this.department = data;
            });
        }, (error) => {
          this.errorMessage = error;
          this.loading = false;
        });
    }
  }

  public submitUpdate(){
    if(this.id) {
      this.hrEmployeeService.updateEmployee(this.employee, this.id).subscribe((data : IEmployee) => {
        this.router.navigate(['/']).then();
      }, (error) => {
        this.errorMessage = error;
        this.router.navigate(['/human-resources/edit/${this.id}']).then();
      });
    }
    
  }
}
