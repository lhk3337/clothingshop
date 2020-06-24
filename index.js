const jsListT = document.querySelector(".listT");
const jsListP = document.querySelector(".listP");
const jsListS = document.querySelector(".listS");

const jslistBlue = document.querySelector(".blue");
const jsListYellow = document.querySelector(".yellow");
const jsListPink = document.querySelector(".pink");
const jsitems = document.querySelector("#items");
const url =
  "https://raw.githubusercontent.com/lhk3337/clothingshop/master/cloth.json";
fetch(url)
  .then((res) => res.json())
  .then((json) => {
    json.forEach((element) => {
      jsli = document.createElement("li");
      jsitems.append(jsli);
      let img = document.createElement("img");
      img.src = element.picture;
      jsli.append(img);
      let jsSpan = document.createElement("span");
      jsSpan.innerHTML = [
        element.title,
        element.gender,
        element.size,
        element.color,
      ].join(", ");
      jsli.append(jsSpan);
    });

    jsListT.addEventListener("click", () => {
      let result = json.filter((x) => {
        return x.title === "tshirt";
      });
      result.forEach((element) => {
        jsli1 = document.createElement("li");
        jsitems.append(jsli1);
        let img1 = document.createElement("img");
        img1.src = element.picture;
        jsli1.append(img1);
        let jsSpan1 = document.createElement("span");
        jsSpan1.innerHTML = [
          element.title,
          element.gender,
          element.size,
          element.color,
        ].join(", ");
        jsli1.append(jsSpan1);
      });
      console.log("TSHIRT");
    });

    jsListP.addEventListener("click", () => {
      let result = json.filter((x) => {
        return x.title === "pants";
      });
      result.forEach((element) => {
        jsli1 = document.createElement("li");
        jsitems.append(jsli1);
        let img1 = document.createElement("img");
        img1.src = element.picture;
        jsli1.append(img1);
        let jsSpan1 = document.createElement("span");
        jsSpan1.innerHTML = [
          element.title,
          element.gender,
          element.size,
          element.color,
        ].join(", ");
        jsli1.append(jsSpan1);
      });
      console.log(result);
      console.log("Pants");
    });
    jsListS.addEventListener("click", () => {
      let result = json.filter((x) => {
        return x.title === "skirt";
      });
      result.forEach((element) => {
        jsli1 = document.createElement("li");
        jsitems.append(jsli1);
        let img1 = document.createElement("img");
        img1.src = element.picture;
        jsli1.append(img1);
        let jsSpan1 = document.createElement("span");
        jsSpan1.innerHTML = [
          element.title,
          element.gender,
          element.size,
          element.color,
        ].join(", ");
        jsli1.append(jsSpan1);
      });
      console.log(result);
      console.log("Skirt");
    });

    jslistBlue.addEventListener("click", () => {
      let result = json.filter((x) => {
        return x.color === "blue";
      });
      result.forEach((element) => {
        jsli1 = document.createElement("li");
        jsitems.append(jsli1);
        let img1 = document.createElement("img");
        img1.src = element.picture;
        jsli1.append(img1);
        let jsSpan1 = document.createElement("span");
        jsSpan1.innerHTML = [
          element.title,
          element.gender,
          element.size,
          element.color,
        ].join(", ");
        jsli1.append(jsSpan1);
      });
      console.log(result);
      console.log("Blue");
    });
    jsListYellow.addEventListener("click", () => {
      let result = json.filter((x) => {
        return x.color === "yellow";
      });
      result.forEach((element) => {
        jsli1 = document.createElement("li");
        jsitems.append(jsli1);
        let img1 = document.createElement("img");
        img1.src = element.picture;
        jsli1.append(img1);
        let jsSpan1 = document.createElement("span");
        jsSpan1.innerHTML = [
          element.title,
          element.gender,
          element.size,
          element.color,
        ].join(", ");
        jsli1.append(jsSpan1);
      });
      console.log(result);
      console.log("Yellow");
    });
    jsListPink.addEventListener("click", () => {
      let result = json.filter((x) => {
        return x.color === "pink";
      });
      result.forEach((element) => {
        jsli1 = document.createElement("li");
        jsitems.append(jsli1);
        let img1 = document.createElement("img");
        img1.src = element.picture;
        jsli1.append(img1);
        let jsSpan1 = document.createElement("span");
        jsSpan1.innerHTML = [
          element.title,
          element.gender,
          element.size,
          element.color,
        ].join(", ");
        jsli1.append(jsSpan1);
      });
      console.log(result);
      console.log("Pink");
    });
  })

  .catch((err) => console.log(err));
