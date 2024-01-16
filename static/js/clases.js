class Html {
  refEtiquetaCreada;

  constructor(etiquetaACrear, refEtiqueta) {
    this.etiquetaACrear = etiquetaACrear;
    this.refEtiqueta = refEtiqueta;
  }

  creoElemento() {
    this.refEtiquetaCreada = document.createElement(this.etiquetaACrear);
    return this.refEtiquetaCreada;
  }

  introduzcoAtributos(atributo, valor) {
    this.refEtiquetaCreada.setAttribute(atributo, valor);
  }

  introduzcoTexto(texto) {
    this.refEtiquetaCreada.textContent = texto;
  }

  pintoElementoCreado() {
    let refEtiquetaSeleccionada = document.querySelector(this.refEtiqueta);
    refEtiquetaSeleccionada.append(this.refEtiquetaCreada);
  }
}

class Boton extends Html {
  refInputAficion;
  #nuevoLi;
  #refSeccion;
  constructor(etiquetaACrear, refEtiqueta) {
    super(etiquetaACrear, refEtiqueta);
    // this.claseEstilo = claseEstilo;
  }

  introduzcoAtributos(atributo, valor) {
    this.refEtiquetaCreada.setAttribute(atributo, valor);
  }

  pintoInputAficion() {
    this.refInputAficion = document.querySelector(
      "form > input + input + input + button",
    );
    this.refInputAficion.before(this.refEtiquetaCreada);
  }

  engadirInputAficion() {
    let refForm = document.querySelector("form");
    super._etiquetaACrear = "input";
    super.creoElemento();
    this.introduzcoAtributos("type", "text");
    this.introduzcoAtributos("name", "aficion");
  }

  engadoLista() {
    let ficheiro = document.forms[0].imaxen.files[0];
    let imaxen = URL.createObjectURL(ficheiro);
    let etiquetaImaxe = document.createElement("img");
    etiquetaImaxe.setAttribute("src", `${imaxen}`);

    // let refClaseEstiloImaxen = new this.claseEstilo(etiquetaImaxe); // let refClase = new Estilo(ref)
    // refClaseEstiloImaxen.estiloImaxen();

    let unDiv = document.createElement("div"); // Envoltorio total para a imaxe,nome e lista
    // let refUnDiv = new this.claseEstilo(unDiv);
    unDiv.addEventListener("mouseover", (e) => {
      console.log("mouse por riba ENTRA", e.target);
      // refUnDiv.estiloCardMouseOver();
    });
    // unDiv.addEventListener("mouseout", (e) => {
    //   console.log("mouse por riba SAE", e.target);
    // refUnDiv.estiloCard();
    // });
    // refUnDiv.estiloCard();
    let divNomeELista = document.createElement("div"); //
    let divNome = document.createElement("h3");
    // let refClaseEstiloH3 = new this.claseEstilo(divNome);
    // refClaseEstiloH3.estiloH3();
    divNome.textContent =
      document.forms[0].elements.nome.value +
      " " +
      document.forms[0].elements.apelido.value;
    divNomeELista.append(divNome);

    unDiv.append(etiquetaImaxe);

    let datos = document.createElement("ul");
    // console.log(this.claseEstilo);
    // let refUl = new this.claseEstilo(datos);
    // refUl.estiloUl();

    let tamano = document.forms[0].elements.aficion;
    this.#refSeccion = document.querySelector("section");
    console.log(tamano);
    // for (let dato of tamano) {
    //   this.#nuevoLi = document.createElement("li");
    //   this.#nuevoLi.textContent = dato.value;
    //   // let refLi = new this.claseEstilo(this.#nuevoLi);
    //   // refLi.estiloLista();
    //   datos.append(this.#nuevoLi);
    // }

    divNomeELista.append(datos);
    unDiv.append(divNomeELista);
    this.#refSeccion.append(unDiv);
  }

