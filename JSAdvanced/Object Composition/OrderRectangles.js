/**
 * Created by Hris on 23.10.2016 г..
 */
function main(input) {
    var rectangles = [];

    function createRectangle(width, height) {
        var rectangle = {
            "width": width,
            "height": height,
            "area": function () {
                return rectangle.width * rectangle.height
            },
            "compareTo": function (other) {
                var result = other.area() - rectangle.area();
                return result || (other.width - rectangle.width);
            }
        }

        return rectangle;
    }

    for (var i = 0; i < input.length; i++) {
        var w = Number(input[i][0]);
        var h = Number(input[i][1]);

        rectangles.push(createRectangle(w, h));
    }

    rectangles.sort(function (a, b) {
        return a.compareTo(b);
    });

    return rectangles;
}