const idInput = document.getElementById('id');
const pwInput = document.getElementById('password');
const button = document.querySelector('button');
button.addEventListener('click', async () => {
  const id = idInput.value;
  const pw = pwInput.value;
  const body = {
    id,
    pw,
  };
  const res = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  console.log(res);
});
