import * as Sequelize from 'sequelize';
import * as DataTypes from '../../../../node_modules/sequelize/lib/data-types';
import {database as config} from 'config';
import {appdir} from '../index';

var db = new Sequelize(
  config.name,
  config.username,
  config.password,
  config.options
);

var models = []; //TODO crawl subfolder

var exports = {};

models.forEach(function (module) {
  if (! module.model) {
    throw new Error("Invalid model data! Please check " . module.name);
  }

  var model = module.model(Sequelize, DataType);
  db[model.name] = model;

  if (module.associations) {
    module.associations(db);
  }
});

