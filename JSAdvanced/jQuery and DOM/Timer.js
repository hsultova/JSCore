/**
 * Created by Hris on 23.10.2016 г..
 */
function timer() {
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    var startTimerBtn = $('#start-timer');
    var stopTimerBtn = $('#stop-timer');
    var timer;

    function printText(textToPrint, textValue) {
        let t = textValue;
        if (textValue < 10) {
            t = '0' + textValue;
        }
        textToPrint.text(t);
    }

    function step() {
        var secondsValue = Number(seconds.val());
        seconds.val(++secondsValue);
        printText(seconds, secondsValue);

        if (secondsValue == 60) {
            var minutesValue = Number(minutes.val());
            minutes.val(++minutesValue);
            minutes.text(minutesValue);
            seconds.val(0);
            printText(minutes, minutesValue);
            printText(seconds, 0);
        }

        if (minutes == 60) {
            var hoursValue = Number(hours.val());
            hours.val(++hours);
            hours.text(hoursValue);
            minutes.val(0);
            printText(hours, hoursValue);
            printText(seconds, 0);
        }
    }

    startTimerBtn.on("click", function (event) {
        timer = setInterval(step, 1000);
    });

    stopTimerBtn.on("click", function (event) {
        clearInterval(timer);
    });
}