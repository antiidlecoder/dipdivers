// gsap.to(".level1", {
//   scrollTrigger: {
//     trigger: ".cwrap canvas",
//     pin: true,
//     start: "bottom bottom",
//     end: "800",
//   },
// });

/*

gsap.to(".level2", {
  scrollTrigger: {
    trigger: ".img img",
    pin: true,
    start: "top 100",
    end: "2000",
  },
});

gsap.to(".level3", {
  scrollTrigger: {
    trigger: ".img2 img",
    pin: true,
    start: "top 100",
    end: "2000",
  },
});

gsap.to(".end", {
  scrollTrigger: {
    trigger: ".img3 img",
    pin: true,
    start: "top 100",
    end: "2000",
  },
});

*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
