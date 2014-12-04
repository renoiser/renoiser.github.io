require.config({
    baseUrl: 'bower_components' ,
    paths: {
        jquery: 'jquery/dist/jquery.min',
        three : 'three.js/three.min',
        threeold: '../scripts/three_old',


        app: '../app'
    },
    shim: {

        'three' : {
            deps : ['jquery'],
            exports: 'THREE'
        },

        'threeold' : {
            deps : ['jquery'],
            exports: 'THREE'
        }


    }
});



require(['app/wireframe','app/main'],function(wireframe, main){



})



