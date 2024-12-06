document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form field values
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();

    // Validate First Name
    if (firstName === "") {
        alert("First Name is required.");
        return;
    }

    // Validate Last Name
    if (lastName === "") {
        alert("Last Name is required.");
        return;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Validate Phone Number
    var phonePattern = /^[0-9]{10}$/; // assuming a 10-digit phone number
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate Address
    if (address === "") {
        alert("Address is required.");
        return;
    }

    // If all validations pass, send the data to the server
    var formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address
    };

    console.log('Error:--------------------');
    // Send data to the Node.js server using fetch()
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Form submitted successfully!");
            // Optionally reset the form
            document.getElementById("contactForm").reset();
        } else {
            alert("There was an error submitting the form.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error submitting the form.");
    });
});

