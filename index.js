/* FOR HOVERING FUNCTION
// Select all stars
const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
    // Add hover effect (temporary visual feedback)
    star.addEventListener('mouseover', () => {
        resetStars(); // Reset all stars
        highlightStars(index); // Highlight stars up to the hovered one
    });

    // Remove hover effect when mouse leaves
    star.addEventListener('mouseout', () => {
        resetStars(); // Reset all stars
        applySelection(); // Apply permanent selection
    });

    // Add click event for permanent selection
    star.addEventListener('click', () => {
        clearSelection(); // Clear previous selection
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected'); // Select stars up to the clicked one
        }
        updateFeedback(index + 1); // Update feedback text
    });
});

// Reset all stars (remove hover and selection)
function resetStars() {
    stars.forEach(star => star.classList.remove('selected'));
}

// Apply persistent selection based on selected stars
function applySelection() {
    stars.forEach(star => {
        if (star.classList.contains('selected')) {
            star.style.color = '#ffcc00';
        } else {
            star.style.color = '#ccc';
        }
    });
}

// Highlight stars up to a specific index
function highlightStars(index) {
    for (let i = 0; i <= index; i++) {
        stars[i].style.color = '#ffcc00';
    }
}

// Clear all selections
function clearSelection() {
    stars.forEach(star => star.classList.remove('selected'));
}

// Update feedback text
function updateFeedback(rating) {
    const feedback = document.querySelector('.feedback');
    feedback.textContent = `You rated this recipe ${rating} star${rating > 1 ? 's' : ''}!`;
}

*/


/* FOR COLLAPSILE FUNCTION
<script>
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
    }
</script>

*/