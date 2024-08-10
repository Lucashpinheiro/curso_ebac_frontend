document.addEventListener('DOMContentLoaded',function(){
    const avatar = document.getElementById('avatar');
    const name  = document.getElementById('name');
    const username = document.getElementById('username');
    const repository = document.getElementById('repository');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const profile = document.getElementById('profile');

    const endpoint = `https://api.github.com/users/Lucashpinheiro`;

    fetch(endpoint).then(function(response){
        return response.json()
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repository.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        profile.href = json.html_url;
    })
})