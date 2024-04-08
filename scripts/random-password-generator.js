function generateRandomPassword(length) {
  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

document.getElementById('button').addEventListener('click', function () {
  let passwordLength = 10;
  let newPassword = generateRandomPassword(passwordLength);
  document.getElementById('password').value = newPassword;
});

