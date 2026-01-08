document.getElementById('registerBtn').addEventListener('click', () => {
  const firstName = document.querySelector('#register input[placeholder="Firstname"]').value;
  const lastName = document.querySelector('#register input[placeholder="Lastname"]').value;
  const username = document.querySelector('#register input[placeholder="Username"]').value;
  const email = document.querySelector('#register input[placeholder="Email"]').value;
  const password = document.querySelector('#register input[placeholder="Password"]').value;
  const confirmPassword = document.querySelector('#register input[placeholder="Confirm Password"]').value;

console.log({ firstName, lastName, username, email, password });
  if (!firstName || !email || !password) {
    alert('Fill required fields');
    return;
  }


  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, username, email, password })
  })

  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
});