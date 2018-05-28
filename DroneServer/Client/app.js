$(document).ready(function() {

    $('#takeOff').click(function() {
        handleRequest('takeOff');
    });

    // add .click handlers here for the rest of your buttons
    $('#Land').click(function() {
        handleRequest('land');
    });
    $('#goForward').click(function() {
        handleRequest('goForward');
    });
    $('#goBackward').click(function() {
        handleRequest('goBackward');
    });
    $('#goLeft').click(function() {
        handleRequest('goLeft');
    });
    $('#goRight').click(function() {
        handleRequest('goRight');
    });
    $('#Up').click(function() {
        handleRequest('up');
    });
    $('#Down').click(function() {
        handleRequest('down');
    });
});


function handleRequest(route) {
    $.ajax({
        url: 'http://localhost:8080/' + route,
        type: 'POST',
        success: function(data) {
            $('#statusText').text(data + '...');
        }
    }).fail(function(message) {
        console.log('failed', message);
    })
}