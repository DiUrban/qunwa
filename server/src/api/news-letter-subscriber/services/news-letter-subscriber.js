'use strict';

/**
 * news-letter-subscriber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-letter-subscriber.news-letter-subscriber');
