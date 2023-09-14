`use strict`;

//CONSTANTES PARA EL LISTADO DE GATOS:
const addButton = document.querySelector('.js-btn-add');
const listElement = document.querySelector(`.js-list`);
const html = '';

//CONSTANTES PARA FORMULARIO AÑADIR GATITO:
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const liItem = document.querySelector('.item'); // BOTÓN + CABECERA
const newFormElement = document.querySelector('.new-form');

//CONSTANTES PARA EL CAMPO DE FILTRAR O BUSCAR:
const input_search_desc = document.querySelector('.js_in_search_desc'); //CASILLA DESCRIPCIÓN
const input_search_race = document.querySelector('.js_in_search_race'); //CASILLA DE RAZA
const buttonSearch = document.querySelector('.js-button-search'); //BOTÓN BUSCAR

//CONSTANTES DE LOS GATITOS:
//KITTEN 1:
const kitten1Url = `https://dev.adalab.es/gato-siames.webp`;
const kitten1Name = `Anastacio`;
const kitten1Desc = `
Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.`;
const kitten1Race = `Siamés`;

//KITTEN2:
const kitten2Url = `https://dev.adalab.es/sphynx-gato.webp`;
const kitten2Name = `Fiona`;
const kitten2Desc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const kitten2Race = `Sphynx-cat`;

//KITTEN3:
const kitten3Url = `https://dev.adalab.es/maine-coon-cat.webp`;
const kitten3Name = `Cielo`;
const kitten3Desc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kitten3Race = `Maine-Coon`;

//FUNCIÓN PARA CREAR GATITOS:
function renderKitten(photo, name, race, desc) {
  const html = `<li class="card">
        <article>
          <img
            class="card_img"
            src=${photo}
            alt="siames-cat"
          />
          <h3 class="card_title">${name.toUpperCase()} </h3>
          <h4 class="card_race">${race}</h4>
          <p class="card_description">${desc}</p>
        </article>
      </li>`;
  return html;
}
const kitten3 = renderKitten(kitten3Url, kitten3Name, kitten3Desc, kitten3Race);
const kitten2 = renderKitten(kitten2Url, kitten2Name, kitten2Desc, kitten2Race);
const kitten1 = renderKitten(kitten1Url, kitten1Name, kitten1Desc, kitten1Race);

listElement.innerHTML = `${kitten1} ${kitten2} ${kitten3}`;

//PARA ACTIVAR CASILLA DE FILTADO/BÚSQUEDA DE GATITOS
const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;
  listElement.innerHTML = '';
  if (
    kitten1Desc.includes(descrSearchText) ||
    kitten1Race.includes(raceSearchText)
  ) {
    listElement.innerHTML += kitten1;
  }
  if (
    kitten2Desc.includes(descrSearchText) ||
    kitten2Race.includes(raceSearchText)
  ) {
    listElement.innerHTML += kitten2;
  }
  if (
    kitten3Desc.includes(descrSearchText) ||
    kitten3Race.includes(raceSearchText)
  ) {
    listElement.innerHTML += kitten3;
  }
};

//MOSTRAR U OCULTAR FORMNULARIO PARA AÑADIR GATOS:
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}

function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

//FUNCIÓN MANEJADORA PARA EL BOTÓN + DE LA CABECERA
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
  //classList.toggle
}

//CUNCIÓN MANEJADORA PARA EL BOTÓN AÑADIR DENTRO FORMULARIO
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = 'Uy, parece que se te ha olvidado algo';
  } else {
    labelMessageError.innerHTML = '';
    listElement.innerHTML += renderKitten(
      valuePhoto,
      valueName,
      valueDesc,
      'X'
    );
  }
}

//EVENTOS LISTENER DE LOS BOTONES + Y AÑADIR
liItem.addEventListener('click', handleClickNewCatForm);
addButton.addEventListener('click', addNewKitten);

//EVENTO LISTENER PARA EL BOTÓN BUSCAR/FILTRAR GATITOS
buttonSearch.addEventListener('click', filterKitten);
