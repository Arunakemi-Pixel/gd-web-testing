let proyects = ["pacman"];
proyects.forEach(p => {
    let a = document.createElement("a")
    let img = document.createElement("img")
    img.src = "./src/"+p+"/index.icon.png"
    a.href = "./src/"+p+"/index.html"
    a.appendChild(img)
    document.body.appendChild(a)
});
