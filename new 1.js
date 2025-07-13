function addFloatingReviewBox() {
  const reviewContainer = document.createElement('div');
  reviewContainer.style.position = 'fixed';
  reviewContainer.style.top = '20px';
  reviewContainer.style.right = '20px';
  reviewContainer.style.width = '250px';
  reviewContainer.style.zIndex = '9999';
  reviewContainer.style.backgroundColor = '#fff8e1';
  reviewContainer.style.border = '1px solid #ccc';
  reviewContainer.style.borderRadius = '10px';
  reviewContainer.style.padding = '15px';
  reviewContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  reviewContainer.style.fontFamily = 'Poppins, sans-serif';

  const title = document.createElement('h4');
  title.textContent = 'Leave a Review';
  title.style.margin = '0 0 10px 0';
  title.style.fontSize = '16px';
  title.style.color = '#a93226';

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Your thoughts...';
  textarea.style.width = '100%';
  textarea.style.height = '60px';
  textarea.style.padding = '6px';
  textarea.style.fontSize = '13px';
  textarea.style.border = '1px solid #ccc';
  textarea.style.borderRadius = '6px';
  textarea.style.resize = 'none';
  textarea.style.marginBottom = '10px';

  const button = document.createElement('button');
  button.textContent = 'Submit';
  button.style.width = '100%';
  button.style.padding = '8px';
  button.style.border = 'none';
  button.style.borderRadius = '6px';
  button.style.backgroundColor = '#c0392b';
  button.style.color = 'white';
  button.style.cursor = 'pointer';
  button.style.fontSize = '14px';

  reviewContainer.appendChild(title);
  reviewContainer.appendChild(textarea);
  reviewContainer.appendChild(button);

  document.body.appendChild(reviewContainer);
}

window.addEventListener("DOMContentLoaded", addFloatingReviewBox);

