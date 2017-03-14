'use strict';

require('./_productfilters.scss');

module.exports = {
  template: require('./productfilters.html'),
  controller: ['$log', '$location', '$rootScope', ProductFiltersController],
  controllerAs: 'productfiltersCtrl',
  bindings: {
    product: '<'
  }
};

function ProductFiltersController($log, productService) {
  $log.debug('ProductFiltersController');
};
