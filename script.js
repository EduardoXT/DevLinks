function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/images/avatar-light.png')
        img.setAttribute('alt', '"Foto de Eduardo sorrindo timidamente, usando óculos escuro, camisa preta e fundo branco"')
    } else {
        img.setAttribute('src', './assets/images/avatar.png')
        img.setAttribute('alt', '"Foto de Eduardo sorrindo timidamente, usando óculos de grau, camisa preta e fundo branco"')
    }





}