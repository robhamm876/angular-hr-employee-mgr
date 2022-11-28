/*Author: Robert Hammond 25-11-2022 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from '../models/IEmployee';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
import { IDepartment } from '../models/IDepartment';

@Injectable({
    providedIn: 'root'
})

export class HREmployeeService{
    private static serverUrl : string = 'http://localhost:9000/'; /*Define the .net core Api url here*/

    constructor(private httpClient: HttpClient){
    }

    //Create an employee
    public createEmployee(employee : IEmployee):Observable<IEmployee>{
        let dataURL : string = 'http://localhost:9000/employee';
        return this.httpClient.post<IEmployee>(dataURL, employee).pipe(catchError(this.handleError));
    }


    //Update an employee
    public updateEmployee(employee : IEmployee, id :string):Observable<IEmployee>{
        let dataURL : string = 'http://localhost:9000/employee/' + id;
        return this.httpClient.put<IEmployee>(dataURL, employee).pipe(catchError(this.handleError));
    }

    //Delete an employee
    public deleteEmployee(id :string):Observable<{}>{
        let dataURL : string = 'http://localhost:9000/employee/' + id;
        return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
    }

    //get all Employees
    public getAllEmployees() : Observable<IEmployee[]>{
        let dataURL: string = 'http://localhost:9000/employee';
        console.log(dataURL);
        return this.httpClient.get<IEmployee[]>(dataURL).pipe(catchError(this.handleError));
        
    }

    //get single employee
    public getEmployee(id :string) : Observable<IEmployee>{
        let dataURL : string = 'http://localhost:9000/employee/' + id;
        return this.httpClient.get<IEmployee>(dataURL).pipe(catchError(this.handleError));
    }


    //Departments
    //get all Departments
    public getAllDepartments() : Observable<IDepartment[]>{
        let dataURL: string = 'http://localhost:9000/department';
        return this.httpClient.get<IDepartment[]>(dataURL).pipe(catchError(this.handleError));
        
    }

     //get single department
     public getDepartment(departmentId : string) : Observable<IDepartment>{
        let dataURL : string = 'http://localhost:9000/department/' + departmentId;
        return this.httpClient.get<IDepartment>(dataURL).pipe(catchError(this.handleError));
    }

    public getDepartmentByEmp(emplpoyee: IEmployee) : Observable<IDepartment>{
        let dataURL : string = 'http://localhost:9000/department/' + emplpoyee.departmentId;
        return this.httpClient.get<IDepartment>(dataURL).pipe(catchError(this.handleError));
    }

    //Error Handling
    public handleError (error:HttpErrorResponse){
        let errorMessage:string='';
        if(error.error instanceof ErrorEvent){
            //client error
            errorMessage = 'Error : ${error.error.message}';
        }
        else{
            errorMessage = 'Status: ${error.status} \n Message: ${error.Message }';
        }
        return throwError(errorMessage);
    }
}