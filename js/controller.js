// create the module and name it scotchApp
var cloudData = angular.module('cloudData', ['ngRoute', 'firebase', 'ui.bootstrap']);
	
	    // configure our routes
    cloudData.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
		 
			// route for the product list page
            .when('/product', {
                templateUrl : 'pages/product.html',
                controller  : 'prodListController'
            })
		   .when('/addProduct', {
                templateUrl : 'pages/addProduct.html',
                controller  : 'addProdController'
            });
    });

 cloudData.controller('mainController', function($scope, $firebase) {
	 $scope.currentPage = null;
	 function setPageValue(curPage){
		 $scope.currentPage = curPage;
		 console.log(curPage);
	 }
	  function isCurrentPage(pageValue){
		 return $scope.currentPage !== null && pageValue === $scope.currentPage;
	 }
	 $scope.setPageValue = setPageValue;
	 $scope.isCurrentPage = isCurrentPage;
	 
 });
cloudData.controller('offCanvas', function($scope, $firebase) {
     $scope.callCanvas = function () {
        $('.row-offcanvas').toggleClass('active')
     };
 });

  cloudData.controller('aboutController', function($scope) {
       
    });

    cloudData.controller('contactController', function($scope) {
       
    });

cloudData.controller('prodListController', function($scope) {
        
    });
cloudData.controller('addProdController', function($scope) {
        
    });
cloudData.controller('sidebarControl', function($scope){
	
});

 cloudData.controller('CarouselDemoCtrl', function($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  slides.push({
      image: 'images/header1.png',
      text: "header1"
   },{
      image: 'images/header2.jpg',
      text: "header2"
   },{
      image: 'images/header3.png',
      text: "header3"
   });
});

