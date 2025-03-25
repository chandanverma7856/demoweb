function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in both fields');
        return;
    }

    alert(`Logging in with Username: ${username}`);
    // Redirect after login
    window.location.href = 'dhome.html'; 
}

function register() {
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();

    // Simple email validation using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    alert(`Registered with Username: ${username}, Email: ${email}`);
    // Redirect to login after registration
    window.location.href = 'dlogin.html';
}
