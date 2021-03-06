'use strict';

require('./_productdetails.scss');

module.exports = {
  template: require('./productdetails.html'),
  controller: ['$log', 'productService', ProductDetailsController],
  controllerAs: 'vm',
  bindings: {
    product: '<'
  }
};

function ProductDetailsController($log, productService) {
  $log.debug('ProductDetailsController');
  $log.log(productService);
  let vm = this;
  productService.fetchProducts().then(products => vm.products = products);
}
