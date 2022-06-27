'use strict';

/**
 * recenser service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recenser.recenser');
