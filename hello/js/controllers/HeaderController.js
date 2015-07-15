

define(['jquery','tweenMax'],function($, tweenMax){


   var HeaderController = function($scope, $state, $timeout, $rootScope, $stateParams, $timeout){

       $scope.iconMenu = 'timer_auto';

       $scope.$on('openMenu',function(){
           $scope.openMenu();
       })

        $scope.openMenu = function(){

           if( $('header').hasClass('open') ) {
               close();
           } else {
               open();
           }

            $('header').toggleClass('open');

        }


       function open(){

           $scope.iconMenu = 'close';


           tweenMax.to($('.contacts'),1,{
               y : 0,
               z:0.1,
               ease: Expo.easeInOut,
               onComplete : function(){}

           })

           $timeout(function(){
               $('h2').addClass('underline');
           },500);


           tweenMax.staggerFromTo('.ico-group a',2,
               { opacity:0, y:-100 },
               { opacity:1, y:0, ease: Elastic.easeInOut, delay:.2 },.1)



       }

       function close(){


           $scope.iconMenu = 'timer_auto';

           tweenMax.to($('.contacts'),1,{
               y : '-100%',
               z:0.1,
               ease: Expo.easeInOut,
               clearProps:"all",
               onComplete: function(){
                   $('h2').removeClass('underline')
               }
           })

       }




   }

    return HeaderController;




})