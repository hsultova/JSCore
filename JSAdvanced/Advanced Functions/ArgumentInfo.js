/**
 * Created by Hris on 24.10.2016 г..
 */
function main() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);

        if (!summary[type]) {
            summary[type] = 1;
        }
        else {
            summary[type]++;
        }
    }

    let sortedTypes = [];
    for (let item in summary) {
        sortedTypes.push([item, summary[item]]);
    }
    sortedTypes.sort(function (a, b) {
        return b - a;
    })

    for(let [key,value] of sortedTypes){
        console.log(key + ' = ' + value);
    }
}