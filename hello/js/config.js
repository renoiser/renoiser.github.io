

require.config({
    baseUrl: 'js',
    waitSeconds: 60,
    paths: {
        jquery: '../lib/jquery/dist/jquery.min',
        angular : '../lib/angular/angular.min',
        angular_router : '../lib/angular-ui-router/release/angular-ui-router.min',
        ngMdIcons : '../lib/angular-material-icons/angular-material-icons',
        morph : '../lib/svg-morpheus',
        three : '../lib/threejs/build/three.min',
        tweenMax : '../lib/gsap/src/minified/TweenMax.min',
        typejs : '../lib/typed.js/dist/typed.min',
        annyang : '../lib/annyang.min',
       // speech : 'Speech',

        sentenceCtrl : 'controllers/SentenceCtrl',
        headerController : 'controllers/HeaderController',
        sentenceDir : 'directives/SentenceDir',

        wireframe : 'three/wireframe',

        app : 'app',
        main: 'main'
    },
    shim : {
        jquery : { exports: '$' },

        angular : { exports: 'angular' },
        angular_router : { deps:['angular'],exports: 'router' },
        ngMdIcons : { deps:['angular'],exports: 'ngMdIcons' },
        morph : {deps:['angular']},

        three : {exports:'THREE'},

        tweenMax : { deps:['jquery'], exports: 'TweenMax' },


        typejs : { deps: ['jquery'], exports: 'type' },
        annyang : {exports : 'annyang'}

    }
});

require(['main']);
