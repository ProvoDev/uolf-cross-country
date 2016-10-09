var idleTime = 0;

$(document).ready(function () {
    if (isViewing)
    {
        //Increment the idle time counter every minute.
        var idleInterval = setInterval(timerIncrement, 5000); // 1 minute

        //Zero the idle timer on mouse movement.
        $(this).mousemove(function (e) {
            idleTime = 0;
        });
        $(this).keypress(function (e) {
            idleTime = 0;
        });
    }

});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 1 minutes
        window.location.reload();
    }
}