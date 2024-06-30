import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const refs = {
  selects: document.querySelector('.select'),
  card: document.querySelector('.cat-card'),
  load: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

const select = new SlimSelect({
  select: refs.selects,
});

refs.load.style.display = 'none';
refs.error.style.display = 'none';
refs.card.style.display = 'none';
async function searchCats() {
  try {
    await fetchBreeds().then(breeds => {
      const data = breeds.map(({ id, name }) => ({ value: id, text: name }));
      select.setData(data);
      refs.selects.addEventListener('change', selectCat);
    });
  } catch (error) {
    refs.error.style.display = 'block';

    iziToast.show({
      message:
        'Щось пішло не так! Перезавантажте сторінку та спроьуйте ще раз!',
    });
  }
}
searchCats();
async function selectCat() {
  refs.card.style.display = 'none';
  refs.load.style.display = 'block';
  const nameCat = refs.selects.value;
  console.log('nameCat::: ', nameCat);
  const data = await fetchCatByBreed(nameCat);
  console.log('data::: ', data);
  catCard(data);
}
async function catCard(data) {
  refs.card.innerHTML = data
    .map(({ url, breeds }) => {
      const [{ description, temperament, name }] = breeds;

      return `
      <h2 class="name" >${name}</h2>
    <img src="${url}" alt="${name}">
    <h3 class="temperament">Характер: ${temperament}</h3>
    <p class="description">Опис: ${description}</p>
    `;
    })
    .join('');
  refs.load.style.display = 'none';
  refs.card.style.display = 'block';
}
