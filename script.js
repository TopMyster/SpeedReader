let user = document.getElementById('usertext')
let resultEl = document.getElementById('resulttext')
let int = 0
let slider = document.getElementById('speed')
let speed = Number(slider.value);
let preview = document.getElementById('speedpreview')

function setWPM() {
  speed = Number(slider.value)
  const wpm = Math.floor(60000 / speed)
  preview.textContent = `${wpm} WPM`
}
slider.addEventListener('input', setWPM) 
setWPM() 


function Play() {
  document.getElementById('result').style.display = 'flex'
  let text = user.value.trim().split(/\s+/).filter(Boolean)
  int = 0
  let timer = setInterval(() => {
    resultEl.textContent = text[int]
    int++
    if (int >= text.length) clearInterval(timer)

    document.getElementById('rest').addEventListener('click',() => {
        document.getElementById('result').style.display = 'none'
        clearInterval(timer)
    })
  }, speed)
}

function Clear() {
    user.value = ''
}

function Restart() {
    document.getElementById('result').style.display = 'none'
    clearInterval(timer)
}
