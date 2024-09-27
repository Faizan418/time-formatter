function Time(){
    let time = prompt("Enter time in 24-hour format") || "0000";
    let Time;
if(time >= "0000" && time < "1200"){
    Time = ("Good morning..!");
}
else if(time >= "1200" && time < "1700"){
    Time = ("Good afternoon..!");
}

else if(time >= "1700" && time < "2100"){
    Time = ("Good evening..!");
}

else if(time >= "2100" && time < "2359"){
    Time = ("Good night..!");
}



const resultBox = document.getElementById("time-box");
    resultBox.innerHTML = `
        <p><strong>time:</strong> ${time}</p>
        <p><strong>Time:</strong> ${Time}</p>
        
    `;

}