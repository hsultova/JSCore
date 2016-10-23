/**
 * Created by Hris on 5.10.2016 г..
 */
function main(input) {
    let regex = /www.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    let text = input.join('');
    let links = text.match(regex);

    console.log(links.join('\n'));
}

main(['Join WebStars now for free, at www.web-stars.com  ',
    'You can also support our partners:                ',
    'Internet - www.internet.com                       ',
    'WebSpiders - www.webspiders101.com                ',
    'Sentinel - www.sentinel.-ko                       ']);