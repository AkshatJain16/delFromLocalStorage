function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = event.target.username.value; // Get the username from the form input
    const email = event.target.email.value; // Get the email from the form input
    const phone = event.target.phone.value; // Get the phone number from the form input

    const user = {
        username,
        email,
        phone
    };

    const stringifiedUser = JSON.stringify(user); // Convert the user object to a JSON string
    localStorage.setItem('email', stringifiedUser); // Store the JSON string in localStorage
    
    displayUserInfo(user); // Call the function to display the user information
}

function displayUserInfo(user) {
    const ul = document.querySelector('ul'); // Select the unordered list element
    const li = document.createElement('li'); // Create a new list item element

    li.textContent = user.username + ' - ' + user.email + ' - ' + user.phone; // Set the text content of the list item

    const deleteButton = document.createElement('button'); // Create a delete button
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn'; // Add a class to the delete button for styling
    deleteButton.addEventListener('click',() => {
        li.remove(); // Remove the list item from the DOM when the delete button is clicked
        localStorage.removeItem('email'); // Remove the user information from localStorage
    })
    li.appendChild(deleteButton); // Append the delete button to the list item
    ul.appendChild(li); // Append the list item to the unordered list
}