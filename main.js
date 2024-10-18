var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
var generatedResumeSection = document.getElementById('generated-resume');
var saveResumeButton = document.getElementById('save-resume');
var resetResumeButton = document.getElementById('reset-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Capture form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume HTML dynamically
    var resumeHTML = "\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Insert the dynamically generated content
    resumeContent.innerHTML = resumeHTML;
    // Show the generated resume section
    generatedResumeSection.style.display = 'block';
    // Enable save and reset buttons
    saveResumeButton.disabled = false;
    resetResumeButton.disabled = false;
});
saveResumeButton.addEventListener('click', function () {
    // Implement your save functionality here
    // For example, you could save the resume content to local storage or a server
    console.log('Saving resume...');
});
resetResumeButton.addEventListener('click', function () {
    // Reset the resume content to its original state
    resumeContent.innerHTML = '';
    generatedResumeSection.style.display = 'none';
});
