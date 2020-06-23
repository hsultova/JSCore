/**
 * Created by Hris on 25.10.2016 г..
 */
function main() {
    let obj = {};
    obj.extend = function (template) {
        for(let prop in template){
            if(typeof template[prop] == 'function'){
                Object.getPrototypeOf(obj)[prop] = template[prop];
            }
            else{
                obj[prop] = template[prop];
            }
        }
    };

    return obj;
}

var template ={
    extensionMethod: function () {
        console.log("From extension method")
    }
}

main();