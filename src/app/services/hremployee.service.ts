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
    private static serverUrl : string = '';

    constructor(private httpClient: HttpClient){
    }

    //Create an employee
    public createEmployee(employee : IEmployee):Observable<IEmployee>{
        let dataURL : string = '${this.serverUrl}/employee';
        return this.httpClient.post<IEmployee>(dataURL, employee).pipe(catchError(this.handleError));
    }


    //Update an employee
    public updateEmployee(employee : IEmployee, id :string):Observable<IEmployee>{
        let dataURL : string = '${this.serverUrl}/employee/${id}';
        return this.httpClient.put<IEmployee>(dataURL, employee).pipe(catchError(this.handleError));
    }

    //Delete an employee
    public deleteEmployee(id :string):Observable<{}>{
        let dataURL : string = '${this.serverUrl}/employee/${id}';
        return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
    }

    //get all Employees
    public getAllEmployees() : Observable<IEmployee[]>{
        let dataURL: string = '${this.serverUrl}/employee';
        return this.httpClient.get<IEmployee[]>(dataURL).pipe(catchError(this.handleError));
        
    }

    //get single employee
    public getEmployee(id :string) : Observable<IEmployee>{
        let dataURL : string = '${this.serverUrl}/employee/${id}';
        return this.httpClient.get<IEmployee>(dataURL).pipe(catchError(this.handleError));
    }


    //Departments
    //get all Departments
    public getAllDepartments() : Observable<IDepartment[]>{
        let dataURL: string = '${this.serverUrl}/department';
        return this.httpClient.get<IDepartment[]>(dataURL).pipe(catchError(this.handleError));
        
    }

     //get single department
     public getDepartment(department: IDepartment) : Observable<IDepartment>{
        let dataURL : string = '${this.serverUrl}/department/${DepartmentId}';
        return this.httpClient.get<IDepartment>(dataURL).pipe(catchError(this.handleError));
    }

    public getDepartmentByEmp(emplpoyee: IEmployee) : Observable<IDepartment>{
        let dataURL : string = '${this.serverUrl}/department/${DepartmentId}';
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