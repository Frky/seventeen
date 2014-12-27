$( document ).ready(function() {
   
    /* Base text to be use to restore main circle display after displaying a menu element */
    var base_right = $( ".today-prime .back .right .text" ).text();
    var base_left = $( ".today-prime .back .left .text" ).text();

    /* CONCEPT menu text */
    var concept_left = "Then, it is tested with the Miller-Rabin test. If it fails, a new number is generated. Otherwise, it is kept as the daily probably-prime number.";
    var concept_right = "Every day a new probably prime number is out. The number is generated randomly in [0,100000].";
    /* CREDITS menu text */
    var credits_left = "Colors are from 'flatuicolors.com'. Font is 'santor', created by Tra Nguyen.";
    var credits_right = "Animations are highly inspired by David Walsh blog.";

    /* Boolean indicating if we are in a css transition or not anymore */
    var active = false;

    /* Function to display a menu element in the main circle */
    var menu_element_in = function(left_text, right_text) {
        
        /* Timeout to start css transition to display 
            menu element. Default timeout is 0 */
        var timeout = 0;
       
        /* If another transition is running, 
            timeout is set to 600 (enough to wait for the end of previous transition) */
        if ( active ) {
            timeout = 600;      
        }
        
        /* Running transition to display menu item after $timeout ms */
        setTimeout(function() {
            /* Changing left hidden panel of the main circle */
            $( ".today-prime .back .left .text" ).text(left_text);
            /* Changing right hidden panel of the main circle */
            $( ".today-prime .back .right .text" ).text(right_text); 
            /* Setting active to 'true' to avoid conflicts with other transitions */ 
            active = true;
            /* Starting css animation by adding flip class to the element */
            $( ".flip-container" ).addClass("flip");
        }, timeout);
    }

    /* Function to restore normal display in the main circle */
    var menu_element_out = function() {
        /* Launching return animation by removing "flip" class */
        $( ".flip-container" ).removeClass("flip");
        /* In the middle of the animation (when the back panel is hidden again), 
           restoring previous text in both left and right halfs */
        setTimeout(function() {
            $( ".today-prime .back .left .text" ).text(base_left);
            $( ".today-prime .back .right .text" ).text(base_right);
            active = false;
        }, 300);
    }

    /* Binding hover functions to each old prime */
    $(".old-prime").each(function() {
        /* Function when mouse is over */
        $(this).hover(function() {
            /* Add corresponding class for css rotation */
            /* For vertical rotation (around X) */
            $(".vcontainer", this).each(function() {
                $(this).addClass("vrotation");
            });
            /* For horizontal rotation (around Y) */
            $(".hcontainer", this).each(function() {
                $(this).addClass("hrotation");
            });
        });
        /* Function when the mouse leaves the prime div */
        $(this).mouseleave(function() {
            /* Add corresponding class for css rotation */
            /* For vertical rotation (around X) */
            $(".vcontainer", this).each(function() {
                var el = $(this);
                setTimeout(function() {
                    el.removeClass("vrotation");
                }, 800);
            });
            /* For horizontal rotation (around Y) */
            $(".hcontainer", this).each(function() {
                var el = $(this);
                setTimeout(function() {
                    el.removeClass("hrotation");
                }, 800);
            });
        });
    });

    /* Listener on "concept" menu item */
    $( ".menu-element#concept" ).hover(function () { menu_element_in(concept_left, concept_right) }, menu_element_out);
    /* Listener on "credits" menu item */
    $( ".menu-element#credits" ).hover(function () { menu_element_in(credits_left, credits_right) }, menu_element_out);

});
