let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mount = document.getElementById('mount')
let mount2 = document.getElementById('mount2')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let Wol = document.querySelector('.Wol')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 3 + 'px'
    mount.style.top = value * 2 + 'px'
    mount2.style.top = value * 1.5 + 'px'
    river.style.top = value  + 'px'
    boat.style.top = value  + 'px'
    boat.style.left = value * 3 + 'px'
    Wol.style.fontsize = value  + 'px'

}