var curQuestion = 1;
var selectedAnswers = [];
$(`#question2`).fadeOut(1);
$(`#question3`).fadeOut(1);
function yesFadeOut() {
    selectedAnswers.push('yes');
    if (curQuestion == 3) {
        var audio = document.getElementById("yes_audio_3");
        audio.play();
        $(`#question${curQuestion}`).fadeOut(1200, function () {
            window.location.href = "../../home1.html";
        });
    }
    var audio = document.getElementById("yes_audio_1,2");
    audio.play();
    $(`#question${curQuestion}`).fadeOut('slow', function () {
        $(`#question${curQuestion}`).fadeIn('slow');
    });
}
function noFadeOut() {
    if (curQuestion == 1) {
        var audio = document.getElementById("no_audio_1,2");
        audio.play();
        $(`#question${curQuestion}`).fadeOut(1200, function () {
            window.location.href = "../../home1.html";
        });
    }
    if (curQuestion == 3) {
        if (selectedAnswers.indexOf("no") == (-1)) {
            var audio = document.getElementById("no_audio_1,2");
            audio.play();
            $(`#question${curQuestion}`).fadeOut(1200, function () {
                window.location.href = "../../home1.html";
            });
        }
        else {
            var audio = document.getElementById("no_audio_3");
            audio.play();
            $(`#question${curQuestion}`).fadeOut(1200, function () {
                window.location.href = "../../home1.html";
            });
        }
    }
    selectedAnswers.push('no');
    var audio = document.getElementById("no_audio_1,2");
    audio.play();
    $(`#question${curQuestion}`).fadeOut('slow', function () {
        $(`#question${curQuestion}`).fadeIn('slow');
    });
}
function yes_button_clicked() {
    yesFadeOut();
    curQuestion++;
}
function no_button_clicked() {
    noFadeOut();
    curQuestion++;
}

// ~~~~~~~~~~ HOME1.html javascript ~~~~~~~~~~ //
$(function () {
    // CLOSE AND REMOVE ON ESC
    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            $('.overlay').remove();
        }
    });

    // CLOSE AND REMOVE ON CLICK
    $('body').on('click', '.overlay, .close', function () {
        $('.overlay').remove();
    });

    // SO PLAYING WITH THE VIDEO CONTROLS DOES NOT
    // CLOSE THE POPUP
    $('body').on('click', '.videoBox', function (e) {
        e.stopPropagation();
    });
});

// ~~~~~~~~~~ HOME1.html javascript ~~~~~~~~~~ //