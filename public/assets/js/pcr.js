$(document).ready(function() {


  // onclicks
  $('.menu .item').click(function(e) {
    e.preventDefault();
    console.log( $(this));
    $item = $(this);
    $location = $item.data('slide');
    console.log($location);
    $slide = $('#slide'+$location);
    console.log($slide);
    $.scrollTo( $slide, 1000, {offset: -250});
  });


  // personal wrapper for the jQuery scrollin plugin
  var scrollTo = function(selector) {
    $.scrollTo(selector, duration);
  }







});