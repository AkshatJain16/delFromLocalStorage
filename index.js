function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = event.target.username.value; // Get the username from the form input
    const email = event.target.email.value; // Get the email from the form input
    const phone = event.target.phone.value; // Get the phone number from the form input

    localStorage.setItem('username', username); // Store the username in local storage
    localStorage.setItem('email', email); // Store the email in local storage
    localStorage.setItem('phone', phone); // Store the phone number in local storage
}