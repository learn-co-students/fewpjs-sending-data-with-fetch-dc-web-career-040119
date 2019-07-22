// // Add your code here
// function submitData(name, email) {
//   return fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       name,
//       email
//     })
//   })
//   .then(res => res.json()
//   )
//   .then( function(object) {document.body.innerHTML = object["id"]
//   })
//   .catch( (error) => {
//     document.body.innerHTML = error.message
//   })
// }

// function errorHandler() {
//   let errorString = "Unauthorized Access"
//   document.getElementById('divR').append(errorString)
// }
//
// function appender() {
//   console.log("Omae wa mou shindeiru")
// }

// ++++++++++++++++++++++++++


function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
