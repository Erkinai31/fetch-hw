let div_block = document.createElement("div");

async function asyncHandler() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let data = await fetch(url).then((res) => res.json());
  div_block.className = "wrapper";
  document.body.prepend(div_block);
  createElems(data);
}

function createElems(data) {
  for (let elem of data) {
    let div_elem = document.createElement("div");
    let p_1 = document.createElement("p");
    let p_2 = document.createElement("p");
    let p_3 = document.createElement("p");
    let p_4 = document.createElement("p");

    p_1.innerText = `Имя и фамилия: ${elem.name}`;
    p_2.innerText = `Почта: ${elem.email}`;
    p_3.innerText = `Телефон: ${elem.phone}`;
    p_4.innerText = `Компании: ${elem.company.name}`;

    div_elem.className = "div_elem";

    div_elem.append(p_1, p_2, p_3, p_4);
    div_block.append(div_elem);
  }
}

asyncHandler();
