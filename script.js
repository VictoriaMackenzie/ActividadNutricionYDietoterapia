const CONFIG = {
  SHEET_URL: "https://script.google.com/macros/s/AKfycbysBgGor5vgkvuZxEOYHqR4s-F_Ui-JRkcs4YQjJE4i0_3i4coozzj7Ky7eAYCwgiBroA/exec"
};

/* =========================================================================
   BANCO DE PREGUNTAS
   ========================================================================= */
const QUESTIONS = [
  // ---------- ÍNDICE GLUCÉMICO ----------
  {
    tema: "Índice glucémico",
    type: "single",
    prompt: "El índice glucémico de un alimento nor marca:",
    options: [
      "La velocidad con la que ese alimento aumenta la glucemia de quien come el alimento",
      "La cantidad total de hidratos de carbono que contiene",
      "El aporte calórico del alimento",
      "El contenido de sodio del alimento"
    ],
    correct: [0],
    explanation: "El índice glucémico marca la velocidad en que un alimento aumentará la glucemia de quien come el alimento: a mayor velocidad de absorción de sus hidratos de carbono, más alto es el índice glucémico."
  },
  {
    tema: "Índice glucémico",
    type: "multi",
    prompt: "¿Qué factores influyen en el índice glucémico de una preparación? (marcá todas las correctas)",
    options: [
      "Cuantos más hidratos de carbono simples tenga el alimento, mayor será su índice glucémico",
      "Cuanta más fibra tenga el alimento menor será su índice glucémico",
      "Forma de preparación (a menor masticación/esfuerzo digestivo, mayor su índice glucémico)",
      "Presencia de otros macronutrientes, como grasas y/o proteínas baja el índice glucémico",
      "Cuanto más sodio tenga el alimento mayor su índice glucémico",
      "Cuanto mayor el precio del alimento menor su índice glucémico"
    ],
    correct: [0, 1, 2, 3],
    explanation: "El índice glucémico depende de la cantidad de hidratos de carbono simples que tenga el alimento, la cantidad de fibra, la forma de preparación y la presencia de grasas y/o proteínas junto al HC."
  },
  {
    tema: "Índice glucémico",
    type: "boolean",
    prompt: "Verdadero o falso: si un alimento contiene únicamente hidratos de carbono, su índice glucémico tenderá a ser más alto.",
    correct: true,
    explanation: "Correcto. La presencia de otros macronutrientes (grasas y/o proteínas) retrasa la suba de la glucemia; si el alimento contiene solo hidratos de carbono, el índice glucémico tiende a ser más alto."
  },

  // ---------- CARGA GLUCÉMICA ----------
  {
    tema: "Carga glucémica",
    type: "single",
    prompt: "A diferencia del índice glucémico, la carga glucémica de un alimento tiene en cuenta además:",
    options: [
      "La cantidad de hidratos de carbono (simples y complejos) que aporta ese alimento",
      "El contenido de sodio",
      "El valor de saciedad",
      "La densidad calórica"
    ],
    correct: [0],
    explanation: "La carga glucémica considera el índice glucémico, pero también cuántos hidratos de carbono (simples y complejos) contiene el alimento, lo que indica cuánto tiempo sostiene alta la glucemia."
  },

  // ---------- DENSIDAD CALÓRICA ----------
  {
    tema: "Densidad calórica",
    type: "single",
    prompt: "Un alimento aporta 180 kcal en 90 g. ¿Cuál es su densidad calórica y cómo se clasifica?",
    options: [
      "2 kcal/g — densidad calórica alta",
      "0,5 kcal/g — densidad calórica baja",
      "2 kcal/g — densidad calórica baja",
      "1 kcal/g — densidad calórica normal"
    ],
    correct: [0],
    explanation: "180 kcal ÷ 90 g = 2 kcal/g. Como la densidad calórica normal debe acercarse a 1, un valor de 2 se considera alto (muchas calorías en poco volumen)."
  },
  {
    tema: "Densidad calórica",
    type: "boolean",
    prompt: "Verdadero o falso: la densidad calórica normal debe acercarse a un valor de 1 kcal/g.",
    correct: true,
    explanation: "Correcto, la densidad calórica normal debe acercarse a 1. Valores más altos indican muchas calorías en poco volumen (alta concentración de calorías); valores más bajos, pocas calorías en gran volumen."
  },

  // ---------- FIBRA Y SACIEDAD ----------
  {
    tema: "Fibra y saciedad",
    type: "multi",
    prompt: "Incluir fibra en la alimentación colabora para: (marcá todas las correctas)",
    options: [
      "Aumentar el índice glucémico",
     "Aumentar el volumen",
      "Disminuir la absorción de colesterol",
      "Enlentecer la absorción de la glucemia",
      "Aumentar la saciedad", 
      "Aumentar la densidad calórica"
    ],
    correct: [1, 2, 3, 4],
    explanation: "La fibra aumenta el volumen, disminuye la absorción de colesterol, enlentece la absorción de la glucemia y aumenta la saciedad."
  },
  {
    tema: "Fibra y saciedad",
    type: "single",
    prompt: "El valor de saciedad de un alimento muy relacionado con:",
    options: [
      "Su contenido de sodio",
"Su índice glucémico",
        "Su volumen",
      "Su precio"
    ],
    correct: [2],
    explanation: "La fibra le da volumen a un alimento."
  },


{
    tema: "Saciedad",
    type: "single",
    prompt: "El valor de saciedad de un alimento muy relacionado con:",
    options: [
      "Su densidad calórica",
"Su contenido en fibra",
        "Su contenido en proteínas",
      "Su contenido en hidratos de carbono"
    ],
    correct: [1, 2],
    explanation: "El valor de saciedad está muy marcado por el contenido de proteínas y por el contenido de fibras que tiene un alimento. Cuanto más fibra y proteínas mayor será el valor de saciedad."
  },


  // ---------- LEYES DE LA ALIMENTACIÓN SALUDABLE ----------
  {
    tema: "Leyes de la alimentación",
    type: "single",
    prompt: "Al realizar dietoterapia, ¿cuál de las cuatro leyes de la alimentación saludable podría no cumplirse?",
    options: [
      "Ley de cantidad",
      "Ley de calidad",
      "Ley de armonía",
       "Ley de adecuación"
      
    ],
    correct: [3],
    explanation: "La ley de adecuación es la más importante al intervenir con dietoterapia y nunca se debe no cumplir; las de cantidad, calidad y armonía pueden modificarse en la menor medida posible."
  },

  // ---------- OBESIDAD ----------
  {
    tema: "Obesidad",
    type: "multi",
    prompt: "Si una persona tiene obesidad, ¿qué le recomendaría? (marcá todas las correctas)",
    options: [
      "Alimentos con baja densidad calórica",
      "Aumentar el consumo de alimentos con alto valor de saciedad",
      "Disminuir el consumo de alimentos con alto valor de saciedad",
      "Beber al menos 10 vasos de agua por día",
      "Plan hipocalórico, nunca por debajo de 1300 kcal",
      "Aumentar el consumo de alimentos del grupo 6",
      "Comer rápido, parado y solo",
      "No superar 4 porciones diarias de cereales/papas/legumbres, prefiriendo integrales"
    ],
    correct: [0, 1, 3, 4, 7],
    explanation: "En obesidad se seleccionan alimentos de baja densidad calórica, alto valor de saciedad (con fibra y proteínas), 10 vasos de agua, será una dieta hipocalórica ( pero nunca <1300 kcal), disminuiremos el consumo de alimentos del grupo 6, comer despacio/sentado/acompañado, y no superar 4 porciones diarias de cereales/papas/legumbres prefiriendo integrales o de grano entero."
  },
  {
    tema: "Obesidad",
    type: "single",
    prompt: "Un plan de alimentación para una persona con obesidad, ¿cumple la ley de alimentación saludable de \"Cantidad\"?",
    options: [
      "Sí, porque siempre se debe cubrir el 100% de las calorías habituales",
      "No, porque al ser un plan hipocalórico no cubre las calorías habituales; se modifican en la menor medida posible las leyes de cantidad, calidad y armonía, pero nunca la de adecuación",
      "Sí, porque la ley de cantidad nunca puede modificarse",
      "No, porque en dietoterapia ninguna ley se cumple nunca"
    ],
    correct: [1],
    explanation: "No cumple la ley de cantidad, porque la dieta será hipocalórica y no cubre las calorías habituales. Esto es aceptable haciendo dietoterapia porque cantidad, calidad y armonía se pueden modificar en la menor medida posible y en pos del tratamiendo; lo que nunca se modifica es la ley de adecuación."
  },

  // ---------- DESNUTRICIÓN ----------
  {
    tema: "Desnutrición",
    type: "multi",
    prompt: "En un plan de alimentación para personas con desnutrición se recomienda: (marcá todas las correctas)",
    options: [
      "Seleccionaremos alimentos con baja densidad calórica",
       "Seleccionaremos alimentos de alto valor de saciedad",
      "Será una dieta hiperproteica",
      "Sumar alimentos del grupo 5 (aceites crudos, frutos secos y semillas)",
      "Buscaremos alimentos de bajo valor de saciedad: alimentos con poco volumen y poca fibra",
      "Indicarle como mínimo 10 vasos de agua",
      "Elegir alimentos del grupo 6 como principal fuente calórica",
      "Aumentar el consumo de verduras de hoja como lechuga y espinaca",
      "Seleccionaremos alimentos con alta densidad calórica"
    ],
    correct: [2, 3, 4, 8],
    explanation: "En desnutrición se buscan alimentos con alta densidad calórica saludable, será una dieta hiperproteica y hipercalórica, sumar grupo 5, reducir el valor de saciedad (poco volumen y fibra) y corroborar que beba 8 vasos de agua en el día. No se recomiendan verduras de hoja (por su alto contenido de fibra)."
  },
  {
    tema: "Desnutrición",
    type: "single",
    prompt: "En desnutrición, ¿qué fruta se prefiere por su mayor aporte de hidratos de carbono?",
    options: ["Banana", "Frutilla", "Sandía", "Pomelo"],
    correct: [0],
    explanation: "Se prefiere la banana, que es la fruta con más hidratos de carbono; también pueden consumirse jugos de cítricos exprimidos para reducir la fibra."
  },
  {
    tema: "Desnutrición",
    type: "boolean",
    prompt: "Verdadero o falso: en desnutrición se recomienda evitar verduras de hoja como lechuga, espinaca, repollo y acelga.",
    correct: true,
    explanation: "Correcto. Se evitan las hojas porque son las verduras con más fibra, ya que en desnutrición se busca reducir el valor de saciedad."
  },

  // ---------- HIPERTENSIÓN ----------
  {
    tema: "Hipertensión",
    type: "multi",
    prompt: "Para un paciente con hipertensión se recomienda reducir el consumo de alimentos fuente de sodio, tales como: (marcá todas las correctas)",
    options: [
      "Pescados frescos",
        "Fiambres",
      "Achuras",
      "Leche",
      "Papas fritas / chizitos / snacks tipo 3D",
      "Aceitunas",
      "Salsa de soja",
      "Alimentos enlatados",
      "Frutas frescas",
      "Almendras",
      "Caldos industriales",
    ],
    correct: [1, 2, 4, 5, 6, 7, 10],
    explanation: "Se recomienda reducir fiambres, achuras, papas fritas/chizitos/3D, aceitunas, salsa de soja y enlatados, por ser fuente de sodio."
  },
  {
    tema: "Hipertensión",
    type: "single",
    prompt: "¿Qué mineral se recomienda aumentar en hipertensión porque reduce la presión sanguínea?",
    options: ["Sodio", "Potasio", "Hierro", "Vitamina E"],
    correct: [1],
    explanation: "Se recomienda aumentar el consumo de alimentos fuente de potasio, ya que reduce la presión sanguínea. También colabora en la salud cardiovascular la vitamina E (no es un mineral, es una vitamina), y el selenio a través del pescado."
  },
  {
    tema: "Hipertensión",
    type: "single",
    prompt: "Si un paciente hipertenso tiene bajo peso, ¿qué tipo de dieta le corresponde?",
    options: ["Hipercalórica", "Hipocalórica", "Normocalórica", "No se debe especificar"],
    correct: [0],
    explanation: "Si además de la hipertensión el sujeto tiene bajo peso, le indicaremos una dieta hipercalórica; con peso saludable, normocalórica; con sobrepeso u obesidad, hipocalórica."
  },

  // ---------- DISLIPIDEMIA ----------
  {
    tema: "Dislipidemia",
    type: "multi",
    prompt: "Ante colesterol total y/o LDL elevados, se recomienda: (marcá todas las correctas)",
    options: [
      "Reducir alimentos fuente de grasas saturadas",
      "Aumentar alimentos fuente de grasas saturadas",
      "Aumentar alimentos con grasas insaturadas",
      "Reducir el consumo de fibra",
      "Evitar alimentos fuente de grasas trans",
      "Aumentar el consumo de fibra",
      "Aumentar el consumo de alimentos con vitamina E",
      "Aumentar el consumo de grasas saturadas"
    ],
    correct: [0, 2, 4, 5, 6],
    explanation: "Se busca reducir el consumo de alimentos fuente de grasas saturadas, aumentar los alimentos fuente de grasas insaturadas, evitar los de grasas trans, y aumentar fibra y vitamina E. (Repasar cuáles son los alimentos fuente de todos estos nutrientes)"
  },
  {
    tema: "Dislipidemia",
    type: "single",
    prompt: "Cuando además del colesterol/LDL elevado hay hipertrigliceridemia, ¿qué cuidado adicional se suma?",
    options: [
     "Aumentar el consumo de azúcares simples",
      "Eliminar toda la fibra de la dieta",
        "Evitar bebidas alcohólicas y alimentos de alto índice glucémico, prefiriendo alimentos con hidratos de carbono complejos de bajo índice glucémico",
      "No es necesario ningún cuidado adicional"
    ],
    correct: [2],
    explanation: "En hipertrigliceridemia, además de los cuidados por colesterol/LDL, se evitan o reducen las bebidas alcohólicas, se evitan los alimentos de alto índice glucémico y se prefieren alimentos con hidratos de carbono complejos de bajo índice glucémico. También se pide beber mínimo 10 vasos de agua al día."
  },

  // ---------- TRASTORNOS RENALES ----------
  {
    tema: "Trastornos renales",
    type: "multi",
    prompt: "Los objetivos de la dietoterapia para sujetcos con trastornos renales son: (marcá todas las correctas)",
    options: [
      "Limitar la acumulación de productos de desecho metabólico",
      "Mantener el equilibrio hidroelectrolítico",
      "Reducir al mínimo el catabolismo proteico",
      "Mantener/mejorar el estado nutricional",
      "Promover la recuperación del riñón",
      "Aumentar el consumo de proteínas"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Los objetivos son limitar productos de desecho, mantener el equilibrio hidroelectrolítico, reducir el catabolismo proteico, mantener/mejorar el estado nutricional y promover la recuperación del riñón. Generalmente se reducen (no se aumentan) sodio y proteínas."
  },
  {
    tema: "Trastornos renales",
    type: "boolean",
    prompt: "Verdadero o falso: en todos los estadíos de los trastornos renales se recomienda beber la misma cantidad de líquido.",
    correct: false,
    explanation: "Falso. En general se indica beber 10 de vasos de agua al día para un buen funcionamiento renal, pero en ciertos estadíos se solicita beber menos líquido, por lo que hay que estar atentos a la indicación específica."
  },

  // ---------- DIABETES ----------
  {
    tema: "Diabetes",
    type: "multi",
    prompt: "Para el manejo dietoterápico de la diabetes se recomienda: (marcá todas las correctas)",
    options: [
      "Evitar alimentos fuente de hidratos de carbono simple (mermeladas, dulce de leche, helados)",
      "Controlar los alimentos fuente de hidratos de carbono complejos buscando reducir su índice glucémico",
      "Favorecer un peso saludable",
      "Aumentar el consumo de alimentos con cromo (tomate, brócoli, cebolla)",
      "Distribuir los hidratos de carbono a lo largo del día, evitando ayunos",
      "Aumentar el consumo de bebidas alcohólicas"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Se busca evitar los alimentos fuente de hidratos de carbono simples, controlar y reducir el índice glucémico de los alimentos fuente de hidratos de carbono complejos, favorecer un peso saludable, aumentar alimentos con cromo y distribuir los alimentos con hidratos de carbono a lo largo del día evitando ayunos y excesos."
  },
  {
    tema: "Diabetes",
    type: "single",
    prompt: "En el manejo de la glucemia en diabetes, ¿qué se busca evitar? (marcar una opción)",
    options: [
      "Solo las hiperglucemias",
      "Tanto las hiperglucemias como las hipoglucemias",
      "Solo las hipoglucemias",
      "Ninguna de las dos; el cuerpo regulará glucemia en su momento"
    ],
    correct: [1],
    explanation: "Buscando curvas de glucosa estables, se busca evitar tanto las hiperglucemias como las hipoglucemias."
  }
];

/* =========================================================================
   ESTADO Y REFERENCIAS AL DOM
   ========================================================================= */
const state = {
  alumno: null,
  temaActual: "Todos los temas",
  preguntas: [],
  indice: 0,
  respuestasSeleccionadas: [],
  correctas: 0,
  respondida: false
};

const el = {
  asistencia: document.getElementById("asistencia"),
  panel: document.getElementById("panel"),
  quiz: document.getElementById("quiz"),
  resultados: document.getElementById("resultados"),
  formAsistencia: document.getElementById("form-asistencia"),
  saludo: document.getElementById("saludo"),
  gridTemas: document.getElementById("grid-temas"),
  progreso: document.getElementById("progreso"),
  temaBadge: document.getElementById("tema-badge"),
  pregunta: document.getElementById("pregunta"),
  opciones: document.getElementById("opciones"),
  btnConfirmar: document.getElementById("btn-confirmar"),
  modalOverlay: document.getElementById("modal-overlay"),
  modal: document.querySelector("#modal-overlay .modal"),
  modalIcono: document.getElementById("modal-icono"),
  modalTitulo: document.getElementById("modal-titulo"),
  modalTexto: document.getElementById("modal-texto"),
  modalBtnSiguiente: document.getElementById("modal-btn-siguiente"),
  puntaje: document.getElementById("puntaje"),
  revision: document.getElementById("revision"),
  btnReintentar: document.getElementById("btn-reintentar"),
  btnOtroTema: document.getElementById("btn-otro-tema")
};

const TEMAS = [...new Set(QUESTIONS.map(q => q.tema))];

/* =========================================================================
   ASISTENCIA
   ========================================================================= */
el.formAsistencia.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const datos = {
    nombre: document.getElementById("nombre").value.trim(),
    apellido: document.getElementById("apellido").value.trim(),
    comision: document.getElementById("comision").value.trim(),
    institucion: document.getElementById("institucion").value.trim()
  };

  state.alumno = datos;
  localStorage.setItem("dietoterapia_alumno", JSON.stringify(datos));

  if (CONFIG.SHEET_URL) {
    try {
      await fetch(CONFIG.SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(datos)
      });
    } catch (err) {
      console.warn("No se pudo registrar la asistencia en la planilla:", err);
    }
  }

  mostrarPanel();
});

