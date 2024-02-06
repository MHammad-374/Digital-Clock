let arr_days = ['Sunday','Monday', 'Tuesday', "Wednesday", 'Thursday', 'Friday', 'Saturday']
let arr_months = ['January', 'February', "March", 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

setInterval(() => {
    let date = new Date
    // Time
    let Time_only = date.toLocaleTimeString()
    let time = document.querySelector('h1');
    time.innerHTML = Time_only;
    // Date
    let today_date = date.getDate()
    let t_date = document.getElementsByClassName("today_date")[0];
    t_date.innerHTML = today_date;
    // Year
    let year = date.getFullYear()
    let yr = document.getElementsByClassName("yr")[0];
    yr.innerHTML = year;
    // Day
    let day = date.getDay()
    let d = document.getElementsByClassName("day")[0];
    d.innerHTML = arr_days[day];
    // Month
    let month = date.getMonth()
    let m = document.getElementsByTagName("h2")[0];
    m.innerHTML = arr_months[month];

}, 1000)



