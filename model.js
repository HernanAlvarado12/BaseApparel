


document.addEventListener('submit', event => {
    event.preventDefault()
    const form = document.getElementById('formDataElement')
    const formData = new FormData(form)
    console.log(formData.get('emailAddress'))
    document.getElementById('inputEmail').value = ''
})

