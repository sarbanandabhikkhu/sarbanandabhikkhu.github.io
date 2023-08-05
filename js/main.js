// select dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // show menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // show menu state
    showMenu = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".clock")) {
    initClock();
  }

  if (document.querySelector("#submit")) {
    sendMail();
  }
});

// clock
function initClock() {
  const clock = document.querySelector(".clock");
  const _hours = document.querySelectorAll(".hours");
  const _minutes = document.querySelectorAll(".minutes");
  const _seconds = document.querySelectorAll(".seconds");

  const digSegments = [
    [1, 2, 3, 4, 5, 6],
    [2, 3],
    [1, 2, 7, 5, 4],
    [1, 2, 7, 3, 4],
    [6, 7, 2, 3],
    [1, 6, 7, 3, 4],
    [1, 6, 5, 4, 3, 7],
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6, 7],
    [4, 3, 2, 1, 6, 7],
  ];
  const perSegments = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ];

  setInterval(function () {
    let date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      periods = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    setNumber(_hours[0], Math.floor(hours / 10), 1);
    setNumber(_hours[1], hours % 10, 1);
    setNumber(_minutes[0], Math.floor(minutes / 10), 1);
    setNumber(_minutes[1], minutes % 10, 1);
    setNumber(_seconds[0], Math.floor(seconds / 10), 1);
    setNumber(_seconds[1], seconds % 10, 1);

    if (periods === "AM") {
      perSegments[0].forEach(
        (per) =>
          (document.querySelector(".periods path.segment" + per).style.opacity =
            "1")
      );
    } else {
      perSegments[1].forEach(
        (per) =>
          (document.querySelector(".periods path.segment" + per).style.opacity =
            "1")
      );
    }
  }, 1000);

  function setNumber(digit, number, on) {
    const segments = digit.querySelectorAll(".segment");
    const current = parseInt(digit.getAttribute("data-value"));

    if (!isNaN(current) && current != number) {
      digSegments[current].forEach(function (digitSegment, index) {
        setTimeout(function () {
          segments[digitSegment - 1].classList.remove("on");
        }, index * 45);
      });
    }

    if (isNaN(current) || current != number) {
      setTimeout(function () {
        digSegments[number].forEach(function (digitSegment, index) {
          setTimeout(function () {
            segments[digitSegment - 1].classList.add("on");
          }, index * 45);
        });
      }, 250);

      digit.setAttribute("data-value", number);
    }
  }
}

function sendMail() {
  document.querySelector("#submit").addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const messege = document.querySelector("#messege").value;
    const subject = document.querySelector("#subject").value || "NO SUBJECT";
    const body = `Hello, my name is ${name}. My contact number is ${phone} and my email is ${email}. ${messege}`;

    window.location.href =
      "mailto:sarbanandabhikkhu@gmail.com?cc=sarbanandachakma@gmail.com,sarbanandadev@gmail.com&subject=" +
      subject +
      "&body=" +
      body;
  });
}
