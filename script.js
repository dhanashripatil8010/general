
const MY_WHATSAPP_NUMBER = "918010671239";
// Example: "919876543210"
// Country code ke saath, bina + sign ke.

const questions = [
  {
    q: "Are you serious about us? ❤️",
    options: [
      "Yes, absolutely ❤️",
      "Maybe 😅",
      "Still thinking 🤔",
      "Tum kya sochti ho? 🥹"
    ],
    reactions: [
      "Bas! Mujhe yahi sunna tha ❤️",
      "Achha ji, abhi bhi soch rahe ho? 😂",
      "Itna time kis baat ka? 😜",
      "Question tumse hai, mujhse nahi! 😂"
    ]
  },
  {
    q: "Kay nehmi sobat rahshil? 🫶",
    options: [
      "Ho, nehmi ❤️",
      "Agdi shevat paryant 🥹",
      "Try tar nakkich karin",
      "He pan vicharaycha aahe ka? 😂"
    ],
    reactions: [
      "Promise lakshat thev! ❤️",
      "Awww, khup special answer! 🥹",
      "Effort matters! ❤️",
      "Ho baba! 😂"
    ]
  },
  {
    q: "Ghari kadhi sangnar tuzya baddal? 🙈",
    options: [
      "Lavkarach ❤️",
      "Yogya vel aalyavar",
      "Ajun vichar kartoy 😅",
      "Tu sang aadhi 😂"
    ],
    reactions: [
      "Achha ji! ❤️",
      "Theek aahe, yogya vel mahatvachi aahe.",
      "Kiti vichar karnaar? 😂",
      "Mi ka aadhi sangu? 🙈"
    ]
  },
  {
    q: "Majhya kontya goshticha rag yeto? 😂",
    options: [
      "Majha jast bolna",
      "Majha chidchid karna",
      "Majha overthinking",
      "Mala rag yetach nahi ❤️"
    ],
    reactions: [
      "Hahaha! 😂",
      "Achha, lakshat theven!",
      "He tar majhi special quality aahe!",
      "Awww! ❤️"
    ]
  },
  {
    q: "Aplya baddal kay vichar kartos? 🥹",
    options: [
      "Aplya bond khup special aahe ❤️",
      "Aapan ajun ekmekanna samjun gheu",
      "Future madhe kahi tari sundar asu shakta",
      "Shabdat sangta yenar nahi 🫶"
    ],
    reactions: [
      "Mala pan aapla bond special vatto ❤️",
      "Ekmekanna samjun ghena mahatvacha aahe.",
      "Let's see what life has for us! ✨",
      "Kahi feelings shabdat sangta yet nahit. 🥹"
    ]
  }
];

let current = 0;
let selectedAnswers = [];

const heading = document.getElementById("heading");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const progress = document.getElementById("progress");
const reaction = document.getElementById("reaction");

function startQuiz() {
  current = 0;
  selectedAnswers = [];
  showQuestion();
}

function showQuestion() {
  const item = questions[current];

  heading.textContent = "Question " + (current + 1);
  question.textContent = item.q;
  progress.textContent = `${current + 1} / ${questions.length}`;
  reaction.textContent = "";
  answers.innerHTML = "";

  item.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(index);
    answers.appendChild(btn);
  });
}

function selectAnswer(index) {
  selectedAnswers.push(questions[current].options[index]);

  heading.textContent = "Hehe! ❤️";
  question.textContent = questions[current].reactions[index];

  answers.innerHTML =
    '<button onclick="nextQuestion()">NEXT QUESTION ➜</button>';
}

function nextQuestion() {
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  heading.textContent = "Thank You! ❤️";

  question.textContent =
    "Tumne mere saare questions ke answers diye! 🥹\n\n" +
    "Tu majhyasathi khup special ahes. ❤️\n\n" +
    "60 days left... I'm waiting for you! 🫶";

  progress.textContent = "ALL 5 QUESTIONS COMPLETED!";

  answers.innerHTML = `
    <button onclick="sendAnswers()">SEND MY ANSWERS 💌</button>
    <button onclick="showAnswers()">SEE MY ANSWERS</button>
  `;
}

function sendAnswers() {
  if (MY_WHATSAPP_NUMBER === "918010671239") {
    alert("Pehle script.js mein apna WhatsApp number add karo!");
    return;
  }

  let message = "❤️ A LITTLE QUESTION - MY ANSWERS ❤️\n\n";

  questions.forEach((item, index) => {
    message +=
      `${index + 1}. ${item.q}\n` +
      `Answer: ${selectedAnswers[index]}\n\n`;
  });

  message += "Completed all 5 questions! ❤️";

  const url =
    "https://wa.me/" +
    MY_WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

function showAnswers() {
  heading.textContent = "Your Answers 💗";

  question.textContent = selectedAnswers
    .map((answer, index) =>
      `${index + 1}. ${answer}`
    )
    .join("\n\n");

  progress.textContent = "ALL YOUR ANSWERS ❤️";

  answers.innerHTML =
    '<button onclick="sendAnswers()">SEND ON WHATSAPP 💌</button>';
}