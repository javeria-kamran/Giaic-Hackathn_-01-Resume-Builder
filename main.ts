
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
const generatedResumeSection = document.getElementById('generated-resume') as HTMLElement;
const saveResumeButton = document.getElementById('save-resume') as HTMLButtonElement;
const resetResumeButton = document.getElementById('reset-resume') as HTMLButtonElement;

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Capture form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Generate the resume HTML dynamically
  const resumeHTML = `
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Insert the dynamically generated content
  resumeContent.innerHTML = resumeHTML;

  // Show the generated resume section
  generatedResumeSection.style.display = 'block';

  // Enable save and reset buttons
  saveResumeButton.disabled = false;
  resetResumeButton.disabled = false;
});

saveResumeButton.addEventListener('click', () => {
  // Implement your save functionality here
  // For example, you could save the resume content to local storage or a server
  console.log('Saving resume...');
});

resetResumeButton.addEventListener('click', () => {
  // Reset the resume content to its original state
  resumeContent.innerHTML = '';
  generatedResumeSection.style.display = 'none';

});

