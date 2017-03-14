'use strict';

require('./_productdetails.scss');

module.exports = {
  template: require('./productdetails.html'),
  controller: ['$log', '$scope', 'productService', ProductDetailsController],
  controllerAs: 'vm',
  bindings: {
    product: '<'
  }
};

function ProductDetailsController($log, $scope, productService) {
  $log.debug('ProductDetailsController');
  $log.log(productService);
  $log.log(productService.products);
  this.products = productService.products;
}
