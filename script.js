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

// ==========================================
// DT DIGITAL GROWTH - WEBSITE JAVASCRIPT
// ==========================================


// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


// ==========================================
// CONTACT FORM - FORMSPREE
// ==========================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = document.getElementById("submit-btn");


if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        // Change button text
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }


        // Clear previous message
        if (formStatus) {
            formStatus.textContent = "";
            formStatus.className = "form-status";
        }


        try {

            const formData = new FormData(contactForm);


            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            if (response.ok) {

                // Success
                if (formStatus) {

                    formStatus.textContent =
                        "Thank you! Your message has been sent successfully. We will contact you soon.";

                    formStatus.classList.add("success");

                }


                // Clear form
                contactForm.reset();


            } else {

                // Error
                if (formStatus) {

                    formStatus.textContent =
                        "Something went wrong. Please try again or email us directly at dtdigitalgrowth@gmail.com";

                    formStatus.classList.add("error");

                }

            }

        } catch (error) {

            console.error("Form submission error:", error);


            if (formStatus) {

                formStatus.textContent =
                    "Unable to send your message right now. Please email dtdigitalgrowth@gmail.com";

                formStatus.classList.add("error");

            }

        }


        // Restore button
        if (submitButton) {

            submitButton.disabled = false;
            submitButton.textContent = "Send Message";

        }

    });

}


// ==========================================
// CURRENT YEAR
// ==========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
