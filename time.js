const numberDivs = document.querySelectorAll('#number div');
const numberSpans = document.querySelectorAll('#number span');
const houreDiv = document.querySelector("#houre");
const minuteDiv = document.querySelector("#minute");
const secondDiv = document.querySelector("#second");
// 布置钟盘
for (let i = 0; i < numberDivs.length; i++) {
    numberDivs[i].style.transform = `rotate(${i * 30}deg)`;
}
// 纠正文字旋转偏移
for (let j = 0; j < numberSpans.length; j++) {
    numberSpans[j].style.transform = `rotate(${j * -30}deg)`;
}
function run() {
    let dt = new Date();
    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let second = dt.getSeconds();
    secondDiv.style.transform = `rotate(${second*360/60}deg)`;
    minuteDiv.style.transform = `rotate(${minute*6+second*360/60/60}deg)`;
    houreDiv.style.transform = `rotate(${hour*30+minute*360/12/60+second*360/12/60/60}deg)`;
}
run();
setInterval(run,1000);


