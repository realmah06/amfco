function login() {
    var overlay = document.getElementById("overlay");
    var success_alert = document.getElementById("successAlert");
    var error_alert = document.getElementById("errorAlert");
    var loader = document.getElementById("loader");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Show loader and hide other elements initially
    loader.style.display = 'flex';
    overlay.style.display = 'none';
    success_alert.style.display = 'none';
    error_alert.style.display = 'none';

    // Delay for 5 seconds before showing the alert
    setTimeout(() => {
        loader.style.display = 'none'; // Hide the loader
        overlay.style.display = 'block';

        if (username === 'admin' && password === 'admin') {
            success_alert.style.display = 'block';
        } else {
            error_alert.style.display = 'block';
        }
    }, 5000); // 5000 ms = 5 seconds
}

function closePopup() {
    document.getElementById("overlay").style.display = 'none';
    document.getElementById("successAlert").style.display = 'none';
    document.getElementById("errorAlert").style.display = 'none';
}
