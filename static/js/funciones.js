import { Html, Boton } from "./clases.js";

function pintando(etiquetaACrear, dondeIntroducimosEtiqueta, elementos) {
  let refVariable;
  switch (etiquetaACrear) {
    case "h1":
      {
        refVariable = new Html(etiquetaACrear, dondeIntroducimosEtiqueta);
        refVariable.creoElemento();
        refVariable.introduzcoAtributos(
          elementos.h1.atributos.id,
          elementos.h1.atributos.idText,
        );
        refVariable.introduzcoTexto("Users");
        refVariable.pintoElementoCreado();
      }
      break;
    case "input":
      {
        refVariable = new Html(etiquetaACrear, dondeIntroducimosEtiqueta);
        refVariable.creoElemento();
        refVariable.pintoElementoCreado();
        if (elementos === "") {
          refVariable.introduzcoAtributos("type", "text");
          refVariable.introduzcoAtributos("id", "buscador");
          refVariable.introduzcoAtributos("placeholder", "🔍  Buscar usuarios");
        } else {
          if (document.querySelectorAll("form > input").length < 3) {
            refVariable.introduzcoAtributos("placeholder", elementos);
          }
          if (document.querySelectorAll("form > input").length === 3) {
            let ref1 = document.querySelectorAll("form > input")[0];
            let ref2 = document.querySelectorAll("form > input")[1];
            let ref3 = document.querySelectorAll("form > input")[2];
            ref1.setAttribute("name", "nome");
            ref2.setAttribute("name", "apelido");
            ref3.setAttribute("type", "file");
            ref3.setAttribute("name", "imaxen");
          }
        }
      }
      break;
    case "nav":
      {
        refVariable = new Html(etiquetaACrear, dondeIntroducimosEtiqueta);
        // let ref =
        refVariable.creoElemento();
        refVariable.pintoElementoCreado();
      }
      break;
    case "div":
      {
        refVariable = new Html(etiquetaACrear, dondeIntroducimosEtiqueta);
        refVariable.creoElemento();
        refVariable.introduzcoAtributos(
          elementos.div.atributos.id,
          elementos.div.atributos.idText1,
        );
        refVariable.pintoElementoCreado();
      }
      break;
    case "a":
      {
        refVariable = new Html(etiquetaACrear, dondeIntroducimosEtiqueta);

        for (let datos in elementos.a.elementosNavegacion) {
          refVariable.creoElemento();
          refVariable.introduzcoTexto(elementos.a.elementosNavegacion[datos]);
          refVariable.pintoElementoCreado();
        }
      }
      break;
    case "section":
      {
        refVariable = new Html(etiquetaACrear, dondeIntroducimosEtiqueta);
        refVariable.creoElemento();
        refVariable.pintoElementoCreado();
        for (let datos in elementos.persona) {
          let contenedorDiv = document.createElement("div");
          document.querySelector("section").append(contenedorDiv);

          let img = document.createElement("img");
          let p = document.createElement("a");

          img.setAttribute("src", elementos.persona[datos].img);
          p.textContent = elementos.persona[datos].nombre;

          contenedorDiv.append(img);
          contenedorDiv.append(p);

          for (let dato in elementos.persona[datos].aficiones) {
            // console.log(elementos.persona[datos].aficiones[dato]);
            let a = document.createElement("a");

            a.textContent = elementos.persona[datos].aficiones[dato];

            contenedorDiv.append(a);
          }
        }
      }
      break;
    case "form":
      {
        refVariable = new Html(etiquetaACrear, dondeIntroducimosEtiqueta);
        refVariable.creoElemento();
        refVariable.introduzcoAtributos(
          elementos.form.atributos.id,
          elementos.form.atributos.idText,
        );
        refVariable.pintoElementoCreado();
      }
      break;
    case "button":
      {
        refVariable = new Boton(etiquetaACrear, dondeIntroducimosEtiqueta);
        // console.log("elementos....", elementos);
        let ref = refVariable.creoElemento();
        console.log(elementos)
        if (elementos === "funcionEnviarForm") {
          console.log(elementos === "funcionEnvioForm")
          refVariable.introduzcoAtributos("id", elementos);
          refVariable.introduzcoTexto("Enviar");
        } else {
          refVariable.introduzcoAtributos("id", elementos);
          refVariable.introduzcoTexto("Afición");
        }
        refVariable.pintoElementoCreado();
        refVariable.eventoListener();

        // claseVariable = new Estilos(ref);
        // claseVariable.estiloBotonForm();
      }
      break;
  }
}

function iniciandoContenedores() {
  let datos = {
    cabecera: "header",
    principal: "main",
  };
  // let contenedor = document.createElement("div");
  // contenedor.setAttribute("id", "contenedor");
  // document.querySelector("body").append(contenedor);
  for (let etiqueta in datos) {
    let ref = document.createElement(datos[`${etiqueta}`]);
    document.body.append(ref);
  }
  let referenciaMain = document.querySelector("main");
  referenciaMain.style.display = "flex";
}

export { pintando, iniciandoContenedores };
