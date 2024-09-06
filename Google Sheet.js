const scriptURL = 'https://script.google.com/macros/s/AKfycbxOX1iyPb_6npKqTJgSXU6yzRGnETb1vP4g3WBn00FliNnb0qSHrPh351ybjV_vhKI4wg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})