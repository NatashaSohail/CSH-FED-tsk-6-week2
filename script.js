 const form = document.getElementById('form');
    const email = document.getElementById('email');
    const error = document.querySelector('.error');

    form.onsubmit = e => {
      if (!email.value.includes('@')) {
        e.preventDefault();
        email.classList.add('error');
        error.style.display = 'block';
      }
    };

    email.oninput = () => {
      email.classList.remove('error');
      error.style.display = 'none';
    };