function mostrarPanel() {
  el.asistencia.hidden = true;
  el.panel.hidden = false;
  el.saludo.textContent = `Hola, ${state.alumno.nombre}. Elegí un tema para practicar.`;
  renderGridTemas();
}

function renderGridTemas() {
  el.gridTemas.innerHTML = "";
  const opciones = ["Todos los temas", ...TEMAS];
  opciones.forEach(tema => {
    const cant = tema === "Todos los temas"
      ? QUESTIONS.length
      : QUESTIONS.filter(q => q.tema === tema).length;
    const btn = document.createElement("button");
    btn.className = "tarjeta-tema";
    btn.innerHTML = `<span class="tarjeta-tema__nombre">${tema}</span>
                      <span class="tarjeta-tema__cant">${cant} ${cant === 1 ? "pregunta" : "preguntas"}</span>`;
    btn.addEventListener("click", () => iniciarQuiz(tema));
    el.gridTemas.appendChild(btn);
  });
}

/* =========================================================================
   QUIZ
   ========================================================================= */
function mezclar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function iniciarQuiz(tema) {
  state.temaActual = tema;
  state.preguntas = mezclar(
    tema === "Todos los temas" ? QUESTIONS : QUESTIONS.filter(q => q.tema === tema)
  );
  state.indice = 0;
  state.correctas = 0;
  state.respuestasHistorial = [];

  el.panel.hidden = true;
  el.resultados.hidden = true;
  el.quiz.hidden = false;
  renderPregunta();
}

