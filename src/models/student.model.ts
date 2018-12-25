import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  ID: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
  })
  Course?: string;

  @property({
    type: 'number',
  })
  Year?: number;

  @property({
    type: 'number',
  })
  Semester?: number;

  @property({
    type: 'string',
  })
  Email?: string;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}
