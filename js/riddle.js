function checkRiddle() {
    // Define the riddle and the correct answer
    const riddle = "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?";
    const answer = "echo";

    // Use a prompt to ask the user the riddle
    const userAnswer = prompt(riddle);

    // Check if the user's answer is correct
    if (userAnswer && userAnswer.toLowerCase() === answer) {
        // If correct, open the secret page
        window.open("hidden.html", "_blank");
    } else {
        // If incorrect, provide a feedback message
        alert("Incorrect. The secret page remains a mystery!");
    }
}