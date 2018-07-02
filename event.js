
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('inputName')
    var email   = document.getElementById('inputEmail')
    var message = document.getElementById('inputMessage')
   alert(name.value)
    if (name.value === "" ) {
      alertify.error("Please check your entries");
      alert("Please check your entries")
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/zhachi66@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      // $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});




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