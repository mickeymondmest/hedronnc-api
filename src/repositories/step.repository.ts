import {DefaultCrudRepository} from '@loopback/repository';
import {Step, StepRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StepRepository extends DefaultCrudRepository<
  Step,
  typeof Step.prototype._id,
  StepRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Step, dataSource);
  }
}
