'use strict';

require('./_productnavigation.scss');

module.exports = {
  template: require('./productnavigation.html'),
  controller: ['$log', '$location', '$rootScope', ProductNavigationController],
  controllerAs: 'productnavigationCtrl',
  bindings: {
    product: '<'
  }
};

function ProductNavigationController($log, $location, $rootScope, productService) {
  $log.debug('ProductNavigationController');
};
