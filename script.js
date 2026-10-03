const filterButtons = document.querySelectorAll(".project-filters button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const filter = button.getAttribute("data-filter");

        projectCards.forEach(function(project) {
            const category = project.getAttribute("data-category");

            if (filter === "all" || filter === category) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;

    if(name === "" || email === "" || 
        message ===
"") {
        formMessage.textContent = "Please fill in all fields.";
       return;
}
formMessage.textContent = "Thank you for your message Your message has been submitted.";

  contactForm.reset();

});
