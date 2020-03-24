var app = app || {};


app.Tracking = (function () {

    // --------------------------------------------------------------------------------------
    // initialize
    function initialize() {
        // Create the event.
        var event = document.createEvent('Event');
        event.initEvent('READY', true, true);
        document.dispatchEvent(event);
        document.getElementById('button-exit').addEventListener('click', handleExit, false);
    }

    // --------------------------------------------------------------------------------------
    function handleExit(e) {
        // te_html.click('clickTAG', 'https://www.blockadvisors.com/');
        window.open(clickTag, "_blank");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize:initialize
    }

})();
