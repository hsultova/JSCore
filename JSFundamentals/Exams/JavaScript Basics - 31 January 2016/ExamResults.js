/**
 * Created by Hris on 7.10.2016 г..
 */
function main(input) {
    let coursePoints = 0;
    let grade = 0;
    let count = 0;
    let average = 0;
    let averageCourse = input[input.length - 1].trim();
    input.pop();

    for (let line of input) {
        let tokens = line.split(/\s+/).filter(function(e){return e});
        let student = tokens[0];
        let course = tokens[1];
        let examPoints = Number(tokens[2]);
        let courseBonuses = Number(tokens[3]);

        if (examPoints >= 100) {
            coursePoints = Number((examPoints - examPoints * 0.8 + courseBonuses).toFixed(2));
            grade = ((coursePoints / 80.0) * 4) + 2.00;
            if (grade > 6.00) {
                grade = 6.00;
            }

            console.log('%s: Exam - "%s"; Points - %s; Grade - %s', student, course, coursePoints, grade.toFixed(2));
        }
        else {
            console.log('%s failed at "%s"', student, course);
        }

        if (course == averageCourse) {
            average += examPoints;
            count++;
        }
    }

    average = Number((average / count).toFixed(2));

    console.log('"%s" average points -> %s', averageCourse, average);
}

main(['   Bankin    HTML&CSS                0          0       ',
    '           RoYaL        HTML5&CSS        340         10 ',
    '       Bi0GaMe      Java   10    10                     ',
    'Stamat HQC   190 10                                     ',
    'MINKA OOP   230 10                                      ',
    '   Java                                                 ']);