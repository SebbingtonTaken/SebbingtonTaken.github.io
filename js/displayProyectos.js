function showText(imageNumber, event) {
    const textDisplay = document.getElementById('text-display');
    const linkButtonContainer = document.getElementById('link-button-container');
    const textOptions = {
        1: 'El proyecto de Gym Elite abarca todos los aspectos necesarios para gestionar y disfrutar de un gimnasio, tanto para empleados como para clientes.',
        2: 'El Pokedex Randomizer es un proyecto alojado en EC2 y GitHub Pages, en el cual, al ingresar los datos de un Pokémon, se genera una descripción de este en el estilo del videojuego.',
        3: "Proyecto de nóminas desarrollado en C++, que utiliza un sistema de archivos para guardar y cargar datos.",
        4: 'El proyecto Cenfomon, desarrollado en Unity, destaca por la utilización de 9 patrones de diseño de software.'
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
                linkButtonContainer.innerHTML = `<a href="${link}" target="_blank" class="link-button">Ver Proyecto</a>`;
            }
        }
    }, 30); 
}