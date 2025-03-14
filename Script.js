// On window load, animate in the panels to show how you might
// transition from smaller wireframes to a fully visible page.
window.addEventListener("load", () => {
  // Add the "loaded" class to each element you want animated in
  const statsWindow = document.getElementById("statsWindow");
  const campaignContent = document.getElementById("campaignContent");

  // For demonstration, apply a small delay to each
  setTimeout(() => {
    statsWindow.classList.remove("start-hidden");
    statsWindow.classList.add("loaded");
  }, 300);

  setTimeout(() => {
    campaignContent.classList.remove("start-hidden");
    campaignContent.classList.add("loaded");
  }, 800);
});

// Very basic progress bar logic
let progressAmount = 0;
let userLevel = 1;

// Increase the progress bar fill
function increaseProgress() {
  const progressFill = document.getElementById("progressFill");
  const userLevelDisplay = document.getElementById("userLevel");

  progressAmount += 10; // or however much per question
  if (progressAmount >= 100) {
    progressAmount = 0;
    userLevel++;
    userLevelDisplay.textContent = userLevel;
    alert("Congratulations! You’ve leveled up!");
  }
  progressFill.style.width = progressAmount + "%";
}

// Reset the progress bar fill
function resetProgress() {
  progressAmount = 0;
  document.getElementById("progressFill").style.width = progressAmount + "%";
}

// You could also dynamically update these stats:
let totalAnswered = 0;
function updateStats(correctAnswers, totalQuestions) {
  totalAnswered += totalQuestions;
  document.getElementById("totalAnswered").textContent = totalAnswered;

  let accuracy = Math.floor((correctAnswers / totalQuestions) * 100);
  document.getElementById("accuracy").textContent = accuracy + "%";
}

// For illustration, call updateStats every time the user answers:
updateStats(8, 10);  // Example usage
