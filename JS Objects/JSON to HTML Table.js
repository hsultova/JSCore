/**
 * Created by Hris on 6.10.2016 г..
 */
function JSONToHTMLTable([json]) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>";
    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`;
    html += "</tr>\n";
    for (let obj of arr) {
        html += `  <tr><td>${htmlEscape(obj)}` +`</td><td></tr>\n`;
    }
    return html + "</table>";

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
JSONToHTMLTable(['[{"X":5,"Y":7},{"X":2,"Y":4}]'])
