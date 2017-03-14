'use strict';

require('./_stacklinegraph.scss');

module.exports = {
  template: require('./stacklinegraph.html'),
  controller: ['$log', '$location', '$rootScope', StacklineGraphController],
  controllerAs: 'stacklinegraphCtrl',
  bindings: {
    product: '<'
  }
};

function StacklineGraphController($log, $location, $rootScope, productService) {
  $log.debug('StacklineGraphController');
};
