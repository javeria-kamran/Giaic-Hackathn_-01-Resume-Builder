declare const html2pdf: any;  

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
const generatedResumeSection = document.getElementById('generated-resume') as HTMLElement;
const saveResumeButton = document.getElementById('save-resume') as HTMLButtonElement;
const resetResumeButton = document.getElementById('reset-resume') as HTMLButtonElement;
const generatedLink = document.getElementById('generated-link') as HTMLAnchorElement;

const baseUrl = 'https://giaic-hackathn-01-resume-builder.vercel.app/';

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Capture form data
  const objective = (document.getElementById('objective') as HTMLInputElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const github = (document.getElementById('github') as HTMLTextAreaElement).value;
  const linkedin = (document.getElementById('linkedin') as HTMLTextAreaElement).value;

  
  const resumeHTML = `

 <h3 contenteditable="false">Objective</h3>
    <p contenteditable="true">${objective}</p>

    <h3 contenteditable="false">Personal Information:</h3>
    <p contenteditable="true"><strong>Name:</strong> ${name}</p>
    <p contenteditable="true"><strong>Email:</strong> ${email}</p>

    <h3 contenteditable="false">Education</h3>
    <p contenteditable="true">${education}</p>

    <h3 contenteditable="false">Work Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3 contenteditable="false">Skills</h3>
    <p contenteditable="true">${skills}</p>

      <h3 contenteditable="false">Github URL</h3>
    <p contenteditable="true">${github}</p>

      <h3 contenteditable="false">Linkedin URL</h3>
    <p contenteditable="true">${linkedin}</p>
  `;

  resumeContent.innerHTML = resumeHTML;
  const uniqueUrl = `${baseUrl}/${name}`;
  generatedLink.href = uniqueUrl;
  generatedLink.innerText = "Share your resume ";
  generatedLink.style.display = 'block';

  generatedResumeSection.style.display = 'block';

  saveResumeButton.disabled = false;
  resetResumeButton.disabled = false;
});

saveResumeButton.addEventListener('click', () => {
  const element = document.getElementById('resume-content');
  const opt = {
    margin:       1,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
});

resetResumeButton.addEventListener('click', () => {
  resumeContent.innerHTML = '';
  generatedResumeSection.style.display = 'none';
  generatedLink.style.display = 'none'; 
});
