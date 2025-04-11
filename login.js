document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!email.validity.valid) {
            document.getElementById('emailValidation').classList.add('error');
        } else {
            document.getElementById('emailValidation').classList.remove('error');
        }

        if (!phone.validity.valid) {
            document.getElementById('phoneValidation').classList.add('error');
        } else {
            document.getElementById('phoneValidation').classList.remove('error');
        }

        if (!password.validity.valid) {
            document.getElementById('passwordValidation').classList.add('error');
        } else {
            document.getElementById('passwordValidation').classList.remove('error');
        }

        if (email.validity.valid && phone.validity.valid && password.validity.valid) {
            alert('Login successful! Redirecting to FIR portal...');
        }
    });

    email.addEventListener('input', function () {
        if (email.validity.valid) {
            document.getElementById('emailValidation').classList.remove('error');
        }
    });

    phone.addEventListener('input', function () {
        if (phone.validity.valid) {
            document.getElementById('phoneValidation').classList.remove('error');
        }
    });

    password.addEventListener('input', function () {
        if (password.validity.valid) {
            document.getElementById('passwordValidation').classList.remove('error');
        }
    });
});
