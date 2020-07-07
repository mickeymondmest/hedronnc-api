import {DefaultCrudRepository} from '@loopback/repository';
import {Task, TaskRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype._id,
  TaskRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Task, dataSource);
  }
}
