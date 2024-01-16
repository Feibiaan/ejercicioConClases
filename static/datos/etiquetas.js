const elementos = {
  header: {
    etiqueta: "header",
    atributos: {
      id: "id",
      idText: "contenedor-header",
    },
  },
  h1: {
    etiqueta: "h1",
    atributos: {
      id: "id",
      idText: "titulo",
    },
  },
  input: {
    etiqueta: "input",
    atributosTypeText: {
      type: "type",
      text: "text",
    },
    placeholder: "",
  },
  nav: {
    etiqueta: "nav",
    atributos: {
      id: "id",
      idText: "navbar",
    },
  },
  a: {
    etiqueta: "a",
    atributos: {
      id: "id",
      idText: "a-botones",
    },
    elementosNavegacion: {
      a1: "Reputation",
      a2: "Newusers",
      a3: "Voters",
      a4: "Editors",
      a5: "Moderators",
    },
    hrefValor: {
      href: "href",
      hrefText: "",
    },
  },
  main: {
    etiqueta: "main",
    atributos: {
      id: "id",
      idText: "contenedor-main",
    },
  },
  article: {
    etiqueta: "article",
    atributos: {
      id: "id",
      idText: "contenedor-persona",
    },
  },
  img: {
    etiqueta: "img",
    atributos: {
      src: "src",
      srcText: "",
      alt: "alt",
      altText: "",
    },
  },
  h3: {
    etiqueta: "h3",
    atributos: {
      id: "id",
      idText: "nombre-persona",
    },
  },
  p: {
    etiqueta: "p",
    atributos: {
      id: "id",
      idText: "ciudad-persona",
    },
  },
  span: {
    etiqueta: "span",
    atributos: {
      id: "id",
      idText: "aficion-persona",
    },
  },
  form: {
    etiqueta: "form",
    etiquetaLabel: "label",
    etiquetaInput: "input",
    etiquetaButton: "button",
    atributos: {
      id: "id",
      idText: "contenedor-form",
      delBoton: {
        id: "id",
        funcion: "funcionEnviarForm",
        funcionAgregarAficion: "funcionAgregarAficion",
      },
      delInput: {
        type: "type",
        text: "text",
        text2: "button",
        name: "name",
        valorName: "aficion",
        placeholder: {
          nombre: "Introduce tu nombre",
          apellido: "Introduce tu apellido",
        },
      },
    },
  },
  div: {
    etiqueta: "div",
    atributos: {
      id: "id",
      idText1: "contenedor-botones",
    },
  },
  section: {
    etiqueta: "section",
  },
  persona: {
    uno: {
      nombre: "Lelah Nichols",
      img: "./img/Ellipse1.png",
      aficiones: {
        a1: "ropas",
        a2: "casas",
      },
    },
    dos: {
      nombre: "Jesus Weiss",
      img: "./img/Ellipse2.png",
      aficiones: {
        a1: "gadgets",
        a2: "cascos",
        a3: "música",
      },
    },
  },
};

export { elementos };
