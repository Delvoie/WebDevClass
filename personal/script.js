// setup Elements
const webcamVideo = document.getElementById('webcam');
const toggleWebcamBtn = document.getElementById('toggle-webcam');
const flipWebcamBtn = document.getElementById('flip-webcam');
const toggleFullscreenBtn = document.getElementById('toggle-fullscreen');

// turn on webcam
navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 } })
    .then(stream => {
        webcamVideo.srcObject = stream;
        toggleWebcamBtn.textContent = 'Turn Off Webcam';
    });

// Toggle webcam
let webcamEnabled = true;
Webcam.addEventListener('click', () => {
    if (webcamEnabled) {
        webcamVideo.srcObject.getTracks().forEach(track => track.stop());
        toggleWebcamBtn.textContent = 'Turn On Webcam';
    } else {
        navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 } })
            .then(stream => {
                webcamVideo.srcObject = stream;
                toggleWebcamBtn.textContent = 'Turn Off Webcam';
            });
    }
    webcamEnabled = !webcamEnabled;
});

// Flip webcam horizontally
let isFlipped = false;
flipWebcam.addEventListener('click', () => {
    webcamVideo.style.transform = isFlipped ? 'none' : 'scaleX(-1)';
    isFlipped = !isFlipped;
});

//  fullscreen button
Fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});