'use strict';

/**
 * don service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::don.don');
