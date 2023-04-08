import { Api } from "./api.js";

const box = document.querySelector(".box");
const post = document.querySelector(".post");
const openPost = document.querySelector("#openPost");
const close = document.querySelector("#close");

async function getUser(val) {
  let res = await Api.GET(val);
  console.log(res);
  box.innerHTML = null;
  res.forEach((item) => {
    let li = document.createElement("li");
    let image = document.createElement("img");
    let userName = document.createElement("h4");
    let email = document.createElement("a");
    let btn = document.createElement("button");

    li.dataset.id = item.id;
    li.classList.add("list-group-item");
    image.src = item.avatar;
    userName.textContent = item.first_name;
    email.href = `mailto:${item.email}}`;
    email.textContent = item.email;
    btn.textContent = "Delete";
    btn.classList.add("btn", "btn-danger", "d-block", "mt-2");

    btn.addEventListener("click", async (e) => {
      let par = e.target.parentNode;
      let ul = par.parentNode;
      await Api.DELETE(`${par.dataset.id}`);
      ul.removeChild(par);
      alert(`removed`);
    });

    li.append(image, userName, email, btn);
    box.append(li);
  });
}
getUser(1);

openPost.addEventListener("click", () => {
  post.classList.add("class", "d-flex");
  post.classList.remove("class", "d-none");
});
close.addEventListener("click", () => {
  post.classList.remove("class", "d-flex");
  post.classList.add("class", "d-none");
})

post.addEventListener("submit", async (e)=>{
  e.preventDefault();
  let { name, job, user} = e.target.elements
  let obj = {
    name: name.value,
    job: job.value
  };
  await Api.POST(obj);
  alert(`Posted user: ${name.value}`);
})