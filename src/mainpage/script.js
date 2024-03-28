
function buttonclick() {
    const text = document.getElementById('h1text')

    const newText = document.createElement('h1')
    newText.textContent = "click in the helloKitty!"
    
    text.appendChild(newText)

}

function imgclick() {
    window.location.href = "/src/Card/index.html"
}