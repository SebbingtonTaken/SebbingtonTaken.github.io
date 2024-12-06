// Initialize EmailJS
(function () {
    emailjs.init("U07h2tKQQg7iHaP3K"); // Replace with your actual Public Key
})();

// Add event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Generate a five-digit random number for contact_number
    this.contact_number.value = Math.floor(Math.random() * 100000);

    // Send form data using EmailJS
    emailjs.sendForm('service_w09gz9f', 'template_2cpbfer', this)
        .then(function () {
            // Display success message
            const statusElement = document.getElementById('status');
            statusElement.innerText = '¡Mensaje enviado con éxito!';
            statusElement.style.color = 'green';

            // Hide the status message after 10 seconds
            setTimeout(function() {
                statusElement.innerText = '';
            }, 10000); // 10000 ms = 10 seconds
        })
        .catch(function (error) {
            // Display error message
            const statusElement = document.getElementById('status');
            statusElement.innerText = 'Error al enviar el mensaje, inténtelo de nuevo';
            statusElement.style.color = 'red';

            // Hide the status message after 10 seconds
            setTimeout(function() {
                statusElement.innerText = '';
            }, 10000); // 10000 ms = 10 seconds
            
            console.error('EmailJS error:', error);
        });
});