function renderPregunta() {
  state.respondida = false;
  state.respuestasSeleccionadas = [];
  el.btnConfirmar.hidden = false;
  el.btnConfirmar.disabled = true;

  const q = state.preguntas[state.indice];
  el.progreso.textContent = `Pregunta ${state.indice + 1} de ${state.preguntas.length}`;
  el.temaBadge.textContent = q.tema;
  el.pregunta.textContent = q.prompt;
  el.opciones.innerHTML = "";

  const inputType = q.type === "multi" ? "checkbox" : "radio";
  const opcionesTexto = q.type === "boolean" ? ["Verdadero", "Falso"] : q.options;

  opcionesTexto.forEach((texto, i) => {
    const id = `opcion-${i}`;
    const label = document.createElement("label");
    label.className = "opcion";
    label.setAttribute("for", id);
    label.innerHTML = `
      <input type="${inputType}" name="opcion" id="${id}" value="${i}">
      <span>${texto}</span>
    `;
    label.querySelector("input").addEventListener("change", onSeleccionCambiada);
    el.opciones.appendChild(label);
  });
}

function onSeleccionCambiada() {
  const inputs = [...el.opciones.querySelectorAll("input")];
  state.respuestasSeleccionadas = inputs
    .filter(i => i.checked)
    .map(i => Number(i.value));
  el.btnConfirmar.disabled = state.respuestasSeleccionadas.length === 0;
}

