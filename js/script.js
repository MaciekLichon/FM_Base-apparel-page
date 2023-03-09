

/* ------ ANIMATE LETTERS ------ */

const lines = document.querySelectorAll('.hero__title-bold .line');

const replaceText = function() { 
  let currentDelay = 0;

  for (let line of lines) {
    const lineArray = line.innerText.split('');

    line.innerHTML = '';
  
    for (let i = 0; i < lineArray.length; i++) {
      const newSpan = document.createElement('span');
      newSpan.innerHTML = lineArray[i];
      newSpan.classList.add('letter');
      currentDelay += 0.05;
      newSpan.style.animationDelay = `${currentDelay}s`
      line.appendChild(newSpan);
    }
  }
}

replaceText();

/* ------ VALIDATE INPUT ------ */

const form = document.querySelector('.hero__form');
const formInput = document.querySelector('.hero__form .form__input');
const emailTemplate = /.+\@.+\..+/;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let inputValue = formInput.value;
  
  if (!inputValue || !inputValue.match(emailTemplate)) {
    form.classList.add('invalid');
  } else {
    form.classList.remove('invalid');
    form.reset();
  }
})