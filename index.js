//STARS SECTION
const stars = document.querySelectorAll('.star');
const feedback = document.querySelector('.feedback');

stars.forEach((star, index) => { //adds 3 event listeners
    star.addEventListener('mouseover', () => highlightStars(index)); //When a user hovers over a star, it calls the highlightStars function to highlight stars up to that point
    star.addEventListener('mouseout', applySelection); //When the mouse leaves the star, it calls applySelection to apply the correct color based on the selection.
    star.addEventListener('click', () => selectStars(index)); //When a user clicks on a star, it calls the selectStars function to mark that star and all previous ones as selected.
});

function highlightStars(index) {
    stars.forEach((star, i) => { 
        star.style.color = i <= index ? '#ffcc00' : '#ccc'; //It loops through all the stars and checks if the index (i) is less than or equal to the hovered star’s index (index)
    });
}

function applySelection() {
    stars.forEach(star => {
        star.style.color = star.classList.contains('selected') ? '#ffcc00' : '#ccc';
    });
}

function selectStars(index) {
    stars.forEach((star, i) => star.classList.toggle('selected', i <= index));
    updateFeedback(index + 1);
}

function updateFeedback(rating) {
    feedback.textContent = `You rated this recipe ${rating} star${rating > 1 ? 's' : ''}!`;
}

  
//COLLAPSIBLE SECTION
// This stores all elements with the class collapsible (h5)
const collapsibles = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsibles.length; i++) {
    /*
We need to attach an event listener to each collapsible element so that when a user clicks on a heading (the collapsible), the
corresponding content can be shown or hidden. Without looping through all the collapsible elements, we would only be able to attach an 
event listener to one element.
*/
    collapsibles[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        // If the content is visible, hide it; otherwise, show it
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

    // Ensure the content is hidden by default
    const content = collapsibles[i].nextElementSibling;
    content.style.display = "none";
}



// SUBMIT BUTTON
document.addEventListener("DOMContentLoaded", () => { //Makes sure the entire script runs only after entire webpage(HTML) has loaded
    // => short way for writing function
    document.getElementById("submitBtn").onclick = (event)=> { //selects submitBtn and assigns a fxn to run when it's clicked
        // .onclick substitutes the addEevent.Listener("click", function () {...})
        event.preventDefault(); //prevents webpage from reloading after submitting

        let comment = document.getElementById("comment").value.trim();
       if (comment) {
            // Only replace the button if a comment is entered
            document.getElementById("submitContainer").innerHTML = `<p>Thank you for leaving a comment</p>`;
        } else {
            // If no comment, alert the user but keep the button
            alert("Please enter a comment before submitting.");
        }
    };
});
