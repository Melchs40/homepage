export let contact = document.createElement('div');
contact.setAttribute('id', 'contact-section');

let contactContainer = document.createElement('div');
contactContainer.setAttribute('id', 'contact-container');
contact.appendChild(contactContainer);

let contactBackground = document.createElement('div');
contactBackground.setAttribute('id', 'contact-background');
contact.appendChild(contactBackground);

let contactTitle = document.createElement('h1');
contactTitle.classList.add('contact-title');
contactTitle.innerHTML = 'Contact.';
contactContainer.appendChild(contactTitle);

let contactPara = document.createElement('h1');
contactPara.classList.add('contact-para');
contactPara.innerHTML =
  "There are a few ways to get ahold of me, from LinkedIn to good old fashioned email to the handy contact form just below here. I've even included a PDF of my résumé for a more intensive viewing of my background. Feel free to reach out with any comments, concerns, compliments, or complaints. If you think we could have a mutually beneficial relationship in the world of web design, I'd love to hear from you!";
contactContainer.appendChild(contactPara);

let contactFormContainer = document.createElement('div');
contactFormContainer.setAttribute('id', 'contact-form-container');
contactContainer.appendChild(contactFormContainer);

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
