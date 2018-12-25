import { Count, Filter, Where } from '@loopback/repository';
import { Student } from '../models';
import { StudentRepository } from '../repositories';
export declare class StudentController {
    studentRepository: StudentRepository;
    constructor(studentRepository: StudentRepository);
    create(student: Student): Promise<Student>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Student[]>;
    updateAll(student: Student, where?: Where): Promise<Count>;
    findById(id: string): Promise<Student>;
    updateById(id: string, student: Student): Promise<void>;
    replaceById(id: string, student: Student): Promise<void>;
    deleteById(id: string): Promise<void>;
}
