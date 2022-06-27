'use strict';

/**
 * localite router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::localite.localite');
