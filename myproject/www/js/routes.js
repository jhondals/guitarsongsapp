angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('guitarSongbook.songLists', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/songLists.html',
        controller: 'songListsCtrl'
      }
    }
  })

  .state('guitarSongbook.favorites', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('guitarSongbook.guitarChords', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/guitarChords.html',
        controller: 'guitarChordsCtrl'
      }
    }
  })

  .state('guitarSongbook.addNewSong', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewSong.html',
        controller: 'addNewSongCtrl'
      }
    }
  })

  .state('guitarSongbook', {
    url: '/side-menu21',
    templateUrl: 'templates/guitarSongbook.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});