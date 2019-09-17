//console.log(window.width)
setInterval(() => {

    if (document.querySelector('#about').clientWidth < 250) {
        document.querySelector('.structure').style.width = "50px";
        document.querySelector('#about p').style.fontsize = "12px";
        console.log(document.querySelector('.structure').clientWidth)
    }
}, 10)
const nav = document.querySelector('.nav-items');
const menubar = document.querySelector('.menu-bar');
const dev_logo = document.querySelector('.logo');
const about_modal = document.querySelector('.modal_wrapper')
const close = document.querySelector('.close');
const button = document.querySelector('button');


function showHide(value) {
    value = (value.toLowerCase()).trim();
    //console.log(value)
    const about = document.querySelector('#about');
    const works = document.querySelector('#works');
    if (value === 'about') {
        if (Array.from(about.classList).includes('hide')) {
            about.classList.remove('hide');
            about.classList.add('show');
            if (Array.from(works.classList).includes('show')) {
                works.classList.remove('show');
                works.classList.add('hide');
            }
        } else {
            about.classList.add('hide');
            about.classList.remove('show')
        }
    }

    if (value === 'works') {
        if (Array.from(works.classList).includes('hide')) {
            works.classList.remove('hide');
            works.classList.add('show');
            if (Array.from(about.classList).includes('show')) {
                about.classList.remove('show');
                about.classList.add('hide');
            }
        } else {
            works.classList.add('hide');
            works.classList.remove('show')
        }
    }
    if (value === 'contact') {
        about_modal.style.display = 'block';
    }
}
const aside = document.querySelector('aside')
aside.addEventListener('click', e => {
    const about = document.querySelector('#about');
    const works = document.querySelector('#works');
    try {
        const nxtSibling = document.getElementById(e.target.id).nextElementSibling;
        showHide(nxtSibling.textContent);
        //console.log(nxtSibling.textContent)
    } catch {
        showHide(e.target.textContent);
        //console.log(e.target.textContent)
    }

})


// dev_logo.addEventListener('click', e => {
//     console.log(about_modal)
//     about_modal.style.display = 'block';
// })
close.addEventListener('click', e => {
    about_modal.style.display = 'none';
})
about_modal.addEventListener('click', e => {
    //console.log(e.target)
    if (Array.from(e.target.classList).includes('modal_wrapper'))
        about_modal.style.display = 'none';
})