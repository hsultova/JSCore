function solve(input) {
    var word = input[0].toLowerCase();
    
    var days = { "monday": 1, "tuesday": 2, "wednesday": 3, "thursday": 4, "friday": 5, "saturday": 6, "sunday": 7 }
    for (var day in days) {
        if (word == day) {
            return days[word];
            return;
        }
    }
    return "error";
    
}