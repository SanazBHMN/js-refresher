function getData() {
  const data = axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => console.log(data));
  console.log(data);
}
