function submitForm() {
    // Get values from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    // Validate if passwords match
    if (password !== cpassword) {
        document.getElementById('response').innerHTML = "Passwords do not match.";
        return; // Stop the form submission if passwords don't match
    }

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set up the request to send data to 'mysql_signup.php' using POST
    xhr.open('POST', 'mysql_signup.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Handle the response from PHP
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('response').innerHTML = xhr.responseText;  // Display response from PHP
        } else {
            document.getElementById('response').innerHTML = "Error: " + xhr.status;
        }
    };

    // Prepare the data to send with the request
    var data = 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);

    // Send the data to PHP
    xhr.send(data);
}
