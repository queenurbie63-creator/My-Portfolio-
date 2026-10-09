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

function fetchQuote() {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    //1.Loading state
    quoteText.textContent = "Loading quote...";
    quoteAuthor.textContent = "";
    //2. Fetch API Data
    fetch('https://dummyjson.com/quotes/random')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        quoteText.textContent = data.quote;
        quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch(error => {
        console.error("Error fetching quote:", error);
        quoteText.textContent = "Failed to load quote.";
        quoteAuthor.textContent = "";
    });
}
// Run on page load
document.addEventListener("DOMContentLoaded", () => {
    fetchQuote();
});
const newQuoteBtn = document.getElementById("new-quote-btn");
if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", fetchQuote);
}
  contactForm.reset();

});
