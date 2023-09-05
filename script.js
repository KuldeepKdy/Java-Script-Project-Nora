//------------- Section-1--------------
var text = document.querySelector("#info");
var button = document.querySelector("#btnn");

var val = 0;

button.addEventListener("click", function () {
  if (val == 0) {
    text.innerHTML = "Friends";
    text.style.color = "green";
    button.innerHTML = "Un Friend";
    val = 1;
  } else {
    text.innerHTML = "Stranger";
    text.style.color = "red";
    button.innerHTML = "Add Friend";
    val = 0;
  }
});

//------------- Section-2--------------
var img = document.querySelector(".project2");
var love = document.querySelector("i");

img.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;
  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});

//------------- Section-3--------------
var section = document.querySelector(".container");
var crsr = document.querySelector("#cursor");

section.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

//------------- Section-4--------------

var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x + "px";
  });
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
});

//------------- Section-5--------------
var arr = [
  {
    dp: "https://i.pinimg.com/736x/31/64/71/31647151ae34da0bf861250e0f7009f7.jpg",
    story:
      "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/nora-fatehi-flaunts-her-hour-glass-figure-in-a-dress-by-georges-chakra-202103-1617100458.jpg",
  },
  {
    dp: "https://th.bing.com/th/id/R.a0e1279290b6b1eab5e503c94c764ab2?rik=6YNGlpYYd05b7g&riu=http%3a%2f%2fstarsbiog.com%2fwp-content%2fuploads%2f2019%2f01%2fNora-Fatehi-Bio-Wiki.jpg&ehk=FBSisDgRjSkzdzmD2Dkpy0S4UHdalY0%2ba9z9O8vC9as%3d&risl=&pid=ImgRaw&r=0",
    story:
      "https://content.tupaki.com/twdata/2020/0420/photos/actress/Nora%20Fatehi%20Latest%20Photoshoot/normal/Nora%20Fatehi%20Latest%20Photoshoot_10.jpg",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.yNtsdKHkTXmz77CLneyfJAHaLH?pid=ImgDet&rs=1",
    story:
      "https://th.bing.com/th/id/OIP.6Iwlmbh3MFi-wKMLg62LuwHaLH?pid=ImgDet&rs=1",
  },
  {
    dp: "https://i.redd.it/ncxa31zl4lm61.jpg",
    story:
      "https://img.starbiz.com/resize/750x-/2021/01/21/nora-fatehi-new-instagram-post-aaf6.jpg",
  },
];

var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  // console.log(arr[dets.target.id].story);
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
