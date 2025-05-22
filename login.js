let loginAttempts = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // List of valid usernames and passwords
    const validCredentials = [
        { username: "admin", password: "123", redirect: "admin1.html" },
        { username: "dharani", password: "CS141", redirect: "page1.html" },
        { username: "riyona", password: "AD188", redirect: "page1.html" }
    ];

    if (username === '' || password === '') {
        alert('Both fields are required.');
        return;
    }

    // Find if the entered credentials are valid
    const user = validCredentials.find(user => user.username === username && user.password === password);

    if (!user) {
        loginAttempts++;

        if (loginAttempts >= 2) {
            alert('Incorrect username or password.');
            loginAttempts = 0; // Reset attempts after showing the error
        }
        return;
    }

    // Reset loginAttempts on successful login
    loginAttempts = 0;
    window.location.href = user.redirect; // Redirect based on the user type
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}
