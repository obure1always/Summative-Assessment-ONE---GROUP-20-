document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventDate = document.getElementById('eventDate').value.trim();
    const tickets = document.getElementById('tickets').value.trim();

    // Regular expressions for validation
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // General phone number pattern
    const phonePattern = /^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

    if (!namePattern.test(name)) {
        showMessage("Invalid name. Only letters and spaces are allowed.");
    } else if (!emailPattern.test(email)) {
        showMessage("Invalid email format.");
    } else if (!phonePattern.test(phone)) {
        showMessage("Invalid phone number format.(256) 762-4514");
    } else if (!datePattern.test(eventDate)) {
        showMessage("Invalid date format. Use MM/DD/YYYY.");
    } else {
        const ticketNumber = parseInt(tickets, 10);
        if (isNaN(ticketNumber) || ticketNumber < 1 || ticketNumber > 10) {
            showMessage("Number of tickets must be between 1 and 10.");
        } else {
            showMessage("Registration successful!", true);
        }
    }
});

function showMessage(message, success = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = success ? 'green' : 'red';
}


