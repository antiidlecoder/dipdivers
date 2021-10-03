let n = [
  {
    1: {
      first: 5,
      second: 4,
      third: 7,
      forth: 3,
      fifth: 9,
      sixth: 8,
      seventh: 6,
      eight: 3,
      maxSeqLen: 1,
      setSize: 7,
      highestFrequency0: 2,
      highestFrequency1: 1,
      highestFrequency2: 1,
      sum: 45,
    },
  },
  {
    2: {
      first: 8,
      second: 4,
      third: 8,
      forth: 9,
      fifth: 7,
      sixth: 5,
      seventh: 9,
      eight: 9,
      maxSeqLen: 2,
      setSize: 5,
      highestFrequency0: 3,
      highestFrequency1: 2,
      highestFrequency2: 1,
      sum: 59,
    },
  },
  {
    3: {
      first: 9,
      second: 11,
      third: 6,
      forth: 8,
      fifth: 5,
      sixth: 1,
      seventh: 5,
      eight: 6,
      maxSeqLen: 1,
      setSize: 6,
      highestFrequency0: 2,
      highestFrequency1: 2,
      highestFrequency2: 1,
      sum: 51,
    },
  },
];

let weapons = [
  "./imges/accesoirs/1.png",
  "./imges/accesoirs/2.png",
  "./imges/accesoirs/3.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
  "./imges/accesoirs/4.png",
];

let suits = [
  "./imges/suits/1.png",
  "./imges/suits/2.png",
  "./imges/suits/3.png",
  "./imges/suits/2.png",
  "./imges/suits/3.png",
  "./imges/suits/1.png",
  "./imges/suits/2.png",
  "./imges/suits/1.png",
  "./imges/suits/3.png",
  "./imges/suits/2.png",
  "./imges/suits/3.png",
  "./imges/suits/1.png",
  "./imges/suits/3.png",
  "./imges/suits/2.png",
  "./imges/suits/3.png",
];

let currN = 0;

let weapon = weapons[0];
let currWeapon = 0;

let currSuit = 0;

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

  frameRate(1);

  stroke(255);

  back = loadImage("./imges/design/start.gif");
  body = loadImage("./imges/body.png");
  fins = loadImage("./imges/fins.png");
  masks = loadImage("./imges/masks.png");
  tanks = loadImage("./imges/tanks.png");
  accessoirs = loadImage("./imges/accessoirs.png");

  weapon1 = loadImage(weapons[0]);
  weapon2 = loadImage(weapons[1]);
  weapon3 = loadImage(weapons[2]);
  weapon4 = loadImage(weapons[3]);

  suit1 = loadImage(suits[0]);
  suit2 = loadImage(suits[1]);
  suit3 = loadImage(suits[2]);
  suit4 = loadImage(suits[3]);
  suit5 = loadImage(suits[4]);
  suit6 = loadImage(suits[5]);
  suit7 = loadImage(suits[6]);
  suit8 = loadImage(suits[7]);
  suit9 = loadImage(suits[8]);
  suit10 = loadImage(suits[9]);
  suit11 = loadImage(suits[10]);
  suit12 = loadImage(suits[11]);
  suit13 = loadImage(suits[12]);
  suit14 = loadImage(suits[13]);
  suit15 = loadImage(suits[14]);
}

function draw() {
  // image(back, 0, 0)
  clear();

  let currWep = n[currN][currN + 1]["first"];

  var weps = [weapon1, weapon2, weapon3, weapon4];
  var wep = weps[currWeapon];

  var suits = [
    suit1,
    suit2,
    suit3,
    suit4,
    suit5,
    suit6,
    suit7,
    suit8,
    suit9,
    suit10,
    suit11,
    suit12,
    suit13,
    suit14,
    suit15,
  ];
  var suit = suits[currSuit];

  image(back, 0, 0);
  image(body, 0, 0);
  image(suit, 0, 0);
  image(fins, finXPos, 0);
  image(masks, maskXPos, 0);
  image(tanks, tankXPos, 0);
  image(wep, accessoirXPos, 0);

  /*
  if (currSuit < 14) {
    currSuit++;
  } else {
    currSuit = 0;
  }
  */
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
  if (currWeapon == 0) {
    currWeapon = weapons.length - 1;
  } else {
    currWeapon--;
  }
});
accessoirR.addEventListener("click", function () {
  currWeapon++;
  if (currWeapon >= weapons.length) {
    currWeapon = 0;
  }
});

// Suits
var suitL = document.getElementById("suitl");
var suitR = document.getElementById("suitr");
suitL.addEventListener("click", function () {
  if (currSuit == 0) {
    currSuit = suits.length - 1;
  } else {
    currSuit--;
  }
});
suitR.addEventListener("click", function () {
  currSuit++;
  if (currSuit >= suits.length) {
    currSuit = 0;
  }
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
