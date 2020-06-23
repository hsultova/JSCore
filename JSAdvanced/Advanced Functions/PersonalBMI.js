/**
 * Created by Hris on 24.10.2016 г..
 */
function main([name, age, weight, height]) {
    weight = Number(weight);
    height = Number(height);
    let data = {
        "name": name,
        "personalInfo": {
            "age": Number(age),
            "weight": weight,
            "height": height
        },
        "BMI": function () {
            "use strict";
            return Math.round(weight / (height * height));
        },
        "status": function () {
            "use strict";
            if (data["BMI"] < 18.5) {
                return 'underweight';
            }
            else if (data["BMI"] >= 18.5 && data["BMI"] < 25) {
                return 'normal';
            }
            else if (data["BMI"] >= 25 && data["BMI"] < 30) {
                return 'overweight';
            }
            else if (data["BMI"] >= 30) {
                data["recommendation"] = 'admission required';
                return 'obese';
            }
        }
    }

    return data;
}

console.log(main(['Peter', 29, 75, 182]));