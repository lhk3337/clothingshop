const jsTag1 = document.querySelector(".tag1");
const jsTag2 = document.querySelector(".tag2");
const jsTag3 = document.querySelector(".tag3");
const jsTag4 = document.querySelector(".tag4");
const jsTag5 = document.querySelector(".tag5");
const jsTag6 = document.querySelector(".tag6");
const jsTag7 = document.querySelector(".tag7");
const jsTag8 = document.querySelector(".tag8");
const jsTag9 = document.querySelector(".tag9");

const jsListT = document.querySelector(".listT");
const jsListP = document.querySelector(".listP");
const jsListS = document.querySelector(".listS");

const jslistBlue = document.querySelector(".blue");
const jsListYellow = document.querySelector(".yellow");
const jsListPink = document.querySelector(".pink");

const url =
  "https://raw.githubusercontent.com/lhk3337/clothingshop/master/cloth.json";
fetch(url)
  .then((res) => res.json())
  .then((json) => {
    jsTag1.innerHTML = [json[0].title, json[0].gender, json[0].color].join(
      ", "
    );
    jsTag2.innerHTML = [json[1].title, json[1].gender, json[1].color].join(
      ", "
    );
    jsTag3.innerHTML = [json[2].title, json[2].gender, json[2].color].join(
      ", "
    );
    jsTag4.innerHTML = [json[3].title, json[3].gender, json[3].color].join(
      ", "
    );
    jsTag5.innerHTML = [json[4].title, json[4].gender, json[4].color].join(
      ", "
    );
    jsTag6.innerHTML = [json[5].title, json[5].gender, json[5].color].join(
      ", "
    );
    jsTag7.innerHTML = [json[6].title, json[6].gender, json[6].color].join(
      ", "
    );
    jsTag8.innerHTML = [json[7].title, json[7].gender, json[7].color].join(
      ", "
    );
    jsTag9.innerHTML = [json[8].title, json[8].gender, json[8].color].join(
      ", "
    );
  })
  .catch((err) => console.log(err));
