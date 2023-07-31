    const buttonLook = document.getElementById('lookpassword');
    const inputPassword = document.getElementById('password');
  
    buttonLook.addEventListener('click', () => {
      if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
      } else {
        inputPassword.type = 'password';
      }
    });
  
  