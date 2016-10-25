
define(['jquery',
'angular',
'angular_router',
'ngMdIcons',
'morph',
'sentenceCtrl',
'headerController',
'sentenceDir',
],
function(
  $,
  angular,
  router,
  ngMdIcons,
  morph,
  sentenceController,
  headerController,
  sentenceDirective
){
  var APP = {

    init : function(){

      var app = angular.module('app',['ui.router','ngMdIcons']);

      app.config(

        function($stateProvider, $urlRouterProvider){

          $urlRouterProvider.otherwise("/");

          $stateProvider
          .state('step-1',{
            url: "/:name",
            templateUrl: "js/views/01.html",
            controller : sentenceController
          })
          .state('step-2',{
            //    url:"/step-2",
            templateUrl: "js/views/02.html",
          })
          .state('step-2.a',{
            //    url:"/a",
            templateUrl: "js/views/02-a.html",
            controller : sentenceController
          })
          .state('step-2.b',{
            //    url:"/b",
            templateUrl: "js/views/02-b.html",
            controller : sentenceController

          })
          .state('step-3',{
            //    url: "/step-3",
            templateUrl: "js/views/03.html"
          })
          .state('step-3.a',{
            //    url: "/a",
            templateUrl: "js/views/03-a.html",
            controller : sentenceController
          })
          .state('step-3.b',{
            //    url: "/b",
            templateUrl: "js/views/03-b.html",
            controller : sentenceController
          })
          .state('step-4',{
            //    url: "/step-4",
            templateUrl: "js/views/04.html",
          })
          .state('step-4.a',{
            //   url: "/a",
            templateUrl: "js/views/04-a.html",
            controller : sentenceController
          })
          .state('step-5',{
            //    url: "/step-5",
            templateUrl: "js/views/05.html",
            controller : sentenceController
          })
          .state('step-5.a',{
            //   url: "/a",
            templateUrl: "js/views/05-a.html",
            controller : sentenceController
          })



        });

        app.directive(sentenceDirective.id,sentenceDirective);
        app.controller('headerController',headerController);
        angular.bootstrap(document, ['app']);

      }



    }

    return APP;


  })
