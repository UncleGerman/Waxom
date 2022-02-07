var styleElem = document.head.appendChild(document.createElement("style"))

let btnPlayMain = document.querySelector(".play_main"); 
let video = document.getElementById("video");            
let videoTrack = document.querySelector(".video-track"); 
let time = document.querySelector(".timeline");          
let btnPlay = document.querySelector(".play");                    

btnPlayMain.addEventListener("click", function() {
	video.play();
	styleElem.innerHTML = ".video_content {display: none !important;} .buttons {display: block !important;} .video_container:before {display: none !important;}";
	videoPlay = setInterval(function() {
		let videoTime = Math.round(video.currentTime)
		let videoLength = Math.round(video.duration)
		time.style.width = (videoTime * 100) / videoLength + '%';
	}, 10)
});

video.addEventListener("click", function() {
	video.pause();
	styleElem.innerHTML = ".video_content {display: flex !important;} .buttons {display: none !important;} .video_container:before {display: block !important;}";
	clearInterval(videoPlay)
});

videoTrack.addEventListener("click", function(e) {
	let posX = e.clientX - 8;
	let timePos = (posX * 100) / 800;
	time.style.width = timePos + '%';
	video.currentTime = (timePos * Math.round(video.duration)) / 100
});