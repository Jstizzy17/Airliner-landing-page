document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Example: Log the form data to the console
    // In practice, you would send this data to a server
    console.log(formData);

    // Display a success message
    document.getElementById('form-response').innerText = 'Thank you for your message!';
    
    // Reset the form
    this.reset();
});