  eventoListener() {
    if (document.querySelectorAll("button").length == 2) {
      funcionEnviarForm.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log("dende o evento funcionEnvioForm");
        this.engadoLista();
        for (let aficion of document.querySelectorAll(
          'input[name="aficion"]',
        )) {
          aficion.remove();
        }
      });
      funcionAgregarAficion.addEventListener("click", (e) => {
        e.preventDefault();
        this.engadirInputAficion();
        this.pintoInputAficion();
      });
    }
  }
}

//   class Boton extends HTML {
//   refInputAficion;
//   #novoLi;
//   #refSeccion;
//   constructor(etiquetaACrear, etiquetaRef,claseEstilo) {
//     super(etiquetaACrear, etiquetaRef); // actualiza
//     this.claseEstilo = claseEstilo;
//   }

//   introduzcoAtributos(atributo, valor) {
//     this.refEtiquetaCreada.setAttribute(atributo, valor);
//   }

//   pintoInputAficion(){
//     this.refInputAficion = document.querySelector("form > input + input + button");
//     this.refInputAficion.before(this.refEtiquetaCreada)
//   }

//   engadirInputAficion(){
//     let refForm = document.querySelector("form");
//     super._etiquetaACrear = "input";
//     super.creoElemento();
//     this.introduzcoAtributos("type","text");
//     this.introduzcoAtributos("name","aficion")
//   }

//   engadoLista() {
//     let ficheiro = document.forms[0].imaxen.files[0];
//     let imaxen = URL.createObjectURL(ficheiro)
//     let etiquetaImaxe = document.createElement('img');
//     etiquetaImaxe.setAttribute("src",`${imaxen}`);

//     let refClaseEstiloImaxen = new this.claseEstilo(etiquetaImaxe);// let refClase = new Estilo(ref)
//     refClaseEstiloImaxen.estiloImaxen();

//     let unDiv = document.createElement("div");// Envoltorio total para a imaxe,nome e lista
//     let refUnDiv = new this.claseEstilo(unDiv)
//     unDiv.addEventListener("mouseover",(e)=>{
//       console.log('mouse por riba ENTRA',e.target)
//       refUnDiv.estiloCardMouseOver()
//     })
//     unDiv.addEventListener("mouseout",(e)=>{
//       console.log('mouse por riba SAE',e.target)
//       refUnDiv.estiloCard()
//     })
//     refUnDiv.estiloCard()
//     let divNomeELista = document.createElement("div");//
//     let divNome = document.createElement("h3");
//     let refClaseEstiloH3 = new this.claseEstilo(divNome)
//     refClaseEstiloH3.estiloH3()
//     divNome.textContent = document.forms[0].elements.nome.value + " " +  document.forms[0].elements.apelido.value;
//     divNomeELista.append(divNome);

//     unDiv.append(etiquetaImaxe)

//     let datos = document.createElement("ul");
//     console.log(this.claseEstilo)
//     let refUl = new this.claseEstilo(datos);
//     refUl.estiloUl()

//     let tamano = document.forms[0].elements.aficion;
//     this.#refSeccion = document.querySelector("section")

//     for (let dato of tamano) {
//       this.#novoLi = document.createElement("li");
//       this.#novoLi.textContent = dato.value;
//       let refLi = new this.claseEstilo(this.#novoLi);
//       refLi.estiloLista()
//       datos.append(this.#novoLi);
//     }

//     divNomeELista.append(datos);
//     unDiv.append(divNomeELista)
//     this.#refSeccion.append(unDiv);

//   }

//   eventoListener() {
//     if (document.querySelectorAll("button").length == 2) {
//       funcionEnvioForm.addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log("dende o evento funcionEnvioForm");
//         this.engadoLista()
//         for(let aficion of document.querySelectorAll('input[name="aficion"]')){
//           aficion.remove()
//         }
//       });
//       funcionEngadirAficion.addEventListener("click", (e) => {
//         e.preventDefault();
//         this.engadirInputAficion();
//         this.pintoInputAficion();
//       });
//     }
//   }
// }

export { Html, Boton };