el.btnConfirmar.addEventListener("click", () => {
  if (state.respondida) return;
  const q = state.preguntas[state.indice];
  let esCorrecta;

  if (q.type === "boolean") {
    // 0 = Verdadero, 1 = Falso
    const eligioVerdadero = state.respuestasSeleccionadas[0] === 0;
    esCorrecta = eligioVerdadero === q.correct;
  } else {
    const correctas = [...q.correct].sort().join(",");
    const elegidas = [...state.respuestasSeleccionadas].sort().join(",");
    esCorrecta = correctas === elegidas;
  }

  state.respondida = true;
  if (esCorrecta) state.correctas++;
  state.respuestasHistorial.push({ q, esCorrecta });

  marcarOpciones(q);
  el.btnConfirmar.hidden = true;
  abrirModal(esCorrecta, q.explanation);
});

/* -------------------------------------------------------------------------
   MODAL DE RETROALIMENTACIÓN
   ------------------------------------------------------------------------- */
let elementoConFoco = null;

function abrirModal(esCorrecta, explicacion) {
  el.modal.classList.remove("modal--ok", "modal--error");
  el.modal.classList.add(esCorrecta ? "modal--ok" : "modal--error");
  el.modalIcono.textContent = esCorrecta ? "✓" : "✗";
  el.modalTitulo.textContent = esCorrecta ? "¡Correcto!" : "No es correcto";
  el.modalTexto.textContent = explicacion;
  el.modalBtnSiguiente.textContent = state.indice === state.preguntas.length - 1
    ? "Ver resultados"
    : "Siguiente pregunta";

  elementoConFoco = document.activeElement;
  el.modalOverlay.hidden = false;
  el.modalBtnSiguiente.focus();
  document.addEventListener("keydown", cerrarModalConEscape);
}

