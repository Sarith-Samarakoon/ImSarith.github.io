document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous error messages
    clearErrorMessages();

    let isValid = true;

    if (name === "") {
      showError("nameError", "Name is required.");
      isValid = false;
    }

    if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email address.");
      isValid = false;
    }

    if (message === "") {
      showError("messageError", "Message cannot be empty.");
      isValid = false;
    }

    if (isValid) {
      // Disable the button to prevent multiple submissions
      document.querySelector(".btn-submit").disabled = true;

      // Show success alert using SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: `Thank you, ${name}! Your message has been sent successfully.`,
        confirmButtonText: "OK",
      });

      // If you want to submit the form to Formspree, you can do so after the alert
      form.submit(); // Submit the form to Formspree

      // Optionally, you can reset the form here:
      form.reset();
    }
  });

  // Real-time validation
  document.getElementById("name").addEventListener("input", function () {
    const name = this.value.trim();
    if (name === "") {
      showError("nameError", "Name is required.");
    } else {
      clearError("nameError");
    }
  });

  document.getElementById("email").addEventListener("input", function () {
    const email = this.value.trim();
    if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email address.");
    } else {
      clearError("emailError");
    }
  });

  document.getElementById("message").addEventListener("input", function () {
    const message = this.value.trim();
    if (message === "") {
      showError("messageError", "Message cannot be empty.");
    } else {
      clearError("messageError");
    }
  });

  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Function to show error messages
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }

  // Function to clear specific error message
  function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = ""; // Clear the error message
  }

  // Function to clear all error messages
  function clearErrorMessages() {
    clearError("nameError");
    clearError("emailError");
    clearError("messageError");
  }
});
