import Email from '../images/reshot-icon-email-message-QZWBGHKULS.svg';
import PDFImage from '../images/reshot-icon-pdf-file-8W7GJ5ZKQP.svg';
import myPNG from '../images/Samuel-C-Melchior-Resume.png';

export let contact = document.createElement('div');
contact.setAttribute('id', 'contact-section');

let contactContainer = document.createElement('div');
contactContainer.setAttribute('id', 'contact-container');
contact.appendChild(contactContainer);

let contactBackground = document.createElement('div');
contactBackground.setAttribute('id', 'contact-background');
contact.appendChild(contactBackground);

export let contactTitle = document.createElement('h1');
contactTitle.classList.add('contact-title');
contactTitle.innerHTML = 'Contact.';
contactContainer.appendChild(contactTitle);

let contactPara = document.createElement('h1');
contactPara.classList.add('contact-para');
contactPara.innerHTML =
  "There are a few ways to get ahold of me, from LinkedIn to good old fashioned email to the handy contact form just below here. I've even included a PNG file of my résumé for a more intensive viewing of my background. Feel free to reach out with any comments, concerns, compliments, or complaints. If you think we could have a mutually beneficial relationship in the world of web design, I'd love to hear from you!";
contactContainer.appendChild(contactPara);

let contactContent = document.createElement('div');
contactContent.setAttribute('id', 'contact-content-container');
contactContainer.appendChild(contactContent);

let linksContainer = document.createElement('div');
linksContainer.setAttribute('id', 'contact-links-container');
contactContent.appendChild(linksContainer);

let linkedInButton = document.createElement('img');
linkedInButton.setAttribute('id', 'linkedin-button');
linkedInButton.classList.add('contact-button');
linkedInButton.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg';
linkedInButton.alt = 'LinkedIn Logo Link';
linkedInButton.tabIndex = 0;
linkedInButton.addEventListener('click', function () {
  window.open(
    'https://www.linkedin.com/in/samuel-melchior-15baa568/',
    '_blank'
  );
});
linksContainer.appendChild(linkedInButton);

let linkedInBackground = document.createElement('div');
linkedInBackground.setAttribute('id', 'linkedin-button-background');
linkedInBackground.classList.add('contact-button-background');
linkedInBackground.innerHTML = "Here's my LinkedIn profile.";
linksContainer.appendChild(linkedInBackground);

let githubButton = document.createElement('img');
githubButton.setAttribute('id', 'github-button');
githubButton.classList.add('contact-button');
githubButton.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
githubButton.alt = 'Git Hub Logo Link';
githubButton.tabIndex = 0;
githubButton.addEventListener('click', function () {
  window.open('https://github.com/Melchs40/', '_blank');
});
linksContainer.appendChild(githubButton);

let githubBackground = document.createElement('div');
githubBackground.setAttribute('id', 'github-button-background');
githubBackground.classList.add('contact-button-background');
githubBackground.innerHTML = 'Check me out on GitHub.';
linksContainer.appendChild(githubBackground);

let emailButton = document.createElement('img');
emailButton.setAttribute('id', 'email-button');
emailButton.classList.add('contact-button');
emailButton.src = Email;
emailButton.alt = 'Email Link';
emailButton.tabIndex = 0;
emailButton.addEventListener('click', function () {
  window.open('mailto:samscodingjourney@gmail.com');
});
linksContainer.appendChild(emailButton);

let emailBackground = document.createElement('div');
emailBackground.setAttribute('id', 'email-button-background');
emailBackground.classList.add('contact-button-background');
emailBackground.innerHTML = 'Click to reach out via email.';
linksContainer.appendChild(emailBackground);

let pdfButton = document.createElement('img');
pdfButton.setAttribute('id', 'pdf-button');
pdfButton.classList.add('contact-button');
pdfButton.src = PDFImage;
pdfButton.alt = 'PDF Link';
pdfButton.tabIndex = 0;
pdfButton.addEventListener('click', function () {
  window.open(myPNG, '_blank');
});
linksContainer.appendChild(pdfButton);

let pdfBackground = document.createElement('div');
pdfBackground.setAttribute('id', 'pdf-button-background');
pdfBackground.classList.add('contact-button-background');
pdfBackground.innerHTML = 'Take a look at my résumé.';
linksContainer.appendChild(pdfBackground);

let contactFormContainer = document.createElement('div');
contactFormContainer.setAttribute('id', 'contact-form-container');
contactContent.appendChild(contactFormContainer);

let contactForm = document.createElement('form');
contactForm.setAttribute('id', 'contact-form');
contactForm.action = 'https://fabform.io/f/O9i8ty6';
contactForm.method = 'POST';
contactFormContainer.appendChild(contactForm);

let contactNameContainer = document.createElement('div');
contactNameContainer.classList.add('contact-items-container');
contactForm.appendChild(contactNameContainer);

let contactNameLabel = document.createElement('label');
contactNameLabel.classList.add('contact-labels');
contactNameLabel.for = 'name';
contactNameLabel.textContent = 'Name:';
contactNameContainer.appendChild(contactNameLabel);

let contactName = document.createElement('input');
contactName.classList.add('contact-fill-in');
contactName.required = 'true';
contactName.type = 'text';
contactName.name = 'name';
contactName.placeholder = 'What to call you...';
contactNameContainer.appendChild(contactName);

let contactEmailContainer = document.createElement('div');
contactEmailContainer.classList.add('contact-items-container');
contactForm.appendChild(contactEmailContainer);

let contactEmailLabel = document.createElement('label');
contactEmailLabel.classList.add('contact-labels');
contactEmailLabel.for = 'email';
contactEmailLabel.textContent = 'Email:';
contactEmailContainer.appendChild(contactEmailLabel);

let contactEmail = document.createElement('input');
contactEmail.classList.add('contact-fill-in');
contactEmail.required = 'true';
contactEmail.type = 'email';
contactEmail.name = 'email';
contactEmail.placeholder = 'How to reach you...';
contactEmailContainer.appendChild(contactEmail);

let contactCommentContainer = document.createElement('div');
contactCommentContainer.classList.add('contact-items-container');
contactForm.appendChild(contactCommentContainer);

let contactCommentLabel = document.createElement('label');
contactCommentLabel.classList.add('contact-labels');
contactCommentLabel.for = 'comment';
contactCommentLabel.textContent = 'Comment:';
contactCommentContainer.appendChild(contactCommentLabel);

let contactComment = document.createElement('textarea');
contactComment.classList.add('contact-fill-in');
contactComment.setAttribute('id', 'comment-fill-in');
contactComment.required = 'true';
contactComment.name = 'comment';
contactComment.placeholder = "What you've got to say...";
contactCommentContainer.appendChild(contactComment);

let contactSubmit = document.createElement('button');
contactSubmit.setAttribute('id', 'contact-submit');
contactSubmit.type = 'submit';
contactSubmit.textContent = 'Send it my way';
contactForm.appendChild(contactSubmit);

contactSubmit.addEventListener('mouseover', function () {
  contactSubmit.textContent = 'Go on, send it';
});

contactSubmit.addEventListener('mouseout', function () {
  contactSubmit.textContent = 'Send it my way';
});
