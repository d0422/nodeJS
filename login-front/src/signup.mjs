const id = document.getElementById('id');
const pw = document.getElementById('pw');
const name = document.getElementById('name');
const age = document.getElementById('age');
const submit = document.querySelector('button');
submit.addEventListener('click', async () => {
  const body = {
    id: id.value,
    pw: pw.value,
    name: name.value,
    age: age.value,
  };
  console.log(body);
  //   const res = await fetch('http://localhost:3000/signup', {
  //     body: JSON.stringify(body),
  //   });
  //   console.log(res);
});
