
    // Get the modal element
    var aboutModal = document.getElementById("about-modal");
    var subjectsModal = document.getElementById("subjects-modal");
    var contactModal = document.getElementById("contact-modal");

    // Get the links
    var aboutLink = document.querySelector('a[href="#about"]');
    var subjectsLink = document.querySelector('a[href="#subjects"]');
    var contactLink = document.querySelector('a[href="#contact"]');

    // Get the close buttons
    var closeAbout = document.getElementById("close-about");
    var closeSubjects = document.getElementById("close-subjects");
    var closeContact = document.getElementById("close-contact");

    // Show the "About" modal when the 'About' link is clicked
    aboutLink.onclick = function(event) {
        event.preventDefault();
        aboutModal.style.display = "block";
    };

    // Show the "Subjects" modal when the 'Subjects' link is clicked
    subjectsLink.onclick = function(event) {
        event.preventDefault();
        subjectsModal.style.display = "block";
    };

    // Show the "Contact" modal when the 'Contact' link is clicked
    contactLink.onclick = function(event) {
        event.preventDefault();
        contactModal.style.display = "block";
    };

    // Close the "About" modal when the close button is clicked
    closeAbout.onclick = function() {
        aboutModal.style.display = "none";
    };

    // Close the "Subjects" modal when the close button is clicked
    closeSubjects.onclick = function() {
        subjectsModal.style.display = "none";
    };

    // Close the "Contact" modal when the close button is clicked
    closeContact.onclick = function() {
        contactModal.style.display = "none";
    };

    // Close any modal if the user clicks outside the modal content
    window.onclick = function(event) {
        if (event.target == aboutModal) {
            aboutModal.style.display = "none";
        }
        if (event.target == subjectsModal) {
            subjectsModal.style.display = "none";
        }
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    };

