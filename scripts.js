const passwordInput = document.querySelector('.js-password-input');
const setPasswordBtn = document.querySelector('.js-set-password');
const passwordStrength = document.querySelector('.js-password-strength');

passwordInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    setPasswordBtn.click();
  }
});

function isValidPassword(password) {
  const regex = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,16}$/;
  return regex.test(password);
}

function GetpasswordStrength(password) {
  let strength = 0;
  if (password.length > 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++; 
 // console.log('Password Strength:', strength); 
  return strength;
}

setPasswordBtn.addEventListener('click', () => {
  const password = passwordInput.value;
 // console.log('Password entered:', password); 

  if (!isValidPassword(password)) {
    passwordStrength.textContent = 'Please enter a valid password';
    passwordStrength.style.color = 'red';
    return;
  }

  const strength = GetpasswordStrength(password); 
  let strengthText = '';

  //can use if else statements instead below.

  switch (strength) {
    case 5: 
      strengthText = 'Very Strong';
      passwordStrength.style.color = 'green';
      break;
    
    case 4:
      strengthText = 'Strong';
      passwordStrength.style.color = 'limegreen';
      break;

    case 3:
      strengthText = 'Moderate';
      passwordStrength.style.color = 'orange';
      break;

    default:
      strengthText = 'Weak';
      passwordStrength.style.color = 'red';
  }

  /*
if (strength === 5) {
  strengthText = 'Very Strong';
  passwordStrength.style.color = 'green';
} else if (strength === 4) {
  strengthText = 'Strong';
  passwordStrength.style.color = 'limegreen';
} else if (strength === 3) {
  strengthText = 'Moderate';
  passwordStrength.style.color = 'orange';
} else {
  strengthText = 'Weak';
  passwordStrength.style.color = 'red';
} */

  passwordStrength.textContent = `Your password is valid. Password strength: ${strengthText}`;
});