function cerrarModal() {
  el.modalOverlay.hidden = true;
  document.removeEventListener("keydown", cerrarModalConEscape);
  if (elementoConFoco) elementoConFoco.focus();
}

function cerrarModalConEscape(ev) {
  if (ev.key === "Escape") avanzarPregunta();
}

el.modalBtnSiguiente.addEventListener("click", avanzarPregunta);
el.modalOverlay.addEventListener("click", (ev) => {
  if (ev.target === el.modalOverlay) avanzarPregunta();
});

function avanzarPregunta() {
  cerrarModal();
  state.indice++;
  if (state.indice < state.preguntas.length) {
    renderPregunta();
  } else {
    mostrarResultados();
  }
}

function marcarOpciones(q) {
  const labels = [...el.opciones.querySelectorAll(".opcion")];
  const correctSet = q.type === "boolean"
    ? new Set([q.correct ? 0 : 1])
    : new Set(q.correct);

  labels.forEach((label, i) => {
    const input = label.querySelector("input");
    input.disabled = true;
    if (correctSet.has(i)) {
      label.classList.add("opcion--correcta");
    } else if (input.checked) {
      label.classList.add("opcion--incorrecta");
    }
  });
}

/* =========================================================================
   RESULTADOS
   ========================================================================= */
function mostrarResultados() {
  el.quiz.hidden = true;
  el.resultados.hidden = false;

  const total = state.preguntas.length;
  const pct = Math.round((state.correctas / total) * 100);
  el.puntaje.textContent = `${state.correctas} / ${total} correctas (${pct}%)`;

  el.revision.innerHTML = "";
  state.respuestasHistorial.forEach(({ q, esCorrecta }, i) => {
    const item = document.createElement("li");
    item.className = "revision__item " + (esCorrecta ? "revision__item--ok" : "revision__item--error");
    item.innerHTML = `
      <span class="revision__icono">${esCorrecta ? "✓" : "✗"}</span>
      <div>
        <p class="revision__pregunta">${i + 1}. ${q.prompt}</p>
        <p class="revision__explicacion">${q.explanation}</p>
      </div>
    `;
    el.revision.appendChild(item);
  });
}

el.btnReintentar.addEventListener("click", () => iniciarQuiz(state.temaActual));
el.btnOtroTema.addEventListener("click", () => {
  el.resultados.hidden = true;
  el.panel.hidden = false;
});

/* =========================================================================
   INICIO: si ya se registró la asistencia en este navegador, saltar el
   formulario (útil si el alumno vuelve a entrar el mismo día).
   ========================================================================= */
(function init() {
  const guardado = localStorage.getItem("dietoterapia_alumno");
  if (guardado) {
    state.alumno = JSON.parse(guardado);
  }
})();