const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="laptop on desk" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Sep 12, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg'))
}