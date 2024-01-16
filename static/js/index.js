import { elementos } from "../datos/etiquetas.js";
import { pintando, iniciandoContenedores } from "./funciones.js";

iniciandoContenedores();

// pintando(elementos.header.etiqueta, "body", elementos);
pintando(elementos.h1.etiqueta, "header", elementos);
pintando(elementos.nav.etiqueta, "header", elementos);

pintando(elementos.input.etiqueta, "nav", "");
pintando(elementos.div.etiqueta, "nav", elementos);
pintando(elementos.a.etiqueta, "div", elementos);
pintando(elementos.section.etiqueta, "main", elementos);
pintando(elementos.form.etiqueta, "main", elementos);
pintando(
  elementos.input.etiqueta,
  "form",
  elementos.form.atributos.delInput.placeholder.nombre,
);
pintando(
  elementos.input.etiqueta,
  "form",
  elementos.form.atributos.delInput.placeholder.apellido,
);
pintando(elementos.input.etiqueta, "form", elementos);
pintando(
  elementos.form.etiquetaButton,
  "form",
  elementos.form.atributos.delBoton.funcionAgregarAficion,
);
pintando(
  elementos.form.etiquetaButton,
  "form",
  elementos.form.atributos.delBoton.funcion,
);

