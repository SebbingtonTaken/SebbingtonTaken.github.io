function showText(imageNumber, event) {
    const textDisplay = document.getElementById('text-display');
    const linkButtonContainer = document.getElementById('link-button-container');
    const textOptions = {
        1: 'The "Elite Gym" project covers all the necessary aspects to manage and enjoy a gym, both for employees and clients.',
        2: 'The Pokedex Randomizer is a project hosted on EC2 and GitHub Pages, where entering Pokémon data generates a description of it in the style of the video game.',
        3: 'Payroll project developed in C++, which uses a file system to save and load data.',
        4: 'The "Cenfomon" project, developed in Unity, stands out for using 9 different software design patterns.'
    };

    const linkOptions = {
        1: 'https://github.com/SebbingtonTaken/GymProjectFrontEnd',
        2: 'https://sebbington2.github.io/index.html',
        3: 'https://github.com/SebbingtonTaken/ProyectoEstructuras2',
        4: 'https://github.com/SebbingtonTaken/CenfomonFinal'
    };

    const text = textOptions[imageNumber];
    const link = linkOptions[imageNumber];

    clearInterval(textDisplay.typingInterval);

    textDisplay.innerHTML = ''; // Clear the existing content
    linkButtonContainer.innerHTML = ''; // Clear the existing link button

    // Set visibility and opacity to handle the typing effect
    textDisplay.style.visibility = 'visible';
    textDisplay.style.opacity = 1;
    
    let index = 0;
    let tempText = ''; // Temporary variable to build the text

    // Using setInterval to simulate typing effect
    textDisplay.typingInterval = setInterval(() => {
        if (index < text.length) {
            tempText += text.charAt(index); // Build the text in the temporary variable
            textDisplay.innerHTML = `<div class="textBox"><p>${tempText}</p></div>`; // Set the innerHTML to the temporary text
            index++;
        } else {
            clearInterval(textDisplay.typingInterval); // Stop typing effect
            textDisplay.innerHTML = `<div class="textBox"><p>${text}</p></div>`; // Set the full HTML content

            // Display the link button if a link exists for the current text
            if (link) {
                linkButtonContainer.innerHTML = `<a href="${link}" target="_blank" class="link-button">View Project</a>`;
            }
        }
    }, 20); 
}



document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slideImg");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Element is entering the viewport
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden");
                } else {
                    // Element is leaving the viewport
                    entry.target.classList.add("hidden");
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.4 } // Trigger when 40% of the image is visible
    );

    images.forEach((img) => observer.observe(img));
});


document.addEventListener("DOMContentLoaded", () => {
    const scrollTopButton = document.getElementById("scrollTopButton");

    // Show or hide the button based on scroll position
    document.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        // Check if we're at the bottom of the page
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            scrollTopButton.style.display = "block"; // Show the button
        } else {
            scrollTopButton.style.display = "none"; // Hide the button
        }
    });

    // Scroll to top when the button is clicked
    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
