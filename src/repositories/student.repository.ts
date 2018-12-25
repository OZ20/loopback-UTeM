import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Student} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype._id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Student, dataSource);
  }
}
