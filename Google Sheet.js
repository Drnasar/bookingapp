const scriptURL = 'https://script.google.com/macros/s/AKfycbzJpwLmn3PssT9NGiMfryyczXDpMlKK6XHyMOr79o7SJEo7W-fy5ONGfbP28nxGFDxzBA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
