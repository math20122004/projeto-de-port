function toggleMode(){
  const html = document.documentElement

  if (html.classList.contains("light-mode")) {    //Verifica se é verdadeiro ou não.
    html.classList.remove("light-mode")          //contains = Contém; remove = Remove; add = Adiciona; classList = Lista de classes.
  } else {
    html.classList.add('light-mode')
  }

  // html.classList.toggle("light-mode"); || É o código de cima mais simplificado

  const img = document.querySelector('#profile img') //querySelector = procure no docuento.

    if (html.classList.contains("light-mode")) { 
      img.setAttribute("src", "./assets/foto-zorao-light.jpg") // setAttribute = seta/modificar/add um atributo
    } else {
      img.setAttribute("src", "./assets/foto-zorao-night.jpg")
    }
}

