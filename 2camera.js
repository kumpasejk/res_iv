document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector(".video-container");

    // Create an image element for video streaming
    const videoStream = document.createElement("img");
    videoStream.src = "http://127.0.0.1:5000/video_feed";
    videoStream.alt = "FSL Detection Camera Feed";
    videoStream.style.width = "100%";
    videoStream.style.borderRadius = "10px";
    videoStream.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";

    // Append the image to the container
    videoContainer.innerHTML = "";
    videoContainer.appendChild(videoStream);
});
