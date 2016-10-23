/**
 * Created by Hris on 5.10.2016 г..
 */
function main([text, word]) {
    let words = text.toLowerCase().split(/[ .!?,]/);
    let count =0;
    for(let w of words){
        if(w == word){
            count++;
        }
    }
    console.log(count);
}

main(['How do you plan on achieving that? How? How can you even think of that?', 'how']);