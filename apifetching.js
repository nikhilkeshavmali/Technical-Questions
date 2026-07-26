fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
    console.log(data[0].address.street);
  });
