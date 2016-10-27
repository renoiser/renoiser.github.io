define(["jquery"], function($) {

    var WRF = {

        start : function(id){


            var mouseX = 0, mouseY = 0,

                windowHalfX = window.innerWidth / 2,
                windowHalfY = window.innerHeight / 2,

                SEPARATION = 200,
                AMOUNTX = 10,
                AMOUNTY = 10,

                camera, scene, renderer,

                line,line2;

            init(id);
            animate();

            function init(id) {



                var container, separation = 1000, amountX = 150, amountY = 150,
                    particles, particle;


                container = document.getElementById(id);



                camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 500;

                scene = new THREE.Scene();


                renderer = new THREE.CanvasRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );

                renderer.setClearColor( 0x1B1B1B, 1 );


                container.appendChild( renderer.domElement );


                // particles

                var PI2 = Math.PI * 2;
                var material = new THREE.SpriteCanvasMaterial( {

                    color: 0xffffff,
                    program: function ( context ) {

                        context.beginPath();
                        context.arc( 0, 0, 0.3, 0, PI2, true );
                        context.fill();

                    }

                } );

                var geometry = new THREE.Geometry();
                var geometry2 = new THREE.Geometry();

                for ( var i = 0; i < 100; i ++ ) {

                    particle = new THREE.Sprite( material );
                    particle.position.x = Math.random() * 2 - 1;
                    particle.position.y = Math.random() * 2 - 1;
                    particle.position.z = Math.random() * 2 - 1;
                    particle.position.normalize();
                    particle.position.multiplyScalar( Math.random() * 10 + 450 );
                    particle.scale.x = particle.scale.y = 2;
                    scene.add( particle );

                    geometry.vertices.push( particle.position );

                }

                for ( var i = 0; i < 100; i ++ ) {

                    particle2 = new THREE.Sprite( material );
                    particle2.position.x = Math.random() * 2 - 1;
                    particle2.position.y = Math.random() * 2 - 1;
                    particle2.position.z = Math.random() * 2 - 1;
                    particle2.position.normalize();
                    particle2.position.multiplyScalar( Math.random() * 10 + 450 );
                    particle2.scale.x = particle.scale.y = 2;
                    scene.add( particle2 );

                    geometry2.vertices.push( particle2.position );

                }



                // lines

                line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x19C2CF, opacity: 0.6 } ) );
                scene.add( line );

                line2 = new THREE.Line( geometry2, new THREE.LineBasicMaterial( { color: 0xCF4544, opacity: 0.6 } ) );
                scene.add( line2 );


                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;


                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function onDocumentMouseMove(event) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length > 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();

            }

            function render() {

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
                camera.lookAt( scene.position );

                //line.rotation.y += 0.001;
                //line2.rotation.y += 0.001;









                renderer.render( scene, camera );

            }

        }


}

    return WRF;


});
