/* =====================================================
   CUSTOMIZE THESE
===================================================== */

const PASSCODE = "3108";

const LETTER = `
Happy Birthday, my love ❤️

I hope today reminds you of how loved and special
you really are.

Thank you for every laugh, every conversation,
every little memory and every beautiful moment
we've shared together.

You make ordinary days feel special.

I am so lucky to have you in my life.

I love you more than words can explain. ❤️

Happy Birthday, my beautiful girl. 🎂💗
`;

const FINAL_MESSAGE = `
No matter how many birthdays we celebrate,
I will always be grateful that I get to be beside you.

You are one of the most beautiful parts of my life.

Happy Birthday, my love. ❤️
`;


/* =====================================================
   PASSWORD SYSTEM
===================================================== */

let enteredPassword = "";

function enterNumber(number) {

    if (enteredPassword.length >= 4) {
        return;
    }

    enteredPassword += number;

    updatePasswordBoxes();

    if (enteredPassword.length === 4) {

        setTimeout(() => {

            if (enteredPassword === PASSCODE) {

                window.location.href = "gifts.html";

            } else {

                alert("Wrong password ❤️ Try again!");

                enteredPassword = "";

                updatePasswordBoxes();
            }

        }, 250);
    }
}


function updatePasswordBoxes() {

    for (let i = 1; i <= 4; i++) {

        const box = document.getElementById("box" + i);

        if (!box) continue;

        if (enteredPassword.length >= i) {
            box.textContent = "●";
        } else {
            box.textContent = "";
        }
    }
}


/* =====================================================
   LETTER
===================================================== */

const letterElement = document.getElementById("letterText");

if (letterElement) {
    letterElement.innerText = LETTER;
}


/* =====================================================
   FINAL MESSAGE
===================================================== */

const finalElement = document.getElementById("finalMessage");

if (finalElement) {
    finalElement.innerText = FINAL_MESSAGE;
}
