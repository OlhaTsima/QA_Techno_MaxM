let arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com"
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru"
  }
];

let result = [];

let regex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

for (let i = 0; i < arr.length; i++) {
  let email = arr[i].email;

  if (regex.test(email)) {
    result.push(email);
  }
}

console.log(result);