

let colors = document.querySelectorAll('.color-container')
// top.style.color = 'black/'

colors.forEach((color) => {
    color.addEventListener('click',(e)=>{
        document.querySelector('.top').style.backgroundColor = 
        document.querySelector('.name').style.color =
        document.querySelector('.position').style.color =
        document.querySelector('.followers-no').style.color =
        document.querySelector('.following-no').style.color=
        document.querySelector('.follow').style.backgroundColor =
        document.querySelector('.follow').style.borderColor = 
        document.querySelector('.message').style.borderColor =
        document.querySelector('.message').style.color = 
        e.target.className
    })
})