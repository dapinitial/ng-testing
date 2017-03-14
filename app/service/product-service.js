'use strict';

module.exports = ['$q', '$log', '$http', productService];

function productService($q, $log, $http) {
  $log.debug('productService()');

  let service = {};
  service.products = [];

  service.fetchProducts = function() {
    $log.debug('productService.fetchProducts()');
      let url = './app/assets/api/data.json';
      return $http.get(url, () => {
    })
    .then( res => {
      $log.log('products retrieved');
      service.products = res.data;
      return service.products;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
