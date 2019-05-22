const submitData = (name, email) => {
  const url = 'http://localhost:3000/users'
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  }
  return fetch(url, config)
    .then(response => response.json())
    .then(data => { document.body.innerHTML = data.id })
    .catch(error => { document.body.innerHTML = error.message })
}
