const url = `https://api.thecatapi.com/v1/breeds`;
const api_key =
  'live_amR3jnds0mGQH8PwUCOhfMQ6LomPPLV2bVbdHP3dN8rejmbHEEQUDnPQt7DN0YuQ';

fetch(url, {
  headers: {
    'x-api-key': api_key,
  },
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    const catArr = data.map(dat => {
      const { name, image, description } = dat;
      return {
        name,
        image: image,
        descr: description,
      };
    });
    markupList(catArr);
    input.addEventListener('input', evt => inputDate(evt, catArr));
  })
  .catch(error => {
    console.log('Error:', error);
  });
const list = document.querySelector('.js-details');
const input = document.querySelector('.js-input');
const card = document.querySelector('.card');
function markupList(catArr) {
  list.innerHTML = catArr
    .map(cat => `<option class="option" value="${cat.name}"></option>`)
    .join('');
  console.log(list);
  console.log(catArr);
}
function inputDate(evt, catArr) {
  const nameCat = evt.currentTarget.value;
  const filter = catArr.filter(cat => cat.name.includes(nameCat));
  const cardMap = filter
    .map(cat => {
      const { name, image, descr } = cat;
      return `
      <li class="card-cat">
        <img src="${image.url}" alt="${name}" width=400px>
        <p>${descr}</p>
      </li>
    `;
    })
    .join('');
  card.innerHTML = cardMap;
  evt.currentTarget.value = '';
}
