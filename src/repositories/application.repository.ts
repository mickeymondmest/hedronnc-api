import {DefaultCrudRepository} from '@loopback/repository';
import {Application, ApplicationRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ApplicationRepository extends DefaultCrudRepository<
  Application,
  typeof Application.prototype._id,
  ApplicationRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Application, dataSource);
  }
}
