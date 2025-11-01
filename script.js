let user = document.getElementById('usertext')
let text = ['hu', 'hola']
let resultEl = document.getElementById('resulttext')
let int = 0
let slider = document.getElementById('speed')
let speed
let preview = document.getElementById('speedpreview')

setInterval(() => {
     slider.addEventListener('input', () => {
        speed = slider.value
        preview.textContent = `${Math.floor(60000/speed)} WPM`

    })
},0)

function Play() {
  int = 0
  let timer = setInterval(() => {
    resultEl.textContent = text[int]
    int++
    if (int >= text.length) clearInterval(timer)
  }, speed)
}

function Clear() {
    user.value = ''
}

function Restart() {
    slider.value = 0
}