/**
 * Created by Hris on 6.10.2016 г..
 */
function main(input) {
    let data = [];
    for (let i = 0; i < input.length; i++) {
        data.push(JSON.parse(input[i]));
    }

    let html = '<table>\n';
    for (let item of data) {
        html += '	<tr>\n		<td>' + item.name + '</td>\n' +
            '		<td>' + item.position + '</td>\n' +
            '		<td>' + item.salary + '</td>\n	</tr>\n';
    }
    html += '</table>';
    console.log(html);
}

main(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);