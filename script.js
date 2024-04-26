let para = document.getElementById("timer");

function currentTime() {
	let date = new Date();
	
	let hour = date.getHours();
	let minute = date.getMinutes();
	minute = minute <=9 ? "0"+minute : minute;
	let second = date.getSeconds();
	second = second <=9 ? "0"+second : second;
    let am_pm;

	if(hour == 0){
		hour=12;
		am_pm = "AM";
	}
	else if(hour<12){
		am_pm = "AM";
	}
	else if(hour == 12){
		am_pm = "PM";
	}
	else if(hour < 12){
		hour = hour-12;
		am_pm = "PM";
	}

	let dateDay = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

    para.innerText = ${month}/${dateDay}/${year}, ${hour}:${minute}:${second} ${am_pm}
}

setInterval(currentTime, 1000)