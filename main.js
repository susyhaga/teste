document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const user = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');
    
    fetch('https://api.github.com/users/susyhaga')
        .then(function(element) {
            return element.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            user.innerText = json.login;
            avatar.src = json.avatar_url;
            followers.innerText = json.followers;
            following.innerText = json.following;
            repos.innerText = json.public_repos;
            link.href = json.html_url;
        })
        .catch (function(erro){
            alert('API incorreta. Confira sua API e tente novamente.');
        })
})
