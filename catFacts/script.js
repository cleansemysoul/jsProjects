async function getRandom() {
  const config = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: "User 1",
    }),
  };
  const res = await fetch("https://reqres.in/api/users", config);
  const data = await res.json();
  console.log(res);
  console.log(data);
}
getRandom();
