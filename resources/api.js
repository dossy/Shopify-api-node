'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates an Api instance.
 *
 * @param {Shopify} shopify Reference to the Shopify instance
 * @constructor
 * @public
 */
function Api(shopify) {
  this.shopify = shopify;

  this.name = 'api';
  this.key = 'api';
}

assign(Api.prototype, base);

/**
 * Sends a GraphQL query.
 *
 * @param {String} query The GraphQL query to send
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Api.prototype.graphql = function graphql(query) {
  const url = this.buildUrl(`graphql`);
  url.json = false;
  url.graphql = true;
  url.body = query;
  return this.shopify.request(url, 'POST');
};

module.exports = Api;
