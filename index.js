const stars = document.querySelectorAll('.star');
const feedback = document.querySelector('.feedback');

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => highlightStars(index));
    star.addEventListener('mouseout', applySelection);
    star.addEventListener('click', () => selectStars(index));
});

function highlightStars(index) {
    stars.forEach((star, i) => {
        star.style.color = i <= index ? '#ffcc00' : '#ccc';
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

    /* FOR COLLAPSILE FUNCTION
    // --- Collapsible Section ---
    const collapsibles = document.getElementsByClassName("collapsible");

    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none"; // Hide content
            } else {
                content.style.display = "block"; // Show content
            }
        });


        // Ensure the content is hidden by default (optional)
        const content = collapsibles[i].nextElementSibling;
        content.style.display = "none";
    }



// Get all the collapsible elements (the headings)
    var coll = document.getElementsByClassName("collapsible");

    // Loop through each collapsible element
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            // Toggle the active class to show/hide content
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            // If the content is visible, hide it; otherwise, show it
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });

        // Ensure the content is hidden by default (optional if you want it collapsed initially)
        var content = coll[i].nextElementSibling;
        content.style.display = "none";
    }

*/

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


/*THE ABOVE IS AN EASIER VERSION
document.addEventListener("DOMContentLoaded", function () { //ensures that the script runs only after the HTML document has been fully loaded.
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault();

        let comment = document.getElementById("comment").value.trim();

        if(comment) {
            document.getElementById("submitContainer").innerHTML = `<p>Thank you for commenting!</p>`;
        }
            else {
                alert("Please leave a comment before submitting");
        
        }
    });
});
*/
