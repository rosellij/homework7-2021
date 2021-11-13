window.addEventListener('DOMContentLoaded', () => {

	const video = document.querySelector("video");
	var volumevar = 1;

	window.addEventListener("load", function() {
		console.log("Good job opening the window");
	});

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("New Speed is " + video.playbackRate);
		video.playbackRate -= (video.playbackRate * 0.05);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		console.log("New Speed is " + video.playbackRate);
		video.playbackRate += (video.playbackRate * 0.05);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime <= (video.duration - 15)) {
			console.log("Original Location " + video.currentTime);
			video.currentTime += 15;
			console.log("New Location " + video.currentTime);
		}

		else {
			console.log("Original Location " + video.currentTime);
			//video.currentTime = video.currentTime + 15 - video.duration;
			video.currentTime = 0;
			console.log("New Location " + video.currentTime);
		}
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (document.querySelector("#mute").textContent == "Mute") {
			video.volume = 0;
			console.log(video.volume);
			document.querySelector("#volume").textContent = (video.volume * 100) + "%";
			document.querySelector("#mute").textContent = "Unmute";
			document.querySelector("#slider").value = 0;
		}

		else if (document.querySelector("#mute").textContent == "Unmute") {
			video.volume = volumevar;
			console.log(video.volume);
			document.querySelector("#volume").textContent = (video.volume * 100) + "%";
			document.querySelector("#mute").textContent = "Mute";
			document.querySelector("#slider").value = (video.volume * 100);
		}
	});

	document.querySelector("#slider").addEventListener("input", function(arg) {
		volumevar = (arg.target.value / 100);
		console.log(volumevar);
		video.volume = volumevar;
		document.querySelector("#volume").textContent = (video.volume * 100) + "%";

		if (volumevar > 0) {
			document.querySelector("#mute").textContent = "Mute";
		}
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});

});