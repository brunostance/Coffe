const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")


function mostrarModal(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function escoderModal(){
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'
}