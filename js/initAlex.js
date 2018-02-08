(function($){
  $(function(){
      $('.button-collapse').sideNav();
      
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );
      
      $('.parallax').parallax();
      $('.slider').slider({full_width: true, height:500, indicators:false, transition:750, interval:8000});
  }); // end of document ready
})(jQuery);