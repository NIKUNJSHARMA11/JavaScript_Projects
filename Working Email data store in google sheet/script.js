

const scriptURL = 'https://script.google.com/macros/s/AKfycbxrcdfEnfgk98L1j114xiH78jVYivUWcj8SlELh06iJm2g47zrz2nISZNFScwEuZhY_/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML ='🎟️Thank you for subscribing!'
        setTimeout(function () {
            msg.innerHTML =''
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
