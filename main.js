const title = document.querySelector(".home-title");

const author = "Aleksandra Chirtoska";

let idx = 1;

writeText();

function writeText() {
  title.innerText = author.slice(0, idx);

  idx++;

  setTimeout(writeText, 100);
}

$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },

    zoom: {
      enabled: true,

      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function

      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
});
