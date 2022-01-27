const items = [
  { color: "blue", clothes: "tshirts", size: "small", gender: "male", img: "/img/blue_t.png" },
  { color: "yellow", clothes: "tshirts", size: "small", gender: "male", img: "/img/yellow_t.png" },
  { color: "pink", clothes: "tshirts", size: "small", gender: "male", img: "/img/pink_t.png" },
  { color: "blue", clothes: "tshirts", size: "large", gender: "male", img: "/img/blue_t.png" },
  { color: "yellow", clothes: "tshirts", size: "large", gender: "male", img: "/img/yellow_t.png" },
  { color: "pink", clothes: "tshirts", size: "large", gender: "male", img: "/img/pink_t.png" },
  { color: "blue", clothes: "pants", size: "small", gender: "male", img: "/img/blue_p.png" },
  { color: "yellow", clothes: "pants", size: "small", gender: "male", img: "/img/yellow_p.png" },
  { color: "pink", clothes: "pants", size: "small", gender: "male", img: "/img/pink_p.png" },
  { color: "blue", clothes: "pants", size: "large", gender: "male", img: "/img/blue_p.png" },
  { color: "yellow", clothes: "pants", size: "large", gender: "male", img: "/img/yellow_p.png" },
  { color: "pink", clothes: "pants", size: "large", gender: "male", img: "/img/pink_p.png" },
  { color: "blue", clothes: "skirts", size: "small", gender: "male", img: "/img/blue_s.png" },
  { color: "yellow", clothes: "skirts", size: "small", gender: "male", img: "/img/yellow_s.png" },
  { color: "pink", clothes: "skirts", size: "small", gender: "male", img: "/img/pink_s.png" },
  { color: "blue", clothes: "skirts", size: "large", gender: "male", img: "/img/blue_s.png" },
  { color: "yellow", clothes: "skirts", size: "large", gender: "famale", img: "/img/yellow_s.png" },
  { color: "pink", clothes: "skirts", size: "large", gender: "famale", img: "/img/pink_s.png" },
  { color: "blue", clothes: "tshirts", size: "small", gender: "famale", img: "/img/blue_t.png" },
  { color: "yellow", clothes: "tshirts", size: "small", gender: "famale", img: "/img/yellow_t.png" },
  { color: "pink", clothes: "tshirts", size: "small", gender: "famale", img: "/img/pink_t.png" },
  { color: "blue", clothes: "tshirts", size: "large", gender: "famale", img: "/img/blue_t.png" },
  { color: "yellow", clothes: "tshirts", size: "large", gender: "famale", img: "/img/yellow_t.png" },
  { color: "pink", clothes: "tshirts", size: "large", gender: "famale", img: "/img/pink_t.png" },
  { color: "blue", clothes: "pants", size: "small", gender: "famale", img: "/img/blue_p.png" },
  { color: "yellow", clothes: "pants", size: "small", gender: "famale", img: "/img/yellow_p.png" },
  { color: "pink", clothes: "pants", size: "small", gender: "famale", img: "/img/pink_p.png" },
  { color: "blue", clothes: "pants", size: "large", gender: "famale", img: "/img/blue_p.png" },
  { color: "yellow", clothes: "pants", size: "large", gender: "famale", img: "/img/yellow_p.png" },
  { color: "pink", clothes: "pants", size: "large", gender: "famale", img: "/img/pink_p.png" },
  { color: "blue", clothes: "skirts", size: "small", gender: "famale", img: "/img/blue_s.png" },
  { color: "yellow", clothes: "skirts", size: "small", gender: "famale", img: "/img/yellow_s.png" },
  { color: "pink", clothes: "skirts", size: "small", gender: "famale", img: "/img/pink_s.png" },
  { color: "blue", clothes: "skirts", size: "large", gender: "famale", img: "/img/blue_s.png" },
  { color: "yellow", clothes: "skirts", size: "large", gender: "famale", img: "/img/yellow_s.png" },
  { color: "pink", clothes: "skirts", size: "large", gender: "famale", img: "/img/pink_s.png" },
];

const mainBtn = document.querySelector(".logo");
const tBtn = document.querySelector(".tshirt");
const pBtn = document.querySelector(".pants");
const sBtn = document.querySelector(".skirt");
const blueBtn = document.querySelector(".blue__box");
const yellowBtn = document.querySelector(".yellow__box");
const pinkBtn = document.querySelector(".pink__box");

const content = document.querySelector(".content");

let array = [];

content.innerHTML = items
  .map((item) => {
    return `
      <div class="item">
      <img src="${item.img}" class="img" alt="" />
      <div class="text">${item.gender} ${item.size}</div>
      </div>
      `;
  })
  .join(" ");

mainBtn.addEventListener("click", () => {
  array = [];
  items.map((item) => {
    array.push(
      `   
      <div class="item">
      <img src="${item.img}" class="img" alt="" />
      <div class="text">${item.gender} ${item.size}</div>
      </div>
      `
    );
  });
  content.innerHTML = array.join(" ");
});

tBtn.addEventListener("click", (e) => {
  onButtonClick(e, "tshirts");
});

pBtn.addEventListener("click", (e) => {
  onButtonClick(e, "pants");
});

sBtn.addEventListener("click", (e) => {
  onButtonClick(e, "skirts");
});

blueBtn.addEventListener("click", (e) => {
  onButtonClick(e, "blue");
});

yellowBtn.addEventListener("click", (e) => {
  onButtonClick(e, "yellow");
});

pinkBtn.addEventListener("click", (e) => {
  onButtonClick(e, "pink");
});

const onButtonClick = (e, state) => {
  array = [];
  if (e.target.classList[0] === "img") {
    items
      .filter((filteritem) => filteritem.clothes === state)
      .map((item) => {
        array.push(
          `
        <div class="item">
        <img src="${item.img}" class="img" alt="" />
        <div class="text">${item.gender}, ${item.size}</div>
        </div>
        `
        );
      });
  } else if (e.target.classList[0] === "box") {
    items
      .filter((filteritem) => filteritem.color === state)
      .map((item) => {
        array.push(`
        <div class="item">
        <img src="${item.img}" class="img" alt="" />
        <div class="text">${item.gender}, ${item.size}</div>
        </div>
        `);
      });
  }
  content.innerHTML = array.join(" ");
};
