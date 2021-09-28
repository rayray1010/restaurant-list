const form = document.querySelector('.needs-validation')
const submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', () => {
  form.classList.add('was-validated')
})

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
})