$( document ).ready(function() {
   
    var base_right = $( ".today-prime .back .right .text" ).text();
    var base_left = $( ".today-prime .back .left .text" ).text();

    var active = false;

    $( ".menu-element#concept" ).hover(function() {

        var timeout = 0;
        
        if ( active ) {
            timeout = 600;      
        }

        setTimeout(function() {
            $( ".today-prime .back .left .text" ).text("Every day a new probably prime number is out. The number is generated randomly in [0,100000].");
            $( ".today-prime .back .right .text" ).text("Then, it is tested with the Miller-Rabin test. If it fails, a new number is generated. Otherwise, it is kept as the daily probably-prime number.");
            $( ".flip-container" ).addClass("flip");
            active = true;
        }, timeout);

    }, function(){
        $( ".flip-container" ).removeClass("flip");
        setTimeout(function() {
            $( ".today-prime .back .left .text" ).text(base_left);
            $( ".today-prime .back .right .text" ).text(base_right);
            active = false;
        }, 300);
    });
 
    $( ".menu-element#credits" ).hover(function() {

        var timeout = 0;
        
        if ( active ) {
            timeout = 600;      
        }

        setTimeout(function() {
            $( ".today-prime .back .left .text" ).text("Colors are from 'flatuicolors.com'. Font is 'santor', created by Tra Nguyen.");
            $( ".today-prime .back .right .text" ).text("Animations are highly inspired from David Walsh blog.");
            $( ".flip-container" ).addClass("flip");
            active = true;
        }, timeout);
    }, function(){
        $( ".flip-container" ).removeClass("flip");
        setTimeout(function() {
            $( ".today-prime .back .left .text" ).text(base_left);
            $( ".today-prime .back .right .text" ).text(base_right);
            active = false;
        }, 300);

    });
 
});
