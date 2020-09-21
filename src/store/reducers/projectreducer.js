const initState = {
  projects: [
    {
      id: "1",
      title: "Hacer Footer del Site",
      content: "El footer del site no esta hecho y hay que terminarlo",
    },
    {
      id: "2",
      title: "Generar los Modales de Contacto",
      content:
        "Los botones de contacto tienen que disparar un modal con un form.",
    },
    {
      id: "3",
      title: "Deploy del Site",
      content: "Una vez testeado hacer deploy del site.",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
