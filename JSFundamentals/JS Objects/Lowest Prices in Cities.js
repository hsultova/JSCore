/**
 * Created by Hris on 6.10.2016 г..
 */
function main(dataRows) {
    let list = new Map();
    for (let dataRow of dataRows) {
        let [town, product, price] = dataRow.split('|');
        price = Number(price);
        if (list.has(town)) {
            if(product == list[product]){
                list.set(town, list.get(town) + product + Math.min(price, list[price]));
            }
            else
            {
                list.set(town, list.get(town) + product + price);
            }
        }
        else {
            list.set(town, product + price);
        }
    }
    for (let [town, product] of list) {
        console.log(product + " -> "  + ' (' + town + ')');
    }
}
main(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1'])
