$(document).ready(function() {

  // rotation speed and timer
  var speed = 5000;
  var run = setInterval('rotate()', speed);

  // grab the width and calculate left value
  var item_width = $('#slides li').outerWidth();
  var left_value = item_width * (-1);

  // move the last item before first item, just in case user clicks prev button
  $('#slides li:first').before($('#slides li:last'));

  // set the default item to the correct position
  $('#slides ul').css({'left':left_value});

  // if user clicked on prev button
  $('#prev').click(function() {

    // get the right position
    var left_indent = parseInt($('#slides ul').css('left')) + item_width;

    // slide the item
    $('#slides ul').animate({
      'left':left_indent}, 200, function() {

        // move the last item and put it as first item
        $('#slides li:first').before($('#slides li:last'));

        // set the default item to correct position
        $('#slides ul').css({'left':left_value});
      });
    // cancel the link behavior
    return false;

  });

  // if user clicked on next button
  $('#next').click(function() {
    console.log('next is clicked');
    // get the right position
    var left_indent = parseInt($('#slides ul').css('left')) - item_width;

    // slide the item
    $('#slides ul').animate({'left':left_indent}, 200, function() {

      // move the first item and put it as last item
      $('#slides li:last').after($('#slides li:first'));

      // set the default item to correct position
      $('#slides ul').css({'left':left_value});
    });

    // cancel the link behavior
    return false;

  });

  // if mouse hover, pause the auto rotation, otherwise rotate
  $('#slides').hover(

    function() {
        clearInterval(run);
    },
    function() {
        run = setInterval('rotate()', speed);
    }
  );


  // caroufredsel
  // $('#gallery').carouFredSel();
  // $('#slide3').barousel();
  // slider
  $('.menu .item').click(function(e) {
    e.preventDefault();
    $item = $(this);
    $num = $item.data('slide');
    $slide = $('#slide'+$num);
    $.scrollTo( $slide, 800, {offset: -50});
  });

  // horizontal slider for gallery
  $('#gallery-start-button').click(function(e) {
    e.preventDefault();
    console.log(this);
    debugger;
  });

  // Because the z-index of the slides is -1, normal event operations aren't getting
  // to the button. So we capture the coords of the button and use that to trigger
  // a click event.
  $(document).click(function(e) {
    e.preventDefault();
    var x = e.clientX,
        y = e.clientY,
        buttonCoords = $('#gallery-start-button')[0].getBoundingClientRect();

    if ((x >= buttonCoords.left && x <= buttonCoords.right) &&
        (y >= buttonCoords.top && y <= buttonCoords.bottom)) {
      $('#gallery-start-button').trigger('click');

    }
  });
});

// a simple function to click next link
// a timer will call this function and the rotation
// will begin
function rotate() {
  $('#next').click();
}