function digitalClock() {
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

  function setNumber(digit, number, on) {
    const segments = digit.querySelectorAll(".segment");
    const current = parseInt(digit.getAttribute("data-value"));

    if (!isNaN(current) && current != number) {
      digSegments[current].forEach((digitSegment, index) => {
        setTimeout(function () {
          segments[digitSegment - 1].classList.remove("on");
        }, index * 45);
      });
    }

    if (isNaN(current) || current != number) {
      setTimeout(() => {
        digSegments[number].forEach((digitSegment, index) => {
          setTimeout(() => {
            segments[digitSegment - 1].classList.add("on");
          }, index * 45);
        });
      }, 250);

      digit.setAttribute("data-value", number);
    }
  }

  setInterval(() => {
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
}

function initClock() {
  setTimeout(() => {
    digitalClock();
    setTimeout(() => {
      const clock = document.querySelector(".clock");
      clock.style.display = "block";
    }, 1000);
  }, 1000);
}

export default initClock;
