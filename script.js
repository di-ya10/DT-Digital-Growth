// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;
    }


    // For now this only displays a success message.
    // Later we can connect the form to email/database.

    formMessage.textContent =
        `Thank you ${name}! Your project enquiry has been received.`;


    contactForm.reset();

});