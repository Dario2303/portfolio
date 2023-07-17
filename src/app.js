
const list = document.querySelectorAll('.nav li')
const line = document.querySelector('#line-drop')
const blur = document.querySelector('header')
const click = document.querySelectorAll('.nav a');



list.forEach((item) => {
    item.addEventListener('mouseenter', () => {

        const {left, width } = item.getBoundingClientRect();
        line.style.left = `${left}px`;
        line.style.width = `${width}px`;
        line.style.visibility = 'visible';
        line.style.opacity = '1';
    })

    item.addEventListener('mouseleave', () => {
        line.style.visibility = 'hidden';
        line.style.opacity = '0';
    })
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
    blur.classList.add('blur')
}else {
    blur.classList.remove('blur')
}
})


click.forEach((list) => {
    list.addEventListener('click', (e) => {
        const id = e.target.id

        if (id === 'index') {
            window.scroll(0, 0)
        }
        if (id === 'about') {
            window.scroll(0, 580)
        }
        if (id === 'proyect') {
            window.scroll(0, 1550)
        }
    })
})