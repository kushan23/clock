setInterval(() => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let hrdeg = 30 * hr + min / 2;
    let mindeg = 6 * min;
    let secdeg = 6 * sec;

    hour.style.transform = `rotate(${hrdeg}deg)`;
    minutes.style.transform = `rotate(${mindeg}deg)`;
    seconds.style.transform = `rotate(${secdeg}deg)`;
}, 1000);

