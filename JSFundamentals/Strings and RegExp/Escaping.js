/**
 * Created by Hris on 4.10.2016 г..
 */
function solve(input) {
    console.log('<ul>');
    for(let i=0;i<input.length;i++){
        console.log('  <li>' + htmlEscape(input[i]) +'</li>' );
    }
    console.log('</ul>');
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

solve(['<b>unescaped text</b>', 'normal text']);