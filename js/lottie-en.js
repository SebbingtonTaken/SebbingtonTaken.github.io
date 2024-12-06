
document.getElementById("downloadLink").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of the link

    // Show the overlay and play the animation
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden");

    // Wait for the animation duration before downloading the PDF
    const animationDuration = 1300; // Duration of the WebP animation in milliseconds

    setTimeout(() => {
        overlay.classList.add("hidden"); // Hide the overlay

        // Trigger PDF download
        const link = document.createElement('a');
        link.href = './pdf/SebastianChinchillaCV-EN.pdf'; // Replace with your PDF file path
        link.download = 'Sebastian Chinchilla CV.pdf'; // Set the downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, animationDuration);
});