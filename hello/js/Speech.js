

define(['jquery'],function($){

    var Speech = {

        el : new webkitSpeechRecognition(),

        init : function(){

            if (!window.recognition) {

                Speech.el.continuous = true;
                Speech.el.interimResults = true;
                Speech.el.lang = "it-IT";
                Speech.el.start();

            }

        },

        get : function(){


            Speech.el.onresult = function(event) {

                console.log(event.results[0][0].transcript);


            }


        }


    }

    return Speech;


})


