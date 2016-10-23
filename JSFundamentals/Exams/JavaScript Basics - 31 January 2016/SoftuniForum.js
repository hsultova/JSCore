/**
 * Created by Hris on 8.10.2016 г..
 */
function main(input) {
    let banned = input[input.length - 1].split(/\s*\ \s*/).filter(function (e) {
        return e
    });

    let regex = /#([a-zA-Z][\w-]+[a-zA-Z0-9])\b|<code>[\w\W]*?<\/code>/g;
    let text = '';

    for (let i = 0; i < input.length - 1; i++) {
        text += input[i] + "\n";
    }
    let matches = regex.exec(text);
    while (matches != null) {
        if (matches[0].match(/<code>[\w\W]*?<\/code>/)) {
            matches = regex.exec(text);
            continue;
        }
        if (banned.indexOf(matches[1]) != -1) {
            text = text.replace(matches[0], '*'.repeat(matches[1].length));
        } else {
            let strToReplace = '<a href="/users/profile/show/' + matches[1] + '">' + matches[1] + '</a>'
            text = text.replace(matches[0], strToReplace);
        }
        matches = regex.exec(text);
    }
    console.log(text);
}

main(["#RoYaL: I'm not #RoYaL sure what you mean,",
    "but I am confident that I've written",
    'everything correctly. Ask #iordan_93 ',
    "and #pesho if you don't believe me",
    '<code>',
    '#trying to print stuff',
    'print("yoo")',
    '</code> ',
    'pesho gosho ']);