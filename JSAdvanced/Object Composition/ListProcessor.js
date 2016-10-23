/**
 * Created by Hris on 23.10.2016 г..
 */
function main(input) {
    var commandProcessor = (function () {
        var list = [];

        return {
            "add": function (newItem) {
                list.push(newItem);
            },
            "remove": function (item) {
                list = list.filter(function (value) {
                    return value != item;
                });
            },
            "print": function () {
                console.log(list.join(','));
            }
        };
    })();

    for (var i = 0; i < input.length; i++) {
        var command = input[i].split(' ')[0];
        var item = input[i].split(' ')[1];

        commandProcessor[command](item);
    }
}