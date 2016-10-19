
/*
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                        CONFIG
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */
var refreshMinutes = 1;

//starts the idleTime count at 0
var idleTime = 0;


//This function constant checks the application for mouse movement
//or key pressing to reset the idle time.  This will call the timerIncrement
//function when 60 seconds is up.
function checkInactivity()
{
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });

    //Zero the idle timer everytime a key is pressed
    $(this).keypress(function (e) {
        idleTime = 0;
    });
}


//This function will see if the current idle timer is greater than
//the number of minutes defined in the config section.
function timerIncrement() {

    //Increment the timer every time it's called
    idleTime = idleTime + 1;

    //if the timer is greater than the minutes defined then reload the page.
    if (idleTime > refreshMinutes) { // 1 minutes
        window.location.reload();
    }
}