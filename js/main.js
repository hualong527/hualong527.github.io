$(document).ready(function(){


 $("#owl-example").owlCarousel({
    // Most important owl features
    items : 4,
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    navigationText : ["","<svg t=\"1564551858395\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"9201\" width=\"40\" height=\"40\"><path d=\"M635.385631 548.571429q0 7.428571-5.714285 13.142857l-266.285715 266.285714q-5.714286 5.714286-13.142857 5.714286t-13.142857-5.714286l-28.571428-28.571429q-5.714286-5.714286-5.714286-13.142857t5.714286-13.142857l224.571428-224.571428L308.528489 324q-5.714286-5.714286-5.714286-13.142857t5.714286-13.142857l28.571428-28.571429q5.714286-5.714286 13.142857-5.714286t13.142857 5.714286l266.285715 266.285714q5.714286 5.714286 5.714285 13.142858z\" p-id=\"9202\" fill=\"#576BAB\"></path></svg>"],
    slideSpeed : 800,
     autoPlay: true
 });

	$("#navigation").sticky({
		topSpacing : 60,
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 15000,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

     $('#top-nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });
//Initiat WOW JS
    new WOW().init();

});
