var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
var generatedResumeSection = document.getElementById('generated-resume');
var saveResumeButton = document.getElementById('save-resume');
var resetResumeButton = document.getElementById('reset-resume');
var baseUrl = 'https://giaic-hackathn-01-resume-builder.vercel.app/';
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture form data
    var objective = document.getElementById('objective').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var resumeHTML = "\n\n <h3 contenteditable=\"false\">Objective</h3>\n    <p contenteditable=\"true\">".concat(objective, "</p>\n\n    <h3 contenteditable=\"false\">Personal Information:</h3>\n    <p contenteditable=\"true\"><strong>Name:</strong> ").concat(name, "</p>\n    <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n\n    <h3 contenteditable=\"false\">Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3 contenteditable=\"false\">Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3 contenteditable=\"false\">Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n      <h3 contenteditable=\"false\">Github URL</h3>\n    <p contenteditable=\"true\">").concat(github, "</p>\n\n      <h3 contenteditable=\"false\">Linkedin URL</h3>\n    <p contenteditable=\"true\">").concat(linkedin, "</p>\n  ");
    resumeContent.innerHTML = resumeHTML;
    generatedResumeSection.style.display = 'block';
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
    html2pdf().from(element).set(opt).save();
});
resetResumeButton.addEventListener('click', function () {
    resumeContent.innerHTML = '';
    generatedResumeSection.style.display = 'none';
});
