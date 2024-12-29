// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 3, 4, 9, 11
    let group2Score = 0; // For questions 2, 5, 6, 7, 13
    let group3Score = 0; // For questions 1, 8, 10, 12, 14


    const group1Questions = [3, 4, 9, 11];
    const group2Questions = [2, 5, 6, 7, 13];
    const group3Questions = [1, 8, 10, 12, 14];


    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 31) {
        comment = "Yikes! It must feel like there is a rain cloud that hangs overhead all day. You have gotten yourself into the habit of seeing things as your fault and you've learned to give up your control in many situations. Taking this quiz is the first step toward turning your pessimism around. Read the rest of this article carefully, and use the exercises daily. Start now!";
    } else if (totalScore <= 50) {
        comment = "You try to be optimistic and positive however some situations get the better of you. Identify your triggers for negative thinking and use rational thinking exercises to become naturally more optimistic.";
    } else if (totalScore <= 70) {
        comment = "Great job! You have a generally positive and optimistic outlook on life. You don't take things personally and you are able to see that setbacks won't ruin the rest of your life.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "The frst step in changing negative thinking is to become aware of it.<br>";
    resultsDiv.innerHTML += " For many of us, negative thinking is a bad habit – and we may not even know we're doing it!<br><br>";

    resultsDiv.innerHTML += `Permanence: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Pervasiveness: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Personalization: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

