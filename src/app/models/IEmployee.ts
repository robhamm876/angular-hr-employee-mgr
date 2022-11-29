import { Guid } from 'guid-typescript';

export interface IEmployee{
    id? :string;
    firstName : string;
    lastName: string;
    email: string;
    departmentId: string;
    jobPosition: string;
    photoUrl :string;
}