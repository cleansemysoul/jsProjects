const dataPlaceHolder = document.querySelector(".data");

async function randomUserGenerator() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const result = data.results[0];
    // console.log(res);
    // console.log(data);
    // console.log(result);
    const { title, first, last } = result.name;
    const { city, country } = result.location;
    const username = result.login;
    const { phone, email } = result;
    dataPlaceHolder.innerHTML = `
    <h1>${title}. ${first} ${last}</h1>
    <h2>${city} ${country}</h2>
    <p>Follow me on Twitter ! @${username}</p>
    <p>Or contact me directly by phone at : ${phone}<br/>or by mail at : ${email}</p>`;
  } catch {
    dataPlaceHolder.innerHTML = "<h1>Failed to fetch user data</h1>";
  }
}

randomUserGenerator();
