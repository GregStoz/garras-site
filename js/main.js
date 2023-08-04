const home = document.getElementById('home')
const aboutMe = document.getElementById('about-me')
const products = document.getElementById('products')
const contact = document.getElementById('contact')

const homeBtn = document.getElementById('menu-home')
const aboutMeBtn = document.getElementById('menu-about')
const productsBtn = document.getElementById('menu-products')
const contactBtn = document.getElementById('menu-contact')




homeBtn.addEventListener('click', () => {
    
    home.classList.remove('hidden')
    aboutMe.classList.add('hidden')
    products.classList.add('hidden')
    contact.classList.add('hidden')

    homeBtn.classList.add('button__highlight')
    aboutMeBtn.classList.remove('button__highlight')
    productsBtn.classList.remove('button__highlight')
    contactBtn.classList.remove('button__highlight')
})

aboutMeBtn.addEventListener('click', () => {
    
    home.classList.add('hidden')
    aboutMe.classList.remove('hidden')
    products.classList.add('hidden')
    contact.classList.add('hidden')

    homeBtn.classList.remove('button__highlight')
    aboutMeBtn.classList.add('button__highlight')
    productsBtn.classList.remove('button__highlight')
    contactBtn.classList.remove('button__highlight')
})

productsBtn.addEventListener('click', () => {
    
    home.classList.add('hidden')
    aboutMe.classList.add('hidden')
    products.classList.remove('hidden')
    contact.classList.add('hidden')
    
    homeBtn.classList.remove('button__highlight')
    aboutMeBtn.classList.remove('button__highlight')
    productsBtn.classList.add('button__highlight')
    contactBtn.classList.remove('button__highlight')
})

contactBtn.addEventListener('click', () => {
    
    home.classList.add('hidden')
    aboutMe.classList.add('hidden')
    products.classList.add('hidden')
    contact.classList.remove('hidden')

    homeBtn.classList.remove('button__highlight')
    aboutMeBtn.classList.remove('button__highlight')
    productsBtn.classList.remove('button__highlight')
    contactBtn.classList.add('button__highlight')
})






