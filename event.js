



// $(window).load(function() {
//    var startSection = window.location.hash;
//    startSection = "section1";

//     $('html, body').animate({
//        scrollTop: $(startSection).offset().top
//      }, 1000, function(){

//        // when done, add hash to url
//        // (default click behaviour)
//        window.location.hash = startSection;
//        consle.log(startSection)
//      });

// });


$("#nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});