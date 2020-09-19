let johanna="IMG_8320.JPG"
let henry="IMG_8843.JPG"
let nellie="IMG_8178.JPG"


function visaDejten() {
    let div = document.getElementById('resultat')
    div.innerHTML = ""
    let name = document.getElementById('dejtNamn')
    
    if (name.value.toLowerCase() === "johanna") {
      let img = document.createElement('img')
      img.src = johanna
      img.width = 600
      img.height = 400
      let div = document.getElementById('resultat')
      div.appendChild(img)
    } else if(name.value.toLowerCase() === "henry") {
      let img = document.createElement('img')
      img.src = henry
      img.width = 1200
      img.height = 800
      let div = document.getElementById('resultat')
      div.appendChild(img)
    } else if(name.value.toLowerCase() === "nellie") {
        let img = document.createElement('img')
        img.src = nellie
        img.width = 1200
        img.height = 800
        let div = document.getElementById('resultat')
        div.appendChild(img) } 
        
    else if(name.value.toLowerCase() === "izabella") {
            let img = document.createElement('img')
            img.src = nellie
            img.width = 1200
            img.height = 800
            let div = document.getElementById('resultat')
            div.appendChild(img)
    } else {
      alert("sorry din looser, du finns inte med!")
    }
  }
