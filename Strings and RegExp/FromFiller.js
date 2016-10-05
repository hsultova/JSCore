/**
 * Created by Hris on 5.10.2016 г..
 */
function fillForm(data) {
    let [username, email, phone] = [data.shift(), data.shift(), data.shift()];
    data.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });
}
fillForm(['pit', 'pit@pit.com', '032746', 'I am <!user!>, my email is <@email@>, my phone is <+p+>.'])
