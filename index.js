const submitData = (name, email) => {

    const postData = {
        name: name,
        email: email
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(postData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())

        .then( function ( object ) {
            document.body.innerHTML = object[ "id" ]
        } )
        .catch( function ( error ) {
            document.body.innerHTML = error.message
        } )
}