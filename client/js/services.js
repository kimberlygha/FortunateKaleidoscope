//this file is all done ---- dont mess with it

angular.module('sniphub.services', [])

.factory('SniphubServices', function ($http) {

  var fetchTopTen = function () {
    return $http({
      method: 'GET',
      url: '/api/topten'
    }).then(function successCallback ( response ) {
      //store all links in scope.data
      return response;
    }, function errorCallback ( response ) {
      console.log('Error in getting snippets from db');
    });
  };
  var addSnippet = function ( user, text, title, tabPrefix, scope ) {
    //tags should be an array
    return $http({
      method: 'POST',
      url: '/api/snippet',
      data: {
        "username" : user,
        "text" : text,
        "tabPrefix" : tabPrefix,
        "title" : title,
        "scope" : scope,
        "tags" : [],
       }
    }).then(function successCallback ( response ) {
      console.log("after success")
      return response;
    });
  };
  var fetchByUser = function ( user ) {
    // /api/user/:userId ->
    return $http({
      method: 'GET',
      url: '/api/user/' + user,
    }).then(function successCallback ( response ) {
      //store all links in scope.data
      return response;
    }, function errorCallback ( response ) {
      console.log('Error in getting snippets from db');
    });
  };
  var searchByTerm = function ( term ) {
    return $http({
      method: 'POST',
      url: '/api/search',
      data: { "term" : term }
    }).then(function successCallback ( response ) {
      //store all links in scope.data
      return response;
    }, function errorCallback ( response ) {
      console.log('Error in getting snippets from db');
    });
  };
  return {
    fetchTopTen : fetchTopTen,
    addSnippet : addSnippet,
    fetchByUser: fetchByUser,
    searchByTerm : searchByTerm
  };
})

.factory('Auth', function ($http, $location, $window) {
  //**fix this to work with YiLen's stuff**

  var isAuth = function () {
    var isAuth = document.cookie.split( ';' )
                .map( function( x ) { return x.trim().split( '=' ); } )
                .reduce(function( a, b ) { a[ b[ 0 ] ] = b[ 1 ]; return a; },
                {} )[ "isAuth" ];
    return isAuth === 'true' ? true : false;
  };



  return {
    isAuth: isAuth,
  };
});
