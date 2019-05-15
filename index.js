document.addEventListener('DOMContentLoaded', function(){

})

//find form element
let formDiv = document.getElementById('form-div')
//create event listener upon submit
formDiv.addEventListener('submit', submitData)

function submitData(name, email){
  // event.preventDefault()

  // make fetch post call and save user info to db
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(function (response){
     return response.json()
   })
   .then(function(object){
     document.body.innerHTML = object["id"]
   })
   .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}

function showId(){
  // EX: <h2>Your ID is <var for id></h2>

  //create element for id
}
