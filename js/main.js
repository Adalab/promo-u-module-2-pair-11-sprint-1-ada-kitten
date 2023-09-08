`use strict`;

const listElement = document.querySelector(`.js-list`);

const kitten1Url = `https://dev.adalab.es/gato-siames.webp`;
const kitten1Name = `Anastacio`;
const kitten1Desc = `
  Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.`;
const kitten1Race = `Siamés`;
kitten1 = `<li class="card">
   <article>
     <img
       class="card_img"
       src=${kitten1Url}
       alt="siames-cat"
     />
     <h3 class="card_title">${kitten1Name.toUpperCase()}</h3>
     <h4 class="card_race">${kitten1Race}</h4>
     <p class="card_description">
      ${kitten1Desc}
     </p>
   </article>
 </li>`;

const kitten2Url = `https://dev.adalab.es/sphynx-gato.webp`;
const kitten2Name = `Fiona`;
const kitten2Desc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const kitten2Race = `Sphynx-cat`;
kitten2 = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kitten2Url}
        alt="siames-cat"
      />
      <h3 class="card_title">${kitten2Name.toUpperCase()} </h3>
      <h4 class="card_race">${kitten2Race}</h4>
      <p class="card_description">
       ${kitten2Desc}
      </p>
    </article>
  </li>`;

const kitten3Url = `https://dev.adalab.es/maine-coon-cat.webp`;
const kitten3Name = `Cielo`;
const kitten3Desc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kitten3Race = `Maine-Coon`;
kitten3 = `<li class="card">
     <article>
       <img
         class="card_img"
         src=${kitten3Url}
         alt="siames-cat"
       />
       <h3 class="card_title">${kitten3Name.toUpperCase()} </h3>
       <h4 class="card_race">${kitten3Race}</h4>
       <p class="card_description">
        ${kitten3Desc}
       </p>
     </article>
   </li>`;

const input_search_desc = document.querySelector('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

let matchingKittens = '';

if (kitten1Desc.includes(descrSearchText)) {
  matchingKittens += kitten1;
}

if (kitten2Desc.includes(descrSearchText)) {
  matchingKittens += kitten2;
}

if (kitten3Desc.includes(descrSearchText)) {
  matchingKittens += kitten3;
}

if (matchingKittens === '') {
  listElement.innerHTML =
    'No se encontraron gatos que coincidan con la búsqueda.';
} else {
  listElement.innerHTML = matchingKittens;
}
// listElement.innerHTML = `${kitten1} ${kitten2} ${kitten3}`;
