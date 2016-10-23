/**
 * Created by Hris on 23.10.2016 г..
 */
function main(arr, criteria) {
    arr.sort(function (a,b) {
        let result = a-b;
        if(criteria == 'desc'){
            result = b-a;
        }
        return result;
    });

    return arr;
}

console.log(main([14, 7, 17, 6, 8], 'desc'));