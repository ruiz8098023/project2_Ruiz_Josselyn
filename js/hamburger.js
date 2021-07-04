// https://codepen.io/g13nn/pen/eHGEF

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".short-menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".short-menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".short-menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

});
