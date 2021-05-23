const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.getElementByIdAll('.animated-bg')
const animated_bg_texts = document.getElementByIdAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = 
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam similique?'
    profile_img.innerHTML = 
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    Name.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}