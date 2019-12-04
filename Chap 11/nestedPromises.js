fetch('https://api.github.com/users/akshayalenchery')
  .then(response => response.json())
  .then(gitHubUser => {
    const user = document.createElement('h3')
    user.innerHTML = gitHubUser.name
    document.getElementById('container').append(user)
    const img = document.createElement('img')
    img.src = gitHubUser.avatar_url
    document.getElementById('container').append(img)
    setTimeout(() => {
      img.remove()
      user.remove()
    }, 5000)
  })
