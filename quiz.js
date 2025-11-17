document.getElementById("submitBtn").addEventListener("click", gradeQuiz);

function gradeQuiz() {
  let score = 0;
  let total = 5;

  // Correct answers
  const answers = {
    q1: "shibuya",
    q2: "Akihabara",
    q3: "Sushi",
    q4: "Tokyo Tower",
    q5: ["Tea Ceremony", "Anime Shopping", "Cherry Blossoms"]
  };

  // Question 1
  let q1 = document.querySelector("input[name='q1']").value.trim().toLowerCase();
  if (q1 === answers.q1) {
    score++;
    setFeedback("f1", "Correct!", true);
  } else {
    setFeedback("f1", "Incorrect — Answer: Shibuya", false);
  }

  // Question 2
  let q2 = getRadio("q2");
  if (q2 === answers.q2) {
    score++;
    setFeedback("f2", "Correct!", true);
  } else {
    setFeedback("f2", "Incorrect — Answer: Akihabara", false);
  }

  // Question 3
  let q3 = getRadio("q3");
  if (q3 === answers.q3) {
    score++;
    setFeedback("f3", "Correct!", true);
  } else {
    setFeedback("f3", "Incorrect — Answer: Sushi", false);
  }

  // Question 4
  let q4 = getRadio("q4");
  if (q4 === answers.q4) {
    score++;
    setFeedback("f4", "Correct!", true);
  } else {
    setFeedback("f4", "Incorrect — Answer: Tokyo Tower", false);
  }

  // Question 5 (multi-select)
  let q5 = [...document.querySelectorAll("input[name='q5']:checked")].map(b => b.value);
  let correct = arraysEqual(q5, answers.q5);

  if (correct) {
    score++;
    setFeedback("f5", "Correct!", true);
  } else {
    setFeedback("f5", "Incorrect — Correct: Tea Ceremony, Anime Shopping, Cherry Blossoms", false);
  }

  // Display results
  const results = document.getElementById("results");
  let pass = score >= 3 ? "PASS" : "FAIL";

  results.innerHTML = `
    <h2>Your Results</h2>
    <p><strong>Score:</strong> ${score}/${total}</p>
    <p><strong>Result:</strong> <span style="color:${pass === 'PASS' ? 'green' : 'red'}">${pass}</span></p>
  `;
}

function getRadio(name) {
  let selected = document.querySelector(`input[name='${name}']:checked`);
  return selected ? selected.value : "";
}

function arraysEqual(a, b) {
  return a.sort().toString() === b.sort().toString();
}

function setFeedback(id, message, correct) {
  let el = document.getElementById(id);
  el.innerText = message;
  el.style.color = correct ? "green" : "red";
}

