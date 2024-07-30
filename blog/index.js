let data = document.querySelector("#data");
let boxdata = document.querySelector(".boxdata");

let blogs = [];

let id = 1;

data.addEventListener("click", hello);

function hello() {
  let display = document.querySelector(".form");
  display.style.display = "block";
  document.body.appendChild(display);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function submit() {
  let display = document.querySelector(".form");
  display.style.display = "none";
  document.body.appendChild(display);
}
let sub = document.querySelector(".sub");

sub.addEventListener("click", hello1);

function hello1() {
  let text = document.querySelector(".text").value;
  let img = document.querySelector(".img").value;
  let description = document.querySelector(".textarea").value;

  blogs.push({ text, img, description, id });

  id++;
  const box = document.createElement("div");
  box.classList.add("blog");

  box.style.margin = "1%";
  box.style.height = "300px";
  box.style.width = "250px";
  box.style.border = "1px solid red";
  box.style.boxShadow = "0px 0px 10px 10px";
  box.style.backgroundColor = "white";
  box.style.overflow = "hidden";
  box.style.margin = "3%";

  // create the blog post image
  const blogImg = document.createElement("img");
  blogImg.src = `${img}`;
  blogImg.style.width = "250px";
  blogImg.style.height = "200px";
  box.appendChild(blogImg);

  // Create elements for the blog post content
  const blogTitle = document.createElement("p");
  blogTitle.textContent = `Post by: ${text}`;
  blogTitle.style.textAlign = "center";
  blogTitle.style.fontSize = "10px";
  box.appendChild(blogTitle);

  // create button

  const blogbutton = document.createElement("button");
  // blogbutton.click =
  blogbutton.style.width = "100px";
  blogbutton.style.height = "40px";
  blogbutton.style.margin = "10%";
  blogbutton.style.borderRadius = "10px";
  blogbutton.style.backgroundColor = "beige";
  blogbutton.style.border = "none";
  blogbutton.style.left = "50px";
  blogbutton.style.position = "relative";
  blogbutton.innerHTML = "read more";
  blogbutton.id = `id-${id - 1}`;
  blogbutton.onclick = function () {
    add(id - 1);
  };

  // console.log(blogbutton);
  box.appendChild(blogbutton);
  document.body.appendChild(box);
}

function cross() {
  let readData = document.querySelector(".readData");
  readData.style.display = "none";
}

function add(blogId) {
  console.log(blogId);
  let readData = document.querySelector(".readData");
  readData.style.display = "block";

  console.log(readData);

  let detail = document.querySelector(".detail");
  console.log(blogs);
  let blogDetail = blogs.filter((blog) => blog.id == id);
  console.log(blogDetail);
  detail.innerHTML = `${blogDetail[0]?.description}`;
  readData.appendChild(detail);
  document.body.appendChild(readData);
  console.log("add function call");
}
