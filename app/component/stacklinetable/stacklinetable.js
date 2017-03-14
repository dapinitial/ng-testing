'use strict';

require('./_stacklinetable.scss');

module.exports = {
  template: require('./stacklinetable.html'),
  controller: ['$log', '$location', '$rootScope', StacklineTableController],
  controllerAs: 'stacklinetableCtrl',
  bindings: {
    product: '<'
  }
};

function StacklineTableController($log, $location, $rootScope, productService) {
  $log.debug('StacklineTableController');
};
