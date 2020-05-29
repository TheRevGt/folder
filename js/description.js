jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRightd();
    }, 3000);
  });
  
    var slideCount = $('#descption ul li').length;
    var slideWidth = $('#descption ul li').width();
    var slideHeight = $('#descption ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#descption').css({ width: slideWidth, height: slideHeight });
    
    $('#descption ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#descption ul li:last-child').prependTo('#descption ul');

    function moveLeftd() {
        $('#descption ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#descption ul li:last-child').prependTo('#descption ul');
            $('#descption ul').css('left', '');
        });
    };

    function moveRightd() {
        $('#descption ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#descption ul li:first-child').appendTo('#descption ul');
            $('#descption ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeftd();
    });

    $('a.control_next').click(function () {
        moveRightd();
    });

});    
