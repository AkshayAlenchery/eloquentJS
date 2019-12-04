async function showUser() {
  const gitHubUserResp = await fetch('https://api.github.com/users/akshayalenchery')
  const gitHubUser = await gitHubUserResp.json()
  const user = document.createElement('h3')
  user.innerHTML = gitHubUser.name
  document.getElementById('container').append(user)
  const img = document.createElement('img')
  img.src = gitHubUser.avatar_url
  document.getElementById('container').append(img)
  // await new Promise((resolve, reject) => setTimeout(resolve, 3000))
  // img.remove()
  // user.remove()
  // return gitHubUser
  await setTimeout(() => console.log('Nandini'), 3000)
  console.log('Akshay')
  img.remove()
  user.remove()
}

showUser()
