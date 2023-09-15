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
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};


//KITTEN2:
const kittenData_2= {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx-cat',
};

//KITTEN3:
const kittenData_3= {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta ',
  race: 'Maine-Coon',
};

//FUNCIÓN PARA CREAR GATITOS:
function renderKitten(kittenData) {
  const html = `<li class="card">
        <article>
          <img
            class="card_img"
            src=${kittenData.image}
            alt="siames-cat"
          />
          <h3 class="card_title">${kittenData.name.toUpperCase()} </h3>
          <h4 class="card_race">${kittenData.race}</h4>
          <p class="card_description">${kittenData.desc}</p>
        </article>
      </li>`;
  return html;
}

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

function renderKittenList(kittenDataList) {
  listElement.innerHTML='';
  for(let i=0; i<kittenDataList.length; i++){
  const kittenItem=kittenDataList[i];
  listElement.innerHTML+=renderKitten(kittenItem);
}
}
renderKittenList(kittenDataList);

//PARA ACTIVAR CASILLA DE FILTADO/BÚSQUEDA DE GATITOS
const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;
  listElement.innerHTML = '';
  if (
    kittenData_1.desc.includes(descrSearchText) ||
    kittenData_1.race.includes(raceSearchText)
  ) {
    listElement.innerHTML += kittenData_1;
  }
  if (
    kittenData_2.desc.includes(descrSearchText) ||
    kittenData_2.race.includes(raceSearchText)
  ) {
    listElement.innerHTML += kittenData_2;
  }
  if (
    kittenData_3.desc.includes(descrSearchText) ||
    kittenData_3.race.includes(raceSearchText)
  ) {
    listElement.innerHTML += kittenData_3;
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
