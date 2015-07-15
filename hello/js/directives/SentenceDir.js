

define(['angular','tweenMax','typejs'],function(angular,tweenMax,typejs){

    var SentenceDirective = function($state,$timeout){

        return {
            link : function(scope,el,attr) {

                var $el = $(el);
                var $sentence = $(el).find('.sentence');
                var $typing = $(el).find('.typing');

                init();

                if(!Modernizr.touch) {
                    mousemove();
                }


                scope.$on('typing',function(){
                    type();
                })

                scope.$on('re-type',function(e,value){
                    retype(value);

                })

                function mousemove(){

                    $(window).on('mousemove',function(e){

                        var mouseX = e.pageX / (window.innerWidth / 2)* 10;
                        var mouseY = e.pageY / (window.innerHeight / 2)* -10;

                        $el.css({left: mouseX, top: mouseY})

                    })


                }


                function init(){

                    tweenMax.fromTo($el,2,
                        {
                        opacity: 1,
                        transform : 'rotateY(20deg) translateZ(600px)'},
                        {
                            opacity: 1,
                            transform : 'rotateY(20deg) translateZ(0)',
                            ease: Expo.easeOut,
                        }
                    )
                }

                function retype(text){

                    $typing.removeData('typed');
                    $('.typed-cursor:first').remove();

                    $typing.typed({
                        strings: text,
                        contentType: 'html',
                        typeSpeed: 0
                    })
                }


                function type(){

                    var typedCompleted = function(){

                        scope.$broadcast('type-completed');

                        var elements =  $(el).find('.answers a');

                        tweenMax.staggerFromTo(elements,.6,
                            {opacity : 0, y: 200, scale: 1.2},
                            {opacity: 1 ,y: 1, scale: 1,ease: Expo.easeOut}
                        ,.2)


                    }

                    $typing.typed({
                        strings: scope.text,
                        contentType: 'html',
                        typeSpeed: 0,
                        backSpeed: -30,
                        callback : typedCompleted,
                        preStringTyped : function(e,a){

                            scope.$emit('preStringTyped',e);
                        }

                    }).fadeIn();


                }

                scope.ok = function(statePath){

                    tweenMax.to($(el),2,
                        {
                            opacity: 0,
                            transform : 'rotateY(20deg) translateZ(-1000px)',
                            ease: Expo.easeOut

                        }
                    )

                    $timeout(function(){
                        $state.go(statePath)
                    },500)


                }






            }


        }

    }

    SentenceDirective.id = 'sentence';

    return SentenceDirective;



})