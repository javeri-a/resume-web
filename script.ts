document.getElementById('generateBtn')?.addEventListener('click', function() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const matric = (document.getElementById('matric') as HTMLInputElement).value;
    const intermediate = (document.getElementById('intermediate') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;
    const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    const resumeHTML = `
        <div style="text-align: center;">
            <h1 style="color: #e74c3c;">${name}</h1>
            <p>Email: ${email} | Contact: ${contact} | LinkedIn: ${linkedin}</p>
            <p>Address: ${address}</p>
        </div>
        <h2 style="color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 5px;">Education</h2>
        <p>Matriculation: ${matric}</p>
        <p>Intermediate: ${intermediate}</p>
        <p>Degree: ${degree}</p>
        <h2 style="color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 5px;">Skills</h2>
        <ul>
            <li>${skill1}</li>
            <li>${skill2}</li>
            <li>${skill3}</li>
        </ul>
        <h2 style="color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 5px;">Experience</h2>
        <p>${experience}</p>
    `;

    const resumeContainer = document.getElementById('resume') as HTMLElement;
    resumeContainer.innerHTML = resumeHTML;
    resumeContainer.style.display = 'block';
});

document.getElementById('downloadBtn')?.addEventListener('click', function() {
    const resumeContainer = document.getElementById('resume') as HTMLElement;
    const resumeContent = resumeContainer.innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
