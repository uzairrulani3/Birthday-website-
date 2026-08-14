/* =====================================================
   CUSTOMIZE THESE
===================================================== */


// 🔐 CHANGE YOUR PASSWORD HERE

const PASSCODE = "3108";


// 💌 YOUR LETTER

const LETTER = `
Happy Birthday, my love ❤️

I hope today reminds you of how loved and special you are.

Thank you for every laugh, every conversation,
every little memory and every moment we've shared.

You make ordinary days feel special.

I am so lucky to have you in my life.

I love you more than I can put into words.

Here's to many more birthdays,
memories and adventures together. ❤️
`;


// ❤️ FINAL MESSAGE

const FINAL_MESSAGE = `
No matter how many birthdays come and go,
I will always be grateful that I get to celebrate you.

Keep smiling, keep shining,
and always remember that you have
a very special place in my heart. ❤️
`;


/* =====================================================
   VARIABLES
===================================================== */

let enteredPin = "";



/* =====================================================
   PAGE NAVIGATION
===================================================== */

function goTo(pageID) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });


  const page =
    document.getElementById(pageID);


  if (page) {

    page.classList.add("active");

  }


  window.scrollTo(0, 0);


  // Start music after user interaction

  const music =
    document.getElementById("music");


  if (music) {

    music.play().catch(() => {});

  }

}



/* =====================================================
   PASSWORD
===================================================== */

function pressKey(number) {


  if (enteredPin.length >= 4) {

    return;

  }


  enteredPin += number;


  updatePin();


  if (enteredPin.length === 4) {

    setTimeout(
      checkPassword,
      200
    );

  }

}



function deleteKey() {

  enteredPin =
    enteredPin.slice(0, -1);


  updatePin();


  document
    .getElementById("wrong-pin")
    .textContent = "";

}



function updatePin() {


  for (
    let i = 1;
    i <= 4;
    i++
  ) {


    const box =
      document.getElementById(
        "pin" + i
      );


    if (enteredPin[i - 1]) {

      box.textContent = "•";

    }

    else {

      box.textContent = "";

    }

  }

}



function checkPassword() {


  if (
    enteredPin === PASSCODE
  ) {


    burstConfetti();


    goTo(
      "page-birthday"
    );

  }


  else {


    document
      .getElementById("wrong-pin")
      .textContent =
      "Wrong passcode — try again ❤️";


    enteredPin = "";


    updatePin();

  }

}



/* =====================================================
   GIFTS
===================================================== */

function openGift(number) {


  const messages = {

    1:
      "Gift #1: One huge hug waiting for you 🤗❤️",

    2:
      "Gift #2: A lifetime supply of kisses 😘",

    3:
      "Gift #3: Your biggest surprise is still coming... ✨"

  };


  const gifts =
    document.querySelectorAll(
      ".gift"
    );


  const selected =
    gifts[number - 1];


  selected.style.transform =
    "translateY(-20px) scale(1.08)";


  document
    .getElementById(
      "gift-message"
    )
    .textContent =
    messages[number];


  burstConfetti();


  if (number === 3) {


    setTimeout(() => {

      goTo(
        "page-cake"
      );

    }, 1000);

  }

}



/* =====================================================
   CAKE
===================================================== */

function blowCandles() {


  const candles =
    document.querySelectorAll(
      ".candle"
    );


  candles.forEach(
    candle => {

      candle.classList.add(
        "out"
      );

    }
  );


  document
    .getElementById(
      "blow-button"
    )
    .textContent =
    "wish granted ✨";


  burstConfetti();


  setTimeout(() => {

    goTo(
      "page-memories"
    );

  }, 1500);

}



/* =====================================================
   LETTER
===================================================== */

function openLetter() {


  const envelope =
    document.querySelector(
      ".envelope"
    );


  envelope.classList.add(
    "open"
  );


  const letterText =
    document.getElementById(
      "letter-text"
    );


  if (
    letterText.textContent.trim() === ""
  ) {

    typeWriter(
      letterText,
      LETTER
    );

  }


  setTimeout(() => {

    goTo(
      "page-final"
    );


    document
      .getElementById(
        "final-message"
      )
      .textContent =
      FINAL_MESSAGE;


    burstConfetti();

  }, 5000);

}



/* =====================================================
   TYPEWRITER
===================================================== */

function typeWriter(
  element,
  text
) {


  let index = 0;


  element.textContent = "";


  const speed = 18;


  const timer =
    setInterval(() => {


      element.textContent +=
        text.charAt(index);


      index++;


      if (
        index >= text.length
      ) {

        clearInterval(timer);

      }


    }, speed);

}



/* =====================================================
   CONFETTI / HEARTS
===================================================== */

function burstConfetti() {


  const container =
    document.getElementById(
      "particles"
    );


  const symbols = [

    "❤️",
    "💗",
    "💕",
    "✨",
    "🌸",
    "🎀",
    "💖"

  ];


  for (
    let i = 0;
    i < 45;
    i++
  ) {


    const particle =
      document.createElement(
        "span"
      );


    particle.className =
      "particle";


    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    particle.style.left =
      Math.random() * 100 + "vw";


    particle.style.animationDuration =
      (
        2 +
        Math.random() * 3
      ) + "s";


    particle.style.animationDelay =
      (
        Math.random() * .7
      ) + "s";


    container.appendChild(
      particle
    );


    setTimeout(() => {

      particle.remove();

    }, 5500);

  }

}



/* =====================================================
   RESTART
===================================================== */

function restart() {


  enteredPin = "";


  updatePin();


  document
    .querySelectorAll(".candle")
    .forEach(
      candle => {

        candle.classList.remove(
          "out"
        );

      }
    );


  document
    .getElementById(
      "blow-button"
    )
    .textContent =
    "blow 💨";


  document
    .querySelector(
      ".envelope"
    )
    .classList.remove(
      "open"
    );


  document
    .getElementById(
      "letter-text"
    )
    .textContent = "";


  document
    .getElementById(
      "gift-message"
    )
    .textContent = "";


  document
    .querySelectorAll(".gift")
    .forEach(
      gift => {

        gift.style.transform =
          "";

      }
    );


  goTo(
    "page-password"
  );

}



/* =====================================================
   KEYBOARD PASSWORD SUPPORT
===================================================== */

document.addEventListener(
  "keydown",
  event => {


    if (
      /^[0-9]$/.test(
        event.key
      )
    ) {

      pressKey(
        event.key
      );

    }


    if (
      event.key ===
      "Backspace"
    ) {

      deleteKey();

    }


    if (
      event.key ===
      "Enter" &&
      enteredPin.length === 4
    ) {

      checkPassword();

    }

  }
);
