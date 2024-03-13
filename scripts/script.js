document.addEventListener('DOMContentLoaded', function () {
    const contentSection = document.querySelector('section.intro'); // Selects the content section

    // Map all the content to their sections (should also map sections to JSON dicts for easier adding/removing)
    const contentMap = {
        "Introduction": "<h2>Intro</h2> <p>Intro text.</p>",
        "Test 2": "<h2>Section 2</h2> <p>Section 2 text.</p>",
        "Section 3": "<h2>Section 3</h2> <p>Section 3 text.</p>",
        "Section 4": "<h2>Section 4</h2> <p>Section 4 text.</p>",
        "Section 5": "<h2>Section 5</h2> <p>Section 5 text.</p>",
        "Section 6": "<h2>Section 6</h2> <p>Section 6 text.</p>",
        "Section 7": "<h2>Section 7</h2> <p>Section 7 text.</p>",
    };

    function updateMainContentAndSidebar(sectionName) {
        const htmlContent = contentMap[sectionName] || "<h2>Not Available</h2><p>No content available for this section.</p>"; // Default message if sectionName not found
        contentSection.innerHTML = htmlContent; // Replaces the innerHTML of the content section
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }

    const sidebarLinks = document.querySelectorAll('.list-group-item-action');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevents the default link behavior

            const sectionName = this.querySelector('span').textContent; // Gets the section name from the span element
            updateMainContentAndSidebar.call(this, sectionName); // Updates the content section based on the clicked section using the content map
        });
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }