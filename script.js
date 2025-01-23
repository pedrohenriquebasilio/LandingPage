const modal = document.querySelector(".modal")
const mask = document.querySelector(".mask")

function ShowModal(){
    modal.style.left = '50%'
    mask.style.visibility = 'visible'
}

function hiddenModal(){
    modal.style.left = '-90%'
     mask.style.visibility = 'hidden'
}