$(document).ready(function(){
    $('.data').hide();
    $(".btn").on( "click", function() {
        $('.data').show();
        $('.showcase').hide();
    });
});