

var typed = new Typed("#element", {
    strings: ["I'm Freelancer","Web developer", "Web Designer", ],
    typeSpeed: 50,
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // You can add your form submission logic here
      // For example, send form data to a server using AJAX or fetch API
      // and display a success message to the user
      alert("Thank you for reaching out! I'll get back to you as soon as possible.");
      form.reset();
    });
  });
  
  