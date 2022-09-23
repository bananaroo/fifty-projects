const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getUser('bananaroo')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
    
        console.log(data)
    } catch(err) {
        console.log(err)
    }  
}

function createUserCard(user) {
    const cardHTML = `<div class="card">
    <div>
        <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="" class="avatar">
    </div>
    <div class="user-info">
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, necessitatibus!</p>

        <ul>
            <li>300 <strong>followers</strong></li>
            <li>100 <strong>following</strong></li>
            <li>30 <strong>repos</strong></li>
        </ul>

        <div id="repos">
            <a href="" class="repo">Repo 1</a>
            <a href="" class="repo">Repo 2</a>
            <a href="" class="repo">Repo 3</a>
        </div>
    </div>
</div>`

    main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})