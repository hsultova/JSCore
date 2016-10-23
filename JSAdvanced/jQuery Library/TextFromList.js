/**
 * Created by Hris on 23.10.2016 г..
 */
function extractText() {
    let items = $("ul#items li")
        .toArray()
        .map(li => li.textContent)
        .join(", ");
    $("#result").text(items);
}