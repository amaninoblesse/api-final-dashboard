'use strict';

/**
 * gestionnaire service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gestionnaire.gestionnaire');
