/**
 * Created by Hris on 23.10.2016 г..
 */
function attachEvents() {
    $('a.button').on('click', buttonClicked);
    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}