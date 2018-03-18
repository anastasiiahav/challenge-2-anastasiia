//Stopwatch actieveren met TimelineMax
var startTime = 0;
var timeline = new TimelineMax({repeat : -1});

function updateClock(){
	var currentTime = new Date();

	document.getElementById('clock').innerHTML = currentTime.toLocaleTimeString();
	

	//Lichtblauw achtergrond en tekst 'Its day on Earth' als het minder dan 18:00 is
	//if (currentTime.getHours() < 18) {
		//document.getElementById("time").innerHTML = "It's day on Earth";
		 //document.body.style.background = "#9bccff";
	//}

	//Achtergrond verandert naar donkerblauw en tekst naar 'Its night on Earth' als het meer dan 18:00 is
	//else {
		 //document.getElementById("time").innerHTML = "It's night on Earth";
		 //document.body.style.background = "#1d2e4f";
	//}
	

	//Lichtblauw achtergrond en tekst 'Its morning on Earth' als het minder dan 12:00 is en meer dan 1:00
	if (currentTime.getHours() < 12 && currentTime.getHours() > 1) {
		document.getElementById("time").innerHTML = "It's morning on Earth";
		document.body.style.background = "#9bccff";
	}

	//Oranje achtergrond en tekst 'Its afternoon on Earth' als het meer of gelijk aan 12:00 is en minder dan 1:00
	if (currentTime.getHours() >= 12 && currentTime.getHours() < 18) {
		 document.getElementById("time").innerHTML = "It's afternoon on Earth";
		 document.body.style.background = "#fbc675";
	}

	//Donkerblauw achtergrond en tekst 'Its evening on Earth' als het meer of gelijk aan 18:00 is en minder dan 1:00
	if (currentTime.getHours() >= 18 && currentTime.getHours() < 24) {
		document.getElementById("time").innerHTML = "It's evening on Earth";
		 document.body.style.background = "#1d2e4f";
	}
}

//Tijdanimatie wanneer de pagina geladen is
window.onload = function(){
	startTime = new Date();

	timeline.call(updateClock)
			.from('#clock', 0.3, { top: 0, ease: Linear.easeIn})
			.to('#clock', 0.7, { opacity: 0.1});			
			
}


