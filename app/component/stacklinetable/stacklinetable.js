'use strict';

require('./_stacklinetable.scss');

module.exports = {
  template: require('./stacklinetable.html'),
  controller: ['$log', '$location', '$rootScope', '$scope', 'productService',  StacklineTableController],
  controllerAs: 'vm',
  bindings: {
    product: '<'
  }
};

function StacklineTableController($log, $location, $rootScope, $scope,  productService) {
  $log.debug('StacklineTableController');
  $log.log(productService);
  //
  // $scope.sortName = 'firstName';
  // $scope.sortReverse = false;

  let vm = this;
  productService.fetchProducts().then(products => vm.products = products);

}
