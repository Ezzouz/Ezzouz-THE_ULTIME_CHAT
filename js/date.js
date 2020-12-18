
//  date et heure live  //
function displayDate(){
    let date = document.getElementById('display-date');
    let today = new Date();
    date.innerHTML = today.getDate() + '/' + (today.getMonth()+ 1) + '/' + today.getFullYear() + '</span> <br> <span id="display-time">' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
}
displayDate();
setInterval(displayDate, 1000);

function displayHour(){
    var toHour = new Date();
    var hour = toHour.getHours() + ':' + toHour.getMinutes();
    return hour;
}