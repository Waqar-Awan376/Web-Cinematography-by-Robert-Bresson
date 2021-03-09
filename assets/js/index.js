let questions =
{
    "question1": "1. A brand must reflect the Principal’s moral values.",
    "question2": "2. Honour vision by adhering to the aesthetic.",
    "question3": "3. Share your thinking with listeners."
}
var curQuestion = 1;
var selectedAnswers = [];
function yes_button_clicked(caller) {
    selectedAnswers.push('yes');
    if (curQuestion == 3) {
        var audio = document.getElementById("yes_audio_3");
        audio.play();
        return;
    }
    var audio = document.getElementById("yes_audio_1,2");
    audio.play();
    curQuestion++;
    $("#question_text_area").text(questions[`question${curQuestion}`])
    document.getElementById('yes_button').checked = false;
}
function no_button_clicked() {
    if (curQuestion == 3) {
        if (selectedAnswers.indexOf("no") == -1) {
            var audio = document.getElementById("no_audio_1,2");
            audio.play();
            return;
        }
        else {
            var audio = document.getElementById("no_audio_3");
            audio.play();
            return;
        }

    }
    selectedAnswers.push('no');
    var audio = document.getElementById("no_audio_1,2");
    audio.play();
    curQuestion++;
    $("#question_text_area").text(questions[`question${curQuestion}`]);
    document.getElementById('no_button').checked = false;
}
