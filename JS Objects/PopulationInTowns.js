/**
 * Created by Hris on 6.10.2016 г..
 */
function populationInTowns(dataRows) {
    let total = new Map();
    for (let dataRow of dataRows) {
        let [town, population] = dataRow.split(/\s*<->\s*/);
        population = Number(population);
        if (total.has(town))
            total.set(town, total.get(town) + population);
        else total.set(town, population);
    }
    for (let [town, sum] of total)
        console.log(town + " : " + sum);
}
populationInTowns(['B<->20', 'A<->30', 'B<->5'])
