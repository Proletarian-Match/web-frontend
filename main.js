document.getElementById('my-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Send the form data using the fetch() function
    fetch('/process-form', {
        method: 'post',
        body: new FormData(event.target)

    }).then(function (response) {
        // Handle the response from the server
    });
});