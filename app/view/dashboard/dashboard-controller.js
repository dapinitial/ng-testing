'use strict';

require('./_dashboard.scss');

module.exports = ['$log', '$rootScope', 'productService', DashboardController];

function DashboardController($log, $rootScope, productService) {
  $log.debug('DashboardController');

  this.products = [];

   this.fetchProducts = function() {
     productService.fetchProducts()
     .then( products => {
       this.products = products;
     });
   };

   this.fetchProducts();

   $rootScope.$on('$locationChangeSuccess', () => {
     this.fetchProducts();
   });

};
