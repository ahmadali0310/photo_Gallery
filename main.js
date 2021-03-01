let gallery = document.querySelector(".container");
let item_overlay = document.querySelector(".item__overlay");
let outer_overlay = document.querySelector(".outer__overlay");
let image = outer_overlay.querySelector("img");
let close = document.querySelector(".close");
console.log(item_overlay + " " + outer_overlay + " " + image);
let genarateHtml = ([h, v]) => {
  return `
        <div class="item h${h} v${v}">
      <img src="./thumbs/${genarateRandomNumber(22)}.jpg" alt="" srcset="" />
      <div class="item__overlay">
        <button class="view">View</button>
      </div>
    </div>
    `;
};

let genarateRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
};

let hv = Array.from({ length: 50 }, () => [
  genarateRandomNumber(4),
  genarateRandomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

let html = hv.map(genarateHtml).join("");
gallery.innerHTML = html;

let items = document.getElementsByClassName("item");
items = Array.from(items);
items.forEach((item) =>
  item.addEventListener("click", (e) => {
    let src = e.currentTarget.querySelector("img").src;
    console.log(src);
    let newSrc = src.split("thumbs");
    image.src = `photo${newSrc[1]}`;
    outer_overlay.classList.add("open");
  })
);
close.addEventListener("click", () => {
  outer_overlay.classList.remove("open");
});

outer_overlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("open")) {
    outer_overlay.classList.remove("open");
  }
});
