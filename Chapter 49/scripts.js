// function checkAddress() {
//   // getElementById must be in strict camelCase
//   var emailInputEl = document.getElementById('userEmail');
//   var emailValue = emailInputEl.value;
//   console.log(emailValue)

//   if (emailValue === '') {
//     alert("Email is required!")
//   }
// }




// explore event
// function checkAddress(submitEvent) {
//   console.log(submitEvent)
    // Stor page refresh
//   submitEvent.preventDefault()
// }




// Stor page refresh
// function checkAddress(e) {
//   // stop page refresh
//   e.preventDefault()
//   var fieldEl = document.getElementById('userEmail');
//   console.log(fieldEl.value)
// }



// final checkAddress function
function checkAddress(e) {
  // stop page refresh
  e.preventDefault()

  var emailInputEl = document.getElementById('userEmail')

  if (emailInputEl.value === '') {
  alert("Email is required!")
} 
else {
  
  alert(`Your Email: ${emailInputEl.value}`)
  
  // empty email input
  emailInputEl.value = ''
}
}
        

