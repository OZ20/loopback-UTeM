import { Entity } from '@loopback/repository';
export declare class Student extends Entity {
    _id?: string;
    ID: string;
    Name: string;
    Course?: string;
    Year?: number;
    Semester?: number;
    Email?: string;
    constructor(data?: Partial<Student>);
}
