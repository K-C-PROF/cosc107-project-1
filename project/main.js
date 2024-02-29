//setup date end for countdown timer
let openingDate = new Date("mar 18, 2024 12:00:00").getTime();

//setup timer tick (every 1 sec) 
let counter = setInterval(tick, 1000);

function tick () {
    // get current time
    let now = new Date().getTime();

    // get the difference in time to get the time left
    let t = openingDate - now;

    // check if time is above 0
    if (t > 0) {
        //setup days, hours, minutes and seconds

        // code to calculate days
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        //prefix days less that 10 eg 9 to be 09
        if (days < 10) {days = "0" + days;}

        //code to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) {hours = "0" + hours;}

        //code to calculate mins
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) {mins = "0" + mins;}

        //code to calculate secs
        let secs = Math.floor((t % (1000 * 60)) / (1000));
        if (secs < 10) {secs = "0" + secs;}

        //set time string
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        //set time on project
        document.querySelector('.timer').innerHTML = time
        }
}


function getButtonText() {
    let button = document.getElementById('btn');
    let text = button.innerText;
    alert(text);
}
