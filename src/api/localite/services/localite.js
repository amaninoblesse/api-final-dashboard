'use strict';

/**
 * localite service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::localite.localite');
