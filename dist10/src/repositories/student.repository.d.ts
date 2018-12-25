import { DefaultCrudRepository } from '@loopback/repository';
import { Student } from '../models';
import { MongoDataSource } from '../datasources';
export declare class StudentRepository extends DefaultCrudRepository<Student, typeof Student.prototype._id> {
    constructor(dataSource: MongoDataSource);
}
