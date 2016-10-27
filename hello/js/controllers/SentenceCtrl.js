

define(['jquery','tweenMax','wireframe'],function($,tweenMax, WRF){


  var SentenceController = function($scope, $state, $timeout, $rootScope, $stateParams, $rootScope){

    var Loader = {
      el : $('#loader'),

      show : function(){
        Loader.el.removeClass('hide');
      },

      hide : function(){
        Loader.el.addClass('hide');
      }
    }


    switch ($state.current.name) {

      /* step-1
      ___________________________________________________________________________ */

      case 'step-1' :

      $('.restart').hide();

      if($stateParams.name === '') {

        if(window.localStorage) {
          if(window.localStorage.getItem('name') !== null) {
            $scope.visitor = window.localStorage.getItem('name');
          } else {
            $scope.visitor = 'visitor';
          }
        } else {
          $scope.visitor = 'visitor';
        }

      } else {
        $scope.visitor = $stateParams.name;
        if(window.localStorage) {
          window.localStorage.setItem('name', $scope.visitor);
        }
      }


      $scope.text = ['Hello^500 <strong>'+$scope.visitor+'</strong>, ^1000 <br> HOW ARE YOU?'];

      if(Modernizr.speechsynthesis) {
        var Voice = new SpeechSynthesisUtterance();
        Voice.lang = 'en-EN';
        Voice.text = 'Hello '+$scope.visitor+' !How are you?';
        speechSynthesis.speak(Voice);
      }

      $scope.$on('$viewContentLoaded',function(){

        Loader.hide();

        $scope.$broadcast('typing');
      })


      break;

      /* step-2.a
      ___________________________________________________________________________ */

      case 'step-2.a' :

      Loader.show();

      $scope.icon = 'thumb_up';
      $scope.text = ["Great!^500 <br/> I'm happy you're good.", "Can i introduce my self?"];

      if(Modernizr.speechsynthesis) {
        var Voice = new SpeechSynthesisUtterance();
        Voice.lang = 'en-EN';
        Voice.text = "!Great! I'm happy you're good. Can i introduce my self?";
        speechSynthesis.speak(Voice);
      }




      $scope.$on('$viewContentLoaded',function(){

        Loader.hide();

        $timeout(function(){
          $scope.icon = 'face';
          $('.ico').css({'width':'15%'});
          $scope.$broadcast('typing');

        },700)

      })

      break;

      /* step-2.b
      ___________________________________________________________________________ */

      case 'step-2.b' :

      Loader.show();


      $scope.icon = 'bad';
      $scope.text =
      ["Oh!^500 Really sorry <br/>is not a great day.^600",
      "Can i introduce my self?^500 <br/> <strong>Anyway?</strong>"];

      if(Modernizr.speechsynthesis) {
        var Voice = new SpeechSynthesisUtterance();
        Voice.lang = 'en-EN';
        Voice.text = "Oh! Really sorry is not a great day";
        speechSynthesis.speak(Voice);

        setTimeout(function () {
          var Voice = new SpeechSynthesisUtterance();
          Voice.lang = 'en-EN';
          Voice.text = "Can i introduce my self anyway?";
          speechSynthesis.speak(Voice);
        }, 4000);
      }

      $scope.$on('$viewContentLoaded',function(){

        Loader.hide();


        $timeout(function(){
          $('.ico').css({'width':'15%'});
          $scope.$broadcast('typing');

        },700)

      })

      break;

      /* step-3.a
      ___________________________________________________________________________ */

      case 'step-3.a' :

      Loader.show();

      $scope.icon = 'code';

      $scope.text =
      ["My name is^500 <br/> <strong>Renato Longobardi</strong> ^1000",
      "I'm a senior<br/>  <strong> frontend developer</strong> ^800",
      ""];

      $scope.text2 =
      ["I love coding ^800",
      "i'm passionate about <br/> <strong>digital, web and interaction</strong> ^500",
      "i love research and^500<br/> experiment with the <br/><strong>latest technologies^500</strong>"];

      if(Modernizr.speechsynthesis) {
        var Voice = new SpeechSynthesisUtterance();
        Voice.lang = 'en-EN';
        Voice.text = "My name is Renato Longobardi";
        speechSynthesis.speak(Voice);

        setTimeout(function () {
          var Voice = new SpeechSynthesisUtterance();
          Voice.lang = 'en-EN';
          Voice.text = "I'm a senior frontend developer";
          speechSynthesis.speak(Voice);

          setTimeout(function () {
            var Voice = new SpeechSynthesisUtterance();
            Voice.lang = 'en-EN';
            Voice.text = "I love coding";
            speechSynthesis.speak(Voice);

            setTimeout(function () {
              var Voice = new SpeechSynthesisUtterance();
              Voice.lang = 'en-EN';
              Voice.text = "i'm passionate about digital, web and interaction";
              speechSynthesis.speak(Voice);

              setTimeout(function () {
                var Voice = new SpeechSynthesisUtterance();
                Voice.lang = 'en-EN';
                Voice.text = "i love research and experiment with the latest technologies";
                speechSynthesis.speak(Voice);
              }, 5200);


            }, 3200);

          }, 3000);


        }, 3500);


      }

      $scope.$on('$viewContentLoaded',function(){

        Loader.hide();

        $scope.$broadcast('typing');

        $scope.$on('type-completed',function(){

          $('.typing').removeData('typed');
          $('.typed-cursor:first').remove();

          $('.typing').typed({
            strings: $scope.text2,
            contentType: 'html',
            typeSpeed: 0,
            preStringTyped : function(e){
              if(e+1 == 1) {
                animation_1();
              }
              if(e+1 == 2) {
                animation_2();
              }
              if(e+1 == 3) {
                animation_3();
              }


            }
          })


        })

        function animation_1(){

          tweenMax.fromTo($('.ico.i-1'),1,
          {
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y:0,
            rotationZ: 0,
            ease: Elastic.easeOut,
          }
        )

      }

      function animation_2(){


        $scope.$apply(function(){
          $scope.icon = 'web_ico';
        })

        $timeout(function(){
          $scope.icon = 'desktop_windows';
        },1500)

        $timeout(function(){
          $scope.icon = 'laptop_mac';
        },2500)

        $timeout(function(){
          $scope.icon = 'phone_android';
        },3500)


      }

      function animation_3(){

        WRF.start('webgl');
        $('#webgl').addClass('curtain');

        $('.ico').fadeOut();

        $timeout(function(){


          tweenMax.fromTo('.answers2 a',.6,
          {opacity : 0, y: 200, scale: 1.2},
          {opacity: 1 ,y: 1, scale: 1,ease: Expo.easeOut}
          ,.2)

        },4000)
      }

      $scope.continue = function(){

        $('.bg').addClass('colorize');

        tweenMax.to($('.sentence-wrp'),1,
        {y: '-=100px'})

        $timeout(function(){
          $state.go('step-4.a');
        },1000)


      }



    })

    break;

    /* step-4
    ___________________________________________________________________________ */

    case 'step-4.a' :

    Loader.show();

    $scope.icon = 'favorite_outline';
    $scope.text =
    ["I'm looking for <br/>interesting company^1000, <strong>like you^1000</strong>",
    "to work and </br>make <strong>kick-ass projects</strong>"];

    if(Modernizr.speechsynthesis) {
      var Voice = new SpeechSynthesisUtterance();
      Voice.lang = 'en-EN';
      Voice.text = "I'm looking for interesting company, like you";
      speechSynthesis.speak(Voice);
      setTimeout(function () {
        var Voice = new SpeechSynthesisUtterance();
        Voice.lang = 'en-EN';
        Voice.text = "to work and make kick-ass projects!";
        speechSynthesis.speak(Voice);
      }, 5500);
    }

    $scope.$on('$viewContentLoaded',function(){

      Loader.hide();

      $scope.$broadcast('typing');

      $scope.$on('preStringTyped',function(e,value){

        if(value == 1) {

          tweenMax.to('.ico',2,{
            scale : 4,
            opacity: 0,
            ease: Expo.easeOut,
            delay:1,
            width:0,
            margin:'0 auto 0'


          })

          tweenMax.to('#metal',2,{
            opacity:1,
            top : 0, ease: Elastic.easeInOut,
            onComplete : function(){

              tweenMax.to('.sentence-wrp',2,{
                rotationY :'-=200', delay:.5, opacity:0, ease:Expo.easeInOut }
              )

              $timeout(function(){
                if(Modernizr.speechsynthesis) {
                  var Voice = new SpeechSynthesisUtterance();
                  Voice.lang = 'en-EN';
                  Voice.text = "Hope to see you soon!";
                  speechSynthesis.speak(Voice);
                  setTimeout(function () {
                    var Voice = new SpeechSynthesisUtterance();
                    Voice.lang = 'en-EN';
                    Voice.text = "Keep in touch and drop me an email!";
                    speechSynthesis.speak(Voice);
                  }, 3000);
                }
                $state.go('step-5.a');
              },2500)


            }
          })

        }



      })

      $timeout(function(){
        tweenMax.fromTo($('.ico'),1,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y:0,
          rotationZ: 0,
          ease: Elastic.easeOut,
          onComplete : function(){}
        }
      )
    },3000)

  })

  break;


  /* step-3.a
  ___________________________________________________________________________ */

  case 'step-5.a' :

  Loader.show();

  $scope.icon = 'insert_emoticon';

  $scope.text =
  ["Hope to see you soon.^1000",
  "Keep in touch and <br/> <strong>drop me an email!</strong>"]

  $scope.$on('$viewContentLoaded',function(){

    Loader.hide();


    $scope.$broadcast('typing');

    $scope.$on('preStringTyped',function(e,value){

      if(value == 1){

        $scope.$apply(function(){
          $scope.icon = 'email';
          $timeout(function(){
            $('.ico').addClass('pulse');
            $('.restart').fadeIn();
          },1000)
        })

      }
    })

  })

  $scope.trigger = function(){
    $rootScope.$broadcast('openMenu');
  };


  break;


  /* default
  ___________________________________________________________________________ */

  default :
  console.log('default break')
  break;

}


$scope.restart = function(){

  $state.go('step-1',{name: $scope.visitor});

}







}

return SentenceController;




})
