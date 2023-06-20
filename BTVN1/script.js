const toggle=document.getElementsByClassName('header-icon')[0]
const navbar =document.getElementsByClassName('header-nav')[0]
toggle.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})