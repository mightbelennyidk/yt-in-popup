document.getElementById('playButton').addEventListener('click', function () {
    const videoInput = document.getElementById('videoInput').value;
    const videoId = getVideoId(videoInput);

    if (videoId) {
        const videoFrame = document.getElementById('videoFrame');
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else {
        alert('Please enter a valid YouTube video URL.');
    }
});

function getVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
}
