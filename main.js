var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
var generatedResumeSection = document.getElementById('generated-resume');
var saveResumeButton = document.getElementById('save-resume');
var resetResumeButton = document.getElementById('reset-resume');
var generatedLink = document.getElementById('generated-link');
var baseUrl = 'https://giaic-hackathn-01-resume-builder.vercel.app/';
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Capture form data
    var objective = document.getElementById('objective').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    // Generate the resume HTML dynamically
    var resumeHTML = "\n\n <h3 contenteditable=\"false\">Objective</h3>\n    <p contenteditable=\"true\">".concat(objective, "</p>\n\n    <h3 contenteditable=\"false\">Personal Information:</h3>\n    <p contenteditable=\"true\"><strong>Name:</strong> ").concat(name, "</p>\n    <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n\n    <h3 contenteditable=\"false\">Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3 contenteditable=\"false\">Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3 contenteditable=\"false\">Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n      <h3 contenteditable=\"false\">Github URL</h3>\n    <p contenteditable=\"true\">").concat(github, "</p>\n\n      <h3 contenteditable=\"false\">Linkedin URL</h3>\n    <p contenteditable=\"true\">").concat(linkedin, "</p>\n  ");
    // Insert the dynamically generated content
    resumeContent.innerHTML = resumeHTML;
    // Generate the unique URL (appending user's name)
    var uniqueUrl = "".concat(baseUrl, "/").concat(name);
    generatedLink.href = uniqueUrl;
    generatedLink.innerText = "Share your resume ";
    generatedLink.style.display = 'block';
    // Show the generated resume section
    generatedResumeSection.style.display = 'block';
    // Enable save and reset buttons
    saveResumeButton.disabled = false;
    resetResumeButton.disabled = false;
});
saveResumeButton.addEventListener('click', function () {
    var element = document.getElementById('resume-content');
    var opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Convert resume content to PDF and download
    html2pdf().from(element).set(opt).save();
});
resetResumeButton.addEventListener('click', function () {
    // Reset the resume content to its original state
    resumeContent.innerHTML = '';
    generatedResumeSection.style.display = 'none';
    generatedLink.style.display = 'none'; // Hide the link when resetting
});
