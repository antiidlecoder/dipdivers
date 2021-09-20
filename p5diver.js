let maskIndex = 0,
  tankIndex = 0,
  backIndex = 0,
  finIndex = 0,
  accessoirIndex = 0;
let maskXPos = 0,
  tankXPos = 0,
  backXPos = 0,
  finXPos = 0,
  accessoirXPos = 0;
let maxAccessoirs = 4;
function setup() {
  var ddCanvas = createCanvas(1116, 1116);
  ddCanvas.parent("ddCanvas");

  stroke(255);

  //back = loadImage("./imges/body2.png");
  body = loadImage("./imges/body.png");
  fins = loadImage("./imges/fins.png");
  masks = loadImage("./imges/masks.png");
  tanks = loadImage("./imges/tanks.png");
  accessoirs = loadImage("./imges/accessoirs.png");
}

function draw() {
  // image(back, 0, 0)
  clear();

  image(body, 0, 0);
  image(fins, finXPos, 0);
  image(masks, maskXPos, 0);
  image(tanks, tankXPos, 0);
  image(accessoirs, accessoirXPos, 0);
}

function getXPos(index, currXpos, right) {
  let xpos = currXpos;

  if (!right) {
    if (index < 0) {
      index = maxAccessoirs;
      xpos = -(maxAccessoirs * 1116);
    } else {
      xpos += 1116;
    }
  } else {
    if (index === maxAccessoirs + 1) {
      index = 0;
      xpos = 0;
    } else {
      xpos -= 1116;
    }
  }

  return {
    xpos: xpos,
    index: index,
  };
}

var maskL = document.getElementById("maskl");
var maskR = document.getElementById("maskr");
maskL.addEventListener("click", function () {
  maskIndex--;
  let data = getXPos(maskIndex, maskXPos, false);
  maskXPos = data["xpos"];
  maskIndex = data["index"];
});
maskR.addEventListener("click", function () {
  maskIndex++;
  let data = getXPos(maskIndex, maskXPos, true);
  maskXPos = data["xpos"];
  maskIndex = data["index"];
});

var tankL = document.getElementById("tankl");
var tankR = document.getElementById("tankr");
tankL.addEventListener("click", function () {
  tankIndex--;
  let data = getXPos(tankIndex, tankXPos, false);
  tankXPos = data["xpos"];
  tankIndex = data["index"];
});
tankR.addEventListener("click", function () {
  tankIndex++;
  let data = getXPos(tankIndex, tankXPos, true);
  tankXPos = data["xpos"];
  tankIndex = data["index"];
});

var accessoirL = document.getElementById("accessoirl");
var accessoirR = document.getElementById("accessoirr");
accessoirL.addEventListener("click", function () {
  accessoirIndex--;
  let data = getXPos(accessoirIndex, accessoirXPos, false);
  accessoirXPos = data["xpos"];
  accessoirIndex = data["index"];
});
accessoirR.addEventListener("click", function () {
  accessoirIndex++;
  let data = getXPos(accessoirIndex, accessoirXPos, true);
  accessoirXPos = data["xpos"];
  accessoirIndex = data["index"];
});

var finL = document.getElementById("finl");
var finR = document.getElementById("finr");
finL.addEventListener("click", function () {
  console.log("hasiud");
  finIndex--;
  let data = getXPos(finIndex, finXPos, false);
  finXPos = data["xpos"];
  finIndex = data["index"];
});
finR.addEventListener("click", function () {
  finIndex++;
  let data = getXPos(finIndex, finXPos, true);
  finXPos = data["xpos"];
  finIndex = data["index"];
});

var exportpng = document.getElementById("export");

exportpng.addEventListener("click", function () {
  save("dipdiver.png");
});
