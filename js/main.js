`use strict`;
const addButton = document.querySelector('.js-btn-add');
const listElement = document.querySelector(`.js-list`);
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const liItem = document.querySelector('.item');
const newFormElement = document.querySelector('.new-form');

const kitten1Url = `https://dev.adalab.es/gato-siames.webp`;
const kitten1Name = `Anastacio`;
const kitten1Desc = `
Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.`;
const kitten1Race = `Siamés`;
const kitten1 = renderKitten(kitten1Url, kitten1Name, kitten1Desc, kitten1Race);

const kitten2Url = `https://dev.adalab.es/sphynx-gato.webp`;
const kitten2Name = `Fiona`;
const kitten2Desc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const kitten2Race = `Sphynx-cat`;
const kitten2 = renderKitten(kitten2Url, kitten2Name, kitten2Desc, kitten2Race);

const kitten3Url = `https://dev.adalab.es/maine-coon-cat.webp`;
const kitten3Name = `Cielo`;
const kitten3Desc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kitten3Race = `Maine-Coon`;
const kitten3 = renderKitten(kitten3Url, kitten3Name, kitten3Desc, kitten3Race);

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
          <p class="card_description">
           ${desc}
          </p>
        </article>
      </li>`;
  return html;
}

const input_search_desc = document.querySelector('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

let matchingKittens = '';
const filterKitten = (event) => {
  if (kitten1Desc.includes(descrSearchText)) {
    listElement.innerHTML += kitten1;
  }
  if (kitten2Desc.includes(descrSearchText)) {
    listElement.innerHTML += kitten2;
  }
  if (kitten3Desc.includes(descrSearchText)) {
    listElement.innerHTML += kitten3;
  } else {
    listElement.innerHTML = matchingKittens;
  }
};

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}

function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
  //classList.toggle
}

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

liItem.addEventListener('click', handleClickNewCatForm);
addButton.addEventListener('click', addNewKitten);

const buttonSearch = document.querySelector('.js-button-search');
buttonSearch.addEventListener('click', filterKitten);
